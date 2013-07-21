package helloworld

import js.Dynamic.{ global => g }
import scala.js

object Pouch {
  val R = 50
  val r = 14

  def getCoords(id: Int, R:Int):(Int,Int) = {
    val q = id/8
    val m = id - q
    val r = (1+q)*R
    val theta = m*math.Pi/4 + math.Pi/11
    val( xx,yy ) = (math.round(r*math.cos(theta)).toInt, math.round(r*math.sin(theta)).toInt)
    (xx+8*R + 5, yy+8*R + 5) // translate coords
  }
}

case class Score(private var _value:Int = 0, private var _weight:Int = 0) {
  def update(pouch:Pouch)= {
    _value += pouch.value
    _weight += pouch.weight
  }
  def ratio = _value+0.0d/_weight

  def value = _value
  def weight = _weight
  override def toString = "$"+_value + " / "+_weight+" lb"
}

case class Pouch(id: Int, value: Int, weight: Int, isAvailable: Boolean = true) {
  def mkUsed = Pouch(id,value,weight,false)

  override def equals(p: Any) = p match {
    case pouch:Pouch => pouch.id == id
    case _ => false
  }
  override def toString = "$"+value + " /"+weight

  def contains(x:Int, y:Int) = {
    val (myx,myy) = coords
    (x >= myx - Pouch.r && x <= myx + Pouch.r) && (y >= myy - Pouch.r && y <= myy + Pouch.r)
  }
  val coords = Pouch.getCoords(id, Pouch.R)
}

case class Graph(private var _pouches: Seq[Pouch]) {
  val adj = mkEdges

  def usePouch(pouch: Pouch) = {
    val idx = _pouches.indexOf(pouch)
    _pouches = pouches.updated(idx, pouch.mkUsed)
  }

  def pouches = _pouches

  def getAvailablePouch = _pouches.filter( p=> p.isAvailable).head

  def getAvailablePouches(pouch: Pouch) : Seq[Pouch] =
    adj(pouch.id)
      .toSeq
      .zipWithIndex
      .filter( t => t._1)
      .map( t => t._2)
      .map( idx => _pouches(idx))
      .filter( pouch => pouch.isAvailable)

  private def mkEdges = {
    scala.Array.tabulate[Boolean](64,64)((x,y) => {
      // connect x to x+1 if x is not a multiple of 8
      math.abs(x-y) match {
        case 1 => true // neighbor on same circle
        case 7 => (x/8 == y/8) && ((x % 8 == 0) || (y % 8 == 0)) // complete the circle only on mod-8
        case 9 => math.abs(x/8 - y/8) == 1 // between consecutive circles, radial connect
        case _ => false
      }
    })
  }
}

object Knapsack {
  val R = Pouch.R
  val r = Pouch.r
  val canvasOrig = g.document.getElementById("canvas")
  val canvasDom = canvasOrig.asInstanceOf[DOMElement]
  val canvasElem = canvasOrig.asInstanceOf[HTMLCanvasElement]
  val ctx = canvasElem.getContext("2d").asInstanceOf[Canvas2D]
  val w = 800
  val pouches = (0 until 64).map { id => rnd(0,100) match {
    case r if r > 90 => Pouch(id, -rnd(7,9), rnd(5,9)) // bust // 5% prob
    case r if r > 80 => Pouch(id, rnd(7,9), rnd(1,5)) // jackpot // 20% prob
    case _ => Pouch(id, rnd(1,5), rnd(5,9))
  }}
  val (orange, green) = ("#ffa500", "#006400")

  val graph = Graph(pouches)
  val myscore:Score = Score(0,0)
  val yourscore:Score = Score(0,0)
  var myprev:Option[Pouch] = None
  var yourprev:Option[Pouch] = None
  var finished = false

  def drawPouch(pouch: Pouch) = {
    val (x,y) = Pouch.getCoords(pouch.id,R)
    clearCircle(x,y,r)
    drawText(x-r,y + r/2, pouch.toString)
  }

  def drawScores = {
    ctx.beginPath()
    ctx.fillStyle = "#FFF"
    ctx.clearRect(10,20,150,30)
    ctx.clearRect(640,20,150,30)
    ctx.clearRect(10,760,150,30)
    ctx.clearRect(640,760,150,30)
    ctx.stroke()
    ctx.closePath()
    ctx.beginPath()
    ctx.fillStyle = orange
    ctx.font = "bold 14px sans-serif"
    ctx.fillText("Computer: " + myscore.toString, 640,40)
    ctx.fillText("Computer: " + myscore.toString, 640,780)
    ctx.fillStyle = green
    ctx.fillText("You: "+ yourscore.toString, 10,40)
    ctx.fillText("You: "+ yourscore.toString, 10,780)
    ctx.closePath()
  }

  def drawPouches = graph.pouches.foreach { pouch => drawPouch(pouch) }

  def blank(pouch:Pouch, fillStyle:String = "#F00") = {
    val (x, y) = Pouch.getCoords(pouch.id, R)
    clearCircle(x, y, r, fillStyle)
  }

  def main(args: Array[String]):Unit = {
    drawGrid
    drawEdges
    drawPouches
    canvasDom.onmousedown = onMouseDown
  }

  def mouse2Pouch(x:Int, y:Int):Option[Pouch] = {
    val searchlist = if(yourprev.isDefined) graph.getAvailablePouches(yourprev.get) else graph.pouches
    searchlist.filter { pouch => pouch.contains(x,y) }.headOption
  }

  def updateGame(pouch:Pouch, score:Score) = {
    score.update(pouch)
    graph.usePouch(pouch)
    blank(pouch, if( score==myscore) orange else green)
    drawScores
  }

  // since List.intersect isn't implemented in JS, we do it here
  def intersect(a:Seq[Pouch], b:Seq[Pouch]):Seq[Pouch] = {
    a.map( x => if (b.indexOf(x) !=  -1) Some(x) else None).flatten
  }

  // base my strategy on your move
  def myStrategy(yourpouch: Pouch): Option[Pouch] = {

    // get available pouches based on my prev move, or yours if I haven't moved yet

    val avail = graph
      .getAvailablePouches(if (myprev.isDefined) myprev.get else yourpouch)

    val common = intersect( avail, graph.getAvailablePouches(yourpouch))

    val choices = (avail.size, common.size) match {
      case (0,0) => Nil
      case (_,0) => Seq(avail)
      case _ => Seq(avail, common)
    }

    // I prefer moving to your choices rather than mine
    if( choices != Nil) {
      val res = choices.map( pouches => {
        pouches.map( pouch => (pouch, pouch.value/pouch.weight, graph.getAvailablePouches(pouch).size))
        .maxBy(x => (x._3, x._2))
        ._1
      })

      if(res.size == 1) Some(res(0)) else if(res(1).value > 0) Some(res(1)) else Some(res(0))
    } else None
  }

  def playGame(pouch:Pouch) = {
    if (!finished) {

      if(yourprev.isDefined) drawPath(yourprev.get, pouch, green)
      yourprev = Some(pouch)
      updateGame( yourprev.get, yourscore )

      val pouchOpt2 = myStrategy(pouch)

      if( pouchOpt2.isDefined) {
        if(myprev.isDefined) drawPath(myprev.get, pouchOpt2.get, orange)
        myprev = pouchOpt2
        updateGame( myprev.get, myscore )
      }

      declareWinner

    }
  }

  def drawPath(fromp:Pouch, top:Pouch, color:String) = {
    val (x,y) = Pouch.getCoords(fromp.id,R)
    val (xx,yy) = Pouch.getCoords(top.id,R)
    drawLine(x,y,xx,yy, color, 15)
    clearCircle(xx,yy,2,color)
  }

  def onMouseDown = (event: MouseEvent) => {
    val (x,y) = (event.layerX.toInt, event.layerY.toInt)
    val pouchOpt = mouse2Pouch(x,y)
    if (pouchOpt.isDefined) playGame(pouchOpt.get)
    event.preventDefault()
  }

  def declareWinner = {

    (graph.getAvailablePouches(myprev.get).size , graph.getAvailablePouches(yourprev.get).size) match {
      case (0,_) =>
        val msg = "I can play no more!!! "
        alert( if (myscore.ratio > yourscore.ratio) msg + " But I still beat you!" else msg + " Okay buster, you win :(" )
        finished = true

      case (_,0) =>
        val msg = "You can play no more!"
        alert( if (myscore.ratio > yourscore.ratio) msg + " I win fair & square!" else msg + " But you know what ? You actually won this round!" )
        finished = true

      case _ =>
        if (myscore.weight >=100 && yourscore.weight >= 100) {
          alert( if (myscore.ratio > yourscore.ratio) "I win!" else "You win :(" )
          finished = true
        }
    }
  }

  def drawEdges = {
    val adj = graph.adj
    (0 until 64).foreach {
      id =>
      val (xx,yy) = Pouch.getCoords(id,R)
      adj(id)
        .zipWithIndex
        .filter(t => t._1)
        .map(v => v._2)
        .map(myid => Pouch.getCoords(myid,R))
        .toSeq
        .foreach { t =>
          val (x,y) = t
          drawLine(xx,yy,x,y,"#2f4f4f", 4)
      }
    }
  }

  def drawLine(x:js.Number, y:js.Number, xx:js.Number, yy:js.Number, strokeStyle:String = "#00C", lineWidth:Int = 1) = {
    ctx.beginPath()
    ctx.moveTo(x,y)
    ctx.lineTo(xx,yy)
    ctx.strokeStyle = strokeStyle
    ctx.lineWidth = lineWidth
    ctx.stroke()
    ctx.closePath()
  }

  def clearCircle(x: js.Number, y:js.Number, r:js.Number, fillStyle:String ="#FFF") = {
    ctx.beginPath()
    ctx.moveTo(x+r,y)
    ctx.arc(x, y, r, 0, 2*Math.PI)
    ctx.fillStyle = fillStyle
    ctx.fill()
    ctx.closePath()
  }

  def drawText(x:js.Number, y:js.Number, text:String = "", fillStyle:String ="#F00") = {
    ctx.fillStyle = fillStyle
    ctx.font = "plain 12px sans-serif"
    ctx.fillText(text, x,y)
  }

  def rnd(a: Int,b: Int) = (Math.floor(Math.random() * (b-a)) + a).toInt

  def drawGrid = {

    ctx.beginPath()

    (0 until w by 10)
    .foreach ( x => {
      ctx.moveTo(x, 0)
      ctx.lineTo(x, w)
      ctx.moveTo(0, x)
      ctx.lineTo(w, x)
    })

    /* draw it! */
    ctx.strokeStyle = "#eee"
    ctx.stroke()
    ctx.closePath()

    ctx.beginPath()
    ctx.moveTo(0,0)
    ctx.lineTo(0,w)
    ctx.lineTo(w,w)
    ctx.lineTo(w,0)
    ctx.lineTo(0,0)
    ctx.strokeStyle = "#000"
    ctx.stroke()
    ctx.closePath()

  }

  def alert(str:String) = g.window.alert(str)
}

// JS API below - IGNORE

trait Window extends js.Object {
  val document: DOMDocument

  def alert(msg: js.String): Unit

  def setInterval[U](function: js.Function0[U], interval: js.Number)
}

trait DOMDocument extends js.Object {
  def getElementById(id: js.String): DOMElement
  def createElement(tag: js.String): DOMElement
}

trait DOMElement extends js.Object {
  var innerHTML: js.String

  def appendChild(child: DOMElement): Unit

  var onmousedown: js.Function1[MouseEvent, Unit]

  def pageXOffset: js.Number
  def pageYOffset: js.Number
}

trait JQueryStatic extends js.Object {
  def apply(arg: js.Any): JQuery
  def apply(arg: js.Any, attributes: js.Dictionary): JQuery
}

trait JQuery extends js.Object {
  def get(index: js.Number): DOMElement

  def text(value: js.String): JQuery
  def text(): js.String

  def html(value: js.String): JQuery
  def html(): js.String

  def prop(property: js.String): js.Any
  def prop(property: js.String, value: js.Any): JQuery

  def offset(): JQueryOffset

  def appendTo(parent: JQuery): JQuery
  def append(children: JQuery): JQuery

  def addClass(classes: js.String): JQuery
  def removeClass(classes: js.String): JQuery

  def each[U](callback: js.Function2[js.Number, js.Dynamic, U]): JQuery

  def click[U](handler: js.Function0[U]): JQuery
  def click[U](handler: js.Function1[JQueryEvent, U]): JQuery
}

trait JQueryOffset extends js.Object {
  val top: js.Number
  val left: js.Number
}

trait JQueryEvent extends js.Object {
  val pageX: js.Number
  val pageY: js.Number
}

trait HTMLCanvasElement extends DOMElement {
  def getContext(kind: js.String): js.Any // depends on the kind
}

trait Canvas2D extends js.Object {
  val canvas: HTMLCanvasElement

  var fillStyle: js.String
  var lineWidth: js.Number
  var strokeStyle: js.String
  var font: js.String

  def fillText(text: js.String, x: js.Number, y: js.Number)
  def fillRect(x: js.Number, y: js.Number, w: js.Number, h: js.Number)
  def clearRect(x: js.Number, y: js.Number, w: js.Number, h: js.Number)
  def strokeRect(x: js.Number, y: js.Number, w: js.Number, h: js.Number)

  def beginPath()
  def closePath()
  def fill()
  def stroke()

  def moveTo(x: js.Number, y: js.Number)
  def lineTo(x: js.Number, y: js.Number)

  def arc(x: js.Number, y: js.Number, radius: js.Number,
      startAngle: js.Number, endAngle: js.Number)
}

trait MouseEvent extends js.Object {
  val layerX: js.Number
  val layerY: js.Number
  val pageX: js.Number
  val pageY: js.Number
  val clientX: js.Number
  val clientY: js.Number
  val ctrlKey: js.Boolean
  def preventDefault(): Unit
}

package example

import scala.scalajs.js
import js.annotation.JSExport
import org.scalajs.dom
import org.scalajs.dom.raw.{HTMLCanvasElement, HTMLImageElement, CanvasRenderingContext2D, MouseEvent}
import scala.util.Random

case class Pos(s:String, x:Double, y:Double, imps:Int, clicks:Int, conv:Int )

object ScalaJSExample extends js.JSApp with LoadData {

	val W = 2400
 	val H = 1200
 	val gapy = 15
 	val maxy = 65
 	val gapx = 170
 	val bgImage = dom.document.createElement("img").asInstanceOf[HTMLImageElement]
 	val canvasOrig = dom.document.getElementById("canvas")
	val canvasElem = canvasOrig.asInstanceOf[HTMLCanvasElement]
	val canv = canvasElem.getContext("2d").asInstanceOf[CanvasRenderingContext2D]

	var pos:Seq[Pos] = Seq[Pos]()
	def alert(x:Any) = dom.alert(x.toString)
	def img(x:Int, y:Int) = canv.drawImage(bgImage, x,y)

	def colors = {
		Seq(
            "darkblue",
            "darkcyan",
            "darkgoldenrod",
            "darkgray",
            "darkgreen",
            "darkkhaki",
            "darkmagenta",
            "darkolivegreen",
            "darkorange",
            "darkorchid",
            "darkred",
            "darksalmon",
            "darkseagreen",
            "darkslateblue",
            "darkslategray",
            "darkturquoise",
            "darkviolet",
            "deeppink",
            "deepskyblue",
            "dimgray",
            "dodgerblue",
            "firebrick",
            "forestgreen"
		)
	}

	def mouseToIdx(x:Int, y:Int):Int = {
		val i = (x/gapx)*maxy + y/gapy - 3
		if (i>maxy) i else i-1
	}

	def render = {
		val c = canv
		c.clearRect(0,0,W,H)
		pos.zipWithIndex.foreach { pIdx =>
			val (p,idx) = pIdx 
 			c.fillStyle = colors(Random.nextInt(colors.length))
 			c.fillText(p.s, p.x, p.y)
 		}
	}

	def onMouse(event:MouseEvent) = {
		val c = canv
			c.setLineDash( scala.scalajs.js.Array(1.0,2.0))
	    	c.clearRect(0,0,W,H)
			val (x,y) = (event.clientX.toInt, event.clientY.toInt)
			img(x,y)
			val idx = mouseToIdx(x,y)
	    	//alert("" + x + "," + y + "," + idx)
	    	val me = pos.filter{ p=> p.s == domains(idx).domain}(0)

	    	val simpos = domains(idx).sim.tail.map{ d =>
	    		pos.filter{ p=> p.s == d.domain}(0)
	    	}
	    	val diffpos = domains(idx).diff.map{ d =>
	    		pos.filter{ p=> p.s == d.domain}(0)
	    	}
	    
	    	c.strokeStyle = "green"
	    	simpos.zipWithIndex.foreach{ pIdx => 
	    		val (p,idx) = pIdx
	    		c.beginPath 
	    		c.moveTo(me.x, me.y)
	    		c.lineTo( p.x, p.y)
	    		c.stroke
	    		c.closePath
	    	}

	    	c.strokeStyle = "red"
	    	diffpos.zipWithIndex.foreach{ pIdx => 
	    		val (p,idx) = pIdx
	    		c.beginPath
	    		c.moveTo(me.x, me.y)
	    		c.lineTo( p.x, p.y)
	    		c.stroke
	    		c.closePath
	    	}

	    	c.font = "bold 10pt Calibri"
	    	c.fillStyle = "darkgreen"
	    	simpos.zipWithIndex.foreach{ pIdx => 
	    		val (p,idx) = pIdx
	    		c.fillText( idx+"."+p.s + ", Imps/Clks/Conv: (" + p.imps + "," + p.clicks + "," + p.conv + ")" , p.x, p.y) 
	    	}
	    	c.font = "bold 10pt Calibri"
	    	c.fillStyle = "darkred"
	    	diffpos.zipWithIndex.foreach{ pIdx => 
	    		val (p,idx) = pIdx
	    		c.fillText( idx+"."+ p.s  + ", Imps/Clks/Conv: (" + p.imps + "," + p.clicks + "," + p.conv + ")" , p.x, p.y) 
	    	}
	    	c.font = "italic 12pt Calibri"
	    	c.fillStyle = "blue"
	    	c.fillText( me.s  + ", Imps/Clks/Conv: (" + me.imps + "," + me.clicks + "," + me.conv + ")" , me.x, me.y)

	    	event.preventDefault()
	    	//dom.setTimeout(render _, 10000)
	}

	def main(): Unit = {
		bgImage.src = "spyvsspy.png"
		buildData

		pos = draw
		canvasOrig.addEventListener("click", { (e0: dom.Event) =>
			onMouse(e0.asInstanceOf[dom.MouseEvent])
		}, false)
 	}

 	def draw = {

 		val c = canv
 		var yprev = 0
 		var xprev = 0
 		val pos = (0 to 710).toSeq.flatMap { idx=>
 			c.fillStyle = colors(Random.nextInt(colors.length))
 			val s:String = domains(idx).domain
 			val x = xprev
 			val y = yprev + gapy
 			yprev = y
 			if ((idx > 0) && (idx % maxy == 0)) {
 				yprev = 0
 				xprev += gapx
 			}
 			c.fillText(s,x,y)
 			//println("" + x + "," + y + "," + s)
 			//alert("Look up:" + domains(idx).domain)
 			//alert( domstats.map{ i => i.domain}.mkString(","))
 			val meOpt = domstats.get(s)
 			if (!meOpt.isDefined) {
 				//alert(s + ":" + domstats(idx).domain)
 				None 
 			}	else {
 				val me = meOpt.get
 				Some(Pos(me.domain, x,y, me.imps, me.clicks, me.conv))
 			}
 		}
 		//alert(pos.size)
 		pos
 	}

}
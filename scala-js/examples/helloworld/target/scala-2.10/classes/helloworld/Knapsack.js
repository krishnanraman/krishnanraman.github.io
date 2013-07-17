(function($) {
  $.registerClass("helloworld.Knapsack$", (function($) {
    function Class() {
      $.c["java.lang.Object"].prototype.constructor.call(this);
      this.$jsfield$R = 0;
      this.$jsfield$r = 0;
      this.$jsfield$canvasOrig = null;
      this.$jsfield$canvasDom = null;
      this.$jsfield$canvasElem = null;
      this.$jsfield$ctx = null;
      this.$jsfield$w = 0;
      this.$jsfield$pouches = null;
      this.$jsfield$graph = null;
      this.$jsfield$myscore = null;
      this.$jsfield$yourscore = null;
      this.$jsfield$myprev = null;
      this.$jsfield$yourprev = null
    };
    Class.prototype = Object.create($.c["java.lang.Object"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["R()I"] = (function() {
      return this.$jsfield$R
    });
    Class.prototype["r()I"] = (function() {
      return this.$jsfield$r
    });
    Class.prototype["canvasOrig()Lscala.js.Dynamic;"] = (function() {
      return this.$jsfield$canvasOrig
    });
    Class.prototype["canvasDom()Lhelloworld.DOMElement;"] = (function() {
      return this.$jsfield$canvasDom
    });
    Class.prototype["canvasElem()Lhelloworld.HTMLCanvasElement;"] = (function() {
      return this.$jsfield$canvasElem
    });
    Class.prototype["ctx()Lhelloworld.Canvas2D;"] = (function() {
      return this.$jsfield$ctx
    });
    Class.prototype["w()I"] = (function() {
      return this.$jsfield$w
    });
    Class.prototype["pouches()Lscala.collection.immutable.IndexedSeq;"] = (function() {
      return this.$jsfield$pouches
    });
    Class.prototype["graph()Lhelloworld.Graph;"] = (function() {
      return this.$jsfield$graph
    });
    Class.prototype["graph_=(Lhelloworld.Graph;)V"] = (function(arg$x$1) {
      this.$jsfield$graph = arg$x$1
    });
    Class.prototype["myscore()Lhelloworld.Score;"] = (function() {
      return this.$jsfield$myscore
    });
    Class.prototype["myscore_=(Lhelloworld.Score;)V"] = (function(arg$x$1) {
      this.$jsfield$myscore = arg$x$1
    });
    Class.prototype["yourscore()Lhelloworld.Score;"] = (function() {
      return this.$jsfield$yourscore
    });
    Class.prototype["yourscore_=(Lhelloworld.Score;)V"] = (function(arg$x$1) {
      this.$jsfield$yourscore = arg$x$1
    });
    Class.prototype["myprev()Lscala.Option;"] = (function() {
      return this.$jsfield$myprev
    });
    Class.prototype["myprev_=(Lscala.Option;)V"] = (function(arg$x$1) {
      this.$jsfield$myprev = arg$x$1
    });
    Class.prototype["yourprev()Lscala.Option;"] = (function() {
      return this.$jsfield$yourprev
    });
    Class.prototype["yourprev_=(Lscala.Option;)V"] = (function(arg$x$1) {
      this.$jsfield$yourprev = arg$x$1
    });
    Class.prototype["drawPouch(Lhelloworld.Pouch;)V"] = (function(arg$pouch) {
      var x1$jsid$33503 = $.m["helloworld.Pouch"]["getCoords(II)Lscala.Tuple2;"](arg$pouch["id()I"](), this["R()I"]());
      var result$$jslabel$matchEnd3$33505;
      $jslabel$matchEnd3$33505: do {
        if ((x1$jsid$33503 !== null)) {
          var x$jsid$27514 = x1$jsid$33503["_1$mcI$sp()I"]();
          var y$jsid$27515 = x1$jsid$33503["_2$mcI$sp()I"]();
          result$$jslabel$matchEnd3$33505 = new $.c["scala.Tuple2$mcII$sp"]()["<init>(II)"](x$jsid$27514, y$jsid$27515);
          break $jslabel$matchEnd3$33505
        } else {
          /*<skip>*/
        };
        throw new $.c["scala.MatchError"]()["<init>(O)"](x1$jsid$33503);
        break $jslabel$matchEnd3$33505
      } while (false);
      var x$3$jsid$27508 = result$$jslabel$matchEnd3$33505;
      var x$jsid$27509 = x$3$jsid$27508["_1$mcI$sp()I"]();
      var y$jsid$27510 = x$3$jsid$27508["_2$mcI$sp()I"]();
      this["clearCircle(Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;T)V"](x$jsid$27509, y$jsid$27510, this["r()I"](), this["clearCircle$default$4()T"]());
      this["drawText(Lscala.js.Number;Lscala.js.Number;TT)V"]((x$jsid$27509 - this["r()I"]()), (y$jsid$27510 + ((this["r()I"]() / 2) | 0)), arg$pouch["toString()T"](), this["drawText$default$4()T"]())
    });
    Class.prototype["drawScores()V"] = (function() {
      this["ctx()Lhelloworld.Canvas2D;"]().beginPath();
      this["ctx()Lhelloworld.Canvas2D;"]().fillStyle = "#FFF";
      this["ctx()Lhelloworld.Canvas2D;"]().clearRect(20, 860, 800, 30);
      this["ctx()Lhelloworld.Canvas2D;"]().stroke();
      this["ctx()Lhelloworld.Canvas2D;"]().closePath();
      this["ctx()Lhelloworld.Canvas2D;"]().beginPath();
      this["ctx()Lhelloworld.Canvas2D;"]().fillStyle = "#00A";
      this["ctx()Lhelloworld.Canvas2D;"]().font = "bold 16px sans-serif";
      this["ctx()Lhelloworld.Canvas2D;"]().fillText(("YOU: " + this["yourscore()Lhelloworld.Score;"]()["toString()T"]()), 20, 880);
      this["ctx()Lhelloworld.Canvas2D;"]().fillText(("ME: " + this["myscore()Lhelloworld.Score;"]()["toString()T"]()), 600, 880);
      this["ctx()Lhelloworld.Canvas2D;"]().closePath()
    });
    Class.prototype["drawPouches()V"] = (function() {
      var jsx$1 = this["graph()Lhelloworld.Graph;"]()["pouches()Lscala.collection.Seq;"]();
      var jsx$2 = new $.c["helloworld.Knapsack$$anonfun$drawPouches$1"]()["<init>()"]();
      jsx$1["foreach(Lscala.Function1;)V"](jsx$2)
    });
    Class.prototype["blank(Lhelloworld.Pouch;T)V"] = (function(arg$pouch, arg$fillStyle) {
      var x1$jsid$33509 = $.m["helloworld.Pouch"]["getCoords(II)Lscala.Tuple2;"](arg$pouch["id()I"](), this["R()I"]());
      var result$$jslabel$matchEnd3$33511;
      $jslabel$matchEnd3$33511: do {
        if ((x1$jsid$33509 !== null)) {
          var x$jsid$27606 = x1$jsid$33509["_1$mcI$sp()I"]();
          var y$jsid$27607 = x1$jsid$33509["_2$mcI$sp()I"]();
          result$$jslabel$matchEnd3$33511 = new $.c["scala.Tuple2$mcII$sp"]()["<init>(II)"](x$jsid$27606, y$jsid$27607);
          break $jslabel$matchEnd3$33511
        } else {
          /*<skip>*/
        };
        throw new $.c["scala.MatchError"]()["<init>(O)"](x1$jsid$33509);
        break $jslabel$matchEnd3$33511
      } while (false);
      var x$4$jsid$27600 = result$$jslabel$matchEnd3$33511;
      var x$jsid$27601 = x$4$jsid$27600["_1$mcI$sp()I"]();
      var y$jsid$27602 = x$4$jsid$27600["_2$mcI$sp()I"]();
      this["clearCircle(Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;T)V"](x$jsid$27601, y$jsid$27602, this["r()I"](), arg$fillStyle)
    });
    Class.prototype["blank$default$2()T"] = (function() {
      return "#F00"
    });
    Class.prototype["main([T)V"] = (function(arg$args) {
      this["drawGrid()V"]();
      this["drawEdges()V"]();
      this["drawPouches()V"]();
      this["canvasDom()Lhelloworld.DOMElement;"]().onmousedown = (function($this) {
        return (function(arg1) {
          return $this["apply(O)O"](arg1)
        })
      })(this["onMouseDown()Lscala.Function1;"]())
    });
    Class.prototype["mouse2Pouch(II)Lscala.Option;"] = (function(arg$x, arg$y) {
      if (this["yourprev()Lscala.Option;"]()["isDefined()Z"]()) {
        var searchlist$jsid$32929 = this["graph()Lhelloworld.Graph;"]()["getAvailablePouches(Lhelloworld.Pouch;)Lscala.collection.Seq;"]($.asInstance(this["yourprev()Lscala.Option;"]()["get()O"](), "helloworld.Pouch"))
      } else {
        var searchlist$jsid$32929 = this["graph()Lhelloworld.Graph;"]()["pouches()Lscala.collection.Seq;"]()
      };
      var jsx$4 = $;
      var jsx$6 = searchlist$jsid$32929;
      var jsx$7 = new $.c["helloworld.Knapsack$$anonfun$mouse2Pouch$1"]()["<init>(II)"](arg$x, arg$y);
      var jsx$5 = jsx$6["filter(Lscala.Function1;)O"](jsx$7);
      var jsx$3 = jsx$4.asInstance(jsx$5, "scala.collection.TraversableLike");
      return jsx$3["headOption()Lscala.Option;"]()
    });
    Class.prototype["playGame(Lhelloworld.Pouch;Lhelloworld.Score;)V"] = (function(arg$pouch, arg$score) {
      arg$score["update(Lhelloworld.Pouch;)V"](arg$pouch);
      this["graph()Lhelloworld.Graph;"]()["usePouch(Lhelloworld.Pouch;)V"](arg$pouch);
      var jsx$8 = arg$pouch;
      if ($.anyRefEqEq(arg$score, this["myscore()Lhelloworld.Score;"]())) {
        var jsx$9 = "#F00"
      } else {
        var jsx$9 = "#0F0"
      };
      this["blank(Lhelloworld.Pouch;T)V"](jsx$8, jsx$9);
      this["drawScores()V"]()
    });
    Class.prototype["drawPath(Lhelloworld.Pouch;Lhelloworld.Pouch;T)V"] = (function(arg$fromp, arg$top, arg$color) {
      var x1$jsid$33515 = $.m["helloworld.Pouch"]["getCoords(II)Lscala.Tuple2;"](arg$fromp["id()I"](), this["R()I"]());
      var result$$jslabel$matchEnd3$33517;
      $jslabel$matchEnd3$33517: do {
        if ((x1$jsid$33515 !== null)) {
          var x$jsid$31126 = x1$jsid$33515["_1$mcI$sp()I"]();
          var y$jsid$31127 = x1$jsid$33515["_2$mcI$sp()I"]();
          result$$jslabel$matchEnd3$33517 = new $.c["scala.Tuple2$mcII$sp"]()["<init>(II)"](x$jsid$31126, y$jsid$31127);
          break $jslabel$matchEnd3$33517
        } else {
          /*<skip>*/
        };
        throw new $.c["scala.MatchError"]()["<init>(O)"](x1$jsid$33515);
        break $jslabel$matchEnd3$33517
      } while (false);
      var x$5$jsid$31117 = result$$jslabel$matchEnd3$33517;
      var x$jsid$31118 = x$5$jsid$31117["_1$mcI$sp()I"]();
      var y$jsid$31119 = x$5$jsid$31117["_2$mcI$sp()I"]();
      var x1$jsid$33521 = $.m["helloworld.Pouch"]["getCoords(II)Lscala.Tuple2;"](arg$top["id()I"](), this["R()I"]());
      var result$$jslabel$matchEnd3$33523;
      $jslabel$matchEnd3$33523: do {
        if ((x1$jsid$33521 !== null)) {
          var xx$jsid$31137 = x1$jsid$33521["_1$mcI$sp()I"]();
          var yy$jsid$31138 = x1$jsid$33521["_2$mcI$sp()I"]();
          result$$jslabel$matchEnd3$33523 = new $.c["scala.Tuple2$mcII$sp"]()["<init>(II)"](xx$jsid$31137, yy$jsid$31138);
          break $jslabel$matchEnd3$33523
        } else {
          /*<skip>*/
        };
        throw new $.c["scala.MatchError"]()["<init>(O)"](x1$jsid$33521);
        break $jslabel$matchEnd3$33523
      } while (false);
      var x$6$jsid$31120 = result$$jslabel$matchEnd3$33523;
      var xx$jsid$31121 = x$6$jsid$31120["_1$mcI$sp()I"]();
      var yy$jsid$31122 = x$6$jsid$31120["_2$mcI$sp()I"]();
      this["drawLine(Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;T)V"](x$jsid$31118, y$jsid$31119, xx$jsid$31121, yy$jsid$31122, arg$color)
    });
    Class.prototype["onMouseDown()Lscala.Function1;"] = (function() {
      return new $.c["helloworld.Knapsack$$anonfun$onMouseDown$1"]()["<init>()"]()
    });
    Class.prototype["declareWinner()O"] = (function() {
      var x1$jsid$33533 = new $.c["scala.Tuple2$mcII$sp"]()["<init>(II)"](this["graph()Lhelloworld.Graph;"]()["getAvailablePouches(Lhelloworld.Pouch;)Lscala.collection.Seq;"]($.asInstance(this["myprev()Lscala.Option;"]()["get()O"](), "helloworld.Pouch"))["size()I"](), this["graph()Lhelloworld.Graph;"]()["getAvailablePouches(Lhelloworld.Pouch;)Lscala.collection.Seq;"]($.asInstance(this["yourprev()Lscala.Option;"]()["get()O"](), "helloworld.Pouch"))["size()I"]());
      var result$$jslabel$matchEnd9$33545;
      $jslabel$matchEnd9$33545: do {
        if ((x1$jsid$33533 !== null)) {
          var p2$jsid$33534 = x1$jsid$33533["_1$mcI$sp()I"]();
          if ((0 === p2$jsid$33534)) {
            result$$jslabel$matchEnd9$33545 = this["alert(T)Lscala.js.Dynamic;"]("I can play no more! You win :(");
            break $jslabel$matchEnd9$33545
          } else {
            /*<skip>*/
          }
        } else {
          /*<skip>*/
        };
        if ((x1$jsid$33533 !== null)) {
          var p5$jsid$33539 = x1$jsid$33533["_2$mcI$sp()I"]();
          if ((0 === p5$jsid$33539)) {
            result$$jslabel$matchEnd9$33545 = this["alert(T)Lscala.js.Dynamic;"]("You can play no more! I win !!!");
            break $jslabel$matchEnd9$33545
          } else {
            /*<skip>*/
          }
        } else {
          /*<skip>*/
        };
        if (((this["myscore()Lhelloworld.Score;"]()["weight()I"]() >= 100) && (this["yourscore()Lhelloworld.Score;"]()["weight()I"]() >= 100))) {
          if (((this["myscore()Lhelloworld.Score;"]()["value()I"]() + (0.0 / this["myscore()Lhelloworld.Score;"]()["weight()I"]())) > (this["yourscore()Lhelloworld.Score;"]()["value()I"]() + (0.0 / this["myscore()Lhelloworld.Score;"]()["weight()I"]())))) {
            var jsx$10 = "I win!"
          } else {
            var jsx$10 = "You win :("
          };
          result$$jslabel$matchEnd9$33545 = this["alert(T)Lscala.js.Dynamic;"](jsx$10)
        } else {
          result$$jslabel$matchEnd9$33545 = $.m["scala.runtime.BoxedUnit"]["UNIT()Lscala.runtime.BoxedUnit;"]()
        };
        break $jslabel$matchEnd9$33545
      } while (false);
      return result$$jslabel$matchEnd9$33545
    });
    Class.prototype["drawEdges()V"] = (function() {
      var adj$jsid$27741 = this["graph()Lhelloworld.Graph;"]()["adj()[[Z"]();
      var jsx$11 = $.m["scala.runtime.RichInt"]["until$extension0(II)Lscala.collection.immutable.Range;"]($.m["scala.Predef"]["intWrapper(I)I"](0), 64);
      var jsx$12 = new $.c["helloworld.Knapsack$$anonfun$drawEdges$1"]()["<init>([[Z)"](adj$jsid$27741);
      jsx$11["foreach$mVc$sp(Lscala.Function1;)V"](jsx$12)
    });
    Class.prototype["drawLine(Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;T)V"] = (function(arg$x, arg$y, arg$xx, arg$yy, arg$strokeStyle) {
      this["ctx()Lhelloworld.Canvas2D;"]().beginPath();
      this["ctx()Lhelloworld.Canvas2D;"]().moveTo(arg$x, arg$y);
      this["ctx()Lhelloworld.Canvas2D;"]().lineTo(arg$xx, arg$yy);
      this["ctx()Lhelloworld.Canvas2D;"]().strokeStyle = arg$strokeStyle;
      this["ctx()Lhelloworld.Canvas2D;"]().stroke();
      this["ctx()Lhelloworld.Canvas2D;"]().closePath()
    });
    Class.prototype["drawLine$default$5()T"] = (function() {
      return "#00C"
    });
    Class.prototype["clearCircle(Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;T)V"] = (function(arg$x, arg$y, arg$r, arg$fillStyle) {
      this["ctx()Lhelloworld.Canvas2D;"]().beginPath();
      this["ctx()Lhelloworld.Canvas2D;"]().moveTo((arg$x + arg$r), arg$y);
      this["ctx()Lhelloworld.Canvas2D;"]().arc(arg$x, arg$y, arg$r, 0, 6.283185307179586);
      this["ctx()Lhelloworld.Canvas2D;"]().fillStyle = arg$fillStyle;
      this["ctx()Lhelloworld.Canvas2D;"]().fill();
      this["ctx()Lhelloworld.Canvas2D;"]().closePath()
    });
    Class.prototype["clearCircle$default$4()T"] = (function() {
      return "#FFF"
    });
    Class.prototype["drawText(Lscala.js.Number;Lscala.js.Number;TT)V"] = (function(arg$x, arg$y, arg$text, arg$fillStyle) {
      this["ctx()Lhelloworld.Canvas2D;"]().fillStyle = arg$fillStyle;
      this["ctx()Lhelloworld.Canvas2D;"]().font = "plain 8px sans-serif";
      this["ctx()Lhelloworld.Canvas2D;"]().fillText(arg$text, arg$x, arg$y)
    });
    Class.prototype["drawText$default$3()T"] = (function() {
      return ""
    });
    Class.prototype["drawText$default$4()T"] = (function() {
      return "#F00"
    });
    Class.prototype["rnd(II)I"] = (function(arg$a, arg$b) {
      return (($.m["java.lang.Math"]["floor(D)D"](($.m["java.lang.Math"]["random()D"]() * (arg$b - arg$a))) + arg$a) | 0)
    });
    Class.prototype["drawGrid()V"] = (function() {
      this["ctx()Lhelloworld.Canvas2D;"]().beginPath();
      var jsx$13 = $.m["scala.runtime.RichInt"]["until$extension0(II)Lscala.collection.immutable.Range;"]($.m["scala.Predef"]["intWrapper(I)I"](0), this["w()I"]())["by(I)Lscala.collection.immutable.Range;"](10);
      var jsx$14 = new $.c["helloworld.Knapsack$$anonfun$drawGrid$1"]()["<init>()"]();
      jsx$13["foreach$mVc$sp(Lscala.Function1;)V"](jsx$14);
      this["ctx()Lhelloworld.Canvas2D;"]().strokeStyle = "#eee";
      this["ctx()Lhelloworld.Canvas2D;"]().stroke();
      this["ctx()Lhelloworld.Canvas2D;"]().closePath();
      this["ctx()Lhelloworld.Canvas2D;"]().beginPath();
      this["ctx()Lhelloworld.Canvas2D;"]().moveTo(0, 0);
      this["ctx()Lhelloworld.Canvas2D;"]().lineTo(0, this["w()I"]());
      this["ctx()Lhelloworld.Canvas2D;"]().lineTo(this["w()I"](), this["w()I"]());
      this["ctx()Lhelloworld.Canvas2D;"]().lineTo(this["w()I"](), 0);
      this["ctx()Lhelloworld.Canvas2D;"]().lineTo(0, 0);
      this["ctx()Lhelloworld.Canvas2D;"]().strokeStyle = "#000";
      this["ctx()Lhelloworld.Canvas2D;"]().stroke();
      this["ctx()Lhelloworld.Canvas2D;"]().closePath()
    });
    Class.prototype["location(Lhelloworld.MouseEvent;)Lscala.Tuple2;"] = (function(arg$event) {
      var x$jsid$32936 = arg$event.layerX;
      var y$jsid$32937 = arg$event.layerY;
      return new $.c["scala.Tuple2"]()["<init>(OO)"](x$jsid$32936, y$jsid$32937)
    });
    Class.prototype["alert(T)Lscala.js.Dynamic;"] = (function(arg$str) {
      return $.g.window.alert(arg$str)
    });
    Class.prototype["<init>()"] = (function() {
      $.c["java.lang.Object"].prototype["<init>()"].call(this);
      $.modules["helloworld.Knapsack"]._instance = this;
      this.$jsfield$R = $.m["helloworld.Pouch"]["R()I"]();
      this.$jsfield$r = $.m["helloworld.Pouch"]["r()I"]();
      this.$jsfield$canvasOrig = $.g.document.getElementById("canvas");
      this.$jsfield$canvasDom = this["canvasOrig()Lscala.js.Dynamic;"]();
      this.$jsfield$canvasElem = this["canvasOrig()Lscala.js.Dynamic;"]();
      this.$jsfield$ctx = this["canvasElem()Lhelloworld.HTMLCanvasElement;"]().getContext("2d");
      this.$jsfield$w = 900;
      var jsx$16 = $;
      var jsx$18 = $.m["scala.runtime.RichInt"]["until$extension0(II)Lscala.collection.immutable.Range;"]($.m["scala.Predef"]["intWrapper(I)I"](0), 64);
      var jsx$19 = new $.c["helloworld.Knapsack$$anonfun$1"]()["<init>()"]();
      var jsx$20 = $.m["scala.collection.immutable.IndexedSeq"]["canBuildFrom()Lscala.collection.generic.CanBuildFrom;"]();
      var jsx$17 = jsx$18["map(Lscala.Function1;Lscala.collection.generic.CanBuildFrom;)O"](jsx$19, jsx$20);
      var jsx$15 = jsx$16.asInstance(jsx$17, "scala.collection.immutable.IndexedSeq");
      this.$jsfield$pouches = jsx$15;
      this.$jsfield$graph = new $.c["helloworld.Graph"]()["<init>(Lscala.collection.Seq;)"](this["pouches()Lscala.collection.immutable.IndexedSeq;"]());
      this.$jsfield$myscore = new $.c["helloworld.Score"]()["<init>(II)"](0, 0);
      this.$jsfield$yourscore = new $.c["helloworld.Score"]()["<init>(II)"](0, 0);
      this.$jsfield$myprev = $.m["scala.None"];
      this.$jsfield$yourprev = $.m["scala.None"];
      return this
    });
    Class.prototype.R = (function() {
      return this["R()I"]()
    });
    Class.prototype.r = (function() {
      return this["r()I"]()
    });
    Class.prototype.canvasOrig = (function() {
      return this["canvasOrig()Lscala.js.Dynamic;"]()
    });
    Class.prototype.canvasDom = (function() {
      return this["canvasDom()Lhelloworld.DOMElement;"]()
    });
    Class.prototype.canvasElem = (function() {
      return this["canvasElem()Lhelloworld.HTMLCanvasElement;"]()
    });
    Class.prototype.ctx = (function() {
      return this["ctx()Lhelloworld.Canvas2D;"]()
    });
    Class.prototype.w = (function() {
      return this["w()I"]()
    });
    Class.prototype.pouches = (function() {
      return this["pouches()Lscala.collection.immutable.IndexedSeq;"]()
    });
    Class.prototype.graph = (function() {
      return this["graph()Lhelloworld.Graph;"]()
    });
    Class.prototype["graph_="] = (function(arg$1) {
      return this["graph_=(Lhelloworld.Graph;)V"](arg$1)
    });
    Class.prototype.myscore = (function() {
      return this["myscore()Lhelloworld.Score;"]()
    });
    Class.prototype["myscore_="] = (function(arg$1) {
      return this["myscore_=(Lhelloworld.Score;)V"](arg$1)
    });
    Class.prototype.yourscore = (function() {
      return this["yourscore()Lhelloworld.Score;"]()
    });
    Class.prototype["yourscore_="] = (function(arg$1) {
      return this["yourscore_=(Lhelloworld.Score;)V"](arg$1)
    });
    Class.prototype.myprev = (function() {
      return this["myprev()Lscala.Option;"]()
    });
    Class.prototype["myprev_="] = (function(arg$1) {
      return this["myprev_=(Lscala.Option;)V"](arg$1)
    });
    Class.prototype.yourprev = (function() {
      return this["yourprev()Lscala.Option;"]()
    });
    Class.prototype["yourprev_="] = (function(arg$1) {
      return this["yourprev_=(Lscala.Option;)V"](arg$1)
    });
    Class.prototype.drawPouch = (function(arg$1) {
      return this["drawPouch(Lhelloworld.Pouch;)V"](arg$1)
    });
    Class.prototype.drawScores = (function() {
      return this["drawScores()V"]()
    });
    Class.prototype.drawPouches = (function() {
      return this["drawPouches()V"]()
    });
    Class.prototype.blank = (function(arg$1, arg$2) {
      return this["blank(Lhelloworld.Pouch;T)V"](arg$1, arg$2)
    });
    Class.prototype.main = (function(arg$1) {
      return this["main([T)V"](arg$1)
    });
    Class.prototype.mouse2Pouch = (function(arg$1, arg$2) {
      return this["mouse2Pouch(II)Lscala.Option;"](arg$1, arg$2)
    });
    Class.prototype.playGame = (function(arg$1, arg$2) {
      return this["playGame(Lhelloworld.Pouch;Lhelloworld.Score;)V"](arg$1, arg$2)
    });
    Class.prototype.drawPath = (function(arg$1, arg$2, arg$3) {
      return this["drawPath(Lhelloworld.Pouch;Lhelloworld.Pouch;T)V"](arg$1, arg$2, arg$3)
    });
    Class.prototype.onMouseDown = (function() {
      return this["onMouseDown()Lscala.Function1;"]()
    });
    Class.prototype.declareWinner = (function() {
      return this["declareWinner()O"]()
    });
    Class.prototype.drawEdges = (function() {
      return this["drawEdges()V"]()
    });
    Class.prototype.drawLine = (function(arg$1, arg$2, arg$3, arg$4, arg$5) {
      return this["drawLine(Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;T)V"](arg$1, arg$2, arg$3, arg$4, arg$5)
    });
    Class.prototype.clearCircle = (function(arg$1, arg$2, arg$3, arg$4) {
      return this["clearCircle(Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;T)V"](arg$1, arg$2, arg$3, arg$4)
    });
    Class.prototype.drawText = (function(arg$1, arg$2, arg$3, arg$4) {
      return this["drawText(Lscala.js.Number;Lscala.js.Number;TT)V"](arg$1, arg$2, arg$3, arg$4)
    });
    Class.prototype.rnd = (function(arg$1, arg$2) {
      return this["rnd(II)I"](arg$1, arg$2)
    });
    Class.prototype.drawGrid = (function() {
      return this["drawGrid()V"]()
    });
    Class.prototype.location = (function(arg$1) {
      return this["location(Lhelloworld.MouseEvent;)Lscala.Tuple2;"](arg$1)
    });
    Class.prototype.alert = (function(arg$1) {
      return this["alert(T)Lscala.js.Dynamic;"](arg$1)
    });
    Class.prototype.clearCircle$default$4 = (function() {
      return this["clearCircle$default$4()T"]()
    });
    Class.prototype.drawText$default$3 = (function() {
      return this["drawText$default$3()T"]()
    });
    Class.prototype.drawText$default$4 = (function() {
      return this["drawText$default$4()T"]()
    });
    Class.prototype.blank$default$2 = (function() {
      return this["blank$default$2()T"]()
    });
    Class.prototype.drawLine$default$5 = (function() {
      return this["drawLine$default$5()T"]()
    });
    function JSClass() {
      Class.call(this);
      return this["<init>()"]()
    };
    JSClass.prototype = Class.prototype;
    $.createClass("helloworld.Knapsack$", Class, JSClass, "java.lang.Object", {
      "helloworld.Knapsack$": true,
      "java.lang.Object": true
    })
  }));
  $.registerModule("helloworld.Knapsack", "helloworld.Knapsack$");
  $.registerClass("helloworld.Knapsack$$anonfun$1", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1"].prototype.constructor.call(this)
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(I)Lhelloworld.Pouch;"] = (function(arg$id) {
      return new $.c["helloworld.Pouch"]()["<init>(IIIZ)"](arg$id, $.m["helloworld.Knapsack"]["rnd(II)I"](1, 9), $.m["helloworld.Knapsack"]["rnd(II)I"](1, 9), $.m["helloworld.Pouch"]["apply$default$4()Z"]())
    });
    Class.prototype["apply(O)O"] = (function(arg$v1) {
      return this["apply(I)Lhelloworld.Pouch;"]($.uI(arg$v1))
    });
    Class.prototype["<init>()"] = (function() {
      $.c["scala.runtime.AbstractFunction1"].prototype["<init>()"].call(this);
      return this
    });
    Class.prototype.apply = (function(arg$1) {
      if ((typeof(arg$1) === "number")) {
        return this["apply(I)Lhelloworld.Pouch;"](arg$1)
      } else {
        if ($.isInstance(arg$1, "java.lang.Object")) {
          return this["apply(O)O"](arg$1)
        } else {
          throw "No matching overload"
        }
      }
    });
    function JSClass() {
      Class.call(this);
      return this["<init>()"]()
    };
    JSClass.prototype = Class.prototype;
    $.createClass("helloworld.Knapsack$$anonfun$1", Class, JSClass, "scala.runtime.AbstractFunction1", {
      "helloworld.Knapsack$$anonfun$1": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction1": true,
      "scala.Function1": true,
      "java.lang.Object": true
    })
  }));
  $.registerClass("helloworld.Knapsack$$anonfun$drawPouches$1", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1"].prototype.constructor.call(this)
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(Lhelloworld.Pouch;)V"] = (function(arg$pouch) {
      $.m["helloworld.Knapsack"]["drawPouch(Lhelloworld.Pouch;)V"](arg$pouch)
    });
    Class.prototype["apply(O)O"] = (function(arg$v1) {
      this["apply(Lhelloworld.Pouch;)V"]($.asInstance(arg$v1, "helloworld.Pouch"));
      return $.m["scala.runtime.BoxedUnit"]["UNIT()Lscala.runtime.BoxedUnit;"]()
    });
    Class.prototype["<init>()"] = (function() {
      $.c["scala.runtime.AbstractFunction1"].prototype["<init>()"].call(this);
      return this
    });
    Class.prototype.apply = (function(arg$1) {
      if ($.isInstance(arg$1, "helloworld.Pouch")) {
        return this["apply(Lhelloworld.Pouch;)V"](arg$1)
      } else {
        if ($.isInstance(arg$1, "java.lang.Object")) {
          return this["apply(O)O"](arg$1)
        } else {
          throw "No matching overload"
        }
      }
    });
    function JSClass() {
      Class.call(this);
      return this["<init>()"]()
    };
    JSClass.prototype = Class.prototype;
    $.createClass("helloworld.Knapsack$$anonfun$drawPouches$1", Class, JSClass, "scala.runtime.AbstractFunction1", {
      "helloworld.Knapsack$$anonfun$drawPouches$1": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction1": true,
      "scala.Function1": true,
      "java.lang.Object": true
    })
  }));
  $.registerClass("helloworld.Knapsack$$anonfun$mouse2Pouch$1", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1"].prototype.constructor.call(this);
      this.$jsfield$x$10 = 0;
      this.$jsfield$y$1 = 0
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(Lhelloworld.Pouch;)Z"] = (function(arg$pouch) {
      return arg$pouch["contains(II)Z"](this.$jsfield$x$10, this.$jsfield$y$1)
    });
    Class.prototype["apply(O)O"] = (function(arg$v1) {
      return $.bZ(this["apply(Lhelloworld.Pouch;)Z"]($.asInstance(arg$v1, "helloworld.Pouch")))
    });
    Class.prototype["<init>(II)"] = (function(arg$x$10, arg$y$1) {
      this.$jsfield$x$10 = arg$x$10;
      this.$jsfield$y$1 = arg$y$1;
      $.c["scala.runtime.AbstractFunction1"].prototype["<init>()"].call(this);
      return this
    });
    Class.prototype.apply = (function(arg$1) {
      if ($.isInstance(arg$1, "helloworld.Pouch")) {
        return this["apply(Lhelloworld.Pouch;)Z"](arg$1)
      } else {
        if ($.isInstance(arg$1, "java.lang.Object")) {
          return this["apply(O)O"](arg$1)
        } else {
          throw "No matching overload"
        }
      }
    });
    function JSClass(arg$1, arg$2) {
      Class.call(this);
      return this["<init>(II)"](arg$1, arg$2)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("helloworld.Knapsack$$anonfun$mouse2Pouch$1", Class, JSClass, "scala.runtime.AbstractFunction1", {
      "helloworld.Knapsack$$anonfun$mouse2Pouch$1": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction1": true,
      "scala.Function1": true,
      "java.lang.Object": true
    })
  }));
  $.registerClass("helloworld.Knapsack$$anonfun$onMouseDown$1$$anonfun$2", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1"].prototype.constructor.call(this)
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(Lhelloworld.Pouch;)Lscala.Tuple2;"] = (function(arg$pouch) {
      return new $.c["scala.Tuple2"]()["<init>(OO)"](arg$pouch, $.bI(((arg$pouch["value()I"]() / arg$pouch["weight()I"]()) | 0)))
    });
    Class.prototype["apply(O)O"] = (function(arg$v1) {
      return this["apply(Lhelloworld.Pouch;)Lscala.Tuple2;"]($.asInstance(arg$v1, "helloworld.Pouch"))
    });
    Class.prototype["<init>(Lhelloworld.Knapsack$$anonfun$onMouseDown$1;)"] = (function(arg$$outer) {
      $.c["scala.runtime.AbstractFunction1"].prototype["<init>()"].call(this);
      return this
    });
    Class.prototype.apply = (function(arg$1) {
      if ($.isInstance(arg$1, "helloworld.Pouch")) {
        return this["apply(Lhelloworld.Pouch;)Lscala.Tuple2;"](arg$1)
      } else {
        if ($.isInstance(arg$1, "java.lang.Object")) {
          return this["apply(O)O"](arg$1)
        } else {
          throw "No matching overload"
        }
      }
    });
    function JSClass(arg$1) {
      Class.call(this);
      return this["<init>(Lhelloworld.Knapsack$$anonfun$onMouseDown$1;)"](arg$1)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("helloworld.Knapsack$$anonfun$onMouseDown$1$$anonfun$2", Class, JSClass, "scala.runtime.AbstractFunction1", {
      "helloworld.Knapsack$$anonfun$onMouseDown$1$$anonfun$2": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction1": true,
      "scala.Function1": true,
      "java.lang.Object": true
    })
  }));
  $.registerClass("helloworld.Knapsack$$anonfun$onMouseDown$1$$anonfun$3", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1"].prototype.constructor.call(this)
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(Lscala.Tuple2;)I"] = (function(arg$x) {
      return arg$x["_2$mcI$sp()I"]()
    });
    Class.prototype["apply(O)O"] = (function(arg$v1) {
      return $.bI(this["apply(Lscala.Tuple2;)I"]($.asInstance(arg$v1, "scala.Tuple2")))
    });
    Class.prototype["<init>(Lhelloworld.Knapsack$$anonfun$onMouseDown$1;)"] = (function(arg$$outer) {
      $.c["scala.runtime.AbstractFunction1"].prototype["<init>()"].call(this);
      return this
    });
    Class.prototype.apply = (function(arg$1) {
      if ($.isInstance(arg$1, "scala.Tuple2")) {
        return this["apply(Lscala.Tuple2;)I"](arg$1)
      } else {
        if ($.isInstance(arg$1, "java.lang.Object")) {
          return this["apply(O)O"](arg$1)
        } else {
          throw "No matching overload"
        }
      }
    });
    function JSClass(arg$1) {
      Class.call(this);
      return this["<init>(Lhelloworld.Knapsack$$anonfun$onMouseDown$1;)"](arg$1)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("helloworld.Knapsack$$anonfun$onMouseDown$1$$anonfun$3", Class, JSClass, "scala.runtime.AbstractFunction1", {
      "helloworld.Knapsack$$anonfun$onMouseDown$1$$anonfun$3": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction1": true,
      "scala.Function1": true,
      "java.lang.Object": true
    })
  }));
  $.registerClass("helloworld.Knapsack$$anonfun$onMouseDown$1", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1"].prototype.constructor.call(this)
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(Lhelloworld.MouseEvent;)V"] = (function(arg$event) {
      var x1$jsid$33527 = new $.c["scala.Tuple2$mcII$sp"]()["<init>(II)"]((arg$event.layerX | 0), (arg$event.layerY | 0));
      var result$$jslabel$matchEnd3$33529;
      $jslabel$matchEnd3$33529: do {
        if ((x1$jsid$33527 !== null)) {
          var x$jsid$31103 = x1$jsid$33527["_1$mcI$sp()I"]();
          var y$jsid$31104 = x1$jsid$33527["_2$mcI$sp()I"]();
          result$$jslabel$matchEnd3$33529 = new $.c["scala.Tuple2$mcII$sp"]()["<init>(II)"](x$jsid$31103, y$jsid$31104);
          break $jslabel$matchEnd3$33529
        } else {
          /*<skip>*/
        };
        throw new $.c["scala.MatchError"]()["<init>(O)"](x1$jsid$33527);
        break $jslabel$matchEnd3$33529
      } while (false);
      var x$7$jsid$31084 = result$$jslabel$matchEnd3$33529;
      var x$jsid$31085 = x$7$jsid$31084["_1$mcI$sp()I"]();
      var y$jsid$31086 = x$7$jsid$31084["_2$mcI$sp()I"]();
      var pouchOpt$jsid$31087 = $.m["helloworld.Knapsack"]["mouse2Pouch(II)Lscala.Option;"](x$jsid$31085, y$jsid$31086);
      if (pouchOpt$jsid$31087["isDefined()Z"]()) {
        if ($.m["helloworld.Knapsack"]["yourprev()Lscala.Option;"]()["isDefined()Z"]()) {
          $.m["helloworld.Knapsack"]["drawPath(Lhelloworld.Pouch;Lhelloworld.Pouch;T)V"]($.asInstance($.m["helloworld.Knapsack"]["yourprev()Lscala.Option;"]()["get()O"](), "helloworld.Pouch"), $.asInstance(pouchOpt$jsid$31087["get()O"](), "helloworld.Pouch"), "#0F0")
        } else {
          /*<skip>*/
        };
        $.m["helloworld.Knapsack"]["yourprev_=(Lscala.Option;)V"](pouchOpt$jsid$31087);
        $.m["helloworld.Knapsack"]["playGame(Lhelloworld.Pouch;Lhelloworld.Score;)V"]($.asInstance($.m["helloworld.Knapsack"]["yourprev()Lscala.Option;"]()["get()O"](), "helloworld.Pouch"), $.m["helloworld.Knapsack"]["yourscore()Lhelloworld.Score;"]());
        if ($.m["helloworld.Knapsack"]["myprev()Lscala.Option;"]()["isDefined()Z"]()) {
          var jsx$21 = $;
          var jsx$24 = $;
          var jsx$29 = $;
          var jsx$31 = $.m["helloworld.Knapsack"]["graph()Lhelloworld.Graph;"]()["getAvailablePouches(Lhelloworld.Pouch;)Lscala.collection.Seq;"]($.asInstance($.m["helloworld.Knapsack"]["myprev()Lscala.Option;"]()["get()O"](), "helloworld.Pouch"));
          var jsx$32 = new $.c["helloworld.Knapsack$$anonfun$onMouseDown$1$$anonfun$2"]()["<init>(Lhelloworld.Knapsack$$anonfun$onMouseDown$1;)"](this);
          var jsx$33 = $.m["scala.collection.Seq"]["canBuildFrom()Lscala.collection.generic.CanBuildFrom;"]();
          var jsx$30 = jsx$31["map(Lscala.Function1;Lscala.collection.generic.CanBuildFrom;)O"](jsx$32, jsx$33);
          var jsx$26 = jsx$29.asInstance(jsx$30, "scala.collection.TraversableOnce");
          var jsx$27 = new $.c["helloworld.Knapsack$$anonfun$onMouseDown$1$$anonfun$3"]()["<init>(Lhelloworld.Knapsack$$anonfun$onMouseDown$1;)"](this);
          var jsx$28 = $.m["scala.math.Ordering$Int"];
          var jsx$25 = jsx$26["maxBy(Lscala.Function1;Lscala.math.Ordering;)O"](jsx$27, jsx$28);
          var jsx$23 = jsx$24.asInstance(jsx$25, "scala.Tuple2");
          var jsx$22 = jsx$23["_1()O"]();
          var best$jsid$31151 = jsx$21.asInstance(jsx$22, "helloworld.Pouch");
          var pouchOpt2$jsid$31113 = new $.c["scala.Some"]()["<init>(O)"](best$jsid$31151)
        } else {
          var pouchOpt2$jsid$31113 = new $.c["scala.Some"]()["<init>(O)"]($.m["helloworld.Knapsack"]["graph()Lhelloworld.Graph;"]()["getAvailablePouch()Lhelloworld.Pouch;"]())
        };
        if (pouchOpt2$jsid$31113["isDefined()Z"]()) {
          if ($.m["helloworld.Knapsack"]["myprev()Lscala.Option;"]()["isDefined()Z"]()) {
            $.m["helloworld.Knapsack"]["drawPath(Lhelloworld.Pouch;Lhelloworld.Pouch;T)V"]($.asInstance($.m["helloworld.Knapsack"]["myprev()Lscala.Option;"]()["get()O"](), "helloworld.Pouch"), $.asInstance(pouchOpt2$jsid$31113["get()O"](), "helloworld.Pouch"), "#F00")
          } else {
            /*<skip>*/
          };
          $.m["helloworld.Knapsack"]["myprev_=(Lscala.Option;)V"](pouchOpt2$jsid$31113);
          $.m["helloworld.Knapsack"]["playGame(Lhelloworld.Pouch;Lhelloworld.Score;)V"]($.asInstance($.m["helloworld.Knapsack"]["myprev()Lscala.Option;"]()["get()O"](), "helloworld.Pouch"), $.m["helloworld.Knapsack"]["myscore()Lhelloworld.Score;"]())
        } else {
          /*<skip>*/
        }
      } else {
        /*<skip>*/
      };
      $.m["helloworld.Knapsack"]["declareWinner()O"]();
      arg$event.preventDefault()
    });
    Class.prototype["apply(O)O"] = (function(arg$v1) {
      this["apply(Lhelloworld.MouseEvent;)V"](arg$v1);
      return $.m["scala.runtime.BoxedUnit"]["UNIT()Lscala.runtime.BoxedUnit;"]()
    });
    Class.prototype["<init>()"] = (function() {
      $.c["scala.runtime.AbstractFunction1"].prototype["<init>()"].call(this);
      return this
    });
    Class.prototype.apply = (function(arg$1) {
      if ($.isInstance(arg$1, "java.lang.Object")) {
        return this["apply(O)O"](arg$1)
      } else {
        return this["apply(Lhelloworld.MouseEvent;)V"](arg$1)
      }
    });
    function JSClass() {
      Class.call(this);
      return this["<init>()"]()
    };
    JSClass.prototype = Class.prototype;
    $.createClass("helloworld.Knapsack$$anonfun$onMouseDown$1", Class, JSClass, "scala.runtime.AbstractFunction1", {
      "helloworld.Knapsack$$anonfun$onMouseDown$1": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction1": true,
      "scala.Function1": true,
      "java.lang.Object": true
    })
  }));
  $.registerClass("helloworld.Knapsack$$anonfun$drawEdges$1$$anonfun$apply$mcVI$sp$1", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1"].prototype.constructor.call(this)
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(Lscala.Tuple2;)Z"] = (function(arg$t) {
      return arg$t["_1$mcZ$sp()Z"]()
    });
    Class.prototype["apply(O)O"] = (function(arg$v1) {
      return $.bZ(this["apply(Lscala.Tuple2;)Z"]($.asInstance(arg$v1, "scala.Tuple2")))
    });
    Class.prototype["<init>(Lhelloworld.Knapsack$$anonfun$drawEdges$1;)"] = (function(arg$$outer) {
      $.c["scala.runtime.AbstractFunction1"].prototype["<init>()"].call(this);
      return this
    });
    Class.prototype.apply = (function(arg$1) {
      if ($.isInstance(arg$1, "scala.Tuple2")) {
        return this["apply(Lscala.Tuple2;)Z"](arg$1)
      } else {
        if ($.isInstance(arg$1, "java.lang.Object")) {
          return this["apply(O)O"](arg$1)
        } else {
          throw "No matching overload"
        }
      }
    });
    function JSClass(arg$1) {
      Class.call(this);
      return this["<init>(Lhelloworld.Knapsack$$anonfun$drawEdges$1;)"](arg$1)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("helloworld.Knapsack$$anonfun$drawEdges$1$$anonfun$apply$mcVI$sp$1", Class, JSClass, "scala.runtime.AbstractFunction1", {
      "helloworld.Knapsack$$anonfun$drawEdges$1$$anonfun$apply$mcVI$sp$1": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction1": true,
      "scala.Function1": true,
      "java.lang.Object": true
    })
  }));
  $.registerClass("helloworld.Knapsack$$anonfun$drawEdges$1$$anonfun$apply$mcVI$sp$2", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1"].prototype.constructor.call(this)
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(Lscala.Tuple2;)I"] = (function(arg$v) {
      return arg$v["_2$mcI$sp()I"]()
    });
    Class.prototype["apply(O)O"] = (function(arg$v1) {
      return $.bI(this["apply(Lscala.Tuple2;)I"]($.asInstance(arg$v1, "scala.Tuple2")))
    });
    Class.prototype["<init>(Lhelloworld.Knapsack$$anonfun$drawEdges$1;)"] = (function(arg$$outer) {
      $.c["scala.runtime.AbstractFunction1"].prototype["<init>()"].call(this);
      return this
    });
    Class.prototype.apply = (function(arg$1) {
      if ($.isInstance(arg$1, "scala.Tuple2")) {
        return this["apply(Lscala.Tuple2;)I"](arg$1)
      } else {
        if ($.isInstance(arg$1, "java.lang.Object")) {
          return this["apply(O)O"](arg$1)
        } else {
          throw "No matching overload"
        }
      }
    });
    function JSClass(arg$1) {
      Class.call(this);
      return this["<init>(Lhelloworld.Knapsack$$anonfun$drawEdges$1;)"](arg$1)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("helloworld.Knapsack$$anonfun$drawEdges$1$$anonfun$apply$mcVI$sp$2", Class, JSClass, "scala.runtime.AbstractFunction1", {
      "helloworld.Knapsack$$anonfun$drawEdges$1$$anonfun$apply$mcVI$sp$2": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction1": true,
      "scala.Function1": true,
      "java.lang.Object": true
    })
  }));
  $.registerClass("helloworld.Knapsack$$anonfun$drawEdges$1$$anonfun$apply$mcVI$sp$3", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1"].prototype.constructor.call(this)
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(I)Lscala.Tuple2;"] = (function(arg$myid) {
      return $.m["helloworld.Pouch"]["getCoords(II)Lscala.Tuple2;"](arg$myid, $.m["helloworld.Knapsack"]["R()I"]())
    });
    Class.prototype["apply(O)O"] = (function(arg$v1) {
      return this["apply(I)Lscala.Tuple2;"]($.uI(arg$v1))
    });
    Class.prototype["<init>(Lhelloworld.Knapsack$$anonfun$drawEdges$1;)"] = (function(arg$$outer) {
      $.c["scala.runtime.AbstractFunction1"].prototype["<init>()"].call(this);
      return this
    });
    Class.prototype.apply = (function(arg$1) {
      if ((typeof(arg$1) === "number")) {
        return this["apply(I)Lscala.Tuple2;"](arg$1)
      } else {
        if ($.isInstance(arg$1, "java.lang.Object")) {
          return this["apply(O)O"](arg$1)
        } else {
          throw "No matching overload"
        }
      }
    });
    function JSClass(arg$1) {
      Class.call(this);
      return this["<init>(Lhelloworld.Knapsack$$anonfun$drawEdges$1;)"](arg$1)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("helloworld.Knapsack$$anonfun$drawEdges$1$$anonfun$apply$mcVI$sp$3", Class, JSClass, "scala.runtime.AbstractFunction1", {
      "helloworld.Knapsack$$anonfun$drawEdges$1$$anonfun$apply$mcVI$sp$3": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction1": true,
      "scala.Function1": true,
      "java.lang.Object": true
    })
  }));
  $.registerClass("helloworld.Knapsack$$anonfun$drawEdges$1$$anonfun$apply$mcVI$sp$4", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1"].prototype.constructor.call(this);
      this.$jsfield$xx$1 = 0;
      this.$jsfield$yy$1 = 0
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(Lscala.Tuple2;)V"] = (function(arg$t) {
      var x1$jsid$33563 = arg$t;
      var result$$jslabel$matchEnd3$33565;
      $jslabel$matchEnd3$33565: do {
        if ((x1$jsid$33563 !== null)) {
          var x$jsid$31053 = x1$jsid$33563["_1$mcI$sp()I"]();
          var y$jsid$31054 = x1$jsid$33563["_2$mcI$sp()I"]();
          result$$jslabel$matchEnd3$33565 = new $.c["scala.Tuple2$mcII$sp"]()["<init>(II)"](x$jsid$31053, y$jsid$31054);
          break $jslabel$matchEnd3$33565
        } else {
          /*<skip>*/
        };
        throw new $.c["scala.MatchError"]()["<init>(O)"](x1$jsid$33563);
        break $jslabel$matchEnd3$33565
      } while (false);
      var x$9$jsid$31047 = result$$jslabel$matchEnd3$33565;
      var x$jsid$31048 = x$9$jsid$31047["_1$mcI$sp()I"]();
      var y$jsid$31049 = x$9$jsid$31047["_2$mcI$sp()I"]();
      $.m["helloworld.Knapsack"]["drawLine(Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;T)V"](this.$jsfield$xx$1, this.$jsfield$yy$1, x$jsid$31048, y$jsid$31049, $.m["helloworld.Knapsack"]["drawLine$default$5()T"]())
    });
    Class.prototype["apply(O)O"] = (function(arg$v1) {
      this["apply(Lscala.Tuple2;)V"]($.asInstance(arg$v1, "scala.Tuple2"));
      return $.m["scala.runtime.BoxedUnit"]["UNIT()Lscala.runtime.BoxedUnit;"]()
    });
    Class.prototype["<init>(Lhelloworld.Knapsack$$anonfun$drawEdges$1;II)"] = (function(arg$$outer, arg$xx$1, arg$yy$1) {
      this.$jsfield$xx$1 = arg$xx$1;
      this.$jsfield$yy$1 = arg$yy$1;
      $.c["scala.runtime.AbstractFunction1"].prototype["<init>()"].call(this);
      return this
    });
    Class.prototype.apply = (function(arg$1) {
      if ($.isInstance(arg$1, "scala.Tuple2")) {
        return this["apply(Lscala.Tuple2;)V"](arg$1)
      } else {
        if ($.isInstance(arg$1, "java.lang.Object")) {
          return this["apply(O)O"](arg$1)
        } else {
          throw "No matching overload"
        }
      }
    });
    function JSClass(arg$1, arg$2, arg$3) {
      Class.call(this);
      return this["<init>(Lhelloworld.Knapsack$$anonfun$drawEdges$1;II)"](arg$1, arg$2, arg$3)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("helloworld.Knapsack$$anonfun$drawEdges$1$$anonfun$apply$mcVI$sp$4", Class, JSClass, "scala.runtime.AbstractFunction1", {
      "helloworld.Knapsack$$anonfun$drawEdges$1$$anonfun$apply$mcVI$sp$4": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction1": true,
      "scala.Function1": true,
      "java.lang.Object": true
    })
  }));
  $.registerClass("helloworld.Knapsack$$anonfun$drawEdges$1", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1$mcVI$sp"].prototype.constructor.call(this);
      this.$jsfield$adj$1 = null
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1$mcVI$sp"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(I)V"] = (function(arg$id) {
      this["apply$mcVI$sp(I)V"](arg$id)
    });
    Class.prototype["apply$mcVI$sp(I)V"] = (function(arg$id) {
      var x1$jsid$33557 = $.m["helloworld.Pouch"]["getCoords(II)Lscala.Tuple2;"](arg$id, $.m["helloworld.Knapsack"]["R()I"]());
      var result$$jslabel$matchEnd3$33559;
      $jslabel$matchEnd3$33559: do {
        if ((x1$jsid$33557 !== null)) {
          var xx$jsid$27870 = x1$jsid$33557["_1$mcI$sp()I"]();
          var yy$jsid$27871 = x1$jsid$33557["_2$mcI$sp()I"]();
          result$$jslabel$matchEnd3$33559 = new $.c["scala.Tuple2$mcII$sp"]()["<init>(II)"](xx$jsid$27870, yy$jsid$27871);
          break $jslabel$matchEnd3$33559
        } else {
          /*<skip>*/
        };
        throw new $.c["scala.MatchError"]()["<init>(O)"](x1$jsid$33557);
        break $jslabel$matchEnd3$33559
      } while (false);
      var x$8$jsid$27864 = result$$jslabel$matchEnd3$33559;
      var xx$jsid$27865 = x$8$jsid$27864["_1$mcI$sp()I"]();
      var yy$jsid$27866 = x$8$jsid$27864["_2$mcI$sp()I"]();
      var jsx$37 = $.m["scala.Predef"];
      var jsx$39 = $;
      var jsx$44 = $.m["scala.Predef"];
      var jsx$46 = $;
      var jsx$51 = $.m["scala.Predef"];
      var jsx$53 = $;
      var jsx$55 = $.m["scala.Predef"]["refArrayOps([O)Lscala.collection.mutable.ArrayOps;"]($.asInstance($.m["scala.Predef"]["booleanArrayOps([Z)Lscala.collection.mutable.ArrayOps;"](this.$jsfield$adj$1.underlying[arg$id])["zipWithIndex(Lscala.collection.generic.CanBuildFrom;)O"]($.m["scala.Array"]["canBuildFrom(Lscala.reflect.ClassTag;)Lscala.collection.generic.CanBuildFrom;"]($.m["scala.reflect.ClassTag"]["apply(Ljava.lang.Class;)Lscala.reflect.ClassTag;"]($.classes["scala.Tuple2"].cls))), "java.lang.Object[]"));
      var jsx$56 = new $.c["helloworld.Knapsack$$anonfun$drawEdges$1$$anonfun$apply$mcVI$sp$1"]()["<init>(Lhelloworld.Knapsack$$anonfun$drawEdges$1;)"](this);
      var jsx$54 = jsx$55["filter(Lscala.Function1;)O"](jsx$56);
      var jsx$52 = jsx$53.asInstance(jsx$54, "java.lang.Object[]");
      var jsx$48 = jsx$51["refArrayOps([O)Lscala.collection.mutable.ArrayOps;"](jsx$52);
      var jsx$49 = new $.c["helloworld.Knapsack$$anonfun$drawEdges$1$$anonfun$apply$mcVI$sp$2"]()["<init>(Lhelloworld.Knapsack$$anonfun$drawEdges$1;)"](this);
      var jsx$50 = $.m["scala.Array"]["canBuildFrom(Lscala.reflect.ClassTag;)Lscala.collection.generic.CanBuildFrom;"]($.m["scala.reflect.ClassTag"]["Int()Lscala.reflect.ClassTag;"]());
      var jsx$47 = jsx$48["map(Lscala.Function1;Lscala.collection.generic.CanBuildFrom;)O"](jsx$49, jsx$50);
      var jsx$45 = jsx$46.asInstance(jsx$47, "scala.Int[]");
      var jsx$41 = jsx$44["intArrayOps([I)Lscala.collection.mutable.ArrayOps;"](jsx$45);
      var jsx$42 = new $.c["helloworld.Knapsack$$anonfun$drawEdges$1$$anonfun$apply$mcVI$sp$3"]()["<init>(Lhelloworld.Knapsack$$anonfun$drawEdges$1;)"](this);
      var jsx$43 = $.m["scala.Array"]["canBuildFrom(Lscala.reflect.ClassTag;)Lscala.collection.generic.CanBuildFrom;"]($.m["scala.reflect.ClassTag"]["apply(Ljava.lang.Class;)Lscala.reflect.ClassTag;"]($.classes["scala.Tuple2"].cls));
      var jsx$40 = jsx$41["map(Lscala.Function1;Lscala.collection.generic.CanBuildFrom;)O"](jsx$42, jsx$43);
      var jsx$38 = jsx$39.asInstance(jsx$40, "java.lang.Object[]");
      var jsx$36 = jsx$37["refArrayOps([O)Lscala.collection.mutable.ArrayOps;"](jsx$38);
      var jsx$34 = jsx$36["toSeq()Lscala.collection.Seq;"]();
      var jsx$35 = new $.c["helloworld.Knapsack$$anonfun$drawEdges$1$$anonfun$apply$mcVI$sp$4"]()["<init>(Lhelloworld.Knapsack$$anonfun$drawEdges$1;II)"](this, xx$jsid$27865, yy$jsid$27866);
      jsx$34["foreach(Lscala.Function1;)V"](jsx$35)
    });
    Class.prototype["apply(O)O"] = (function(arg$v1) {
      this["apply(I)V"]($.uI(arg$v1));
      return $.m["scala.runtime.BoxedUnit"]["UNIT()Lscala.runtime.BoxedUnit;"]()
    });
    Class.prototype["<init>([[Z)"] = (function(arg$adj$1) {
      this.$jsfield$adj$1 = arg$adj$1;
      $.c["scala.runtime.AbstractFunction1$mcVI$sp"].prototype["<init>()"].call(this);
      return this
    });
    function JSClass(arg$1) {
      Class.call(this);
      return this["<init>([[Z)"](arg$1)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("helloworld.Knapsack$$anonfun$drawEdges$1", Class, JSClass, "scala.runtime.AbstractFunction1$mcVI$sp", {
      "helloworld.Knapsack$$anonfun$drawEdges$1": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction1$mcVI$sp": true,
      "scala.Function1$mcVI$sp": true,
      "scala.runtime.AbstractFunction1": true,
      "scala.Function1": true,
      "java.lang.Object": true
    })
  }));
  $.registerClass("helloworld.Knapsack$$anonfun$drawGrid$1", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1$mcVI$sp"].prototype.constructor.call(this)
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1$mcVI$sp"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(I)V"] = (function(arg$x) {
      this["apply$mcVI$sp(I)V"](arg$x)
    });
    Class.prototype["apply$mcVI$sp(I)V"] = (function(arg$x) {
      $.m["helloworld.Knapsack"]["ctx()Lhelloworld.Canvas2D;"]().moveTo(arg$x, 0);
      $.m["helloworld.Knapsack"]["ctx()Lhelloworld.Canvas2D;"]().lineTo(arg$x, $.m["helloworld.Knapsack"]["w()I"]());
      $.m["helloworld.Knapsack"]["ctx()Lhelloworld.Canvas2D;"]().moveTo(0, arg$x);
      $.m["helloworld.Knapsack"]["ctx()Lhelloworld.Canvas2D;"]().lineTo($.m["helloworld.Knapsack"]["w()I"](), arg$x)
    });
    Class.prototype["apply(O)O"] = (function(arg$v1) {
      this["apply(I)V"]($.uI(arg$v1));
      return $.m["scala.runtime.BoxedUnit"]["UNIT()Lscala.runtime.BoxedUnit;"]()
    });
    Class.prototype["<init>()"] = (function() {
      $.c["scala.runtime.AbstractFunction1$mcVI$sp"].prototype["<init>()"].call(this);
      return this
    });
    function JSClass() {
      Class.call(this);
      return this["<init>()"]()
    };
    JSClass.prototype = Class.prototype;
    $.createClass("helloworld.Knapsack$$anonfun$drawGrid$1", Class, JSClass, "scala.runtime.AbstractFunction1$mcVI$sp", {
      "helloworld.Knapsack$$anonfun$drawGrid$1": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction1$mcVI$sp": true,
      "scala.Function1$mcVI$sp": true,
      "scala.runtime.AbstractFunction1": true,
      "scala.Function1": true,
      "java.lang.Object": true
    })
  }))
})($ScalaJSEnvironment);
//@ sourceMappingURL=Knapsack.js.map

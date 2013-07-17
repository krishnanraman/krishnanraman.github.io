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
      this.$jsfield$yourprev = null;
      this.$jsfield$finished = false
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
    Class.prototype["myscore()Lhelloworld.Score;"] = (function() {
      return this.$jsfield$myscore
    });
    Class.prototype["yourscore()Lhelloworld.Score;"] = (function() {
      return this.$jsfield$yourscore
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
    Class.prototype["finished()Z"] = (function() {
      return this.$jsfield$finished
    });
    Class.prototype["finished_=(Z)V"] = (function(arg$x$1) {
      this.$jsfield$finished = arg$x$1
    });
    Class.prototype["drawPouch(Lhelloworld.Pouch;)V"] = (function(arg$pouch) {
      var x1$jsid$33531 = $.m["helloworld.Pouch"]["getCoords(II)Lscala.Tuple2;"](arg$pouch["id()I"](), this["R()I"]());
      var result$$jslabel$matchEnd3$33533;
      $jslabel$matchEnd3$33533: do {
        if ((x1$jsid$33531 !== null)) {
          var x$jsid$27512 = x1$jsid$33531["_1$mcI$sp()I"]();
          var y$jsid$27513 = x1$jsid$33531["_2$mcI$sp()I"]();
          result$$jslabel$matchEnd3$33533 = new $.c["scala.Tuple2$mcII$sp"]()["<init>(II)"](x$jsid$27512, y$jsid$27513);
          break $jslabel$matchEnd3$33533
        } else {
          /*<skip>*/
        };
        throw new $.c["scala.MatchError"]()["<init>(O)"](x1$jsid$33531);
        break $jslabel$matchEnd3$33533
      } while (false);
      var x$3$jsid$27506 = result$$jslabel$matchEnd3$33533;
      var x$jsid$27507 = x$3$jsid$27506["_1$mcI$sp()I"]();
      var y$jsid$27508 = x$3$jsid$27506["_2$mcI$sp()I"]();
      this["clearCircle(Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;T)V"](x$jsid$27507, y$jsid$27508, this["r()I"](), this["clearCircle$default$4()T"]());
      this["drawText(Lscala.js.Number;Lscala.js.Number;TT)V"]((x$jsid$27507 - this["r()I"]()), (y$jsid$27508 + ((this["r()I"]() / 2) | 0)), arg$pouch["toString()T"](), this["drawText$default$4()T"]())
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
      var x1$jsid$33537 = $.m["helloworld.Pouch"]["getCoords(II)Lscala.Tuple2;"](arg$pouch["id()I"](), this["R()I"]());
      var result$$jslabel$matchEnd3$33539;
      $jslabel$matchEnd3$33539: do {
        if ((x1$jsid$33537 !== null)) {
          var x$jsid$27602 = x1$jsid$33537["_1$mcI$sp()I"]();
          var y$jsid$27603 = x1$jsid$33537["_2$mcI$sp()I"]();
          result$$jslabel$matchEnd3$33539 = new $.c["scala.Tuple2$mcII$sp"]()["<init>(II)"](x$jsid$27602, y$jsid$27603);
          break $jslabel$matchEnd3$33539
        } else {
          /*<skip>*/
        };
        throw new $.c["scala.MatchError"]()["<init>(O)"](x1$jsid$33537);
        break $jslabel$matchEnd3$33539
      } while (false);
      var x$4$jsid$27596 = result$$jslabel$matchEnd3$33539;
      var x$jsid$27597 = x$4$jsid$27596["_1$mcI$sp()I"]();
      var y$jsid$27598 = x$4$jsid$27596["_2$mcI$sp()I"]();
      this["clearCircle(Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;T)V"](x$jsid$27597, y$jsid$27598, this["r()I"](), arg$fillStyle)
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
        var searchlist$jsid$32967 = this["graph()Lhelloworld.Graph;"]()["getAvailablePouches(Lhelloworld.Pouch;)Lscala.collection.Seq;"]($.asInstance(this["yourprev()Lscala.Option;"]()["get()O"](), "helloworld.Pouch"))
      } else {
        var searchlist$jsid$32967 = this["graph()Lhelloworld.Graph;"]()["pouches()Lscala.collection.Seq;"]()
      };
      var jsx$4 = $;
      var jsx$6 = searchlist$jsid$32967;
      var jsx$7 = new $.c["helloworld.Knapsack$$anonfun$mouse2Pouch$1"]()["<init>(II)"](arg$x, arg$y);
      var jsx$5 = jsx$6["filter(Lscala.Function1;)O"](jsx$7);
      var jsx$3 = jsx$4.asInstance(jsx$5, "scala.collection.TraversableLike");
      return jsx$3["headOption()Lscala.Option;"]()
    });
    Class.prototype["updateGame(Lhelloworld.Pouch;Lhelloworld.Score;)V"] = (function(arg$pouch, arg$score) {
      arg$score["update(Lhelloworld.Pouch;)V"](arg$pouch);
      this["graph()Lhelloworld.Graph;"]()["usePouch(Lhelloworld.Pouch;)V"](arg$pouch);
      var jsx$8 = arg$pouch;
      if ($.anyRefEqEq(arg$score, this["myscore()Lhelloworld.Score;"]())) {
        var jsx$9 = "#ffa500"
      } else {
        var jsx$9 = "#006400"
      };
      this["blank(Lhelloworld.Pouch;T)V"](jsx$8, jsx$9);
      this["drawScores()V"]()
    });
    Class.prototype["playGame(Lhelloworld.Pouch;)V"] = (function(arg$pouch) {
      if ((!this["finished()Z"]())) {
        if (this["yourprev()Lscala.Option;"]()["isDefined()Z"]()) {
          this["drawPath(Lhelloworld.Pouch;Lhelloworld.Pouch;T)V"]($.asInstance(this["yourprev()Lscala.Option;"]()["get()O"](), "helloworld.Pouch"), arg$pouch, "#006400")
        } else {
          /*<skip>*/
        };
        this["yourprev_=(Lscala.Option;)V"](new $.c["scala.Some"]()["<init>(O)"](arg$pouch));
        this["updateGame(Lhelloworld.Pouch;Lhelloworld.Score;)V"]($.asInstance(this["yourprev()Lscala.Option;"]()["get()O"](), "helloworld.Pouch"), this["yourscore()Lhelloworld.Score;"]());
        if (this["myprev()Lscala.Option;"]()["isDefined()Z"]()) {
          var jsx$10 = $;
          var jsx$13 = $;
          var jsx$18 = $;
          var jsx$20 = this["graph()Lhelloworld.Graph;"]()["getAvailablePouches(Lhelloworld.Pouch;)Lscala.collection.Seq;"]($.asInstance(this["myprev()Lscala.Option;"]()["get()O"](), "helloworld.Pouch"));
          var jsx$21 = new $.c["helloworld.Knapsack$$anonfun$2"]()["<init>()"]();
          var jsx$22 = $.m["scala.collection.Seq"]["canBuildFrom()Lscala.collection.generic.CanBuildFrom;"]();
          var jsx$19 = jsx$20["map(Lscala.Function1;Lscala.collection.generic.CanBuildFrom;)O"](jsx$21, jsx$22);
          var jsx$15 = jsx$18.asInstance(jsx$19, "scala.collection.TraversableOnce");
          var jsx$16 = new $.c["helloworld.Knapsack$$anonfun$3"]()["<init>()"]();
          var jsx$17 = $.m["scala.math.Ordering$Int"];
          var jsx$14 = jsx$15["maxBy(Lscala.Function1;Lscala.math.Ordering;)O"](jsx$16, jsx$17);
          var jsx$12 = jsx$13.asInstance(jsx$14, "scala.Tuple2");
          var jsx$11 = jsx$12["_1()O"]();
          var best$jsid$31154 = jsx$10.asInstance(jsx$11, "helloworld.Pouch");
          var pouchOpt2$jsid$31113 = new $.c["scala.Some"]()["<init>(O)"](best$jsid$31154)
        } else {
          var pouchOpt2$jsid$31113 = new $.c["scala.Some"]()["<init>(O)"](this["graph()Lhelloworld.Graph;"]()["getAvailablePouch()Lhelloworld.Pouch;"]())
        };
        if (pouchOpt2$jsid$31113["isDefined()Z"]()) {
          if (this["myprev()Lscala.Option;"]()["isDefined()Z"]()) {
            this["drawPath(Lhelloworld.Pouch;Lhelloworld.Pouch;T)V"]($.asInstance(this["myprev()Lscala.Option;"]()["get()O"](), "helloworld.Pouch"), $.asInstance(pouchOpt2$jsid$31113["get()O"](), "helloworld.Pouch"), "#ffa500")
          } else {
            /*<skip>*/
          };
          this["myprev_=(Lscala.Option;)V"](pouchOpt2$jsid$31113);
          this["updateGame(Lhelloworld.Pouch;Lhelloworld.Score;)V"]($.asInstance(this["myprev()Lscala.Option;"]()["get()O"](), "helloworld.Pouch"), this["myscore()Lhelloworld.Score;"]())
        } else {
          /*<skip>*/
        };
        this["declareWinner()V"]()
      } else {
        /*<skip>*/
      }
    });
    Class.prototype["drawPath(Lhelloworld.Pouch;Lhelloworld.Pouch;T)V"] = (function(arg$fromp, arg$top, arg$color) {
      var x1$jsid$33543 = $.m["helloworld.Pouch"]["getCoords(II)Lscala.Tuple2;"](arg$fromp["id()I"](), this["R()I"]());
      var result$$jslabel$matchEnd3$33545;
      $jslabel$matchEnd3$33545: do {
        if ((x1$jsid$33543 !== null)) {
          var x$jsid$31126 = x1$jsid$33543["_1$mcI$sp()I"]();
          var y$jsid$31127 = x1$jsid$33543["_2$mcI$sp()I"]();
          result$$jslabel$matchEnd3$33545 = new $.c["scala.Tuple2$mcII$sp"]()["<init>(II)"](x$jsid$31126, y$jsid$31127);
          break $jslabel$matchEnd3$33545
        } else {
          /*<skip>*/
        };
        throw new $.c["scala.MatchError"]()["<init>(O)"](x1$jsid$33543);
        break $jslabel$matchEnd3$33545
      } while (false);
      var x$5$jsid$31117 = result$$jslabel$matchEnd3$33545;
      var x$jsid$31118 = x$5$jsid$31117["_1$mcI$sp()I"]();
      var y$jsid$31119 = x$5$jsid$31117["_2$mcI$sp()I"]();
      var x1$jsid$33549 = $.m["helloworld.Pouch"]["getCoords(II)Lscala.Tuple2;"](arg$top["id()I"](), this["R()I"]());
      var result$$jslabel$matchEnd3$33551;
      $jslabel$matchEnd3$33551: do {
        if ((x1$jsid$33549 !== null)) {
          var xx$jsid$31137 = x1$jsid$33549["_1$mcI$sp()I"]();
          var yy$jsid$31138 = x1$jsid$33549["_2$mcI$sp()I"]();
          result$$jslabel$matchEnd3$33551 = new $.c["scala.Tuple2$mcII$sp"]()["<init>(II)"](xx$jsid$31137, yy$jsid$31138);
          break $jslabel$matchEnd3$33551
        } else {
          /*<skip>*/
        };
        throw new $.c["scala.MatchError"]()["<init>(O)"](x1$jsid$33549);
        break $jslabel$matchEnd3$33551
      } while (false);
      var x$6$jsid$31120 = result$$jslabel$matchEnd3$33551;
      var xx$jsid$31121 = x$6$jsid$31120["_1$mcI$sp()I"]();
      var yy$jsid$31122 = x$6$jsid$31120["_2$mcI$sp()I"]();
      this["drawLine(Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;TI)V"](x$jsid$31118, y$jsid$31119, xx$jsid$31121, yy$jsid$31122, arg$color, 15);
      this["clearCircle(Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;T)V"](xx$jsid$31121, yy$jsid$31122, 2, arg$color)
    });
    Class.prototype["onMouseDown()Lscala.Function1;"] = (function() {
      return new $.c["helloworld.Knapsack$$anonfun$onMouseDown$1"]()["<init>()"]()
    });
    Class.prototype["declareWinner()V"] = (function() {
      var x1$jsid$33561 = new $.c["scala.Tuple2$mcII$sp"]()["<init>(II)"](this["graph()Lhelloworld.Graph;"]()["getAvailablePouches(Lhelloworld.Pouch;)Lscala.collection.Seq;"]($.asInstance(this["myprev()Lscala.Option;"]()["get()O"](), "helloworld.Pouch"))["size()I"](), this["graph()Lhelloworld.Graph;"]()["getAvailablePouches(Lhelloworld.Pouch;)Lscala.collection.Seq;"]($.asInstance(this["yourprev()Lscala.Option;"]()["get()O"](), "helloworld.Pouch"))["size()I"]());
      $jslabel$matchEnd9$33573: do {
        if ((x1$jsid$33561 !== null)) {
          var p2$jsid$33562 = x1$jsid$33561["_1$mcI$sp()I"]();
          if ((0 === p2$jsid$33562)) {
            this["alert(T)Lscala.js.Dynamic;"]("I can play no more!!! ");
            if (((this["myscore()Lhelloworld.Score;"]()["value()I"]() + (0.0 / this["myscore()Lhelloworld.Score;"]()["weight()I"]())) > (this["yourscore()Lhelloworld.Score;"]()["value()I"]() + (0.0 / this["myscore()Lhelloworld.Score;"]()["weight()I"]())))) {
              var jsx$23 = "But I still beat you!"
            } else {
              var jsx$23 = "Okay buster, you win :("
            };
            this["alert(T)Lscala.js.Dynamic;"](jsx$23);
            this["finished_=(Z)V"](true);
            $.m["scala.runtime.BoxedUnit"]["UNIT()Lscala.runtime.BoxedUnit;"]();
            break $jslabel$matchEnd9$33573
          } else {
            /*<skip>*/
          }
        } else {
          /*<skip>*/
        };
        if ((x1$jsid$33561 !== null)) {
          var p5$jsid$33567 = x1$jsid$33561["_2$mcI$sp()I"]();
          if ((0 === p5$jsid$33567)) {
            this["alert(T)Lscala.js.Dynamic;"]("You can play no more!");
            if (((this["myscore()Lhelloworld.Score;"]()["value()I"]() + (0.0 / this["myscore()Lhelloworld.Score;"]()["weight()I"]())) > (this["yourscore()Lhelloworld.Score;"]()["value()I"]() + (0.0 / this["myscore()Lhelloworld.Score;"]()["weight()I"]())))) {
              var jsx$24 = "I win fair & square!"
            } else {
              var jsx$24 = "But you know what ? You actually won this round!"
            };
            this["alert(T)Lscala.js.Dynamic;"](jsx$24);
            this["finished_=(Z)V"](true);
            $.m["scala.runtime.BoxedUnit"]["UNIT()Lscala.runtime.BoxedUnit;"]();
            break $jslabel$matchEnd9$33573
          } else {
            /*<skip>*/
          }
        } else {
          /*<skip>*/
        };
        if (((this["myscore()Lhelloworld.Score;"]()["weight()I"]() >= 100) && (this["yourscore()Lhelloworld.Score;"]()["weight()I"]() >= 100))) {
          if (((this["myscore()Lhelloworld.Score;"]()["value()I"]() + (0.0 / this["myscore()Lhelloworld.Score;"]()["weight()I"]())) > (this["yourscore()Lhelloworld.Score;"]()["value()I"]() + (0.0 / this["myscore()Lhelloworld.Score;"]()["weight()I"]())))) {
            var jsx$25 = "I win!"
          } else {
            var jsx$25 = "You win :("
          };
          this["alert(T)Lscala.js.Dynamic;"](jsx$25);
          this["finished_=(Z)V"](true);
          $.m["scala.runtime.BoxedUnit"]["UNIT()Lscala.runtime.BoxedUnit;"]()
        } else {
          $.m["scala.runtime.BoxedUnit"]["UNIT()Lscala.runtime.BoxedUnit;"]()
        };
        break $jslabel$matchEnd9$33573
      } while (false)
    });
    Class.prototype["drawEdges()V"] = (function() {
      var adj$jsid$27737 = this["graph()Lhelloworld.Graph;"]()["adj()[[Z"]();
      var jsx$26 = $.m["scala.runtime.RichInt"]["until$extension0(II)Lscala.collection.immutable.Range;"]($.m["scala.Predef"]["intWrapper(I)I"](0), 64);
      var jsx$27 = new $.c["helloworld.Knapsack$$anonfun$drawEdges$1"]()["<init>([[Z)"](adj$jsid$27737);
      jsx$26["foreach$mVc$sp(Lscala.Function1;)V"](jsx$27)
    });
    Class.prototype["drawLine(Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;TI)V"] = (function(arg$x, arg$y, arg$xx, arg$yy, arg$strokeStyle, arg$lineWidth) {
      this["ctx()Lhelloworld.Canvas2D;"]().beginPath();
      this["ctx()Lhelloworld.Canvas2D;"]().moveTo(arg$x, arg$y);
      this["ctx()Lhelloworld.Canvas2D;"]().lineTo(arg$xx, arg$yy);
      this["ctx()Lhelloworld.Canvas2D;"]().strokeStyle = arg$strokeStyle;
      this["ctx()Lhelloworld.Canvas2D;"]().lineWidth = arg$lineWidth;
      this["ctx()Lhelloworld.Canvas2D;"]().stroke();
      this["ctx()Lhelloworld.Canvas2D;"]().closePath()
    });
    Class.prototype["drawLine$default$5()T"] = (function() {
      return "#00C"
    });
    Class.prototype["drawLine$default$6()I"] = (function() {
      return 1
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
      var jsx$28 = $.m["scala.runtime.RichInt"]["until$extension0(II)Lscala.collection.immutable.Range;"]($.m["scala.Predef"]["intWrapper(I)I"](0), this["w()I"]())["by(I)Lscala.collection.immutable.Range;"](10);
      var jsx$29 = new $.c["helloworld.Knapsack$$anonfun$drawGrid$1"]()["<init>()"]();
      jsx$28["foreach$mVc$sp(Lscala.Function1;)V"](jsx$29);
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
      var jsx$31 = $;
      var jsx$33 = $.m["scala.runtime.RichInt"]["until$extension0(II)Lscala.collection.immutable.Range;"]($.m["scala.Predef"]["intWrapper(I)I"](0), 64);
      var jsx$34 = new $.c["helloworld.Knapsack$$anonfun$1"]()["<init>()"]();
      var jsx$35 = $.m["scala.collection.immutable.IndexedSeq"]["canBuildFrom()Lscala.collection.generic.CanBuildFrom;"]();
      var jsx$32 = jsx$33["map(Lscala.Function1;Lscala.collection.generic.CanBuildFrom;)O"](jsx$34, jsx$35);
      var jsx$30 = jsx$31.asInstance(jsx$32, "scala.collection.immutable.IndexedSeq");
      this.$jsfield$pouches = jsx$30;
      this.$jsfield$graph = new $.c["helloworld.Graph"]()["<init>(Lscala.collection.Seq;)"](this["pouches()Lscala.collection.immutable.IndexedSeq;"]());
      this.$jsfield$myscore = new $.c["helloworld.Score"]()["<init>(II)"](0, 0);
      this.$jsfield$yourscore = new $.c["helloworld.Score"]()["<init>(II)"](0, 0);
      this.$jsfield$myprev = $.m["scala.None"];
      this.$jsfield$yourprev = $.m["scala.None"];
      this.$jsfield$finished = false;
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
    Class.prototype.myscore = (function() {
      return this["myscore()Lhelloworld.Score;"]()
    });
    Class.prototype.yourscore = (function() {
      return this["yourscore()Lhelloworld.Score;"]()
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
    Class.prototype.finished = (function() {
      return this["finished()Z"]()
    });
    Class.prototype["finished_="] = (function(arg$1) {
      return this["finished_=(Z)V"](arg$1)
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
    Class.prototype.updateGame = (function(arg$1, arg$2) {
      return this["updateGame(Lhelloworld.Pouch;Lhelloworld.Score;)V"](arg$1, arg$2)
    });
    Class.prototype.playGame = (function(arg$1) {
      return this["playGame(Lhelloworld.Pouch;)V"](arg$1)
    });
    Class.prototype.drawPath = (function(arg$1, arg$2, arg$3) {
      return this["drawPath(Lhelloworld.Pouch;Lhelloworld.Pouch;T)V"](arg$1, arg$2, arg$3)
    });
    Class.prototype.onMouseDown = (function() {
      return this["onMouseDown()Lscala.Function1;"]()
    });
    Class.prototype.declareWinner = (function() {
      return this["declareWinner()V"]()
    });
    Class.prototype.drawEdges = (function() {
      return this["drawEdges()V"]()
    });
    Class.prototype.drawLine = (function(arg$1, arg$2, arg$3, arg$4, arg$5, arg$6) {
      return this["drawLine(Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;TI)V"](arg$1, arg$2, arg$3, arg$4, arg$5, arg$6)
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
    Class.prototype.drawLine$default$6 = (function() {
      return this["drawLine$default$6()I"]()
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
  $.registerClass("helloworld.Knapsack$$anonfun$2", (function($) {
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
    Class.prototype["<init>()"] = (function() {
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
    function JSClass() {
      Class.call(this);
      return this["<init>()"]()
    };
    JSClass.prototype = Class.prototype;
    $.createClass("helloworld.Knapsack$$anonfun$2", Class, JSClass, "scala.runtime.AbstractFunction1", {
      "helloworld.Knapsack$$anonfun$2": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction1": true,
      "scala.Function1": true,
      "java.lang.Object": true
    })
  }));
  $.registerClass("helloworld.Knapsack$$anonfun$3", (function($) {
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
    Class.prototype["<init>()"] = (function() {
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
    function JSClass() {
      Class.call(this);
      return this["<init>()"]()
    };
    JSClass.prototype = Class.prototype;
    $.createClass("helloworld.Knapsack$$anonfun$3", Class, JSClass, "scala.runtime.AbstractFunction1", {
      "helloworld.Knapsack$$anonfun$3": true,
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
      var x1$jsid$33555 = new $.c["scala.Tuple2$mcII$sp"]()["<init>(II)"]((arg$event.layerX | 0), (arg$event.layerY | 0));
      var result$$jslabel$matchEnd3$33557;
      $jslabel$matchEnd3$33557: do {
        if ((x1$jsid$33555 !== null)) {
          var x$jsid$31102 = x1$jsid$33555["_1$mcI$sp()I"]();
          var y$jsid$31103 = x1$jsid$33555["_2$mcI$sp()I"]();
          result$$jslabel$matchEnd3$33557 = new $.c["scala.Tuple2$mcII$sp"]()["<init>(II)"](x$jsid$31102, y$jsid$31103);
          break $jslabel$matchEnd3$33557
        } else {
          /*<skip>*/
        };
        throw new $.c["scala.MatchError"]()["<init>(O)"](x1$jsid$33555);
        break $jslabel$matchEnd3$33557
      } while (false);
      var x$7$jsid$31083 = result$$jslabel$matchEnd3$33557;
      var x$jsid$31084 = x$7$jsid$31083["_1$mcI$sp()I"]();
      var y$jsid$31085 = x$7$jsid$31083["_2$mcI$sp()I"]();
      var pouchOpt$jsid$31086 = $.m["helloworld.Knapsack"]["mouse2Pouch(II)Lscala.Option;"](x$jsid$31084, y$jsid$31085);
      if (pouchOpt$jsid$31086["isDefined()Z"]()) {
        $.m["helloworld.Knapsack"]["playGame(Lhelloworld.Pouch;)V"]($.asInstance(pouchOpt$jsid$31086["get()O"](), "helloworld.Pouch"))
      } else {
        /*<skip>*/
      };
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
      var x1$jsid$33591 = arg$t;
      var result$$jslabel$matchEnd3$33593;
      $jslabel$matchEnd3$33593: do {
        if ((x1$jsid$33591 !== null)) {
          var x$jsid$31049 = x1$jsid$33591["_1$mcI$sp()I"]();
          var y$jsid$31050 = x1$jsid$33591["_2$mcI$sp()I"]();
          result$$jslabel$matchEnd3$33593 = new $.c["scala.Tuple2$mcII$sp"]()["<init>(II)"](x$jsid$31049, y$jsid$31050);
          break $jslabel$matchEnd3$33593
        } else {
          /*<skip>*/
        };
        throw new $.c["scala.MatchError"]()["<init>(O)"](x1$jsid$33591);
        break $jslabel$matchEnd3$33593
      } while (false);
      var x$9$jsid$31043 = result$$jslabel$matchEnd3$33593;
      var x$jsid$31044 = x$9$jsid$31043["_1$mcI$sp()I"]();
      var y$jsid$31045 = x$9$jsid$31043["_2$mcI$sp()I"]();
      $.m["helloworld.Knapsack"]["drawLine(Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;TI)V"](this.$jsfield$xx$1, this.$jsfield$yy$1, x$jsid$31044, y$jsid$31045, "#2f4f4f", 4)
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
      var x1$jsid$33585 = $.m["helloworld.Pouch"]["getCoords(II)Lscala.Tuple2;"](arg$id, $.m["helloworld.Knapsack"]["R()I"]());
      var result$$jslabel$matchEnd3$33587;
      $jslabel$matchEnd3$33587: do {
        if ((x1$jsid$33585 !== null)) {
          var xx$jsid$27866 = x1$jsid$33585["_1$mcI$sp()I"]();
          var yy$jsid$27867 = x1$jsid$33585["_2$mcI$sp()I"]();
          result$$jslabel$matchEnd3$33587 = new $.c["scala.Tuple2$mcII$sp"]()["<init>(II)"](xx$jsid$27866, yy$jsid$27867);
          break $jslabel$matchEnd3$33587
        } else {
          /*<skip>*/
        };
        throw new $.c["scala.MatchError"]()["<init>(O)"](x1$jsid$33585);
        break $jslabel$matchEnd3$33587
      } while (false);
      var x$8$jsid$27860 = result$$jslabel$matchEnd3$33587;
      var xx$jsid$27861 = x$8$jsid$27860["_1$mcI$sp()I"]();
      var yy$jsid$27862 = x$8$jsid$27860["_2$mcI$sp()I"]();
      var jsx$39 = $.m["scala.Predef"];
      var jsx$41 = $;
      var jsx$46 = $.m["scala.Predef"];
      var jsx$48 = $;
      var jsx$53 = $.m["scala.Predef"];
      var jsx$55 = $;
      var jsx$57 = $.m["scala.Predef"]["refArrayOps([O)Lscala.collection.mutable.ArrayOps;"]($.asInstance($.m["scala.Predef"]["booleanArrayOps([Z)Lscala.collection.mutable.ArrayOps;"](this.$jsfield$adj$1.underlying[arg$id])["zipWithIndex(Lscala.collection.generic.CanBuildFrom;)O"]($.m["scala.Array"]["canBuildFrom(Lscala.reflect.ClassTag;)Lscala.collection.generic.CanBuildFrom;"]($.m["scala.reflect.ClassTag"]["apply(Ljava.lang.Class;)Lscala.reflect.ClassTag;"]($.classes["scala.Tuple2"].cls))), "java.lang.Object[]"));
      var jsx$58 = new $.c["helloworld.Knapsack$$anonfun$drawEdges$1$$anonfun$apply$mcVI$sp$1"]()["<init>(Lhelloworld.Knapsack$$anonfun$drawEdges$1;)"](this);
      var jsx$56 = jsx$57["filter(Lscala.Function1;)O"](jsx$58);
      var jsx$54 = jsx$55.asInstance(jsx$56, "java.lang.Object[]");
      var jsx$50 = jsx$53["refArrayOps([O)Lscala.collection.mutable.ArrayOps;"](jsx$54);
      var jsx$51 = new $.c["helloworld.Knapsack$$anonfun$drawEdges$1$$anonfun$apply$mcVI$sp$2"]()["<init>(Lhelloworld.Knapsack$$anonfun$drawEdges$1;)"](this);
      var jsx$52 = $.m["scala.Array"]["canBuildFrom(Lscala.reflect.ClassTag;)Lscala.collection.generic.CanBuildFrom;"]($.m["scala.reflect.ClassTag"]["Int()Lscala.reflect.ClassTag;"]());
      var jsx$49 = jsx$50["map(Lscala.Function1;Lscala.collection.generic.CanBuildFrom;)O"](jsx$51, jsx$52);
      var jsx$47 = jsx$48.asInstance(jsx$49, "scala.Int[]");
      var jsx$43 = jsx$46["intArrayOps([I)Lscala.collection.mutable.ArrayOps;"](jsx$47);
      var jsx$44 = new $.c["helloworld.Knapsack$$anonfun$drawEdges$1$$anonfun$apply$mcVI$sp$3"]()["<init>(Lhelloworld.Knapsack$$anonfun$drawEdges$1;)"](this);
      var jsx$45 = $.m["scala.Array"]["canBuildFrom(Lscala.reflect.ClassTag;)Lscala.collection.generic.CanBuildFrom;"]($.m["scala.reflect.ClassTag"]["apply(Ljava.lang.Class;)Lscala.reflect.ClassTag;"]($.classes["scala.Tuple2"].cls));
      var jsx$42 = jsx$43["map(Lscala.Function1;Lscala.collection.generic.CanBuildFrom;)O"](jsx$44, jsx$45);
      var jsx$40 = jsx$41.asInstance(jsx$42, "java.lang.Object[]");
      var jsx$38 = jsx$39["refArrayOps([O)Lscala.collection.mutable.ArrayOps;"](jsx$40);
      var jsx$36 = jsx$38["toSeq()Lscala.collection.Seq;"]();
      var jsx$37 = new $.c["helloworld.Knapsack$$anonfun$drawEdges$1$$anonfun$apply$mcVI$sp$4"]()["<init>(Lhelloworld.Knapsack$$anonfun$drawEdges$1;II)"](this, xx$jsid$27861, yy$jsid$27862);
      jsx$36["foreach(Lscala.Function1;)V"](jsx$37)
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

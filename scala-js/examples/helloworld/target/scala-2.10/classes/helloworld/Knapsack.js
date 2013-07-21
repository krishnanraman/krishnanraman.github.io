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
      this.$jsfield$x$3 = null;
      this.$jsfield$orange = null;
      this.$jsfield$green = null;
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
    Class.prototype["orange()T"] = (function() {
      return this.$jsfield$orange
    });
    Class.prototype["green()T"] = (function() {
      return this.$jsfield$green
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
      var x1$jsid$34200 = $.m["helloworld.Pouch"]["getCoords(II)Lscala.Tuple2;"](arg$pouch["id()I"](), this["R()I"]());
      var result$$jslabel$matchEnd3$34202;
      $jslabel$matchEnd3$34202: do {
        if ((x1$jsid$34200 !== null)) {
          var x$jsid$27558 = x1$jsid$34200["_1$mcI$sp()I"]();
          var y$jsid$27559 = x1$jsid$34200["_2$mcI$sp()I"]();
          result$$jslabel$matchEnd3$34202 = new $.c["scala.Tuple2$mcII$sp"]()["<init>(II)"](x$jsid$27558, y$jsid$27559);
          break $jslabel$matchEnd3$34202
        } else {
          /*<skip>*/
        };
        throw new $.c["scala.MatchError"]()["<init>(O)"](x1$jsid$34200);
        break $jslabel$matchEnd3$34202
      } while (false);
      var x$4$jsid$27552 = result$$jslabel$matchEnd3$34202;
      var x$jsid$27553 = x$4$jsid$27552["_1$mcI$sp()I"]();
      var y$jsid$27554 = x$4$jsid$27552["_2$mcI$sp()I"]();
      this["clearCircle(Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;T)V"](x$jsid$27553, y$jsid$27554, this["r()I"](), this["clearCircle$default$4()T"]());
      this["drawText(Lscala.js.Number;Lscala.js.Number;TT)V"]((x$jsid$27553 - this["r()I"]()), (y$jsid$27554 + ((this["r()I"]() / 2) | 0)), arg$pouch["toString()T"](), this["drawText$default$4()T"]())
    });
    Class.prototype["drawScores()V"] = (function() {
      this["ctx()Lhelloworld.Canvas2D;"]().beginPath();
      this["ctx()Lhelloworld.Canvas2D;"]().fillStyle = "#FFF";
      this["ctx()Lhelloworld.Canvas2D;"]().clearRect(10, 20, 150, 30);
      this["ctx()Lhelloworld.Canvas2D;"]().clearRect(640, 20, 150, 30);
      this["ctx()Lhelloworld.Canvas2D;"]().clearRect(10, 760, 150, 30);
      this["ctx()Lhelloworld.Canvas2D;"]().clearRect(640, 760, 150, 30);
      this["ctx()Lhelloworld.Canvas2D;"]().stroke();
      this["ctx()Lhelloworld.Canvas2D;"]().closePath();
      this["ctx()Lhelloworld.Canvas2D;"]().beginPath();
      this["ctx()Lhelloworld.Canvas2D;"]().fillStyle = this["orange()T"]();
      this["ctx()Lhelloworld.Canvas2D;"]().font = "bold 14px sans-serif";
      this["ctx()Lhelloworld.Canvas2D;"]().fillText(("Computer: " + this["myscore()Lhelloworld.Score;"]()["toString()T"]()), 640, 40);
      this["ctx()Lhelloworld.Canvas2D;"]().fillText(("Computer: " + this["myscore()Lhelloworld.Score;"]()["toString()T"]()), 640, 780);
      this["ctx()Lhelloworld.Canvas2D;"]().fillStyle = this["green()T"]();
      this["ctx()Lhelloworld.Canvas2D;"]().fillText(("You: " + this["yourscore()Lhelloworld.Score;"]()["toString()T"]()), 10, 40);
      this["ctx()Lhelloworld.Canvas2D;"]().fillText(("You: " + this["yourscore()Lhelloworld.Score;"]()["toString()T"]()), 10, 780);
      this["ctx()Lhelloworld.Canvas2D;"]().closePath()
    });
    Class.prototype["drawPouches()V"] = (function() {
      var jsx$1 = this["graph()Lhelloworld.Graph;"]()["pouches()Lscala.collection.Seq;"]();
      var jsx$2 = new $.c["helloworld.Knapsack$$anonfun$drawPouches$1"]()["<init>()"]();
      jsx$1["foreach(Lscala.Function1;)V"](jsx$2)
    });
    Class.prototype["blank(Lhelloworld.Pouch;T)V"] = (function(arg$pouch, arg$fillStyle) {
      var x1$jsid$34206 = $.m["helloworld.Pouch"]["getCoords(II)Lscala.Tuple2;"](arg$pouch["id()I"](), this["R()I"]());
      var result$$jslabel$matchEnd3$34208;
      $jslabel$matchEnd3$34208: do {
        if ((x1$jsid$34206 !== null)) {
          var x$jsid$27648 = x1$jsid$34206["_1$mcI$sp()I"]();
          var y$jsid$27649 = x1$jsid$34206["_2$mcI$sp()I"]();
          result$$jslabel$matchEnd3$34208 = new $.c["scala.Tuple2$mcII$sp"]()["<init>(II)"](x$jsid$27648, y$jsid$27649);
          break $jslabel$matchEnd3$34208
        } else {
          /*<skip>*/
        };
        throw new $.c["scala.MatchError"]()["<init>(O)"](x1$jsid$34206);
        break $jslabel$matchEnd3$34208
      } while (false);
      var x$5$jsid$27642 = result$$jslabel$matchEnd3$34208;
      var x$jsid$27643 = x$5$jsid$27642["_1$mcI$sp()I"]();
      var y$jsid$27644 = x$5$jsid$27642["_2$mcI$sp()I"]();
      this["clearCircle(Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;T)V"](x$jsid$27643, y$jsid$27644, this["r()I"](), arg$fillStyle)
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
        var searchlist$jsid$31246 = this["graph()Lhelloworld.Graph;"]()["getAvailablePouches(Lhelloworld.Pouch;)Lscala.collection.Seq;"]($.asInstance(this["yourprev()Lscala.Option;"]()["get()O"](), "helloworld.Pouch"))
      } else {
        var searchlist$jsid$31246 = this["graph()Lhelloworld.Graph;"]()["pouches()Lscala.collection.Seq;"]()
      };
      var jsx$4 = $;
      var jsx$6 = searchlist$jsid$31246;
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
        var jsx$9 = this["orange()T"]()
      } else {
        var jsx$9 = this["green()T"]()
      };
      this["blank(Lhelloworld.Pouch;T)V"](jsx$8, jsx$9);
      this["drawScores()V"]()
    });
    Class.prototype["intersect(Lscala.collection.Seq;Lscala.collection.Seq;)Lscala.collection.Seq;"] = (function(arg$a, arg$b) {
      var jsx$10 = $;
      var jsx$14 = $;
      var jsx$16 = arg$a;
      var jsx$17 = new $.c["helloworld.Knapsack$$anonfun$intersect$1"]()["<init>(Lscala.collection.Seq;)"](arg$b);
      var jsx$18 = $.m["scala.collection.Seq"]["canBuildFrom()Lscala.collection.generic.CanBuildFrom;"]();
      var jsx$15 = jsx$16["map(Lscala.Function1;Lscala.collection.generic.CanBuildFrom;)O"](jsx$17, jsx$18);
      var jsx$12 = jsx$14.asInstance(jsx$15, "scala.collection.generic.GenericTraversableTemplate");
      var jsx$13 = new $.c["helloworld.Knapsack$$anonfun$intersect$2"]()["<init>()"]();
      var jsx$11 = jsx$12["flatten(Lscala.Function1;)Lscala.collection.GenTraversable;"](jsx$13);
      return jsx$10.asInstance(jsx$11, "scala.collection.Seq")
    });
    Class.prototype["myStrategy(Lhelloworld.Pouch;)Lscala.Option;"] = (function(arg$yourpouch) {
      var jsx$19 = this["graph()Lhelloworld.Graph;"]();
      if (this["myprev()Lscala.Option;"]()["isDefined()Z"]()) {
        var jsx$20 = $.asInstance(this["myprev()Lscala.Option;"]()["get()O"](), "helloworld.Pouch")
      } else {
        var jsx$20 = arg$yourpouch
      };
      var avail$jsid$31343 = jsx$19["getAvailablePouches(Lhelloworld.Pouch;)Lscala.collection.Seq;"](jsx$20);
      var common$jsid$31344 = this["intersect(Lscala.collection.Seq;Lscala.collection.Seq;)Lscala.collection.Seq;"](avail$jsid$31343, this["graph()Lhelloworld.Graph;"]()["getAvailablePouches(Lhelloworld.Pouch;)Lscala.collection.Seq;"](arg$yourpouch));
      var x1$jsid$34212 = new $.c["scala.Tuple2$mcII$sp"]()["<init>(II)"](avail$jsid$31343["size()I"](), common$jsid$31344["size()I"]());
      var result$$jslabel$matchEnd10$34227;
      $jslabel$matchEnd10$34227: do {
        if ((x1$jsid$34212 !== null)) {
          var p2$jsid$34213 = x1$jsid$34212["_1$mcI$sp()I"]();
          var p3$jsid$34214 = x1$jsid$34212["_2$mcI$sp()I"]();
          if ((0 === p2$jsid$34213)) {
            if ((0 === p3$jsid$34214)) {
              result$$jslabel$matchEnd10$34227 = $.m["scala.collection.immutable.Nil"];
              break $jslabel$matchEnd10$34227
            } else {
              /*<skip>*/
            }
          } else {
            /*<skip>*/
          }
        } else {
          /*<skip>*/
        };
        if ((x1$jsid$34212 !== null)) {
          var p5$jsid$34220 = x1$jsid$34212["_2$mcI$sp()I"]();
          if ((0 === p5$jsid$34220)) {
            result$$jslabel$matchEnd10$34227 = $.asInstance($.m["scala.collection.Seq"]["apply(Lscala.collection.Seq;)Lscala.collection.GenTraversable;"]($.m["scala.Predef"]["wrapRefArray([O)Lscala.collection.mutable.WrappedArray;"]($.asInstance($.makeNativeArrayWrapper($.classes["scala.collection.Seq"].array, [avail$jsid$31343]), "java.lang.Object[]"))), "scala.collection.Seq");
            break $jslabel$matchEnd10$34227
          } else {
            /*<skip>*/
          }
        } else {
          /*<skip>*/
        };
        result$$jslabel$matchEnd10$34227 = $.asInstance($.m["scala.collection.Seq"]["apply(Lscala.collection.Seq;)Lscala.collection.GenTraversable;"]($.m["scala.Predef"]["wrapRefArray([O)Lscala.collection.mutable.WrappedArray;"]($.asInstance($.makeNativeArrayWrapper($.classes["scala.collection.Seq"].array, [avail$jsid$31343, common$jsid$31344]), "java.lang.Object[]"))), "scala.collection.Seq");
        break $jslabel$matchEnd10$34227
      } while (false);
      var choices$jsid$31345 = result$$jslabel$matchEnd10$34227;
      if ((!$.anyRefEqEq(choices$jsid$31345, $.m["scala.collection.immutable.Nil"]))) {
        var jsx$21 = $;
        var jsx$23 = choices$jsid$31345;
        var jsx$24 = new $.c["helloworld.Knapsack$$anonfun$2"]()["<init>()"]();
        var jsx$25 = $.m["scala.collection.Seq"]["canBuildFrom()Lscala.collection.generic.CanBuildFrom;"]();
        var jsx$22 = jsx$23["map(Lscala.Function1;Lscala.collection.generic.CanBuildFrom;)O"](jsx$24, jsx$25);
        var res$jsid$31716 = jsx$21.asInstance(jsx$22, "scala.collection.Seq");
        if ((res$jsid$31716["size()I"]() === 1)) {
          return new $.c["scala.Some"]()["<init>(O)"](res$jsid$31716["apply(I)O"](0))
        } else {
          if (($.asInstance(res$jsid$31716["apply(I)O"](1), "helloworld.Pouch")["value()I"]() > 0)) {
            return new $.c["scala.Some"]()["<init>(O)"](res$jsid$31716["apply(I)O"](1))
          } else {
            return new $.c["scala.Some"]()["<init>(O)"](res$jsid$31716["apply(I)O"](0))
          }
        }
      } else {
        return $.m["scala.None"]
      }
    });
    Class.prototype["playGame(Lhelloworld.Pouch;)V"] = (function(arg$pouch) {
      if ((!this["finished()Z"]())) {
        if (this["yourprev()Lscala.Option;"]()["isDefined()Z"]()) {
          this["drawPath(Lhelloworld.Pouch;Lhelloworld.Pouch;T)V"]($.asInstance(this["yourprev()Lscala.Option;"]()["get()O"](), "helloworld.Pouch"), arg$pouch, this["green()T"]())
        } else {
          /*<skip>*/
        };
        this["yourprev_=(Lscala.Option;)V"](new $.c["scala.Some"]()["<init>(O)"](arg$pouch));
        this["updateGame(Lhelloworld.Pouch;Lhelloworld.Score;)V"]($.asInstance(this["yourprev()Lscala.Option;"]()["get()O"](), "helloworld.Pouch"), this["yourscore()Lhelloworld.Score;"]());
        var pouchOpt2$jsid$31159 = this["myStrategy(Lhelloworld.Pouch;)Lscala.Option;"](arg$pouch);
        if (pouchOpt2$jsid$31159["isDefined()Z"]()) {
          if (this["myprev()Lscala.Option;"]()["isDefined()Z"]()) {
            this["drawPath(Lhelloworld.Pouch;Lhelloworld.Pouch;T)V"]($.asInstance(this["myprev()Lscala.Option;"]()["get()O"](), "helloworld.Pouch"), $.asInstance(pouchOpt2$jsid$31159["get()O"](), "helloworld.Pouch"), this["orange()T"]())
          } else {
            /*<skip>*/
          };
          this["myprev_=(Lscala.Option;)V"](pouchOpt2$jsid$31159);
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
      var x1$jsid$34242 = $.m["helloworld.Pouch"]["getCoords(II)Lscala.Tuple2;"](arg$fromp["id()I"](), this["R()I"]());
      var result$$jslabel$matchEnd3$34244;
      $jslabel$matchEnd3$34244: do {
        if ((x1$jsid$34242 !== null)) {
          var x$jsid$31172 = x1$jsid$34242["_1$mcI$sp()I"]();
          var y$jsid$31173 = x1$jsid$34242["_2$mcI$sp()I"]();
          result$$jslabel$matchEnd3$34244 = new $.c["scala.Tuple2$mcII$sp"]()["<init>(II)"](x$jsid$31172, y$jsid$31173);
          break $jslabel$matchEnd3$34244
        } else {
          /*<skip>*/
        };
        throw new $.c["scala.MatchError"]()["<init>(O)"](x1$jsid$34242);
        break $jslabel$matchEnd3$34244
      } while (false);
      var x$6$jsid$31163 = result$$jslabel$matchEnd3$34244;
      var x$jsid$31164 = x$6$jsid$31163["_1$mcI$sp()I"]();
      var y$jsid$31165 = x$6$jsid$31163["_2$mcI$sp()I"]();
      var x1$jsid$34248 = $.m["helloworld.Pouch"]["getCoords(II)Lscala.Tuple2;"](arg$top["id()I"](), this["R()I"]());
      var result$$jslabel$matchEnd3$34250;
      $jslabel$matchEnd3$34250: do {
        if ((x1$jsid$34248 !== null)) {
          var xx$jsid$31183 = x1$jsid$34248["_1$mcI$sp()I"]();
          var yy$jsid$31184 = x1$jsid$34248["_2$mcI$sp()I"]();
          result$$jslabel$matchEnd3$34250 = new $.c["scala.Tuple2$mcII$sp"]()["<init>(II)"](xx$jsid$31183, yy$jsid$31184);
          break $jslabel$matchEnd3$34250
        } else {
          /*<skip>*/
        };
        throw new $.c["scala.MatchError"]()["<init>(O)"](x1$jsid$34248);
        break $jslabel$matchEnd3$34250
      } while (false);
      var x$7$jsid$31166 = result$$jslabel$matchEnd3$34250;
      var xx$jsid$31167 = x$7$jsid$31166["_1$mcI$sp()I"]();
      var yy$jsid$31168 = x$7$jsid$31166["_2$mcI$sp()I"]();
      this["drawLine(Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;TI)V"](x$jsid$31164, y$jsid$31165, xx$jsid$31167, yy$jsid$31168, arg$color, 15);
      this["clearCircle(Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;T)V"](xx$jsid$31167, yy$jsid$31168, 2, arg$color)
    });
    Class.prototype["onMouseDown()Lscala.Function1;"] = (function() {
      return new $.c["helloworld.Knapsack$$anonfun$onMouseDown$1"]()["<init>()"]()
    });
    Class.prototype["declareWinner()V"] = (function() {
      var x1$jsid$34260 = new $.c["scala.Tuple2$mcII$sp"]()["<init>(II)"](this["graph()Lhelloworld.Graph;"]()["getAvailablePouches(Lhelloworld.Pouch;)Lscala.collection.Seq;"]($.asInstance(this["myprev()Lscala.Option;"]()["get()O"](), "helloworld.Pouch"))["size()I"](), this["graph()Lhelloworld.Graph;"]()["getAvailablePouches(Lhelloworld.Pouch;)Lscala.collection.Seq;"]($.asInstance(this["yourprev()Lscala.Option;"]()["get()O"](), "helloworld.Pouch"))["size()I"]());
      $jslabel$matchEnd9$34272: do {
        if ((x1$jsid$34260 !== null)) {
          var p2$jsid$34261 = x1$jsid$34260["_1$mcI$sp()I"]();
          if ((0 === p2$jsid$34261)) {
            var msg$jsid$31211 = "I can play no more!!! ";
            if ((this["myscore()Lhelloworld.Score;"]()["ratio()D"]() > this["yourscore()Lhelloworld.Score;"]()["ratio()D"]())) {
              var jsx$26 = (msg$jsid$31211 + " But I still beat you!")
            } else {
              var jsx$26 = (msg$jsid$31211 + " Okay buster, you win :(")
            };
            this["alert(T)Lscala.js.Dynamic;"](jsx$26);
            this["finished_=(Z)V"](true);
            $.m["scala.runtime.BoxedUnit"]["UNIT()Lscala.runtime.BoxedUnit;"]();
            break $jslabel$matchEnd9$34272
          } else {
            /*<skip>*/
          }
        } else {
          /*<skip>*/
        };
        if ((x1$jsid$34260 !== null)) {
          var p5$jsid$34266 = x1$jsid$34260["_2$mcI$sp()I"]();
          if ((0 === p5$jsid$34266)) {
            var msg$jsid$31223 = "You can play no more!";
            if ((this["myscore()Lhelloworld.Score;"]()["ratio()D"]() > this["yourscore()Lhelloworld.Score;"]()["ratio()D"]())) {
              var jsx$27 = (msg$jsid$31223 + " I win fair & square!")
            } else {
              var jsx$27 = (msg$jsid$31223 + " But you know what ? You actually won this round!")
            };
            this["alert(T)Lscala.js.Dynamic;"](jsx$27);
            this["finished_=(Z)V"](true);
            $.m["scala.runtime.BoxedUnit"]["UNIT()Lscala.runtime.BoxedUnit;"]();
            break $jslabel$matchEnd9$34272
          } else {
            /*<skip>*/
          }
        } else {
          /*<skip>*/
        };
        if (((this["myscore()Lhelloworld.Score;"]()["weight()I"]() >= 100) && (this["yourscore()Lhelloworld.Score;"]()["weight()I"]() >= 100))) {
          if ((this["myscore()Lhelloworld.Score;"]()["ratio()D"]() > this["yourscore()Lhelloworld.Score;"]()["ratio()D"]())) {
            var jsx$28 = "I win!"
          } else {
            var jsx$28 = "You win :("
          };
          this["alert(T)Lscala.js.Dynamic;"](jsx$28);
          this["finished_=(Z)V"](true);
          $.m["scala.runtime.BoxedUnit"]["UNIT()Lscala.runtime.BoxedUnit;"]()
        } else {
          $.m["scala.runtime.BoxedUnit"]["UNIT()Lscala.runtime.BoxedUnit;"]()
        };
        break $jslabel$matchEnd9$34272
      } while (false)
    });
    Class.prototype["drawEdges()V"] = (function() {
      var adj$jsid$27783 = this["graph()Lhelloworld.Graph;"]()["adj()[[Z"]();
      var jsx$29 = $.m["scala.runtime.RichInt"]["until$extension0(II)Lscala.collection.immutable.Range;"]($.m["scala.Predef"]["intWrapper(I)I"](0), 64);
      var jsx$30 = new $.c["helloworld.Knapsack$$anonfun$drawEdges$1"]()["<init>([[Z)"](adj$jsid$27783);
      jsx$29["foreach$mVc$sp(Lscala.Function1;)V"](jsx$30)
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
      this["ctx()Lhelloworld.Canvas2D;"]().font = "plain 12px sans-serif";
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
      var jsx$31 = $.m["scala.runtime.RichInt"]["until$extension0(II)Lscala.collection.immutable.Range;"]($.m["scala.Predef"]["intWrapper(I)I"](0), this["w()I"]())["by(I)Lscala.collection.immutable.Range;"](10);
      var jsx$32 = new $.c["helloworld.Knapsack$$anonfun$drawGrid$1"]()["<init>()"]();
      jsx$31["foreach$mVc$sp(Lscala.Function1;)V"](jsx$32);
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
      this.$jsfield$w = 800;
      var jsx$34 = $;
      var jsx$36 = $.m["scala.runtime.RichInt"]["until$extension0(II)Lscala.collection.immutable.Range;"]($.m["scala.Predef"]["intWrapper(I)I"](0), 64);
      var jsx$37 = new $.c["helloworld.Knapsack$$anonfun$1"]()["<init>()"]();
      var jsx$38 = $.m["scala.collection.immutable.IndexedSeq"]["canBuildFrom()Lscala.collection.generic.CanBuildFrom;"]();
      var jsx$35 = jsx$36["map(Lscala.Function1;Lscala.collection.generic.CanBuildFrom;)O"](jsx$37, jsx$38);
      var jsx$33 = jsx$34.asInstance(jsx$35, "scala.collection.immutable.IndexedSeq");
      this.$jsfield$pouches = jsx$33;
      var x1$jsid$34194 = new $.c["scala.Tuple2"]()["<init>(OO)"]("#ffa500", "#006400");
      var result$$jslabel$matchEnd3$34196;
      $jslabel$matchEnd3$34196: do {
        if ((x1$jsid$34194 !== null)) {
          var orange$jsid$27522 = $.asInstanceString(x1$jsid$34194["_1()O"]());
          var green$jsid$27523 = $.asInstanceString(x1$jsid$34194["_2()O"]());
          result$$jslabel$matchEnd3$34196 = new $.c["scala.Tuple2"]()["<init>(OO)"](orange$jsid$27522, green$jsid$27523);
          break $jslabel$matchEnd3$34196
        } else {
          /*<skip>*/
        };
        throw new $.c["scala.MatchError"]()["<init>(O)"](x1$jsid$34194);
        break $jslabel$matchEnd3$34196
      } while (false);
      var jsx$39 = result$$jslabel$matchEnd3$34196;
      this.$jsfield$x$3 = jsx$39;
      this.$jsfield$orange = $.asInstanceString(this.$jsfield$x$3["_1()O"]());
      this.$jsfield$green = $.asInstanceString(this.$jsfield$x$3["_2()O"]());
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
    Class.prototype.orange = (function() {
      return this["orange()T"]()
    });
    Class.prototype.green = (function() {
      return this["green()T"]()
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
    Class.prototype.intersect = (function(arg$1, arg$2) {
      return this["intersect(Lscala.collection.Seq;Lscala.collection.Seq;)Lscala.collection.Seq;"](arg$1, arg$2)
    });
    Class.prototype.myStrategy = (function(arg$1) {
      return this["myStrategy(Lhelloworld.Pouch;)Lscala.Option;"](arg$1)
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
      var x1$jsid$34192 = $.m["helloworld.Knapsack"]["rnd(II)I"](0, 100);
      switch (x1$jsid$34192) {
        default:
          if ((x1$jsid$34192 > 90)) {
            return new $.c["helloworld.Pouch"]()["<init>(IIIZ)"](arg$id, (-$.m["helloworld.Knapsack"]["rnd(II)I"](7, 9)), $.m["helloworld.Knapsack"]["rnd(II)I"](5, 9), $.m["helloworld.Pouch"]["apply$default$4()Z"]())
          } else {
            if ((x1$jsid$34192 > 80)) {
              return new $.c["helloworld.Pouch"]()["<init>(IIIZ)"](arg$id, $.m["helloworld.Knapsack"]["rnd(II)I"](7, 9), $.m["helloworld.Knapsack"]["rnd(II)I"](1, 5), $.m["helloworld.Pouch"]["apply$default$4()Z"]())
            } else {
              return new $.c["helloworld.Pouch"]()["<init>(IIIZ)"](arg$id, $.m["helloworld.Knapsack"]["rnd(II)I"](1, 5), $.m["helloworld.Knapsack"]["rnd(II)I"](5, 9), $.m["helloworld.Pouch"]["apply$default$4()Z"]())
            }
          };
      }
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
      this.$jsfield$x$11 = 0;
      this.$jsfield$y$1 = 0
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(Lhelloworld.Pouch;)Z"] = (function(arg$pouch) {
      return arg$pouch["contains(II)Z"](this.$jsfield$x$11, this.$jsfield$y$1)
    });
    Class.prototype["apply(O)O"] = (function(arg$v1) {
      return $.bZ(this["apply(Lhelloworld.Pouch;)Z"]($.asInstance(arg$v1, "helloworld.Pouch")))
    });
    Class.prototype["<init>(II)"] = (function(arg$x$11, arg$y$1) {
      this.$jsfield$x$11 = arg$x$11;
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
  $.registerClass("helloworld.Knapsack$$anonfun$intersect$1", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1"].prototype.constructor.call(this);
      this.$jsfield$b$1 = null
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(Lhelloworld.Pouch;)Lscala.Option;"] = (function(arg$x) {
      if ((this.$jsfield$b$1["indexOf(O)I"](arg$x) !== -1)) {
        return new $.c["scala.Some"]()["<init>(O)"](arg$x)
      } else {
        return $.m["scala.None"]
      }
    });
    Class.prototype["apply(O)O"] = (function(arg$v1) {
      return this["apply(Lhelloworld.Pouch;)Lscala.Option;"]($.asInstance(arg$v1, "helloworld.Pouch"))
    });
    Class.prototype["<init>(Lscala.collection.Seq;)"] = (function(arg$b$1) {
      this.$jsfield$b$1 = arg$b$1;
      $.c["scala.runtime.AbstractFunction1"].prototype["<init>()"].call(this);
      return this
    });
    Class.prototype.apply = (function(arg$1) {
      if ($.isInstance(arg$1, "helloworld.Pouch")) {
        return this["apply(Lhelloworld.Pouch;)Lscala.Option;"](arg$1)
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
      return this["<init>(Lscala.collection.Seq;)"](arg$1)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("helloworld.Knapsack$$anonfun$intersect$1", Class, JSClass, "scala.runtime.AbstractFunction1", {
      "helloworld.Knapsack$$anonfun$intersect$1": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction1": true,
      "scala.Function1": true,
      "java.lang.Object": true
    })
  }));
  $.registerClass("helloworld.Knapsack$$anonfun$intersect$2", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1"].prototype.constructor.call(this)
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(Lscala.Option;)Lscala.collection.Iterable;"] = (function(arg$xo) {
      return $.m["scala.Option"]["option2Iterable(Lscala.Option;)Lscala.collection.Iterable;"](arg$xo)
    });
    Class.prototype["apply(O)O"] = (function(arg$v1) {
      return this["apply(Lscala.Option;)Lscala.collection.Iterable;"]($.asInstance(arg$v1, "scala.Option"))
    });
    Class.prototype["<init>()"] = (function() {
      $.c["scala.runtime.AbstractFunction1"].prototype["<init>()"].call(this);
      return this
    });
    Class.prototype.apply = (function(arg$1) {
      if ($.isInstance(arg$1, "scala.Option")) {
        return this["apply(Lscala.Option;)Lscala.collection.Iterable;"](arg$1)
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
    $.createClass("helloworld.Knapsack$$anonfun$intersect$2", Class, JSClass, "scala.runtime.AbstractFunction1", {
      "helloworld.Knapsack$$anonfun$intersect$2": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction1": true,
      "scala.Function1": true,
      "java.lang.Object": true
    })
  }));
  $.registerClass("helloworld.Knapsack$$anonfun$2$$anonfun$apply$1", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1"].prototype.constructor.call(this)
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(Lhelloworld.Pouch;)Lscala.Tuple3;"] = (function(arg$pouch) {
      return new $.c["scala.Tuple3"]()["<init>(OOO)"](arg$pouch, $.bI(((arg$pouch["value()I"]() / arg$pouch["weight()I"]()) | 0)), $.bI($.m["helloworld.Knapsack"]["graph()Lhelloworld.Graph;"]()["getAvailablePouches(Lhelloworld.Pouch;)Lscala.collection.Seq;"](arg$pouch)["size()I"]()))
    });
    Class.prototype["apply(O)O"] = (function(arg$v1) {
      return this["apply(Lhelloworld.Pouch;)Lscala.Tuple3;"]($.asInstance(arg$v1, "helloworld.Pouch"))
    });
    Class.prototype["<init>(Lhelloworld.Knapsack$$anonfun$2;)"] = (function(arg$$outer) {
      $.c["scala.runtime.AbstractFunction1"].prototype["<init>()"].call(this);
      return this
    });
    Class.prototype.apply = (function(arg$1) {
      if ($.isInstance(arg$1, "helloworld.Pouch")) {
        return this["apply(Lhelloworld.Pouch;)Lscala.Tuple3;"](arg$1)
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
      return this["<init>(Lhelloworld.Knapsack$$anonfun$2;)"](arg$1)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("helloworld.Knapsack$$anonfun$2$$anonfun$apply$1", Class, JSClass, "scala.runtime.AbstractFunction1", {
      "helloworld.Knapsack$$anonfun$2$$anonfun$apply$1": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction1": true,
      "scala.Function1": true,
      "java.lang.Object": true
    })
  }));
  $.registerClass("helloworld.Knapsack$$anonfun$2$$anonfun$apply$2", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1"].prototype.constructor.call(this)
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(Lscala.Tuple3;)Lscala.Tuple2;"] = (function(arg$x) {
      return new $.c["scala.Tuple2$mcII$sp"]()["<init>(II)"]($.uI(arg$x["_3()O"]()), $.uI(arg$x["_2()O"]()))
    });
    Class.prototype["apply(O)O"] = (function(arg$v1) {
      return this["apply(Lscala.Tuple3;)Lscala.Tuple2;"]($.asInstance(arg$v1, "scala.Tuple3"))
    });
    Class.prototype["<init>(Lhelloworld.Knapsack$$anonfun$2;)"] = (function(arg$$outer) {
      $.c["scala.runtime.AbstractFunction1"].prototype["<init>()"].call(this);
      return this
    });
    Class.prototype.apply = (function(arg$1) {
      if ($.isInstance(arg$1, "scala.Tuple3")) {
        return this["apply(Lscala.Tuple3;)Lscala.Tuple2;"](arg$1)
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
      return this["<init>(Lhelloworld.Knapsack$$anonfun$2;)"](arg$1)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("helloworld.Knapsack$$anonfun$2$$anonfun$apply$2", Class, JSClass, "scala.runtime.AbstractFunction1", {
      "helloworld.Knapsack$$anonfun$2$$anonfun$apply$2": true,
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
    Class.prototype["apply(Lscala.collection.Seq;)Lhelloworld.Pouch;"] = (function(arg$pouches) {
      var jsx$40 = $;
      var jsx$43 = $;
      var jsx$48 = $;
      var jsx$50 = arg$pouches;
      var jsx$51 = new $.c["helloworld.Knapsack$$anonfun$2$$anonfun$apply$1"]()["<init>(Lhelloworld.Knapsack$$anonfun$2;)"](this);
      var jsx$52 = $.m["scala.collection.Seq"]["canBuildFrom()Lscala.collection.generic.CanBuildFrom;"]();
      var jsx$49 = jsx$50["map(Lscala.Function1;Lscala.collection.generic.CanBuildFrom;)O"](jsx$51, jsx$52);
      var jsx$45 = jsx$48.asInstance(jsx$49, "scala.collection.TraversableOnce");
      var jsx$46 = new $.c["helloworld.Knapsack$$anonfun$2$$anonfun$apply$2"]()["<init>(Lhelloworld.Knapsack$$anonfun$2;)"](this);
      var jsx$47 = $.m["scala.math.Ordering"]["Tuple2(Lscala.math.Ordering;Lscala.math.Ordering;)Lscala.math.Ordering;"]($.m["scala.math.Ordering$Int"], $.m["scala.math.Ordering$Int"]);
      var jsx$44 = jsx$45["maxBy(Lscala.Function1;Lscala.math.Ordering;)O"](jsx$46, jsx$47);
      var jsx$42 = jsx$43.asInstance(jsx$44, "scala.Tuple3");
      var jsx$41 = jsx$42["_1()O"]();
      return jsx$40.asInstance(jsx$41, "helloworld.Pouch")
    });
    Class.prototype["apply(O)O"] = (function(arg$v1) {
      return this["apply(Lscala.collection.Seq;)Lhelloworld.Pouch;"]($.asInstance(arg$v1, "scala.collection.Seq"))
    });
    Class.prototype["<init>()"] = (function() {
      $.c["scala.runtime.AbstractFunction1"].prototype["<init>()"].call(this);
      return this
    });
    Class.prototype.apply = (function(arg$1) {
      if ($.isInstance(arg$1, "scala.collection.Seq")) {
        return this["apply(Lscala.collection.Seq;)Lhelloworld.Pouch;"](arg$1)
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
  $.registerClass("helloworld.Knapsack$$anonfun$onMouseDown$1", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1"].prototype.constructor.call(this)
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(Lhelloworld.MouseEvent;)V"] = (function(arg$event) {
      var x1$jsid$34254 = new $.c["scala.Tuple2$mcII$sp"]()["<init>(II)"]((arg$event.layerX | 0), (arg$event.layerY | 0));
      var result$$jslabel$matchEnd3$34256;
      $jslabel$matchEnd3$34256: do {
        if ((x1$jsid$34254 !== null)) {
          var x$jsid$31148 = x1$jsid$34254["_1$mcI$sp()I"]();
          var y$jsid$31149 = x1$jsid$34254["_2$mcI$sp()I"]();
          result$$jslabel$matchEnd3$34256 = new $.c["scala.Tuple2$mcII$sp"]()["<init>(II)"](x$jsid$31148, y$jsid$31149);
          break $jslabel$matchEnd3$34256
        } else {
          /*<skip>*/
        };
        throw new $.c["scala.MatchError"]()["<init>(O)"](x1$jsid$34254);
        break $jslabel$matchEnd3$34256
      } while (false);
      var x$8$jsid$31129 = result$$jslabel$matchEnd3$34256;
      var x$jsid$31130 = x$8$jsid$31129["_1$mcI$sp()I"]();
      var y$jsid$31131 = x$8$jsid$31129["_2$mcI$sp()I"]();
      var pouchOpt$jsid$31132 = $.m["helloworld.Knapsack"]["mouse2Pouch(II)Lscala.Option;"](x$jsid$31130, y$jsid$31131);
      if (pouchOpt$jsid$31132["isDefined()Z"]()) {
        $.m["helloworld.Knapsack"]["playGame(Lhelloworld.Pouch;)V"]($.asInstance(pouchOpt$jsid$31132["get()O"](), "helloworld.Pouch"))
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
      var x1$jsid$34290 = arg$t;
      var result$$jslabel$matchEnd3$34292;
      $jslabel$matchEnd3$34292: do {
        if ((x1$jsid$34290 !== null)) {
          var x$jsid$31095 = x1$jsid$34290["_1$mcI$sp()I"]();
          var y$jsid$31096 = x1$jsid$34290["_2$mcI$sp()I"]();
          result$$jslabel$matchEnd3$34292 = new $.c["scala.Tuple2$mcII$sp"]()["<init>(II)"](x$jsid$31095, y$jsid$31096);
          break $jslabel$matchEnd3$34292
        } else {
          /*<skip>*/
        };
        throw new $.c["scala.MatchError"]()["<init>(O)"](x1$jsid$34290);
        break $jslabel$matchEnd3$34292
      } while (false);
      var x$10$jsid$31089 = result$$jslabel$matchEnd3$34292;
      var x$jsid$31090 = x$10$jsid$31089["_1$mcI$sp()I"]();
      var y$jsid$31091 = x$10$jsid$31089["_2$mcI$sp()I"]();
      $.m["helloworld.Knapsack"]["drawLine(Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;TI)V"](this.$jsfield$xx$1, this.$jsfield$yy$1, x$jsid$31090, y$jsid$31091, "#2f4f4f", 4)
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
      var x1$jsid$34284 = $.m["helloworld.Pouch"]["getCoords(II)Lscala.Tuple2;"](arg$id, $.m["helloworld.Knapsack"]["R()I"]());
      var result$$jslabel$matchEnd3$34286;
      $jslabel$matchEnd3$34286: do {
        if ((x1$jsid$34284 !== null)) {
          var xx$jsid$27912 = x1$jsid$34284["_1$mcI$sp()I"]();
          var yy$jsid$27913 = x1$jsid$34284["_2$mcI$sp()I"]();
          result$$jslabel$matchEnd3$34286 = new $.c["scala.Tuple2$mcII$sp"]()["<init>(II)"](xx$jsid$27912, yy$jsid$27913);
          break $jslabel$matchEnd3$34286
        } else {
          /*<skip>*/
        };
        throw new $.c["scala.MatchError"]()["<init>(O)"](x1$jsid$34284);
        break $jslabel$matchEnd3$34286
      } while (false);
      var x$9$jsid$27906 = result$$jslabel$matchEnd3$34286;
      var xx$jsid$27907 = x$9$jsid$27906["_1$mcI$sp()I"]();
      var yy$jsid$27908 = x$9$jsid$27906["_2$mcI$sp()I"]();
      var jsx$56 = $.m["scala.Predef"];
      var jsx$58 = $;
      var jsx$63 = $.m["scala.Predef"];
      var jsx$65 = $;
      var jsx$70 = $.m["scala.Predef"];
      var jsx$72 = $;
      var jsx$74 = $.m["scala.Predef"]["refArrayOps([O)Lscala.collection.mutable.ArrayOps;"]($.asInstance($.m["scala.Predef"]["booleanArrayOps([Z)Lscala.collection.mutable.ArrayOps;"](this.$jsfield$adj$1.underlying[arg$id])["zipWithIndex(Lscala.collection.generic.CanBuildFrom;)O"]($.m["scala.Array"]["canBuildFrom(Lscala.reflect.ClassTag;)Lscala.collection.generic.CanBuildFrom;"]($.m["scala.reflect.ClassTag"]["apply(Ljava.lang.Class;)Lscala.reflect.ClassTag;"]($.classes["scala.Tuple2"].cls))), "java.lang.Object[]"));
      var jsx$75 = new $.c["helloworld.Knapsack$$anonfun$drawEdges$1$$anonfun$apply$mcVI$sp$1"]()["<init>(Lhelloworld.Knapsack$$anonfun$drawEdges$1;)"](this);
      var jsx$73 = jsx$74["filter(Lscala.Function1;)O"](jsx$75);
      var jsx$71 = jsx$72.asInstance(jsx$73, "java.lang.Object[]");
      var jsx$67 = jsx$70["refArrayOps([O)Lscala.collection.mutable.ArrayOps;"](jsx$71);
      var jsx$68 = new $.c["helloworld.Knapsack$$anonfun$drawEdges$1$$anonfun$apply$mcVI$sp$2"]()["<init>(Lhelloworld.Knapsack$$anonfun$drawEdges$1;)"](this);
      var jsx$69 = $.m["scala.Array"]["canBuildFrom(Lscala.reflect.ClassTag;)Lscala.collection.generic.CanBuildFrom;"]($.m["scala.reflect.ClassTag"]["Int()Lscala.reflect.ClassTag;"]());
      var jsx$66 = jsx$67["map(Lscala.Function1;Lscala.collection.generic.CanBuildFrom;)O"](jsx$68, jsx$69);
      var jsx$64 = jsx$65.asInstance(jsx$66, "scala.Int[]");
      var jsx$60 = jsx$63["intArrayOps([I)Lscala.collection.mutable.ArrayOps;"](jsx$64);
      var jsx$61 = new $.c["helloworld.Knapsack$$anonfun$drawEdges$1$$anonfun$apply$mcVI$sp$3"]()["<init>(Lhelloworld.Knapsack$$anonfun$drawEdges$1;)"](this);
      var jsx$62 = $.m["scala.Array"]["canBuildFrom(Lscala.reflect.ClassTag;)Lscala.collection.generic.CanBuildFrom;"]($.m["scala.reflect.ClassTag"]["apply(Ljava.lang.Class;)Lscala.reflect.ClassTag;"]($.classes["scala.Tuple2"].cls));
      var jsx$59 = jsx$60["map(Lscala.Function1;Lscala.collection.generic.CanBuildFrom;)O"](jsx$61, jsx$62);
      var jsx$57 = jsx$58.asInstance(jsx$59, "java.lang.Object[]");
      var jsx$55 = jsx$56["refArrayOps([O)Lscala.collection.mutable.ArrayOps;"](jsx$57);
      var jsx$53 = jsx$55["toSeq()Lscala.collection.Seq;"]();
      var jsx$54 = new $.c["helloworld.Knapsack$$anonfun$drawEdges$1$$anonfun$apply$mcVI$sp$4"]()["<init>(Lhelloworld.Knapsack$$anonfun$drawEdges$1;II)"](this, xx$jsid$27907, yy$jsid$27908);
      jsx$53["foreach(Lscala.Function1;)V"](jsx$54)
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

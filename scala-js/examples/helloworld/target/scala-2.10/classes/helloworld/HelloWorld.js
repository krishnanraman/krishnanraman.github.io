(function($) {
  $.registerClass("helloworld.HelloWorld$", (function($) {
    function Class() {
      $.c["java.lang.Object"].prototype.constructor.call(this);
      this.$jsfield$canvasOrig = null;
      this.$jsfield$canvasDom = null;
      this.$jsfield$canvasElem = null;
      this.$jsfield$ctx = null;
      this.$jsfield$w = 0;
      this.$jsfield$h = 0;
      this.$jsfield$firstTime = false;
      this.$jsfield$upC = null;
      this.$jsfield$downC = null;
      this.$jsfield$him_upC = null;
      this.$jsfield$him_downC = null;
      this.$jsfield$me_upC = null;
      this.$jsfield$me_downC = null;
      this.$jsfield$r = 0;
      this.$jsfield$onMouseDown = null
    };
    Class.prototype = Object.create($.c["java.lang.Object"].prototype);
    Class.prototype.constructor = Class;
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
    Class.prototype["h()I"] = (function() {
      return this.$jsfield$h
    });
    Class.prototype["firstTime()Z"] = (function() {
      return this.$jsfield$firstTime
    });
    Class.prototype["firstTime_=(Z)V"] = (function(arg$x$1) {
      this.$jsfield$firstTime = arg$x$1
    });
    Class.prototype["upC()Lscala.Tuple2;"] = (function() {
      return this.$jsfield$upC
    });
    Class.prototype["upC_=(Lscala.Tuple2;)V"] = (function(arg$x$1) {
      this.$jsfield$upC = arg$x$1
    });
    Class.prototype["downC()Lscala.Tuple2;"] = (function() {
      return this.$jsfield$downC
    });
    Class.prototype["downC_=(Lscala.Tuple2;)V"] = (function(arg$x$1) {
      this.$jsfield$downC = arg$x$1
    });
    Class.prototype["him_upC()Lscala.Tuple2;"] = (function() {
      return this.$jsfield$him_upC
    });
    Class.prototype["him_upC_=(Lscala.Tuple2;)V"] = (function(arg$x$1) {
      this.$jsfield$him_upC = arg$x$1
    });
    Class.prototype["him_downC()Lscala.Tuple2;"] = (function() {
      return this.$jsfield$him_downC
    });
    Class.prototype["him_downC_=(Lscala.Tuple2;)V"] = (function(arg$x$1) {
      this.$jsfield$him_downC = arg$x$1
    });
    Class.prototype["me_upC()Lscala.Tuple2;"] = (function() {
      return this.$jsfield$me_upC
    });
    Class.prototype["me_upC_=(Lscala.Tuple2;)V"] = (function(arg$x$1) {
      this.$jsfield$me_upC = arg$x$1
    });
    Class.prototype["me_downC()Lscala.Tuple2;"] = (function() {
      return this.$jsfield$me_downC
    });
    Class.prototype["me_downC_=(Lscala.Tuple2;)V"] = (function(arg$x$1) {
      this.$jsfield$me_downC = arg$x$1
    });
    Class.prototype["r()I"] = (function() {
      return this.$jsfield$r
    });
    Class.prototype["main([T)V"] = (function(arg$args) {
      this["sayHelloFromDOM()V"]();
      this["paint()V"]();
      this["canvasDom()Lhelloworld.DOMElement;"]().onmousedown = (function($this) {
        return (function(arg1) {
          return $this["apply(O)O"](arg1)
        })
      })(this["onMouseDown()Lscala.Function1;"]())
    });
    Class.prototype["getCircleCoords(Lscala.js.Number;Lscala.js.Number;)Lscala.Tuple2;"] = (function(arg$xinit, arg$yinit) {
      var _$this$jsid$26529 = this;
      tailCallLoop: while (true) {
        var x$jsid$22382 = _$this$jsid$26529["rnd(Lscala.js.Number;Lscala.js.Number;)D"](arg$xinit, (arg$xinit + (2 * _$this$jsid$26529["r()I"]())));
        var y$jsid$22383 = _$this$jsid$26529["rnd(Lscala.js.Number;Lscala.js.Number;)D"]((arg$yinit - (2 * _$this$jsid$26529["r()I"]())), (arg$yinit + (2 * _$this$jsid$26529["r()I"]())));
        if (_$this$jsid$26529["dist(Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;)Z"](x$jsid$22382, y$jsid$22383, arg$xinit, arg$yinit, _$this$jsid$26529["r()I"]())) {
          return new $.c["scala.Tuple2"]()["<init>(OO)"](x$jsid$22382, y$jsid$22383)
        } else {
          continue tailCallLoop
        }
      }
    });
    Class.prototype["two(Lscala.Tuple2;)V"] = (function(arg$coords) {
      var x1$jsid$22939 = arg$coords;
      var result$$jslabel$matchEnd3$22942;
      $jslabel$matchEnd3$22942: do {
        if ((x1$jsid$22939 !== null)) {
          var xinit$jsid$21659 = x1$jsid$22939["_1()O"]();
          var yinit$jsid$21660 = x1$jsid$22939["_2()O"]();
          result$$jslabel$matchEnd3$22942 = new $.c["scala.Tuple2"]()["<init>(OO)"](xinit$jsid$21659, yinit$jsid$21660);
          break $jslabel$matchEnd3$22942
        } else {
          /*<skip>*/
        };
        throw new $.c["scala.MatchError"]()["<init>(O)"](x1$jsid$22939);
        break $jslabel$matchEnd3$22942
      } while (false);
      var x$1$jsid$21647 = result$$jslabel$matchEnd3$22942;
      var xinit$jsid$21648 = x$1$jsid$21647["_1()O"]();
      var yinit$jsid$21649 = x$1$jsid$21647["_2()O"]();
      var x1$jsid$22970 = this["getCircleCoords(Lscala.js.Number;Lscala.js.Number;)Lscala.Tuple2;"](xinit$jsid$21648, yinit$jsid$21649);
      var result$$jslabel$matchEnd3$22972;
      $jslabel$matchEnd3$22972: do {
        if ((x1$jsid$22970 !== null)) {
          var x1$jsid$21672 = x1$jsid$22970["_1()O"]();
          var y1$jsid$21673 = x1$jsid$22970["_2()O"]();
          result$$jslabel$matchEnd3$22972 = new $.c["scala.Tuple2"]()["<init>(OO)"](x1$jsid$21672, y1$jsid$21673);
          break $jslabel$matchEnd3$22972
        } else {
          /*<skip>*/
        };
        throw new $.c["scala.MatchError"]()["<init>(O)"](x1$jsid$22970);
        break $jslabel$matchEnd3$22972
      } while (false);
      var x$2$jsid$21650 = result$$jslabel$matchEnd3$22972;
      var x1$jsid$21651 = x$2$jsid$21650["_1()O"]();
      var y1$jsid$21652 = x$2$jsid$21650["_2()O"]();
      var x1$jsid$22976 = this["getCircleCoords(Lscala.js.Number;Lscala.js.Number;)Lscala.Tuple2;"](xinit$jsid$21648, yinit$jsid$21649);
      var result$$jslabel$matchEnd3$22978;
      $jslabel$matchEnd3$22978: do {
        if ((x1$jsid$22976 !== null)) {
          var x2$jsid$21683 = x1$jsid$22976["_1()O"]();
          var y2$jsid$21684 = x1$jsid$22976["_2()O"]();
          result$$jslabel$matchEnd3$22978 = new $.c["scala.Tuple2"]()["<init>(OO)"](x2$jsid$21683, y2$jsid$21684);
          break $jslabel$matchEnd3$22978
        } else {
          /*<skip>*/
        };
        throw new $.c["scala.MatchError"]()["<init>(O)"](x1$jsid$22976);
        break $jslabel$matchEnd3$22978
      } while (false);
      var x$3$jsid$21653 = result$$jslabel$matchEnd3$22978;
      var x2$jsid$21654 = x$3$jsid$21653["_1()O"]();
      var y2$jsid$21655 = x$3$jsid$21653["_2()O"]();
      this["drawCircle(Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;ZZ)V"](x1$jsid$21651, y1$jsid$21652, this["r()I"](), this["drawCircle$default$4()Z"](), this["drawCircle$default$5()Z"]());
      this["drawCircle(Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;ZZ)V"](x2$jsid$21654, y2$jsid$21655, this["r()I"](), this["drawCircle$default$4()Z"](), this["drawCircle$default$5()Z"]());
      if ((y1$jsid$21652 > y2$jsid$21655)) {
        this["downC_=(Lscala.Tuple2;)V"](new $.c["scala.Tuple2"]()["<init>(OO)"](x1$jsid$21651, y1$jsid$21652));
        this["upC_=(Lscala.Tuple2;)V"](new $.c["scala.Tuple2"]()["<init>(OO)"](x2$jsid$21654, y2$jsid$21655))
      } else {
        this["downC_=(Lscala.Tuple2;)V"](new $.c["scala.Tuple2"]()["<init>(OO)"](x2$jsid$21654, y2$jsid$21655));
        this["upC_=(Lscala.Tuple2;)V"](new $.c["scala.Tuple2"]()["<init>(OO)"](x1$jsid$21651, y1$jsid$21652))
      }
    });
    Class.prototype["paint()V"] = (function() {
      this["drawGrid()V"]();
      var xinit$jsid$21776 = (0 + this["r()I"]());
      var yinit$jsid$21777 = ((this["h()I"]() / 2) | 0);
      this["drawCircle(Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;ZZ)V"](xinit$jsid$21776, yinit$jsid$21777, this["r()I"](), this["drawCircle$default$4()Z"](), this["drawCircle$default$5()Z"]());
      this["two(Lscala.Tuple2;)V"](new $.c["scala.Tuple2"]()["<init>(OO)"](xinit$jsid$21776, yinit$jsid$21777))
    });
    Class.prototype["clearCircle(Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;)V"] = (function(arg$x, arg$y, arg$r) {
      this["ctx()Lhelloworld.Canvas2D;"]().beginPath();
      this["ctx()Lhelloworld.Canvas2D;"]().moveTo((arg$x + arg$r), arg$y);
      this["ctx()Lhelloworld.Canvas2D;"]().arc(arg$x, arg$y, arg$r, 0, 6.283185307179586);
      this["ctx()Lhelloworld.Canvas2D;"]().strokeStyle = "#FFF";
      this["ctx()Lhelloworld.Canvas2D;"]().stroke();
      this["ctx()Lhelloworld.Canvas2D;"]().closePath()
    });
    Class.prototype["drawCircle(Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;ZZ)V"] = (function(arg$x, arg$y, arg$r, arg$fill, arg$red) {
      this["ctx()Lhelloworld.Canvas2D;"]().beginPath();
      this["ctx()Lhelloworld.Canvas2D;"]().moveTo((arg$x + arg$r), arg$y);
      this["ctx()Lhelloworld.Canvas2D;"]().arc(arg$x, arg$y, arg$r, 0, 6.283185307179586);
      if (arg$fill) {
        var jsx$1 = this["ctx()Lhelloworld.Canvas2D;"]();
        if (arg$red) {
          var jsx$2 = "#F00"
        } else {
          var jsx$2 = "0F0"
        };
        jsx$1.fillStyle = jsx$2;
        this["ctx()Lhelloworld.Canvas2D;"]().fill()
      } else {
        this["ctx()Lhelloworld.Canvas2D;"]().strokeStyle = "#000";
        this["ctx()Lhelloworld.Canvas2D;"]().stroke()
      };
      this["ctx()Lhelloworld.Canvas2D;"]().closePath()
    });
    Class.prototype["drawCircle$default$4()Z"] = (function() {
      return false
    });
    Class.prototype["drawCircle$default$5()Z"] = (function() {
      return false
    });
    Class.prototype["rnd(Lscala.js.Number;Lscala.js.Number;)D"] = (function(arg$a, arg$b) {
      return $.m["java.lang.Math"]["floor(D)D"]((($.m["java.lang.Math"]["random()D"]() * (arg$b - arg$a)) + arg$a))
    });
    Class.prototype["dist(Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;)Z"] = (function(arg$x, arg$y, arg$x1, arg$y1, arg$r) {
      var d$jsid$22423 = (((arg$x - arg$x1) * (arg$x - arg$x1)) + ((arg$y - arg$y1) * (arg$y - arg$y1)));
      return (d$jsid$22423 <= ((4 * arg$r) * arg$r))
    });
    Class.prototype["drawGrid()V"] = (function() {
      this["ctx()Lhelloworld.Canvas2D;"]().beginPath();
      var jsx$3 = $.m["scala.runtime.RichInt"]["until$extension0(II)Lscala.collection.immutable.Range;"]($.m["scala.Predef"]["intWrapper(I)I"](0), this["w()I"]())["by(I)Lscala.collection.immutable.Range;"](10);
      var jsx$4 = new $.c["helloworld.HelloWorld$$anonfun$drawGrid$1"]()["<init>()"]();
      jsx$3["foreach$mVc$sp(Lscala.Function1;)V"](jsx$4);
      this["ctx()Lhelloworld.Canvas2D;"]().strokeStyle = "#eee";
      this["ctx()Lhelloworld.Canvas2D;"]().stroke();
      this["ctx()Lhelloworld.Canvas2D;"]().closePath()
    });
    Class.prototype["location(Lhelloworld.MouseEvent;)Lscala.Tuple2;"] = (function(arg$event) {
      var x$jsid$22479 = arg$event.layerX;
      var y$jsid$22480 = arg$event.layerY;
      return new $.c["scala.Tuple2"]()["<init>(OO)"](x$jsid$22479, y$jsid$22480)
    });
    Class.prototype["alert(T)Lscala.js.Dynamic;"] = (function(arg$str) {
      return $.g.window.alert(arg$str)
    });
    Class.prototype["onMouseDown()Lscala.Function1;"] = (function() {
      return this.$jsfield$onMouseDown
    });
    Class.prototype["clr()V"] = (function() {
      var jsx$5 = $.m["scala.collection.immutable.List"]["apply(Lscala.collection.Seq;)Lscala.collection.immutable.List;"]($.m["scala.Predef"]["wrapRefArray([O)Lscala.collection.mutable.WrappedArray;"]($.asInstance($.makeNativeArrayWrapper($.classes["scala.Tuple2"].array, [this["me_upC()Lscala.Tuple2;"](), this["me_downC()Lscala.Tuple2;"](), this["him_upC()Lscala.Tuple2;"](), this["him_downC()Lscala.Tuple2;"]()]), "java.lang.Object[]")));
      var jsx$6 = new $.c["helloworld.HelloWorld$$anonfun$clr$1"]()["<init>()"]();
      jsx$5["foreach(Lscala.Function1;)V"](jsx$6)
    });
    Class.prototype["up()V"] = (function() {
      this["clr()V"]();
      if (this["firstTime()Z"]()) {
        this["firstTime_=(Z)V"](false);
        this["drawCircle(Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;ZZ)V"](this["upC()Lscala.Tuple2;"]()["_1()O"](), this["upC()Lscala.Tuple2;"]()["_2()O"](), this["r()I"](), true, true);
        this["drawCircle(Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;ZZ)V"](this["downC()Lscala.Tuple2;"]()["_1()O"](), this["downC()Lscala.Tuple2;"]()["_2()O"](), this["r()I"](), true, false);
        this["two(Lscala.Tuple2;)V"](this["upC()Lscala.Tuple2;"]());
        this["me_upC_=(Lscala.Tuple2;)V"](this["upC()Lscala.Tuple2;"]());
        this["me_downC_=(Lscala.Tuple2;)V"](this["downC()Lscala.Tuple2;"]());
        this["two(Lscala.Tuple2;)V"](this["downC()Lscala.Tuple2;"]());
        this["him_upC_=(Lscala.Tuple2;)V"](this["upC()Lscala.Tuple2;"]());
        this["him_downC_=(Lscala.Tuple2;)V"](this["downC()Lscala.Tuple2;"]())
      } else {
        this["drawCircle(Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;ZZ)V"](this["me_upC()Lscala.Tuple2;"]()["_1()O"](), this["me_upC()Lscala.Tuple2;"]()["_2()O"](), this["r()I"](), true, true);
        this["drawCircle(Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;ZZ)V"](this["him_downC()Lscala.Tuple2;"]()["_1()O"](), this["him_downC()Lscala.Tuple2;"]()["_2()O"](), this["r()I"](), true, false);
        this["two(Lscala.Tuple2;)V"](this["me_upC()Lscala.Tuple2;"]());
        this["me_upC_=(Lscala.Tuple2;)V"](this["upC()Lscala.Tuple2;"]());
        this["me_downC_=(Lscala.Tuple2;)V"](this["downC()Lscala.Tuple2;"]());
        this["two(Lscala.Tuple2;)V"](this["him_downC()Lscala.Tuple2;"]());
        this["him_upC_=(Lscala.Tuple2;)V"](this["upC()Lscala.Tuple2;"]());
        this["him_downC_=(Lscala.Tuple2;)V"](this["downC()Lscala.Tuple2;"]())
      }
    });
    Class.prototype["down()V"] = (function() {
      this["clr()V"]();
      if (this["firstTime()Z"]()) {
        this["firstTime_=(Z)V"](false);
        this["drawCircle(Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;ZZ)V"](this["downC()Lscala.Tuple2;"]()["_1()O"](), this["downC()Lscala.Tuple2;"]()["_2()O"](), this["r()I"](), true, true);
        this["drawCircle(Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;ZZ)V"](this["upC()Lscala.Tuple2;"]()["_1()O"](), this["upC()Lscala.Tuple2;"]()["_2()O"](), this["r()I"](), true, false);
        this["two(Lscala.Tuple2;)V"](this["downC()Lscala.Tuple2;"]());
        this["me_upC_=(Lscala.Tuple2;)V"](this["upC()Lscala.Tuple2;"]());
        this["me_downC_=(Lscala.Tuple2;)V"](this["downC()Lscala.Tuple2;"]());
        this["two(Lscala.Tuple2;)V"](this["upC()Lscala.Tuple2;"]());
        this["him_upC_=(Lscala.Tuple2;)V"](this["upC()Lscala.Tuple2;"]());
        this["him_downC_=(Lscala.Tuple2;)V"](this["downC()Lscala.Tuple2;"]())
      } else {
        this["drawCircle(Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;ZZ)V"](this["me_downC()Lscala.Tuple2;"]()["_1()O"](), this["me_downC()Lscala.Tuple2;"]()["_2()O"](), this["r()I"](), true, true);
        this["drawCircle(Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;ZZ)V"](this["him_upC()Lscala.Tuple2;"]()["_1()O"](), this["him_upC()Lscala.Tuple2;"]()["_2()O"](), this["r()I"](), true, false);
        this["two(Lscala.Tuple2;)V"](this["me_downC()Lscala.Tuple2;"]());
        this["me_upC_=(Lscala.Tuple2;)V"](this["upC()Lscala.Tuple2;"]());
        this["me_downC_=(Lscala.Tuple2;)V"](this["downC()Lscala.Tuple2;"]());
        this["two(Lscala.Tuple2;)V"](this["him_upC()Lscala.Tuple2;"]());
        this["him_upC_=(Lscala.Tuple2;)V"](this["upC()Lscala.Tuple2;"]());
        this["him_downC_=(Lscala.Tuple2;)V"](this["downC()Lscala.Tuple2;"]())
      }
    });
    Class.prototype["sayHelloFromDOM()V"] = (function() {
      var document$jsid$22492 = $.g.document;
      var playground$jsid$22493 = document$jsid$22492.getElementById("playground");
      var newP$jsid$22494 = document$jsid$22492.createElement("p");
      newP$jsid$22494.innerHTML = "Hello world! <i>-- DOM</i>";
      playground$jsid$22493.appendChild(newP$jsid$22494)
    });
    Class.prototype["sayHelloFromJQuery()V"] = (function() {
      var jQuery$jsid$22501 = $.g.jQuery;
      var newP$jsid$22502 = jQuery$jsid$22501("<p>").html("Hello world! <i>-- jQuery</i>");
      newP$jsid$22502.appendTo(jQuery$jsid$22501("#playground"))
    });
    Class.prototype["<init>()"] = (function() {
      $.c["java.lang.Object"].prototype["<init>()"].call(this);
      $.modules["helloworld.HelloWorld"]._instance = this;
      this.$jsfield$canvasOrig = $.g.document.getElementById("canvas");
      this.$jsfield$canvasDom = this["canvasOrig()Lscala.js.Dynamic;"]();
      this.$jsfield$canvasElem = this["canvasOrig()Lscala.js.Dynamic;"]();
      this.$jsfield$ctx = this["canvasElem()Lhelloworld.HTMLCanvasElement;"]().getContext("2d");
      this.$jsfield$w = 2000;
      this.$jsfield$h = 800;
      this.$jsfield$firstTime = true;
      this.$jsfield$upC = new $.c["scala.Tuple2"]()["<init>(OO)"](0, 0);
      this.$jsfield$downC = new $.c["scala.Tuple2"]()["<init>(OO)"](0, 0);
      this.$jsfield$him_upC = new $.c["scala.Tuple2"]()["<init>(OO)"](0, 0);
      this.$jsfield$him_downC = new $.c["scala.Tuple2"]()["<init>(OO)"](0, 0);
      this.$jsfield$me_upC = new $.c["scala.Tuple2"]()["<init>(OO)"](0, 0);
      this.$jsfield$me_downC = new $.c["scala.Tuple2"]()["<init>(OO)"](0, 0);
      this.$jsfield$r = 10;
      var jsx$7 = new $.c["helloworld.HelloWorld$$anonfun$1"]()["<init>()"]();
      this.$jsfield$onMouseDown = jsx$7;
      return this
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
    Class.prototype.h = (function() {
      return this["h()I"]()
    });
    Class.prototype.firstTime = (function() {
      return this["firstTime()Z"]()
    });
    Class.prototype["firstTime_="] = (function(arg$1) {
      return this["firstTime_=(Z)V"](arg$1)
    });
    Class.prototype.upC = (function() {
      return this["upC()Lscala.Tuple2;"]()
    });
    Class.prototype["upC_="] = (function(arg$1) {
      return this["upC_=(Lscala.Tuple2;)V"](arg$1)
    });
    Class.prototype.downC = (function() {
      return this["downC()Lscala.Tuple2;"]()
    });
    Class.prototype["downC_="] = (function(arg$1) {
      return this["downC_=(Lscala.Tuple2;)V"](arg$1)
    });
    Class.prototype.him_upC = (function() {
      return this["him_upC()Lscala.Tuple2;"]()
    });
    Class.prototype["him_upC_="] = (function(arg$1) {
      return this["him_upC_=(Lscala.Tuple2;)V"](arg$1)
    });
    Class.prototype.him_downC = (function() {
      return this["him_downC()Lscala.Tuple2;"]()
    });
    Class.prototype["him_downC_="] = (function(arg$1) {
      return this["him_downC_=(Lscala.Tuple2;)V"](arg$1)
    });
    Class.prototype.me_upC = (function() {
      return this["me_upC()Lscala.Tuple2;"]()
    });
    Class.prototype["me_upC_="] = (function(arg$1) {
      return this["me_upC_=(Lscala.Tuple2;)V"](arg$1)
    });
    Class.prototype.me_downC = (function() {
      return this["me_downC()Lscala.Tuple2;"]()
    });
    Class.prototype["me_downC_="] = (function(arg$1) {
      return this["me_downC_=(Lscala.Tuple2;)V"](arg$1)
    });
    Class.prototype.r = (function() {
      return this["r()I"]()
    });
    Class.prototype.main = (function(arg$1) {
      return this["main([T)V"](arg$1)
    });
    Class.prototype.getCircleCoords = (function(arg$1, arg$2) {
      return this["getCircleCoords(Lscala.js.Number;Lscala.js.Number;)Lscala.Tuple2;"](arg$1, arg$2)
    });
    Class.prototype.two = (function(arg$1) {
      return this["two(Lscala.Tuple2;)V"](arg$1)
    });
    Class.prototype.paint = (function() {
      return this["paint()V"]()
    });
    Class.prototype.clearCircle = (function(arg$1, arg$2, arg$3) {
      return this["clearCircle(Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;)V"](arg$1, arg$2, arg$3)
    });
    Class.prototype.drawCircle = (function(arg$1, arg$2, arg$3, arg$4, arg$5) {
      return this["drawCircle(Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;ZZ)V"](arg$1, arg$2, arg$3, arg$4, arg$5)
    });
    Class.prototype.rnd = (function(arg$1, arg$2) {
      return this["rnd(Lscala.js.Number;Lscala.js.Number;)D"](arg$1, arg$2)
    });
    Class.prototype.dist = (function(arg$1, arg$2, arg$3, arg$4, arg$5) {
      return this["dist(Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;)Z"](arg$1, arg$2, arg$3, arg$4, arg$5)
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
    Class.prototype.onMouseDown = (function() {
      return this["onMouseDown()Lscala.Function1;"]()
    });
    Class.prototype.clr = (function() {
      return this["clr()V"]()
    });
    Class.prototype.up = (function() {
      return this["up()V"]()
    });
    Class.prototype.down = (function() {
      return this["down()V"]()
    });
    Class.prototype.sayHelloFromDOM = (function() {
      return this["sayHelloFromDOM()V"]()
    });
    Class.prototype.sayHelloFromJQuery = (function() {
      return this["sayHelloFromJQuery()V"]()
    });
    Class.prototype.drawCircle$default$4 = (function() {
      return this["drawCircle$default$4()Z"]()
    });
    Class.prototype.drawCircle$default$5 = (function() {
      return this["drawCircle$default$5()Z"]()
    });
    function JSClass() {
      Class.call(this);
      return this["<init>()"]()
    };
    JSClass.prototype = Class.prototype;
    $.createClass("helloworld.HelloWorld$", Class, JSClass, "java.lang.Object", {
      "helloworld.HelloWorld$": true,
      "java.lang.Object": true
    })
  }));
  $.registerModule("helloworld.HelloWorld", "helloworld.HelloWorld$");
  $.registerClass("helloworld.HelloWorld$$anonfun$drawGrid$1", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1$mcVI$sp"].prototype.constructor.call(this)
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1$mcVI$sp"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(I)V"] = (function(arg$x) {
      this["apply$mcVI$sp(I)V"](arg$x)
    });
    Class.prototype["apply$mcVI$sp(I)V"] = (function(arg$x) {
      $.m["helloworld.HelloWorld"]["ctx()Lhelloworld.Canvas2D;"]().moveTo(arg$x, 0);
      $.m["helloworld.HelloWorld"]["ctx()Lhelloworld.Canvas2D;"]().lineTo(arg$x, $.m["helloworld.HelloWorld"]["h()I"]());
      $.m["helloworld.HelloWorld"]["ctx()Lhelloworld.Canvas2D;"]().moveTo(0, arg$x);
      $.m["helloworld.HelloWorld"]["ctx()Lhelloworld.Canvas2D;"]().lineTo($.m["helloworld.HelloWorld"]["w()I"](), arg$x)
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
    $.createClass("helloworld.HelloWorld$$anonfun$drawGrid$1", Class, JSClass, "scala.runtime.AbstractFunction1$mcVI$sp", {
      "helloworld.HelloWorld$$anonfun$drawGrid$1": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction1$mcVI$sp": true,
      "scala.Function1$mcVI$sp": true,
      "scala.runtime.AbstractFunction1": true,
      "scala.Function1": true,
      "java.lang.Object": true
    })
  }));
  $.registerClass("helloworld.HelloWorld$$anonfun$1", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1"].prototype.constructor.call(this)
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(Lhelloworld.MouseEvent;)V"] = (function(arg$event) {
      if (arg$event.ctrlKey) {
        $.m["helloworld.HelloWorld"]["up()V"]()
      } else {
        $.m["helloworld.HelloWorld"]["down()V"]()
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
    $.createClass("helloworld.HelloWorld$$anonfun$1", Class, JSClass, "scala.runtime.AbstractFunction1", {
      "helloworld.HelloWorld$$anonfun$1": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction1": true,
      "scala.Function1": true,
      "java.lang.Object": true
    })
  }));
  $.registerClass("helloworld.HelloWorld$$anonfun$clr$1", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1"].prototype.constructor.call(this)
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(Lscala.Tuple2;)V"] = (function(arg$t) {
      var x1$jsid$22982 = arg$t;
      var result$$jslabel$matchEnd3$22984;
      $jslabel$matchEnd3$22984: do {
        if ((x1$jsid$22982 !== null)) {
          var x$jsid$21503 = x1$jsid$22982["_1()O"]();
          var y$jsid$21504 = x1$jsid$22982["_2()O"]();
          result$$jslabel$matchEnd3$22984 = new $.c["scala.Tuple2"]()["<init>(OO)"](x$jsid$21503, y$jsid$21504);
          break $jslabel$matchEnd3$22984
        } else {
          /*<skip>*/
        };
        throw new $.c["scala.MatchError"]()["<init>(O)"](x1$jsid$22982);
        break $jslabel$matchEnd3$22984
      } while (false);
      var x$4$jsid$21495 = result$$jslabel$matchEnd3$22984;
      var x$jsid$21496 = x$4$jsid$21495["_1()O"]();
      var y$jsid$21497 = x$4$jsid$21495["_2()O"]();
      $.m["helloworld.HelloWorld"]["clearCircle(Lscala.js.Number;Lscala.js.Number;Lscala.js.Number;)V"](x$jsid$21496, y$jsid$21497, $.m["helloworld.HelloWorld"]["r()I"]())
    });
    Class.prototype["apply(O)O"] = (function(arg$v1) {
      this["apply(Lscala.Tuple2;)V"]($.asInstance(arg$v1, "scala.Tuple2"));
      return $.m["scala.runtime.BoxedUnit"]["UNIT()Lscala.runtime.BoxedUnit;"]()
    });
    Class.prototype["<init>()"] = (function() {
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
    function JSClass() {
      Class.call(this);
      return this["<init>()"]()
    };
    JSClass.prototype = Class.prototype;
    $.createClass("helloworld.HelloWorld$$anonfun$clr$1", Class, JSClass, "scala.runtime.AbstractFunction1", {
      "helloworld.HelloWorld$$anonfun$clr$1": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction1": true,
      "scala.Function1": true,
      "java.lang.Object": true
    })
  }))
})($ScalaJSEnvironment);
//@ sourceMappingURL=HelloWorld.js.map

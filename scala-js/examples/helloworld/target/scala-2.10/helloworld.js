(function($) {
  $.registerClass("helloworld.Graph", (function($) {
    function Class() {
      $.c["java.lang.Object"].prototype.constructor.call(this);
      this.$jsfield$helloworld$Graph$$_pouches = null;
      this.$jsfield$adj = null
    };
    Class.prototype = Object.create($.c["java.lang.Object"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["_pouches$1()Lscala.collection.Seq;"] = (function() {
      return this.$jsfield$helloworld$Graph$$_pouches
    });
    Class.prototype["helloworld$Graph$$_pouches()Lscala.collection.Seq;"] = (function() {
      return this.$jsfield$helloworld$Graph$$_pouches
    });
    Class.prototype["helloworld$Graph$$_pouches_=(Lscala.collection.Seq;)V"] = (function(arg$x$1) {
      this.$jsfield$helloworld$Graph$$_pouches = arg$x$1
    });
    Class.prototype["adj()[[Z"] = (function() {
      return this.$jsfield$adj
    });
    Class.prototype["usePouch(Lhelloworld.Pouch;)V"] = (function(arg$pouch) {
      var idx$jsid$21928 = this["helloworld$Graph$$_pouches()Lscala.collection.Seq;"]()["indexOf(O)I"](arg$pouch);
      this["helloworld$Graph$$_pouches_=(Lscala.collection.Seq;)V"]($.asInstance(this["pouches()Lscala.collection.Seq;"]()["updated(IOLscala.collection.generic.CanBuildFrom;)O"](idx$jsid$21928, arg$pouch["mkUsed()Lhelloworld.Pouch;"](), $.m["scala.collection.Seq"]["canBuildFrom()Lscala.collection.generic.CanBuildFrom;"]()), "scala.collection.Seq"))
    });
    Class.prototype["pouches()Lscala.collection.Seq;"] = (function() {
      return this["helloworld$Graph$$_pouches()Lscala.collection.Seq;"]()
    });
    Class.prototype["getAvailablePouch()Lhelloworld.Pouch;"] = (function() {
      var jsx$1 = $;
      var jsx$4 = $;
      var jsx$6 = this["helloworld$Graph$$_pouches()Lscala.collection.Seq;"]();
      var jsx$7 = new $.c["helloworld.Graph$$anonfun$getAvailablePouch$1"]()["<init>(Lhelloworld.Graph;)"](this);
      var jsx$5 = jsx$6["filter(Lscala.Function1;)O"](jsx$7);
      var jsx$3 = jsx$4.asInstance(jsx$5, "scala.collection.IterableLike");
      var jsx$2 = jsx$3["head()O"]();
      return jsx$1.asInstance(jsx$2, "helloworld.Pouch")
    });
    Class.prototype["getAvailablePouches(Lhelloworld.Pouch;)Lscala.collection.Seq;"] = (function(arg$pouch) {
      var jsx$8 = $;
      var jsx$12 = $;
      var jsx$17 = $;
      var jsx$22 = $;
      var jsx$24 = $.asInstance($.m["scala.Predef"]["booleanArrayOps([Z)Lscala.collection.mutable.ArrayOps;"](this["adj()[[Z"]().underlying[arg$pouch["id()I"]()])["toSeq()Lscala.collection.Seq;"]()["zipWithIndex(Lscala.collection.generic.CanBuildFrom;)O"]($.m["scala.collection.Seq"]["canBuildFrom()Lscala.collection.generic.CanBuildFrom;"]()), "scala.collection.TraversableLike");
      var jsx$25 = new $.c["helloworld.Graph$$anonfun$getAvailablePouches$1"]()["<init>(Lhelloworld.Graph;)"](this);
      var jsx$23 = jsx$24["filter(Lscala.Function1;)O"](jsx$25);
      var jsx$19 = jsx$22.asInstance(jsx$23, "scala.collection.TraversableLike");
      var jsx$20 = new $.c["helloworld.Graph$$anonfun$getAvailablePouches$2"]()["<init>(Lhelloworld.Graph;)"](this);
      var jsx$21 = $.m["scala.collection.Seq"]["canBuildFrom()Lscala.collection.generic.CanBuildFrom;"]();
      var jsx$18 = jsx$19["map(Lscala.Function1;Lscala.collection.generic.CanBuildFrom;)O"](jsx$20, jsx$21);
      var jsx$14 = jsx$17.asInstance(jsx$18, "scala.collection.TraversableLike");
      var jsx$15 = new $.c["helloworld.Graph$$anonfun$getAvailablePouches$3"]()["<init>(Lhelloworld.Graph;)"](this);
      var jsx$16 = $.m["scala.collection.Seq"]["canBuildFrom()Lscala.collection.generic.CanBuildFrom;"]();
      var jsx$13 = jsx$14["map(Lscala.Function1;Lscala.collection.generic.CanBuildFrom;)O"](jsx$15, jsx$16);
      var jsx$10 = jsx$12.asInstance(jsx$13, "scala.collection.TraversableLike");
      var jsx$11 = new $.c["helloworld.Graph$$anonfun$getAvailablePouches$4"]()["<init>(Lhelloworld.Graph;)"](this);
      var jsx$9 = jsx$10["filter(Lscala.Function1;)O"](jsx$11);
      return jsx$8.asInstance(jsx$9, "scala.collection.Seq")
    });
    Class.prototype["mkEdges()[[Z"] = (function() {
      var jsx$26 = $;
      var jsx$28 = $.m["scala.Array"];
      var jsx$29 = new $.c["helloworld.Graph$$anonfun$mkEdges$1"]()["<init>(Lhelloworld.Graph;)"](this);
      var jsx$30 = $.m["scala.reflect.ClassTag"]["Boolean()Lscala.reflect.ClassTag;"]();
      var jsx$27 = jsx$28["tabulate(IILscala.Function2;Lscala.reflect.ClassTag;)[O"](64, 64, jsx$29, jsx$30);
      return jsx$26.asInstance(jsx$27, "scala.Boolean[][]")
    });
    Class.prototype["copy(Lscala.collection.Seq;)Lhelloworld.Graph;"] = (function(arg$_pouches) {
      return new $.c["helloworld.Graph"]()["<init>(Lscala.collection.Seq;)"](arg$_pouches)
    });
    Class.prototype["copy$default$1()Lscala.collection.Seq;"] = (function() {
      return this["helloworld$Graph$$_pouches()Lscala.collection.Seq;"]()
    });
    Class.prototype["productPrefix()T"] = (function() {
      return "Graph"
    });
    Class.prototype["productArity()I"] = (function() {
      return 1
    });
    Class.prototype["productElement(I)O"] = (function(arg$x$1) {
      var x1$jsid$33518 = arg$x$1;
      switch (x1$jsid$33518) {
        case 0:
          {
            return this["_pouches$1()Lscala.collection.Seq;"]();
            break
          };
        default:
          throw new $.c["java.lang.IndexOutOfBoundsException"]()["<init>(T)"]($.bI(arg$x$1).toString());
      }
    });
    Class.prototype["productIterator()Lscala.collection.Iterator;"] = (function() {
      return $.m["scala.runtime.ScalaRunTime"]["typedProductIterator(Lscala.Product;)Lscala.collection.Iterator;"](this)
    });
    Class.prototype["canEqual(O)Z"] = (function(arg$x$1) {
      return $.isInstance(arg$x$1, "helloworld.Graph")
    });
    Class.prototype["hashCode()I"] = (function() {
      return $.m["scala.runtime.ScalaRunTime"]["_hashCode(Lscala.Product;)I"](this)
    });
    Class.prototype["toString()T"] = (function() {
      return $.m["scala.runtime.ScalaRunTime"]["_toString(Lscala.Product;)T"](this)
    });
    Class.prototype["equals(O)Z"] = (function(arg$x$1) {
      if ((this === arg$x$1)) {
        return true
      } else {
        {
          var x1$jsid$33523 = arg$x$1;
          var result$$jslabel$matchEnd4$33526;
          $jslabel$matchEnd4$33526: do {
            if ($.isInstance(x1$jsid$33523, "helloworld.Graph")) {
              result$$jslabel$matchEnd4$33526 = true;
              break $jslabel$matchEnd4$33526
            } else {
              /*<skip>*/
            };
            result$$jslabel$matchEnd4$33526 = false;
            break $jslabel$matchEnd4$33526
          } while (false);
          var jsx$31 = result$$jslabel$matchEnd4$33526
        };
        if (jsx$31) {
          var Graph$1$jsid$26351 = $.asInstance(arg$x$1, "helloworld.Graph");
          return ($.anyRefEqEq(this["_pouches$1()Lscala.collection.Seq;"](), Graph$1$jsid$26351["_pouches$1()Lscala.collection.Seq;"]()) && Graph$1$jsid$26351["canEqual(O)Z"](this))
        } else {
          return false
        }
      }
    });
    Class.prototype["<init>(Lscala.collection.Seq;)"] = (function(arg$_pouches) {
      this.$jsfield$helloworld$Graph$$_pouches = arg$_pouches;
      $.c["java.lang.Object"].prototype["<init>()"].call(this);
      $.m["scala.Product$class"]["$init$(Lscala.Product;)V"](this);
      this.$jsfield$adj = this["mkEdges()[[Z"]();
      return this
    });
    Class.prototype.helloworld$Graph$$_pouches = (function() {
      return this["helloworld$Graph$$_pouches()Lscala.collection.Seq;"]()
    });
    Class.prototype.adj = (function() {
      return this["adj()[[Z"]()
    });
    Class.prototype.usePouch = (function(arg$1) {
      return this["usePouch(Lhelloworld.Pouch;)V"](arg$1)
    });
    Class.prototype.pouches = (function() {
      return this["pouches()Lscala.collection.Seq;"]()
    });
    Class.prototype.getAvailablePouch = (function() {
      return this["getAvailablePouch()Lhelloworld.Pouch;"]()
    });
    Class.prototype.getAvailablePouches = (function(arg$1) {
      return this["getAvailablePouches(Lhelloworld.Pouch;)Lscala.collection.Seq;"](arg$1)
    });
    Class.prototype.copy = (function(arg$1) {
      return this["copy(Lscala.collection.Seq;)Lhelloworld.Graph;"](arg$1)
    });
    Class.prototype.copy$default$1 = (function() {
      return this["copy$default$1()Lscala.collection.Seq;"]()
    });
    Class.prototype._pouches$1 = (function() {
      return this["_pouches$1()Lscala.collection.Seq;"]()
    });
    function JSClass(arg$1) {
      Class.call(this);
      return this["<init>(Lscala.collection.Seq;)"](arg$1)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("helloworld.Graph", Class, JSClass, "java.lang.Object", {
      "helloworld.Graph": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.Product": true,
      "scala.Equals": true,
      "java.lang.Object": true
    })
  }));
  $.registerClass("helloworld.Graph$", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1"].prototype.constructor.call(this)
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["toString()T"] = (function() {
      return "Graph"
    });
    Class.prototype["apply(Lscala.collection.Seq;)Lhelloworld.Graph;"] = (function(arg$_pouches) {
      return new $.c["helloworld.Graph"]()["<init>(Lscala.collection.Seq;)"](arg$_pouches)
    });
    Class.prototype["unapply(Lhelloworld.Graph;)Lscala.Option;"] = (function(arg$x$0) {
      if ((arg$x$0 === null)) {
        return $.m["scala.None"]
      } else {
        return new $.c["scala.Some"]()["<init>(O)"](arg$x$0["_pouches$1()Lscala.collection.Seq;"]())
      }
    });
    Class.prototype["readResolve()O"] = (function() {
      return $.m["helloworld.Graph"]
    });
    Class.prototype["apply(O)O"] = (function(arg$v1) {
      return this["apply(Lscala.collection.Seq;)Lhelloworld.Graph;"]($.asInstance(arg$v1, "scala.collection.Seq"))
    });
    Class.prototype["<init>()"] = (function() {
      $.c["scala.runtime.AbstractFunction1"].prototype["<init>()"].call(this);
      $.modules["helloworld.Graph"]._instance = this;
      return this
    });
    Class.prototype.apply = (function(arg$1) {
      if ($.isInstance(arg$1, "scala.collection.Seq")) {
        return this["apply(Lscala.collection.Seq;)Lhelloworld.Graph;"](arg$1)
      } else {
        if ($.isInstance(arg$1, "java.lang.Object")) {
          return this["apply(O)O"](arg$1)
        } else {
          throw "No matching overload"
        }
      }
    });
    Class.prototype.unapply = (function(arg$1) {
      return this["unapply(Lhelloworld.Graph;)Lscala.Option;"](arg$1)
    });
    function JSClass() {
      Class.call(this);
      return this["<init>()"]()
    };
    JSClass.prototype = Class.prototype;
    $.createClass("helloworld.Graph$", Class, JSClass, "scala.runtime.AbstractFunction1", {
      "helloworld.Graph$": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction1": true,
      "scala.Function1": true,
      "java.lang.Object": true
    })
  }));
  $.registerModule("helloworld.Graph", "helloworld.Graph$");
  $.registerClass("helloworld.Graph$$anonfun$getAvailablePouch$1", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1"].prototype.constructor.call(this)
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(Lhelloworld.Pouch;)Z"] = (function(arg$p) {
      return arg$p["isAvailable()Z"]()
    });
    Class.prototype["apply(O)O"] = (function(arg$v1) {
      return $.bZ(this["apply(Lhelloworld.Pouch;)Z"]($.asInstance(arg$v1, "helloworld.Pouch")))
    });
    Class.prototype["<init>(Lhelloworld.Graph;)"] = (function(arg$$outer) {
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
    function JSClass(arg$1) {
      Class.call(this);
      return this["<init>(Lhelloworld.Graph;)"](arg$1)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("helloworld.Graph$$anonfun$getAvailablePouch$1", Class, JSClass, "scala.runtime.AbstractFunction1", {
      "helloworld.Graph$$anonfun$getAvailablePouch$1": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction1": true,
      "scala.Function1": true,
      "java.lang.Object": true
    })
  }));
  $.registerClass("helloworld.Graph$$anonfun$getAvailablePouches$1", (function($) {
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
    Class.prototype["<init>(Lhelloworld.Graph;)"] = (function(arg$$outer) {
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
      return this["<init>(Lhelloworld.Graph;)"](arg$1)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("helloworld.Graph$$anonfun$getAvailablePouches$1", Class, JSClass, "scala.runtime.AbstractFunction1", {
      "helloworld.Graph$$anonfun$getAvailablePouches$1": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction1": true,
      "scala.Function1": true,
      "java.lang.Object": true
    })
  }));
  $.registerClass("helloworld.Graph$$anonfun$getAvailablePouches$2", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1"].prototype.constructor.call(this)
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(Lscala.Tuple2;)I"] = (function(arg$t) {
      return arg$t["_2$mcI$sp()I"]()
    });
    Class.prototype["apply(O)O"] = (function(arg$v1) {
      return $.bI(this["apply(Lscala.Tuple2;)I"]($.asInstance(arg$v1, "scala.Tuple2")))
    });
    Class.prototype["<init>(Lhelloworld.Graph;)"] = (function(arg$$outer) {
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
      return this["<init>(Lhelloworld.Graph;)"](arg$1)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("helloworld.Graph$$anonfun$getAvailablePouches$2", Class, JSClass, "scala.runtime.AbstractFunction1", {
      "helloworld.Graph$$anonfun$getAvailablePouches$2": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction1": true,
      "scala.Function1": true,
      "java.lang.Object": true
    })
  }));
  $.registerClass("helloworld.Graph$$anonfun$getAvailablePouches$3", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1"].prototype.constructor.call(this);
      this.$jsfield$$outer = null
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(I)Lhelloworld.Pouch;"] = (function(arg$idx) {
      return $.asInstance(this.$jsfield$$outer["helloworld$Graph$$_pouches()Lscala.collection.Seq;"]()["apply(I)O"](arg$idx), "helloworld.Pouch")
    });
    Class.prototype["apply(O)O"] = (function(arg$v1) {
      return this["apply(I)Lhelloworld.Pouch;"]($.uI(arg$v1))
    });
    Class.prototype["<init>(Lhelloworld.Graph;)"] = (function(arg$$outer) {
      if ((arg$$outer === null)) {
        throw new $.c["java.lang.NullPointerException"]()["<init>()"]()
      } else {
        this.$jsfield$$outer = arg$$outer
      };
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
    function JSClass(arg$1) {
      Class.call(this);
      return this["<init>(Lhelloworld.Graph;)"](arg$1)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("helloworld.Graph$$anonfun$getAvailablePouches$3", Class, JSClass, "scala.runtime.AbstractFunction1", {
      "helloworld.Graph$$anonfun$getAvailablePouches$3": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction1": true,
      "scala.Function1": true,
      "java.lang.Object": true
    })
  }));
  $.registerClass("helloworld.Graph$$anonfun$getAvailablePouches$4", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1"].prototype.constructor.call(this)
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(Lhelloworld.Pouch;)Z"] = (function(arg$pouch) {
      return arg$pouch["isAvailable()Z"]()
    });
    Class.prototype["apply(O)O"] = (function(arg$v1) {
      return $.bZ(this["apply(Lhelloworld.Pouch;)Z"]($.asInstance(arg$v1, "helloworld.Pouch")))
    });
    Class.prototype["<init>(Lhelloworld.Graph;)"] = (function(arg$$outer) {
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
    function JSClass(arg$1) {
      Class.call(this);
      return this["<init>(Lhelloworld.Graph;)"](arg$1)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("helloworld.Graph$$anonfun$getAvailablePouches$4", Class, JSClass, "scala.runtime.AbstractFunction1", {
      "helloworld.Graph$$anonfun$getAvailablePouches$4": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction1": true,
      "scala.Function1": true,
      "java.lang.Object": true
    })
  }));
  $.registerClass("helloworld.Graph$$anonfun$mkEdges$1", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction2$mcZII$sp"].prototype.constructor.call(this)
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction2$mcZII$sp"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(II)Z"] = (function(arg$x, arg$y) {
      return this["apply$mcZII$sp(II)Z"](arg$x, arg$y)
    });
    Class.prototype["apply$mcZII$sp(II)Z"] = (function(arg$x, arg$y) {
      var x1$jsid$33507 = $.m["scala.math.package"]["abs(I)I"]((arg$x - arg$y));
      switch (x1$jsid$33507) {
        case 1:
          {
            return true;
            break
          };
        case 7:
          {
            return ((((arg$x / 8) | 0) === ((arg$y / 8) | 0)) && (((arg$x % 8) === 0) || ((arg$y % 8) === 0)));
            break
          };
        case 9:
          {
            return ($.m["scala.math.package"]["abs(I)I"]((((arg$x / 8) | 0) - ((arg$y / 8) | 0))) === 1);
            break
          };
        default:
          return false;
      }
    });
    Class.prototype["apply(OO)O"] = (function(arg$v1, arg$v2) {
      return $.bZ(this["apply(II)Z"]($.uI(arg$v1), $.uI(arg$v2)))
    });
    Class.prototype["<init>(Lhelloworld.Graph;)"] = (function(arg$$outer) {
      $.c["scala.runtime.AbstractFunction2$mcZII$sp"].prototype["<init>()"].call(this);
      return this
    });
    function JSClass(arg$1) {
      Class.call(this);
      return this["<init>(Lhelloworld.Graph;)"](arg$1)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("helloworld.Graph$$anonfun$mkEdges$1", Class, JSClass, "scala.runtime.AbstractFunction2$mcZII$sp", {
      "helloworld.Graph$$anonfun$mkEdges$1": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction2$mcZII$sp": true,
      "scala.Function2$mcZII$sp": true,
      "scala.runtime.AbstractFunction2": true,
      "scala.Function2": true,
      "java.lang.Object": true
    })
  }))
})($ScalaJSEnvironment);

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

(function($) {
  $.registerClass("helloworld.Pouch$", (function($) {
    function Class() {
      $.c["java.lang.Object"].prototype.constructor.call(this);
      this.$jsfield$R = 0;
      this.$jsfield$r = 0
    };
    Class.prototype = Object.create($.c["java.lang.Object"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["R()I"] = (function() {
      return this.$jsfield$R
    });
    Class.prototype["r()I"] = (function() {
      return this.$jsfield$r
    });
    Class.prototype["getCoords(II)Lscala.Tuple2;"] = (function(arg$id, arg$R) {
      var q$jsid$12409 = ((arg$id / 8) | 0);
      var m$jsid$12410 = (arg$id - q$jsid$12409);
      var r$jsid$12411 = ((1 + q$jsid$12409) * arg$R);
      var theta$jsid$12412 = (((m$jsid$12410 * $.m["scala.math.package"]["Pi()D"]()) / 4) + ($.m["scala.math.package"]["Pi()D"]() / 11));
      var x1$jsid$33444 = new $.c["scala.Tuple2$mcII$sp"]()["<init>(II)"]($.m["scala.math.package"]["round(D)J"]((r$jsid$12411 * $.m["scala.math.package"]["cos(D)D"](theta$jsid$12412))), $.m["scala.math.package"]["round(D)J"]((r$jsid$12411 * $.m["scala.math.package"]["sin(D)D"](theta$jsid$12412))));
      var result$$jslabel$matchEnd3$33447;
      $jslabel$matchEnd3$33447: do {
        if ((x1$jsid$33444 !== null)) {
          var xx$jsid$14251 = x1$jsid$33444["_1$mcI$sp()I"]();
          var yy$jsid$14252 = x1$jsid$33444["_2$mcI$sp()I"]();
          result$$jslabel$matchEnd3$33447 = new $.c["scala.Tuple2$mcII$sp"]()["<init>(II)"](xx$jsid$14251, yy$jsid$14252);
          break $jslabel$matchEnd3$33447
        } else {
          /*<skip>*/
        };
        throw new $.c["scala.MatchError"]()["<init>(O)"](x1$jsid$33444);
        break $jslabel$matchEnd3$33447
      } while (false);
      var x$1$jsid$12413 = result$$jslabel$matchEnd3$33447;
      var xx$jsid$12414 = x$1$jsid$12413["_1$mcI$sp()I"]();
      var yy$jsid$12415 = x$1$jsid$12413["_2$mcI$sp()I"]();
      return new $.c["scala.Tuple2$mcII$sp"]()["<init>(II)"](((xx$jsid$12414 + (8 * arg$R)) + 10), ((yy$jsid$12415 + (8 * arg$R)) + 10))
    });
    Class.prototype["apply(IIIZ)Lhelloworld.Pouch;"] = (function(arg$id, arg$value, arg$weight, arg$isAvailable) {
      return new $.c["helloworld.Pouch"]()["<init>(IIIZ)"](arg$id, arg$value, arg$weight, arg$isAvailable)
    });
    Class.prototype["unapply(Lhelloworld.Pouch;)Lscala.Option;"] = (function(arg$x$0) {
      if ((arg$x$0 === null)) {
        return $.m["scala.None"]
      } else {
        return new $.c["scala.Some"]()["<init>(O)"](new $.c["scala.Tuple4"]()["<init>(OOOO)"]($.bI(arg$x$0["id()I"]()), $.bI(arg$x$0["value()I"]()), $.bI(arg$x$0["weight()I"]()), $.bZ(arg$x$0["isAvailable()Z"]())))
      }
    });
    Class.prototype["<init>$default$4()Z"] = (function() {
      return true
    });
    Class.prototype["apply$default$4()Z"] = (function() {
      return true
    });
    Class.prototype["readResolve()O"] = (function() {
      return $.m["helloworld.Pouch"]
    });
    Class.prototype["<init>()"] = (function() {
      $.c["java.lang.Object"].prototype["<init>()"].call(this);
      $.modules["helloworld.Pouch"]._instance = this;
      this.$jsfield$R = 50;
      this.$jsfield$r = 14;
      return this
    });
    Class.prototype.R = (function() {
      return this["R()I"]()
    });
    Class.prototype.r = (function() {
      return this["r()I"]()
    });
    Class.prototype.getCoords = (function(arg$1, arg$2) {
      return this["getCoords(II)Lscala.Tuple2;"](arg$1, arg$2)
    });
    Class.prototype.apply = (function(arg$1, arg$2, arg$3, arg$4) {
      return this["apply(IIIZ)Lhelloworld.Pouch;"](arg$1, arg$2, arg$3, arg$4)
    });
    Class.prototype.unapply = (function(arg$1) {
      return this["unapply(Lhelloworld.Pouch;)Lscala.Option;"](arg$1)
    });
    Class.prototype["<init>$default$4"] = (function() {
      return this["<init>$default$4()Z"]()
    });
    Class.prototype.apply$default$4 = (function() {
      return this["apply$default$4()Z"]()
    });
    function JSClass() {
      Class.call(this);
      return this["<init>()"]()
    };
    JSClass.prototype = Class.prototype;
    $.createClass("helloworld.Pouch$", Class, JSClass, "java.lang.Object", {
      "helloworld.Pouch$": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "java.lang.Object": true
    })
  }));
  $.registerModule("helloworld.Pouch", "helloworld.Pouch$");
  $.registerClass("helloworld.Pouch", (function($) {
    function Class() {
      $.c["java.lang.Object"].prototype.constructor.call(this);
      this.$jsfield$id = 0;
      this.$jsfield$value = 0;
      this.$jsfield$weight = 0;
      this.$jsfield$isAvailable = false;
      this.$jsfield$coords = null
    };
    Class.prototype = Object.create($.c["java.lang.Object"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["id()I"] = (function() {
      return this.$jsfield$id
    });
    Class.prototype["value()I"] = (function() {
      return this.$jsfield$value
    });
    Class.prototype["weight()I"] = (function() {
      return this.$jsfield$weight
    });
    Class.prototype["isAvailable()Z"] = (function() {
      return this.$jsfield$isAvailable
    });
    Class.prototype["mkUsed()Lhelloworld.Pouch;"] = (function() {
      return new $.c["helloworld.Pouch"]()["<init>(IIIZ)"](this["id()I"](), this["value()I"](), this["weight()I"](), false)
    });
    Class.prototype["equals(O)Z"] = (function(arg$p) {
      var x1$jsid$33473 = arg$p;
      var result$$jslabel$matchEnd4$33476;
      $jslabel$matchEnd4$33476: do {
        if ($.isInstance(x1$jsid$33473, "helloworld.Pouch")) {
          var x2$jsid$33474 = $.asInstance(x1$jsid$33473, "helloworld.Pouch");
          result$$jslabel$matchEnd4$33476 = (x2$jsid$33474["id()I"]() === this["id()I"]());
          break $jslabel$matchEnd4$33476
        } else {
          /*<skip>*/
        };
        result$$jslabel$matchEnd4$33476 = false;
        break $jslabel$matchEnd4$33476
      } while (false);
      return result$$jslabel$matchEnd4$33476
    });
    Class.prototype["toString()T"] = (function() {
      return (((("$" + $.bI(this["value()I"]())) + ",") + $.bI(this["weight()I"]())) + "lb")
    });
    Class.prototype["contains(II)Z"] = (function(arg$x, arg$y) {
      var x1$jsid$33481 = this["coords()Lscala.Tuple2;"]();
      var result$$jslabel$matchEnd3$33483;
      $jslabel$matchEnd3$33483: do {
        if ((x1$jsid$33481 !== null)) {
          var myx$jsid$21620 = x1$jsid$33481["_1$mcI$sp()I"]();
          var myy$jsid$21621 = x1$jsid$33481["_2$mcI$sp()I"]();
          result$$jslabel$matchEnd3$33483 = new $.c["scala.Tuple2$mcII$sp"]()["<init>(II)"](myx$jsid$21620, myy$jsid$21621);
          break $jslabel$matchEnd3$33483
        } else {
          /*<skip>*/
        };
        throw new $.c["scala.MatchError"]()["<init>(O)"](x1$jsid$33481);
        break $jslabel$matchEnd3$33483
      } while (false);
      var x$2$jsid$21614 = result$$jslabel$matchEnd3$33483;
      var myx$jsid$21615 = x$2$jsid$21614["_1$mcI$sp()I"]();
      var myy$jsid$21616 = x$2$jsid$21614["_2$mcI$sp()I"]();
      return (((arg$x >= (myx$jsid$21615 - $.m["helloworld.Pouch"]["r()I"]())) && (arg$x <= (myx$jsid$21615 + $.m["helloworld.Pouch"]["r()I"]()))) && ((arg$y >= (myy$jsid$21616 - $.m["helloworld.Pouch"]["r()I"]())) && (arg$y <= (myy$jsid$21616 + $.m["helloworld.Pouch"]["r()I"]()))))
    });
    Class.prototype["coords()Lscala.Tuple2;"] = (function() {
      return this.$jsfield$coords
    });
    Class.prototype["copy(IIIZ)Lhelloworld.Pouch;"] = (function(arg$id, arg$value, arg$weight, arg$isAvailable) {
      return new $.c["helloworld.Pouch"]()["<init>(IIIZ)"](arg$id, arg$value, arg$weight, arg$isAvailable)
    });
    Class.prototype["copy$default$1()I"] = (function() {
      return this["id()I"]()
    });
    Class.prototype["copy$default$2()I"] = (function() {
      return this["value()I"]()
    });
    Class.prototype["copy$default$3()I"] = (function() {
      return this["weight()I"]()
    });
    Class.prototype["copy$default$4()Z"] = (function() {
      return this["isAvailable()Z"]()
    });
    Class.prototype["productPrefix()T"] = (function() {
      return "Pouch"
    });
    Class.prototype["productArity()I"] = (function() {
      return 4
    });
    Class.prototype["productElement(I)O"] = (function(arg$x$1) {
      var x1$jsid$33487 = arg$x$1;
      switch (x1$jsid$33487) {
        case 0:
          {
            return $.bI(this["id()I"]());
            break
          };
        case 1:
          {
            return $.bI(this["value()I"]());
            break
          };
        case 2:
          {
            return $.bI(this["weight()I"]());
            break
          };
        case 3:
          {
            return $.bZ(this["isAvailable()Z"]());
            break
          };
        default:
          throw new $.c["java.lang.IndexOutOfBoundsException"]()["<init>(T)"]($.bI(arg$x$1).toString());
      }
    });
    Class.prototype["productIterator()Lscala.collection.Iterator;"] = (function() {
      return $.m["scala.runtime.ScalaRunTime"]["typedProductIterator(Lscala.Product;)Lscala.collection.Iterator;"](this)
    });
    Class.prototype["canEqual(O)Z"] = (function(arg$x$1) {
      return $.isInstance(arg$x$1, "helloworld.Pouch")
    });
    Class.prototype["hashCode()I"] = (function() {
      var acc$jsid$21692 = -889275714;
      acc$jsid$21692 = $.m["scala.runtime.Statics"]["mix(II)I"](acc$jsid$21692, this["id()I"]());
      acc$jsid$21692 = $.m["scala.runtime.Statics"]["mix(II)I"](acc$jsid$21692, this["value()I"]());
      acc$jsid$21692 = $.m["scala.runtime.Statics"]["mix(II)I"](acc$jsid$21692, this["weight()I"]());
      var jsx$1 = $.m["scala.runtime.Statics"];
      var jsx$2 = acc$jsid$21692;
      if (this["isAvailable()Z"]()) {
        var jsx$3 = 1231
      } else {
        var jsx$3 = 1237
      };
      acc$jsid$21692 = jsx$1["mix(II)I"](jsx$2, jsx$3);
      return $.m["scala.runtime.Statics"]["finalizeHash(II)I"](acc$jsid$21692, 4)
    });
    Class.prototype["<init>(IIIZ)"] = (function(arg$id, arg$value, arg$weight, arg$isAvailable) {
      this.$jsfield$id = arg$id;
      this.$jsfield$value = arg$value;
      this.$jsfield$weight = arg$weight;
      this.$jsfield$isAvailable = arg$isAvailable;
      $.c["java.lang.Object"].prototype["<init>()"].call(this);
      $.m["scala.Product$class"]["$init$(Lscala.Product;)V"](this);
      this.$jsfield$coords = $.m["helloworld.Pouch"]["getCoords(II)Lscala.Tuple2;"](arg$id, $.m["helloworld.Pouch"]["R()I"]());
      return this
    });
    Class.prototype.id = (function() {
      return this["id()I"]()
    });
    Class.prototype.value = (function() {
      return this["value()I"]()
    });
    Class.prototype.weight = (function() {
      return this["weight()I"]()
    });
    Class.prototype.isAvailable = (function() {
      return this["isAvailable()Z"]()
    });
    Class.prototype.mkUsed = (function() {
      return this["mkUsed()Lhelloworld.Pouch;"]()
    });
    Class.prototype.contains = (function(arg$1, arg$2) {
      return this["contains(II)Z"](arg$1, arg$2)
    });
    Class.prototype.coords = (function() {
      return this["coords()Lscala.Tuple2;"]()
    });
    Class.prototype.copy = (function(arg$1, arg$2, arg$3, arg$4) {
      return this["copy(IIIZ)Lhelloworld.Pouch;"](arg$1, arg$2, arg$3, arg$4)
    });
    Class.prototype.copy$default$1 = (function() {
      return this["copy$default$1()I"]()
    });
    Class.prototype.copy$default$2 = (function() {
      return this["copy$default$2()I"]()
    });
    Class.prototype.copy$default$3 = (function() {
      return this["copy$default$3()I"]()
    });
    Class.prototype.copy$default$4 = (function() {
      return this["copy$default$4()Z"]()
    });
    function JSClass(arg$1, arg$2, arg$3, arg$4) {
      Class.call(this);
      return this["<init>(IIIZ)"](arg$1, arg$2, arg$3, arg$4)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("helloworld.Pouch", Class, JSClass, "java.lang.Object", {
      "helloworld.Pouch": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.Product": true,
      "scala.Equals": true,
      "java.lang.Object": true
    })
  }))
})($ScalaJSEnvironment);

(function($) {
  $.registerClass("helloworld.Score", (function($) {
    function Class() {
      $.c["java.lang.Object"].prototype.constructor.call(this);
      this.$jsfield$helloworld$Score$$_value = 0;
      this.$jsfield$helloworld$Score$$_weight = 0
    };
    Class.prototype = Object.create($.c["java.lang.Object"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["_value$1()I"] = (function() {
      return this.$jsfield$helloworld$Score$$_value
    });
    Class.prototype["_weight$1()I"] = (function() {
      return this.$jsfield$helloworld$Score$$_weight
    });
    Class.prototype["helloworld$Score$$_value()I"] = (function() {
      return this.$jsfield$helloworld$Score$$_value
    });
    Class.prototype["helloworld$Score$$_value_=(I)V"] = (function(arg$x$1) {
      this.$jsfield$helloworld$Score$$_value = arg$x$1
    });
    Class.prototype["helloworld$Score$$_weight()I"] = (function() {
      return this.$jsfield$helloworld$Score$$_weight
    });
    Class.prototype["helloworld$Score$$_weight_=(I)V"] = (function(arg$x$1) {
      this.$jsfield$helloworld$Score$$_weight = arg$x$1
    });
    Class.prototype["update(Lhelloworld.Pouch;)V"] = (function(arg$pouch) {
      this["helloworld$Score$$_value_=(I)V"]((this["helloworld$Score$$_value()I"]() + arg$pouch["value()I"]()));
      this["helloworld$Score$$_weight_=(I)V"]((this["helloworld$Score$$_weight()I"]() + arg$pouch["weight()I"]()))
    });
    Class.prototype["value()I"] = (function() {
      return this["helloworld$Score$$_value()I"]()
    });
    Class.prototype["weight()I"] = (function() {
      return this["helloworld$Score$$_weight()I"]()
    });
    Class.prototype["toString()T"] = (function() {
      return (((("$" + $.bI(this["helloworld$Score$$_value()I"]())) + ",") + $.bI(this["helloworld$Score$$_weight()I"]())) + "lb")
    });
    Class.prototype["copy(II)Lhelloworld.Score;"] = (function(arg$_value, arg$_weight) {
      return new $.c["helloworld.Score"]()["<init>(II)"](arg$_value, arg$_weight)
    });
    Class.prototype["copy$default$1()I"] = (function() {
      return this["helloworld$Score$$_value()I"]()
    });
    Class.prototype["copy$default$2()I"] = (function() {
      return this["helloworld$Score$$_weight()I"]()
    });
    Class.prototype["productPrefix()T"] = (function() {
      return "Score"
    });
    Class.prototype["productArity()I"] = (function() {
      return 2
    });
    Class.prototype["productElement(I)O"] = (function(arg$x$1) {
      var x1$jsid$33457 = arg$x$1;
      switch (x1$jsid$33457) {
        case 0:
          {
            return $.bI(this["_value$1()I"]());
            break
          };
        case 1:
          {
            return $.bI(this["_weight$1()I"]());
            break
          };
        default:
          throw new $.c["java.lang.IndexOutOfBoundsException"]()["<init>(T)"]($.bI(arg$x$1).toString());
      }
    });
    Class.prototype["productIterator()Lscala.collection.Iterator;"] = (function() {
      return $.m["scala.runtime.ScalaRunTime"]["typedProductIterator(Lscala.Product;)Lscala.collection.Iterator;"](this)
    });
    Class.prototype["canEqual(O)Z"] = (function(arg$x$1) {
      return $.isInstance(arg$x$1, "helloworld.Score")
    });
    Class.prototype["hashCode()I"] = (function() {
      var acc$jsid$21556 = -889275714;
      acc$jsid$21556 = $.m["scala.runtime.Statics"]["mix(II)I"](acc$jsid$21556, this["_value$1()I"]());
      acc$jsid$21556 = $.m["scala.runtime.Statics"]["mix(II)I"](acc$jsid$21556, this["_weight$1()I"]());
      return $.m["scala.runtime.Statics"]["finalizeHash(II)I"](acc$jsid$21556, 2)
    });
    Class.prototype["equals(O)Z"] = (function(arg$x$1) {
      if ((this === arg$x$1)) {
        return true
      } else {
        {
          var x1$jsid$33465 = arg$x$1;
          var result$$jslabel$matchEnd4$33468;
          $jslabel$matchEnd4$33468: do {
            if ($.isInstance(x1$jsid$33465, "helloworld.Score")) {
              result$$jslabel$matchEnd4$33468 = true;
              break $jslabel$matchEnd4$33468
            } else {
              /*<skip>*/
            };
            result$$jslabel$matchEnd4$33468 = false;
            break $jslabel$matchEnd4$33468
          } while (false);
          var jsx$1 = result$$jslabel$matchEnd4$33468
        };
        if (jsx$1) {
          var Score$1$jsid$21579 = $.asInstance(arg$x$1, "helloworld.Score");
          return (((this["_value$1()I"]() === Score$1$jsid$21579["_value$1()I"]()) && (this["_weight$1()I"]() === Score$1$jsid$21579["_weight$1()I"]())) && Score$1$jsid$21579["canEqual(O)Z"](this))
        } else {
          return false
        }
      }
    });
    Class.prototype["<init>(II)"] = (function(arg$_value, arg$_weight) {
      this.$jsfield$helloworld$Score$$_value = arg$_value;
      this.$jsfield$helloworld$Score$$_weight = arg$_weight;
      $.c["java.lang.Object"].prototype["<init>()"].call(this);
      $.m["scala.Product$class"]["$init$(Lscala.Product;)V"](this);
      return this
    });
    Class.prototype.helloworld$Score$$_value = (function() {
      return this["helloworld$Score$$_value()I"]()
    });
    Class.prototype.helloworld$Score$$_weight = (function() {
      return this["helloworld$Score$$_weight()I"]()
    });
    Class.prototype.update = (function(arg$1) {
      return this["update(Lhelloworld.Pouch;)V"](arg$1)
    });
    Class.prototype.value = (function() {
      return this["value()I"]()
    });
    Class.prototype.weight = (function() {
      return this["weight()I"]()
    });
    Class.prototype.copy = (function(arg$1, arg$2) {
      return this["copy(II)Lhelloworld.Score;"](arg$1, arg$2)
    });
    Class.prototype.copy$default$1 = (function() {
      return this["copy$default$1()I"]()
    });
    Class.prototype.copy$default$2 = (function() {
      return this["copy$default$2()I"]()
    });
    Class.prototype._value$1 = (function() {
      return this["_value$1()I"]()
    });
    Class.prototype._weight$1 = (function() {
      return this["_weight$1()I"]()
    });
    function JSClass(arg$1, arg$2) {
      Class.call(this);
      return this["<init>(II)"](arg$1, arg$2)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("helloworld.Score", Class, JSClass, "java.lang.Object", {
      "helloworld.Score": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.Product": true,
      "scala.Equals": true,
      "java.lang.Object": true
    })
  }));
  $.registerClass("helloworld.Score$", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction2"].prototype.constructor.call(this)
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction2"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["toString()T"] = (function() {
      return "Score"
    });
    Class.prototype["apply(II)Lhelloworld.Score;"] = (function(arg$_value, arg$_weight) {
      return new $.c["helloworld.Score"]()["<init>(II)"](arg$_value, arg$_weight)
    });
    Class.prototype["unapply(Lhelloworld.Score;)Lscala.Option;"] = (function(arg$x$0) {
      if ((arg$x$0 === null)) {
        return $.m["scala.None"]
      } else {
        return new $.c["scala.Some"]()["<init>(O)"](new $.c["scala.Tuple2$mcII$sp"]()["<init>(II)"](arg$x$0["helloworld$Score$$_value()I"](), arg$x$0["helloworld$Score$$_weight()I"]()))
      }
    });
    Class.prototype["<init>$default$1()I"] = (function() {
      return 0
    });
    Class.prototype["<init>$default$2()I"] = (function() {
      return 0
    });
    Class.prototype["apply$default$1()I"] = (function() {
      return 0
    });
    Class.prototype["apply$default$2()I"] = (function() {
      return 0
    });
    Class.prototype["readResolve()O"] = (function() {
      return $.m["helloworld.Score"]
    });
    Class.prototype["apply(OO)O"] = (function(arg$v1, arg$v2) {
      return this["apply(II)Lhelloworld.Score;"]($.uI(arg$v1), $.uI(arg$v2))
    });
    Class.prototype["<init>()"] = (function() {
      $.c["scala.runtime.AbstractFunction2"].prototype["<init>()"].call(this);
      $.modules["helloworld.Score"]._instance = this;
      return this
    });
    Class.prototype.apply = (function(arg$1, arg$2) {
      if ((typeof(arg$1) === "number")) {
        return this["apply(II)Lhelloworld.Score;"](arg$1, arg$2)
      } else {
        if ($.isInstance(arg$1, "java.lang.Object")) {
          return this["apply(OO)O"](arg$1, arg$2)
        } else {
          throw "No matching overload"
        }
      }
    });
    Class.prototype.unapply = (function(arg$1) {
      return this["unapply(Lhelloworld.Score;)Lscala.Option;"](arg$1)
    });
    Class.prototype["<init>$default$1"] = (function() {
      return this["<init>$default$1()I"]()
    });
    Class.prototype["<init>$default$2"] = (function() {
      return this["<init>$default$2()I"]()
    });
    Class.prototype.apply$default$1 = (function() {
      return this["apply$default$1()I"]()
    });
    Class.prototype.apply$default$2 = (function() {
      return this["apply$default$2()I"]()
    });
    function JSClass() {
      Class.call(this);
      return this["<init>()"]()
    };
    JSClass.prototype = Class.prototype;
    $.createClass("helloworld.Score$", Class, JSClass, "scala.runtime.AbstractFunction2", {
      "helloworld.Score$": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction2": true,
      "scala.Function2": true,
      "java.lang.Object": true
    })
  }));
  $.registerModule("helloworld.Score", "helloworld.Score$")
})($ScalaJSEnvironment);

//@ sourceMappingURL=helloworld.js.map

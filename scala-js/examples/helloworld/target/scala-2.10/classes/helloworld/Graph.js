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
      var x1$jsid$33490 = arg$x$1;
      switch (x1$jsid$33490) {
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
          var x1$jsid$33495 = arg$x$1;
          var result$$jslabel$matchEnd4$33498;
          $jslabel$matchEnd4$33498: do {
            if ($.isInstance(x1$jsid$33495, "helloworld.Graph")) {
              result$$jslabel$matchEnd4$33498 = true;
              break $jslabel$matchEnd4$33498
            } else {
              /*<skip>*/
            };
            result$$jslabel$matchEnd4$33498 = false;
            break $jslabel$matchEnd4$33498
          } while (false);
          var jsx$31 = result$$jslabel$matchEnd4$33498
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
      var x1$jsid$33479 = $.m["scala.math.package"]["abs(I)I"]((arg$x - arg$y));
      switch (x1$jsid$33479) {
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
//@ sourceMappingURL=Graph.js.map

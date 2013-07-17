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
//@ sourceMappingURL=Score.js.map

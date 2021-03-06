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
      var x1$jsid$34105 = new $.c["scala.Tuple2$mcII$sp"]()["<init>(II)"]($.m["scala.math.package"]["round(D)J"]((r$jsid$12411 * $.m["scala.math.package"]["cos(D)D"](theta$jsid$12412))), $.m["scala.math.package"]["round(D)J"]((r$jsid$12411 * $.m["scala.math.package"]["sin(D)D"](theta$jsid$12412))));
      var result$$jslabel$matchEnd3$34108;
      $jslabel$matchEnd3$34108: do {
        if ((x1$jsid$34105 !== null)) {
          var xx$jsid$14251 = x1$jsid$34105["_1$mcI$sp()I"]();
          var yy$jsid$14252 = x1$jsid$34105["_2$mcI$sp()I"]();
          result$$jslabel$matchEnd3$34108 = new $.c["scala.Tuple2$mcII$sp"]()["<init>(II)"](xx$jsid$14251, yy$jsid$14252);
          break $jslabel$matchEnd3$34108
        } else {
          /*<skip>*/
        };
        throw new $.c["scala.MatchError"]()["<init>(O)"](x1$jsid$34105);
        break $jslabel$matchEnd3$34108
      } while (false);
      var x$1$jsid$12413 = result$$jslabel$matchEnd3$34108;
      var xx$jsid$12414 = x$1$jsid$12413["_1$mcI$sp()I"]();
      var yy$jsid$12415 = x$1$jsid$12413["_2$mcI$sp()I"]();
      return new $.c["scala.Tuple2$mcII$sp"]()["<init>(II)"](((xx$jsid$12414 + (8 * arg$R)) + 5), ((yy$jsid$12415 + (8 * arg$R)) + 5))
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
      var x1$jsid$34134 = arg$p;
      var result$$jslabel$matchEnd4$34137;
      $jslabel$matchEnd4$34137: do {
        if ($.isInstance(x1$jsid$34134, "helloworld.Pouch")) {
          var x2$jsid$34135 = $.asInstance(x1$jsid$34134, "helloworld.Pouch");
          result$$jslabel$matchEnd4$34137 = (x2$jsid$34135["id()I"]() === this["id()I"]());
          break $jslabel$matchEnd4$34137
        } else {
          /*<skip>*/
        };
        result$$jslabel$matchEnd4$34137 = false;
        break $jslabel$matchEnd4$34137
      } while (false);
      return result$$jslabel$matchEnd4$34137
    });
    Class.prototype["toString()T"] = (function() {
      return ((("$" + $.bI(this["value()I"]())) + " /") + $.bI(this["weight()I"]()))
    });
    Class.prototype["contains(II)Z"] = (function(arg$x, arg$y) {
      var x1$jsid$34142 = this["coords()Lscala.Tuple2;"]();
      var result$$jslabel$matchEnd3$34144;
      $jslabel$matchEnd3$34144: do {
        if ((x1$jsid$34142 !== null)) {
          var myx$jsid$21632 = x1$jsid$34142["_1$mcI$sp()I"]();
          var myy$jsid$21633 = x1$jsid$34142["_2$mcI$sp()I"]();
          result$$jslabel$matchEnd3$34144 = new $.c["scala.Tuple2$mcII$sp"]()["<init>(II)"](myx$jsid$21632, myy$jsid$21633);
          break $jslabel$matchEnd3$34144
        } else {
          /*<skip>*/
        };
        throw new $.c["scala.MatchError"]()["<init>(O)"](x1$jsid$34142);
        break $jslabel$matchEnd3$34144
      } while (false);
      var x$2$jsid$21626 = result$$jslabel$matchEnd3$34144;
      var myx$jsid$21627 = x$2$jsid$21626["_1$mcI$sp()I"]();
      var myy$jsid$21628 = x$2$jsid$21626["_2$mcI$sp()I"]();
      return (((arg$x >= (myx$jsid$21627 - $.m["helloworld.Pouch"]["r()I"]())) && (arg$x <= (myx$jsid$21627 + $.m["helloworld.Pouch"]["r()I"]()))) && ((arg$y >= (myy$jsid$21628 - $.m["helloworld.Pouch"]["r()I"]())) && (arg$y <= (myy$jsid$21628 + $.m["helloworld.Pouch"]["r()I"]()))))
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
      var x1$jsid$34148 = arg$x$1;
      switch (x1$jsid$34148) {
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
      var acc$jsid$21704 = -889275714;
      acc$jsid$21704 = $.m["scala.runtime.Statics"]["mix(II)I"](acc$jsid$21704, this["id()I"]());
      acc$jsid$21704 = $.m["scala.runtime.Statics"]["mix(II)I"](acc$jsid$21704, this["value()I"]());
      acc$jsid$21704 = $.m["scala.runtime.Statics"]["mix(II)I"](acc$jsid$21704, this["weight()I"]());
      var jsx$1 = $.m["scala.runtime.Statics"];
      var jsx$2 = acc$jsid$21704;
      if (this["isAvailable()Z"]()) {
        var jsx$3 = 1231
      } else {
        var jsx$3 = 1237
      };
      acc$jsid$21704 = jsx$1["mix(II)I"](jsx$2, jsx$3);
      return $.m["scala.runtime.Statics"]["finalizeHash(II)I"](acc$jsid$21704, 4)
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
//@ sourceMappingURL=Pouch.js.map

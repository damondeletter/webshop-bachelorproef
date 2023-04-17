//@pilet v:2(parcelChunkpr_bachelorproefwebshopvue,{})
System.register(["react-router-dom","react"],function(_export){var _deps={"react-router-dom":{},"react":{}};var require=function(n){var d=_deps[n];if(!d){var e=new Error("Cannot find module '"+n+"'");e.code='MODULE_NOT_FOUND';throw e} return d};return {
  setters:[function(_dep){_deps["react-router-dom"]=_dep},function(_dep){_deps["react"]=_dep}],
  execute:function(){var module={exports:{}};var exports=module.exports;
!(function(global,parcelRequire){'use strict';var __bundleUrl__=function(){try{throw new Error}catch(t){const e=(""+t.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);if(e)return e[0].replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^\/]+$/,"$1")+"/"}return"/"}();(function(){var d=document;var u=__bundleUrl__+"index.css";var e=d.createElement("link");e.setAttribute('data-origin', "bachelorproef-webshop-vue");e.type="text/css";e.rel="stylesheet";e.href=u+"?_="+Math.random();d.head.appendChild(e)})();// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = "function"==typeof global.parcelChunkpr_bachelorproefwebshopvue&&global.parcelChunkpr_bachelorproefwebshopvue;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = "function"==typeof global.parcelChunkpr_bachelorproefwebshopvue&&global.parcelChunkpr_bachelorproefwebshopvue;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"AddButton.vue":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
var _default = {
  name: "add-button",
  props: ["addToCart", "params"]
};
exports.default = _default;
        var $351ca3 = exports.default || module.exports;
      
      if (typeof $351ca3 === 'function') {
        $351ca3 = $351ca3.options;
      }
    
        /* template */
        Object.assign($351ca3, (function () {
          var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      staticClass: "btn-buy",
      on: {
        click: function($event) {
          return _vm.addToCart(_vm.params)
        }
      }
    },
    [_vm._v("Add to cart")]
  )
}
var staticRenderFns = []
render._withStripped = true

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
},{}],"RemoveButton.vue":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
var _default = {
  name: "remove-button",
  props: ["remove-button", "item"],
  methods: {
    removeFromCart: function removeFromCart(item) {
      this.$emit("removeFromCart", item);
      console.log("GELUKT");
    }
  }
};
exports.default = _default;
        var $5640b9 = exports.default || module.exports;
      
      if (typeof $5640b9 === 'function') {
        $5640b9 = $5640b9.options;
      }
    
        /* template */
        Object.assign($5640b9, (function () {
          var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      staticClass: "btn-buy",
      on: {
        click: function($event) {
          return _vm.removeFromCart(_vm.item)
        }
      }
    },
    [_vm._v("X")]
  )
}
var staticRenderFns = []
render._withStripped = true

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
},{}],"Cart.vue":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _RemoveButton = _interopRequireDefault(require("./RemoveButton.vue"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  name: 'Cart',
  props: ['cart'],
  components: {
    RemoveButton: _RemoveButton.default
  },
  data: function data() {
    return {
      cartMock: this.cart,
      korting: 0.25,
      totaal: 0,
      subtotal: 0,
      kortingscode: "",
      kortingsCodeGebruikt: false,
      error: false,
      kortingsBedrag: 0
    };
  },
  methods: {
    removeFromCart: function removeFromCart(item) {
      var cart = this.cart;
      var index = cart.findIndex(function (item2) {
        return item2.product_id === item.product_id;
      });
      if (index !== -1) {
        if (cart[index].quantity > 1) {
          this.cart[index].quantity--;
        } else {
          this.cart.splice(index, 1);
        }
      }
      this.cartSubtotal();
      this.applyDiscount();
    },
    applyDiscount: function applyDiscount() {
      if (this.kortingsCodeGebruikt) {
        this.totaal = this.subtotal - this.subtotal * this.korting;
      } else {
        this.totaal = this.subtotal;
      }
    },
    valideerCode: function valideerCode() {
      if (this.kortingscode === "DAMON25") {
        this.kortingsCodeGebruikt = true;
        this.error = false;
        this.cartKorting();
        this.applyDiscount();
      } else {
        this.kortingsCodeGebruikt = false;
        this.error = true;
        this.cartSubtotal();
      }
    },
    cartKorting: function cartKorting() {
      var _this = this;
      this.kortingsBedrag = this.cart.reduce(function (accumulator, item) {
        return accumulator + item.price * item.quantity * _this.korting;
      }, 0);
    },
    cartSubtotal: function cartSubtotal() {
      this.subtotal = this.cart.reduce(function (accumulator, item) {
        return accumulator + item.price * item.quantity;
      }, 0);
      this.totaal = this.subtotal;
    },
    order: function order() {
      this.$emit("order", this.cart);
    }
  },
  mounted: function mounted() {
    this.cartSubtotal();
  }
};
exports.default = _default;
        var $387241 = exports.default || module.exports;
      
      if (typeof $387241 === 'function') {
        $387241 = $387241.options;
      }
    
        /* template */
        Object.assign($387241, (function () {
          var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _vm.cart.length == 0
      ? _c("div", [
          _c("h3", [_vm._v("I'm empty.. Maybe you can add some products?")])
        ])
      : _c("div", [
          _c("div", { staticClass: "row" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "col-md" }, [
              _c("h3", [
                _vm._v(
                  _vm._s(
                    _vm.cart.reduce(function(acc, item) {
                      return acc + item.quantity
                    }, 0)
                  ) + " product"
                ),
                _vm.cart.reduce(function(acc, item) {
                  return acc + item.quantity
                }, 0) > 1
                  ? _c("span", [_vm._v("s")])
                  : _vm._e()
              ])
            ])
          ]),
          _vm._v(" "),
          _c("hr")
        ]),
    _vm._v(" "),
    _vm.cart.length > 0
      ? _c(
          "div",
          _vm._l(_vm.cart, function(item) {
            return _c("div", { key: item.name, staticClass: "rowgap" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-4" }, [
                  _c("img", {
                    attrs: { src: item.image, alt: "image", width: "300px" }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3" }, [
                  _c("b", [_vm._v("Name:")]),
                  _vm._v(" " + _vm._s(item.name) + "\n        ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3" }, [
                  _c("b", [_vm._v("€" + _vm._s(item.price))])
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("b", [_vm._v("Amount:")]),
                  _vm._v(" " + _vm._s(item.quantity) + "\n        ")
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c("remove-button", {
                      attrs: { item: item },
                      on: { removeFromCart: _vm.removeFromCart }
                    })
                  ],
                  1
                )
              ])
            ])
          }),
          0
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.cart.length != 0
      ? _c("div", [
          _c("div", { staticClass: "subtotal" }, [
            _c("div", [
              _c("span", [
                _c("b", [_vm._v("Subtotal:")]),
                _vm._v(" €" + _vm._s(_vm.subtotal.toFixed(2)))
              ])
            ]),
            _vm._v(" "),
            _vm.kortingsCodeGebruikt
              ? _c("div", { staticClass: "korting" }, [
                  _c("b", [_vm._v("Discount (25%):")]),
                  _vm._v(" " + _vm._s(_vm.kortingsBedrag.toFixed(2)))
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "totaal" }, [
              _c("b", [_vm._v("Total:")]),
              _vm._v(" €" + _vm._s(_vm.totaal.toFixed(2)))
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "extension-component",
                  { attrs: { name: "checkout-button" } },
                  [
                    _c("button", {
                      staticClass: "buttonCheckout",
                      on: { click: _vm.order }
                    })
                  ]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("div", [
            _vm._v("USE A DISCOUNT CODE:\n      "),
            _c("input", {
              domProps: { value: _vm.kortingscode },
              on: {
                input: function(event) {
                  return (_vm.kortingscode = event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c(
              "button",
              { staticClass: "buttonCode", on: { click: _vm.valideerCode } },
              [_vm._v("use code")]
            )
          ]),
          _vm._v(" "),
          _vm.error
            ? _c("div", { staticClass: "errorCode" }, [
                _vm._v("This discount code is not valid!")
              ])
            : _vm._e()
        ])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      [
        _c("hr"),
        _vm._v(" "),
        _c("h4", [_vm._v("Items that you might like...")]),
        _vm._v(" "),
        _c("extension-component", { attrs: { name: "recommended-products" } })
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md" }, [
      _c("h3", [_vm._v("My shopping cart")])
    ])
  }
]
render._withStripped = true

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
},{"./RemoveButton.vue":"RemoveButton.vue"}],"../../../../../../../react-router-dom.external":[function(require,module,exports) {
module.exports=require('react-router-dom');
},{}],"../../../../../../../react.external":[function(require,module,exports) {
module.exports=require('react');
},{}],"OverviewProducts.vue":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  name: 'overview-products',
  props: ['cart'],
  data: function data() {
    return {
      currentPage: 0,
      itemsPerPage: 2
    };
  },
  computed: {
    displayedItems: function displayedItems() {
      return this.cart.slice(this.currentPage * this.itemsPerPage, (this.currentPage + 1) * this.itemsPerPage);
    }
  }
};
exports.default = _default;
        var $f2477d = exports.default || module.exports;
      
      if (typeof $f2477d === 'function') {
        $f2477d = $f2477d.options;
      }
    
        /* template */
        Object.assign($f2477d, (function () {
          var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.cart === undefined
        ? [
            _c("p", { staticClass: "centered" }, [
              _vm._v("Something went wrong, your cart is empty")
            ])
          ]
        : [
            _c(
              "div",
              { staticClass: "cart" },
              [
                _c("h2", [_vm._v("Cart")]),
                _vm._v(" "),
                _vm._l(_vm.displayedItems, function(item) {
                  return _c("div", { key: item.id, staticClass: "cartitem" }, [
                    _c("p", [_vm._v(_vm._s(item.name))]),
                    _vm._v("\n        €" + _vm._s(item.price) + "\n        "),
                    _c("img", {
                      attrs: { src: item.image, alt: "productimage" }
                    })
                  ])
                }),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "paginate",
                    attrs: { disabled: _vm.currentPage === 0 },
                    on: {
                      click: function($event) {
                        _vm.currentPage -= 1
                      }
                    }
                  },
                  [_vm._v("<")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "paginate",
                    attrs: {
                      disabled:
                        (_vm.currentPage + 1) * _vm.itemsPerPage >=
                        _vm.cart.length
                    },
                    on: {
                      click: function($event) {
                        _vm.currentPage += 1
                      }
                    }
                  },
                  [_vm._v(">")]
                )
              ],
              2
            )
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
},{}],"index.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setup = setup;
var _AddButton = _interopRequireDefault(require("./AddButton.vue"));
var _Cart = _interopRequireDefault(require("./Cart.vue"));
var _reactRouterDom = require("react-router-dom");
var React = _interopRequireWildcard(require("react"));
var _OverviewProducts = _interopRequireDefault(require("./OverviewProducts.vue"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function setup(app) {
  app.setData('cart', []);
  var addToCart = function addToCart(item) {
    var cart = app.getData('cart');
    var itemIndex = cart.findIndex(function (cartItem) {
      return cartItem.name === item.name;
    });
    if (itemIndex !== -1) {
      cart[itemIndex].quantity++;
      app.setData('cartLength', app.getData('cartLength') + 1);
    } else {
      item.quantity = 1;
      cart.push(item);
      app.setData('cartLength', app.getData('cartLength') + 1);
    }
    var cartLength = cart.reduce(function (acc, curr) {
      return acc + curr.quantity;
    }, 0);
    app.emit('update-cart', cart);
    app.setData('cart', cart);
    app.setData('cartLength', cartLength);
  };
  addToCart({
    product_id: 1,
    name: 'HP Pavilion - 15.6 inch',
    category: "Laptops",
    price: 999,
    description: 'Deze HP Pavilion 15-eg2025nb laptop is geschikt voor het typen van verslagen en het maken van presentaties.',
    image: 'https://media.s-bol.com/YXGXnLvwXyDn/W8P2lJ/1200x914.jpg'
  });
  addToCart({
    product_id: 2,
    name: 'HP Pavilion - 15.6 inch',
    category: "Laptops",
    price: 999,
    description: 'Deze HP Pavilion 15-eg2025nb laptop is geschikt voor het typen van verslagen en het maken van presentaties.',
    image: 'https://media.s-bol.com/YXGXnLvwXyDn/W8P2lJ/1200x914.jpg'
  });
  addToCart({
    product_id: 2,
    name: 'HP Pavilion - 152.6 inch',
    category: "Laptops",
    price: 999,
    description: 'Deze HP Pavilion 15-eg2025nb laptop is geschikt voor het typen van verslagen en het maken van presentaties.',
    image: 'https://media.s-bol.com/YXGXnLvwXyDn/W8P2lJ/1200x914.jpg'
  });
  app.registerExtension('add-button', app.fromVue(_AddButton.default, {
    addToCart: addToCart
  }));
  var MenuComponent = function MenuComponent() {
    var _React$useState = React.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      cartAmount = _React$useState2[0],
      setCartAmount = _React$useState2[1];
    var updateCartAmount = function updateCartAmount() {
      var newCartAmount = app.getData('cart').reduce(function (total, item) {
        return total + item.quantity;
      }, 0);
      setCartAmount(newCartAmount);
    };
    React.useEffect(function () {
      updateCartAmount();
      app.on('update-cart', updateCartAmount);
      return function () {
        return app.off('update-cart', updateCartAmount);
      };
    }, [app.getData('cart').length]);
    return React.createElement(_reactRouterDom.Link, {
      to: "/cart"
    }, "Cart (", cartAmount, ")");
  };
  app.registerMenu(MenuComponent);
  app.registerExtension('overview-products', app.fromVue(_OverviewProducts.default, {
    cart: app.getData('cart')
  }));
  app.registerPage("/cart", app.fromVue(_Cart.default, {
    cart: app.getData('cart')
  }));
}
// removeFromCart(item) {
//   const cart = this.cart;
//   const index = cart.findIndex((item2) => item2.product_id === item.product_id);
//   console.log('log is index daar', index)
//   if (index !== -1) {
//     console.log("cart poef", cart[index])
//     if (cart[index].quantity > 1) {
//       this.cart[index].quantity--;
//     } else {
//       this.cart.splice(index, 1);
//     }
//   }
//   this.cartSubtotal();
//   this.applyDiscount();
// },
},{"./AddButton.vue":"AddButton.vue","./Cart.vue":"Cart.vue","react-router-dom":"../../../../../../../react-router-dom.external","react":"../../../../../../../react.external","./OverviewProducts.vue":"OverviewProducts.vue"}]},{},["index.tsx"], null);global.parcelChunkpr_bachelorproefwebshopvue=parcelRequire}(window,window.parcelChunkpr_bachelorproefwebshopvue));
_export(module.exports);
},
}});
//# sourceMappingURL=index.js.map
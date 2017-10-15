webpackJsonp([3],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5d4662e0_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(24);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(21)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5d4662e0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5d4662e0_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/admin/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5d4662e0", Component.options)
  } else {
    hotAPI.reload("data-v-5d4662e0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(20)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 20 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(22);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(19)("be9ef4ba", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5d4662e0\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5d4662e0\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(true);
// imports


// module
exports.push([module.i, "\n#header h1[data-v-5d4662e0] {\n  line-height: 20px;\n  color: #fff;\n  background: none;\n  font-size: 23px;\n}\ninput[type=\"file\"][data-v-5d4662e0] {\n  width: 60px;\n}\n", "", {"version":3,"sources":["/Users/secret/study/koa_study/src/views/admin/index.vue"],"names":[],"mappings":";AAAA;EACE,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;CAAE;AAEpB;EACE,YAAY;CAAE","file":"index.vue","sourcesContent":["#header h1 {\n  line-height: 20px;\n  color: #fff;\n  background: none;\n  font-size: 23px; }\n\ninput[type=\"file\"] {\n  width: 60px; }\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: function data() {
    return {
      productions: []
    };
  },

  computed: {
    store: function store() {
      return this.$store;
    }

  },
  created: function created() {
    var self = this;
    $.get('/production/index', function (productions) {
      self.productions = productions;
    });
  },
  updated: function updated() {

    this.productions.map(function (p) {
      $(".upload_img_" + p.id).uploadFile({
        url: "/admin/production/create_img",
        fileName: "myfile"
      });
    });
  }
};

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _vm._m(2),
    _vm._v(" "),
    _vm._m(3),
    _vm._v(" "),
    _c("div", { attrs: { id: "content" } }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "widget-box" }, [
          _vm._m(4),
          _vm._v(" "),
          _c("div", { staticClass: "widget-content nopadding" }, [
            _c(
              "div",
              {
                staticClass: "dataTables_wrapper",
                attrs: { id: "DataTables_Table_0_wrapper", role: "grid" }
              },
              [
                _vm._m(5),
                _vm._v(" "),
                _c(
                  "table",
                  {
                    staticClass: "table table-bordered data-table dataTable",
                    attrs: { id: "DataTables_Table_0" }
                  },
                  [
                    _vm._m(6),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      {
                        attrs: {
                          role: "alert",
                          "aria-live": "polite",
                          "aria-relevant": "all"
                        }
                      },
                      _vm._l(_vm.productions, function(val) {
                        return _c("tr", { staticClass: "gradeA even" }, [
                          _c("td", { staticClass: " " }, [
                            _vm._v(_vm._s(val.productName))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: " " }, [
                            _vm._v(_vm._s(val.barcode))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: " " }, [
                            _vm._v(_vm._s(val.salePrice))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: " " }, [
                            _vm._v(_vm._s(val.costPrice))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: " " }, [
                            _vm._v(_vm._s(val.weight))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: " " }, [
                            _vm._v(_vm._s(val.taste))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: " " }, [
                            _vm._v(_vm._s(val.addStockNum))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: " " }, [
                            _vm._v(_vm._s(val.factory))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: " " }, [
                            _c("img", { attrs: { src: val.imgUrl } })
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: " " }, [
                            _c("div", { class: ["upload_img_" + val.id] }, [
                              _vm._v("上传")
                            ])
                          ])
                        ])
                      })
                    )
                  ]
                ),
                _vm._v(" "),
                _vm._m(7)
              ]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "header" } }, [_c("h1", [_vm._v("狗蛋超市")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "navbar navbar-inverse", attrs: { id: "user-nav" } },
      [
        _c("ul", { staticClass: "nav" }, [
          _c(
            "li",
            { staticClass: "dropdown", attrs: { id: "profile-messages" } },
            [
              _c(
                "a",
                {
                  staticClass: "dropdown-toggle",
                  attrs: {
                    title: "",
                    href: "#",
                    "data-toggle": "dropdown",
                    "data-target": "#profile-messages"
                  }
                },
                [
                  _c("i", { staticClass: "icon icon-user" }),
                  _vm._v(" "),
                  _c("span", { staticClass: "text" }, [_vm._v("Welcome User")]),
                  _c("b", { staticClass: "caret" })
                ]
              ),
              _vm._v(" "),
              _c("ul", { staticClass: "dropdown-menu" }, [
                _c("li", [
                  _c("a", { attrs: { href: "#" } }, [
                    _c("i", { staticClass: "icon-user" }),
                    _vm._v(" My Profile")
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "divider" }),
                _vm._v(" "),
                _c("li", [
                  _c("a", { attrs: { href: "#" } }, [
                    _c("i", { staticClass: "icon-check" }),
                    _vm._v(" My Tasks")
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "divider" }),
                _vm._v(" "),
                _c("li", [
                  _c("a", { attrs: { href: "login.html" } }, [
                    _c("i", { staticClass: "icon-key" }),
                    _vm._v(" Log Out")
                  ])
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "li",
            { staticClass: "dropdown", attrs: { id: "menu-messages" } },
            [
              _c(
                "a",
                {
                  staticClass: "dropdown-toggle",
                  attrs: {
                    href: "#",
                    "data-toggle": "dropdown",
                    "data-target": "#menu-messages"
                  }
                },
                [
                  _c("i", { staticClass: "icon icon-envelope" }),
                  _vm._v(" "),
                  _c("span", { staticClass: "text" }, [_vm._v("Messages")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "label label-important" }, [
                    _vm._v("5")
                  ]),
                  _vm._v(" "),
                  _c("b", { staticClass: "caret" })
                ]
              ),
              _vm._v(" "),
              _c("ul", { staticClass: "dropdown-menu" }, [
                _c("li", [
                  _c(
                    "a",
                    { staticClass: "sAdd", attrs: { title: "", href: "#" } },
                    [
                      _c("i", { staticClass: "icon-plus" }),
                      _vm._v(" new message")
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "divider" }),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    { staticClass: "sInbox", attrs: { title: "", href: "#" } },
                    [
                      _c("i", { staticClass: "icon-envelope" }),
                      _vm._v(" inbox")
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "divider" }),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    { staticClass: "sOutbox", attrs: { title: "", href: "#" } },
                    [
                      _c("i", { staticClass: "icon-arrow-up" }),
                      _vm._v(" outbox")
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "divider" }),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    { staticClass: "sTrash", attrs: { title: "", href: "#" } },
                    [_c("i", { staticClass: "icon-trash" }), _vm._v(" trash")]
                  )
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c("li", {}, [
            _c("a", { attrs: { title: "", href: "#" } }, [
              _c("i", { staticClass: "icon icon-cog" }),
              _vm._v(" "),
              _c("span", { staticClass: "text" }, [_vm._v("Settings")])
            ])
          ]),
          _vm._v(" "),
          _c("li", {}, [
            _c("a", { attrs: { title: "", href: "login.html" } }, [
              _c("i", { staticClass: "icon icon-share-alt" }),
              _vm._v(" "),
              _c("span", { staticClass: "text" }, [_vm._v("Logout")])
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "search" } }, [
      _c("input", { attrs: { type: "text", placeholder: "Search here..." } }),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "tip-bottom",
          attrs: { type: "submit", title: "Search" }
        },
        [_c("i", { staticClass: "icon-search icon-white" })]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "sidebar" } }, [
      _c("a", { staticClass: "visible-phone", attrs: { href: "#" } }, [
        _c("i", { staticClass: "icon icon-home" }),
        _vm._v(" Dashboard")
      ]),
      _vm._v(" "),
      _c("ul", [
        _c("li", { staticClass: "active" }, [
          _c("a", { attrs: { href: "index.html" } }, [
            _c("i", { staticClass: "icon icon-home" }),
            _vm._v(" "),
            _c("span", [_vm._v("产品列表")])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "widget-title" }, [
      _c("span", { staticClass: "icon" }, [
        _c("i", { staticClass: "icon-th" })
      ]),
      _vm._v(" "),
      _c("h5", [_vm._v("Data table")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", {}, [
      _c(
        "div",
        {
          staticClass: "dataTables_length",
          attrs: { id: "DataTables_Table_0_length" }
        },
        [
          _c("label", [
            _vm._v("Show\n\t\t\t\t\t\t\t\t"),
            _c(
              "div",
              {
                staticClass: "select2-container",
                attrs: { id: "s2id_autogen1" }
              },
              [
                _c(
                  "a",
                  {
                    staticClass: "select2-choice",
                    attrs: { href: "#", onclick: "return false;" }
                  },
                  [
                    _c("span", [_vm._v("10")]),
                    _c("abbr", {
                      staticClass: "select2-search-choice-close",
                      staticStyle: { display: "none" }
                    }),
                    _vm._v(" "),
                    _c("div", [_c("b")])
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "select2-drop select2-offscreen" }, [
                  _c("div", { staticClass: "select2-search" }, [
                    _c("input", {
                      staticClass: "select2-input",
                      attrs: {
                        type: "text",
                        autocomplete: "off",
                        tabindex: "0"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("ul", { staticClass: "select2-results" })
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "select",
              {
                staticStyle: { display: "none" },
                attrs: {
                  size: "1",
                  name: "DataTables_Table_0_length",
                  "aria-controls": "DataTables_Table_0"
                }
              },
              [
                _c("option", { attrs: { value: "10", selected: "selected" } }, [
                  _vm._v("10")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "25" } }, [_vm._v("25")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "50" } }, [_vm._v("50")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "100" } }, [_vm._v("100")])
              ]
            ),
            _vm._v(" entries")
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { attrs: { role: "row" } }, [
        _c("th", {}, [_vm._v("产品名称")]),
        _vm._v(" "),
        _c("th", {}, [_vm._v("条形码")]),
        _vm._v(" "),
        _c("th", {}, [_vm._v("卖价")]),
        _vm._v(" "),
        _c("th", {}, [_vm._v("成本")]),
        _vm._v(" "),
        _c("th", {}, [_vm._v("重量")]),
        _vm._v(" "),
        _c("th", {}, [_vm._v("味道")]),
        _vm._v(" "),
        _c("th", {}, [_vm._v("剩余库存")]),
        _vm._v(" "),
        _c("th", {}, [_vm._v("厂家")]),
        _vm._v(" "),
        _c("th", {}, [_vm._v("当前图片")]),
        _vm._v(" "),
        _c("th", {}, [_vm._v("上传图片")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "fg-toolbar ui-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix"
      },
      [
        _c(
          "div",
          {
            staticClass: "dataTables_filter",
            attrs: { id: "DataTables_Table_0_filter" }
          },
          [
            _c("label", [
              _vm._v("Search: "),
              _c("input", {
                attrs: { type: "text", "aria-controls": "DataTables_Table_0" }
              })
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_full_numbers",
            attrs: { id: "DataTables_Table_0_paginate" }
          },
          [
            _c(
              "a",
              {
                staticClass:
                  "first ui-corner-tl ui-corner-bl fg-button ui-button ui-state-default ui-state-disabled",
                attrs: { tabindex: "0", id: "DataTables_Table_0_first" }
              },
              [_vm._v("First")]
            ),
            _c(
              "a",
              {
                staticClass:
                  "previous fg-button ui-button ui-state-default ui-state-disabled",
                attrs: { tabindex: "0", id: "DataTables_Table_0_previous" }
              },
              [_vm._v("Previous")]
            ),
            _c("span", [
              _c(
                "a",
                {
                  staticClass:
                    "fg-button ui-button ui-state-default ui-state-disabled",
                  attrs: { tabindex: "0" }
                },
                [_vm._v("1")]
              ),
              _c(
                "a",
                {
                  staticClass: "fg-button ui-button ui-state-default",
                  attrs: { tabindex: "0" }
                },
                [_vm._v("2")]
              ),
              _c(
                "a",
                {
                  staticClass: "fg-button ui-button ui-state-default",
                  attrs: { tabindex: "0" }
                },
                [_vm._v("3")]
              ),
              _c(
                "a",
                {
                  staticClass: "fg-button ui-button ui-state-default",
                  attrs: { tabindex: "0" }
                },
                [_vm._v("4")]
              ),
              _c(
                "a",
                {
                  staticClass: "fg-button ui-button ui-state-default",
                  attrs: { tabindex: "0" }
                },
                [_vm._v("5")]
              )
            ]),
            _c(
              "a",
              {
                staticClass: "next fg-button ui-button ui-state-default",
                attrs: { tabindex: "0", id: "DataTables_Table_0_next" }
              },
              [_vm._v("Next")]
            ),
            _c(
              "a",
              {
                staticClass:
                  "last ui-corner-tr ui-corner-br fg-button ui-button ui-state-default",
                attrs: { tabindex: "0", id: "DataTables_Table_0_last" }
              },
              [_vm._v("Last")]
            )
          ]
        )
      ]
    )
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5d4662e0", esExports)
  }
}

/***/ })
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWRtaW4vaW5kZXgudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FkbWluL2luZGV4LnZ1ZT85N2U1Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hZG1pbi9pbmRleC52dWU/ZmZmMCIsIndlYnBhY2s6Ly8vaW5kZXgudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hZG1pbi9pbmRleC52dWU/ODFiZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSx3QkFBZ007QUFDaE07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM0STtBQUM1STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLHNEQUFzRCxJQUFJO0FBQ3pJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7OztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGdCQUFnQjtBQUNuRCxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdC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QUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImpzLzMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVkNDY2MmUwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOmZhbHNlfSFzYXNzLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9pbmRleC52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCBfX3Z1ZV90ZW1wbGF0ZV9fIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTVkNDY2MmUwXFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vaW5kZXgudnVlXCJcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi01ZDQ2NjJlMFwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL2FkbWluL2luZGV4LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5LnN1YnN0cigwLCAyKSAhPT0gXCJfX1wifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gaW5kZXgudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTVkNDY2MmUwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNWQ0NjYyZTBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3MvYWRtaW4vaW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuICBNb2RpZmllZCBieSBFdmFuIFlvdSBAeXl4OTkwODAzXG4qL1xuXG52YXIgaGFzRG9jdW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG5cbmlmICh0eXBlb2YgREVCVUcgIT09ICd1bmRlZmluZWQnICYmIERFQlVHKSB7XG4gIGlmICghaGFzRG9jdW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3Z1ZS1zdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudC4gJyArXG4gICAgXCJVc2UgeyB0YXJnZXQ6ICdub2RlJyB9IGluIHlvdXIgV2VicGFjayBjb25maWcgdG8gaW5kaWNhdGUgYSBzZXJ2ZXItcmVuZGVyaW5nIGVudmlyb25tZW50LlwiXG4gICkgfVxufVxuXG52YXIgbGlzdFRvU3R5bGVzID0gcmVxdWlyZSgnLi9saXN0VG9TdHlsZXMnKVxuXG4vKlxudHlwZSBTdHlsZU9iamVjdCA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgcGFydHM6IEFycmF5PFN0eWxlT2JqZWN0UGFydD5cbn1cblxudHlwZSBTdHlsZU9iamVjdFBhcnQgPSB7XG4gIGNzczogc3RyaW5nO1xuICBtZWRpYTogc3RyaW5nO1xuICBzb3VyY2VNYXA6ID9zdHJpbmdcbn1cbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHsvKlxuICBbaWQ6IG51bWJlcl06IHtcbiAgICBpZDogbnVtYmVyLFxuICAgIHJlZnM6IG51bWJlcixcbiAgICBwYXJ0czogQXJyYXk8KG9iaj86IFN0eWxlT2JqZWN0UGFydCkgPT4gdm9pZD5cbiAgfVxuKi99XG5cbnZhciBoZWFkID0gaGFzRG9jdW1lbnQgJiYgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSlcbnZhciBzaW5nbGV0b25FbGVtZW50ID0gbnVsbFxudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwXG52YXIgaXNQcm9kdWN0aW9uID0gZmFsc2VcbnZhciBub29wID0gZnVuY3Rpb24gKCkge31cblxuLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG52YXIgaXNPbGRJRSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9tc2llIFs2LTldXFxiLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSlcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocGFyZW50SWQsIGxpc3QsIF9pc1Byb2R1Y3Rpb24pIHtcbiAgaXNQcm9kdWN0aW9uID0gX2lzUHJvZHVjdGlvblxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIGxpc3QpXG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgICAgZG9tU3R5bGUucmVmcy0tXG4gICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSlcbiAgICB9XG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbmV3TGlzdClcbiAgICAgIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzID0gW11cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXVxuICAgICAgaWYgKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKClcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMgLyogQXJyYXk8U3R5bGVPYmplY3Q+ICovKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pXG4gICAgICB9XG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIGlmIChkb21TdHlsZS5wYXJ0cy5sZW5ndGggPiBpdGVtLnBhcnRzLmxlbmd0aCkge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5sZW5ndGggPSBpdGVtLnBhcnRzLmxlbmd0aFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHsgaWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0cyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAoKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIHN0eWxlRWxlbWVudC50eXBlID0gJ3RleHQvY3NzJ1xuICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudClcbiAgcmV0dXJuIHN0eWxlRWxlbWVudFxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICB2YXIgdXBkYXRlLCByZW1vdmVcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlW2RhdGEtdnVlLXNzci1pZH49XCInICsgb2JqLmlkICsgJ1wiXScpXG5cbiAgaWYgKHN0eWxlRWxlbWVudCkge1xuICAgIGlmIChpc1Byb2R1Y3Rpb24pIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGFuZCBpbiBwcm9kdWN0aW9uIG1vZGUuXG4gICAgICAvLyBzaW1wbHkgZG8gbm90aGluZy5cbiAgICAgIHJldHVybiBub29wXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGJ1dCBpbiBkZXYgbW9kZS5cbiAgICAgIC8vIGZvciBzb21lIHJlYXNvbiBDaHJvbWUgY2FuJ3QgaGFuZGxlIHNvdXJjZSBtYXAgaW4gc2VydmVyLXJlbmRlcmVkXG4gICAgICAvLyBzdHlsZSB0YWdzIC0gc291cmNlIG1hcHMgaW4gPHN0eWxlPiBvbmx5IHdvcmtzIGlmIHRoZSBzdHlsZSB0YWcgaXNcbiAgICAgIC8vIGNyZWF0ZWQgYW5kIGluc2VydGVkIGR5bmFtaWNhbGx5LiBTbyB3ZSByZW1vdmUgdGhlIHNlcnZlciByZW5kZXJlZFxuICAgICAgLy8gc3R5bGVzIGFuZCBpbmplY3QgbmV3IG9uZXMuXG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgaWYgKGlzT2xkSUUpIHtcbiAgICAvLyB1c2Ugc2luZ2xldG9uIG1vZGUgZm9yIElFOS5cbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrK1xuICAgIHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKSlcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSlcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKVxuICB9IGVsc2Uge1xuICAgIC8vIHVzZSBtdWx0aS1zdHlsZS10YWcgbW9kZSBpbiBhbGwgb3RoZXIgY2FzZXNcbiAgICBzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShvYmopXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcbiAgICAgICAgICBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuICAgICAgICAgIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKVxuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKVxuICAgIH1cbiAgfVxufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgdGV4dFN0b3JlID0gW11cblxuICByZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudFxuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpXG4gIH1cbn0pKClcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzc1xuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKVxuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKVxuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXNcbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSlcbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZUVsZW1lbnQsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzc1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWFcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXBcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKVxuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZGV2dG9vbHMvZG9jcy9qYXZhc2NyaXB0LWRlYnVnZ2luZ1xuICAgIC8vIHRoaXMgbWFrZXMgc291cmNlIG1hcHMgaW5zaWRlIHN0eWxlIHRhZ3Mgd29yayBwcm9wZXJseSBpbiBDaHJvbWVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VVUkw9JyArIHNvdXJjZU1hcC5zb3VyY2VzWzBdICsgJyAqLydcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArICcgKi8nXG4gIH1cblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzXG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpXG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKVxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIi8qKlxuICogVHJhbnNsYXRlcyB0aGUgbGlzdCBmb3JtYXQgcHJvZHVjZWQgYnkgY3NzLWxvYWRlciBpbnRvIHNvbWV0aGluZ1xuICogZWFzaWVyIHRvIG1hbmlwdWxhdGUuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChwYXJlbnRJZCwgbGlzdCkge1xuICB2YXIgc3R5bGVzID0gW11cbiAgdmFyIG5ld1N0eWxlcyA9IHt9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIHZhciBpZCA9IGl0ZW1bMF1cbiAgICB2YXIgY3NzID0gaXRlbVsxXVxuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl1cbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXVxuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgaWQ6IHBhcmVudElkICsgJzonICsgaSxcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9XG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0geyBpZDogaWQsIHBhcnRzOiBbcGFydF0gfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXNcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVkNDY2MmUwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOmZhbHNlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiYmU5ZWY0YmFcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWQ0NjYyZTBcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6ZmFsc2V9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW5kZXgudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVkNDY2MmUwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOmZhbHNlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi01ZDQ2NjJlMFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvdmlld3MvYWRtaW4vaW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuI2hlYWRlciBoMVtkYXRhLXYtNWQ0NjYyZTBdIHtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgZm9udC1zaXplOiAyM3B4O1xcbn1cXG5pbnB1dFt0eXBlPVxcXCJmaWxlXFxcIl1bZGF0YS12LTVkNDY2MmUwXSB7XFxuICB3aWR0aDogNjBweDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9zZWNyZXQvc3R1ZHkva29hX3N0dWR5L3NyYy92aWV3cy9hZG1pbi9pbmRleC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0NBQUU7QUFFcEI7RUFDRSxZQUFZO0NBQUVcIixcImZpbGVcIjpcImluZGV4LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjaGVhZGVyIGgxIHtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgZm9udC1zaXplOiAyM3B4OyB9XFxuXFxuaW5wdXRbdHlwZT1cXFwiZmlsZVxcXCJdIHtcXG4gIHdpZHRoOiA2MHB4OyB9XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTVkNDY2MmUwXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy92aWV3cy9hZG1pbi9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIjx0ZW1wbGF0ZT5cblx0PGRpdj5cblx0XHQ8ZGl2IGlkPVwiaGVhZGVyXCI+XG5cdFx0XHQ8aDE+54uX6JuL6LaF5biCPC9oMT5cblx0XHQ8L2Rpdj5cblxuXHRcdDxkaXYgaWQ9XCJ1c2VyLW5hdlwiIGNsYXNzPVwibmF2YmFyIG5hdmJhci1pbnZlcnNlXCI+XG5cdFx0XHQ8dWwgY2xhc3M9XCJuYXZcIj5cblx0XHRcdFx0PGxpIGNsYXNzPVwiZHJvcGRvd25cIiBpZD1cInByb2ZpbGUtbWVzc2FnZXNcIj48YSB0aXRsZT1cIlwiIGhyZWY9XCIjXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNwcm9maWxlLW1lc3NhZ2VzXCIgY2xhc3M9XCJkcm9wZG93bi10b2dnbGVcIj48aVxuXHRcdFx0XHRcdGNsYXNzPVwiaWNvbiBpY29uLXVzZXJcIj48L2k+IDxzcGFuIGNsYXNzPVwidGV4dFwiPldlbGNvbWUgVXNlcjwvc3Bhbj48YiBjbGFzcz1cImNhcmV0XCI+PC9iPjwvYT5cblx0XHRcdFx0XHQ8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51XCI+XG5cdFx0XHRcdFx0XHQ8bGk+PGEgaHJlZj1cIiNcIj48aSBjbGFzcz1cImljb24tdXNlclwiPjwvaT4gTXkgUHJvZmlsZTwvYT48L2xpPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiZGl2aWRlclwiPjwvbGk+XG5cdFx0XHRcdFx0XHQ8bGk+PGEgaHJlZj1cIiNcIj48aSBjbGFzcz1cImljb24tY2hlY2tcIj48L2k+IE15IFRhc2tzPC9hPjwvbGk+XG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJkaXZpZGVyXCI+PC9saT5cblx0XHRcdFx0XHRcdDxsaT48YSBocmVmPVwibG9naW4uaHRtbFwiPjxpIGNsYXNzPVwiaWNvbi1rZXlcIj48L2k+IExvZyBPdXQ8L2E+PC9saT5cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHQ8bGkgY2xhc3M9XCJkcm9wZG93blwiIGlkPVwibWVudS1tZXNzYWdlc1wiPjxhIGhyZWY9XCIjXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGRhdGEtdGFyZ2V0PVwiI21lbnUtbWVzc2FnZXNcIlxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkcm9wZG93bi10b2dnbGVcIj48aSBjbGFzcz1cImljb24gaWNvbi1lbnZlbG9wZVwiPjwvaT4gPHNwYW5cblx0XHRcdFx0XHRjbGFzcz1cInRleHRcIj5NZXNzYWdlczwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJsYWJlbCBsYWJlbC1pbXBvcnRhbnRcIj41PC9zcGFuPiA8YiBjbGFzcz1cImNhcmV0XCI+PC9iPjwvYT5cblx0XHRcdFx0XHQ8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51XCI+XG5cdFx0XHRcdFx0XHQ8bGk+PGEgY2xhc3M9XCJzQWRkXCIgdGl0bGU9XCJcIiBocmVmPVwiI1wiPjxpIGNsYXNzPVwiaWNvbi1wbHVzXCI+PC9pPiBuZXcgbWVzc2FnZTwvYT48L2xpPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiZGl2aWRlclwiPjwvbGk+XG5cdFx0XHRcdFx0XHQ8bGk+PGEgY2xhc3M9XCJzSW5ib3hcIiB0aXRsZT1cIlwiIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJpY29uLWVudmVsb3BlXCI+PC9pPiBpbmJveDwvYT48L2xpPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiZGl2aWRlclwiPjwvbGk+XG5cdFx0XHRcdFx0XHQ8bGk+PGEgY2xhc3M9XCJzT3V0Ym94XCIgdGl0bGU9XCJcIiBocmVmPVwiI1wiPjxpIGNsYXNzPVwiaWNvbi1hcnJvdy11cFwiPjwvaT4gb3V0Ym94PC9hPjwvbGk+XG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJkaXZpZGVyXCI+PC9saT5cblx0XHRcdFx0XHRcdDxsaT48YSBjbGFzcz1cInNUcmFzaFwiIHRpdGxlPVwiXCIgaHJlZj1cIiNcIj48aSBjbGFzcz1cImljb24tdHJhc2hcIj48L2k+IHRyYXNoPC9hPjwvbGk+XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC9saT5cblx0XHRcdFx0PGxpIGNsYXNzPVwiXCI+PGEgdGl0bGU9XCJcIiBocmVmPVwiI1wiPjxpIGNsYXNzPVwiaWNvbiBpY29uLWNvZ1wiPjwvaT4gPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+U2V0dGluZ3M8L3NwYW4+PC9hPjwvbGk+XG5cdFx0XHRcdDxsaSBjbGFzcz1cIlwiPjxhIHRpdGxlPVwiXCIgaHJlZj1cImxvZ2luLmh0bWxcIj48aSBjbGFzcz1cImljb24gaWNvbi1zaGFyZS1hbHRcIj48L2k+IDxzcGFuIGNsYXNzPVwidGV4dFwiPkxvZ291dDwvc3Bhbj48L2E+XG5cdFx0XHRcdDwvbGk+XG5cdFx0XHQ8L3VsPlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgaWQ9XCJzZWFyY2hcIj5cblx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGhlcmUuLi5cIi8+XG5cdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInRpcC1ib3R0b21cIiB0aXRsZT1cIlNlYXJjaFwiPjxpIGNsYXNzPVwiaWNvbi1zZWFyY2ggaWNvbi13aGl0ZVwiPjwvaT48L2J1dHRvbj5cblx0XHQ8L2Rpdj5cblxuXHRcdDxkaXYgaWQ9XCJzaWRlYmFyXCI+XG5cdFx0XHQ8YSBocmVmPVwiI1wiIGNsYXNzPVwidmlzaWJsZS1waG9uZVwiPjxpIGNsYXNzPVwiaWNvbiBpY29uLWhvbWVcIj48L2k+IERhc2hib2FyZDwvYT5cblx0XHRcdDx1bD5cblx0XHRcdFx0PGxpIGNsYXNzPVwiYWN0aXZlXCI+PGEgaHJlZj1cImluZGV4Lmh0bWxcIj48aSBjbGFzcz1cImljb24gaWNvbi1ob21lXCI+PC9pPiA8c3Bhbj7kuqflk4HliJfooag8L3NwYW4+PC9hPjwvbGk+XG5cdFx0XHQ8L3VsPlxuXHRcdDwvZGl2PlxuXG5cdFx0PGRpdiBpZD1cImNvbnRlbnRcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cIndpZGdldC1ib3hcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwid2lkZ2V0LXRpdGxlXCI+PHNwYW4gY2xhc3M9XCJpY29uXCI+PGkgY2xhc3M9XCJpY29uLXRoXCI+PC9pPjwvc3Bhbj5cblx0XHRcdFx0XHRcdDxoNT5EYXRhIHRhYmxlPC9oNT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwid2lkZ2V0LWNvbnRlbnQgbm9wYWRkaW5nXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGlkPVwiRGF0YVRhYmxlc19UYWJsZV8wX3dyYXBwZXJcIiBjbGFzcz1cImRhdGFUYWJsZXNfd3JhcHBlclwiIHJvbGU9XCJncmlkXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGlkPVwiRGF0YVRhYmxlc19UYWJsZV8wX2xlbmd0aFwiIGNsYXNzPVwiZGF0YVRhYmxlc19sZW5ndGhcIj48bGFiZWw+U2hvd1xuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInNlbGVjdDItY29udGFpbmVyXCIgaWQ9XCJzMmlkX2F1dG9nZW4xXCI+PGEgaHJlZj1cIiNcIiBvbmNsaWNrPVwicmV0dXJuIGZhbHNlO1wiXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic2VsZWN0Mi1jaG9pY2VcIj4gPHNwYW4+MTA8L3NwYW4+PGFiYnJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJzZWxlY3QyLXNlYXJjaC1jaG9pY2UtY2xvc2VcIiBzdHlsZT1cImRpc3BsYXk6bm9uZTtcIj48L2FiYnI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+PGI+PC9iPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwic2VsZWN0Mi1kcm9wIHNlbGVjdDItb2Zmc2NyZWVuXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInNlbGVjdDItc2VhcmNoXCI+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgY2xhc3M9XCJzZWxlY3QyLWlucHV0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiMFwiPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzcz1cInNlbGVjdDItcmVzdWx0c1wiPjwvdWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c2VsZWN0IHNpemU9XCIxXCIgbmFtZT1cIkRhdGFUYWJsZXNfVGFibGVfMF9sZW5ndGhcIiBhcmlhLWNvbnRyb2xzPVwiRGF0YVRhYmxlc19UYWJsZV8wXCJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMTBcIiBzZWxlY3RlZD1cInNlbGVjdGVkXCI+MTA8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjI1XCI+MjU8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjUwXCI+NTA8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjEwMFwiPjEwMDwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+IGVudHJpZXM8L2xhYmVsPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtYm9yZGVyZWQgZGF0YS10YWJsZSBkYXRhVGFibGVcIiBpZD1cIkRhdGFUYWJsZXNfVGFibGVfMFwiPlxuXHRcdFx0XHRcdFx0XHRcdDx0aGVhZD5cblx0XHRcdFx0XHRcdFx0XHQ8dHIgcm9sZT1cInJvd1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzPVwiXCIgPuS6p+WTgeWQjeensDwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGggY2xhc3M9XCJcIj7mnaHlvaLnoIE8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzPVwiXCI+5Y2W5Lu3PC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0aCBjbGFzcz1cIlwiPuaIkOacrDwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGggY2xhc3M9XCJcIj7ph43ph488L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzPVwiXCI+5ZGz6YGTPC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0aCBjbGFzcz1cIlwiPuWJqeS9meW6k+WtmDwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGggY2xhc3M9XCJcIj7ljoLlrrY8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzPVwiXCI+5b2T5YmN5Zu+54mHPC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0aCBjbGFzcz1cIlwiPuS4iuS8oOWbvueJhzwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdFx0XHQ8L3RoZWFkPlxuXG5cdFx0XHRcdFx0XHRcdFx0PHRib2R5IHJvbGU9XCJhbGVydFwiIGFyaWEtbGl2ZT1cInBvbGl0ZVwiIGFyaWEtcmVsZXZhbnQ9XCJhbGxcIj5cblxuXHRcdFx0XHRcdFx0XHRcdDx0ciBjbGFzcz1cImdyYWRlQSBldmVuXCIgdi1mb3I9XCJ2YWwgaW4gcHJvZHVjdGlvbnNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzcz1cIiBcIj57eyB2YWwucHJvZHVjdE5hbWUgfX08L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzPVwiIFwiPnt7IHZhbC5iYXJjb2RlIH19PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzcz1cIiBcIj57eyB2YWwuc2FsZVByaWNlIH19PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzcz1cIiBcIj57eyB2YWwuY29zdFByaWNlIH19PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzcz1cIiBcIj57eyB2YWwud2VpZ2h0IH19PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzcz1cIiBcIj57eyB2YWwudGFzdGUgfX08L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzPVwiIFwiPnt7IHZhbC5hZGRTdG9ja051bSB9fTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQgY2xhc3M9XCIgXCI+e3sgdmFsLmZhY3RvcnkgfX08L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzPVwiIFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIDpzcmM9XCJ2YWwuaW1nVXJsXCIgPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzcz1cIiBcIiA+PGRpdiAgOmNsYXNzPVwiWyd1cGxvYWRfaW1nXycrdmFsLmlkXSBcIj7kuIrkvKA8L2Rpdj48L3RkPlxuXHRcdFx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHRcdFx0PC90Ym9keT5cblx0XHRcdFx0XHRcdFx0PC90YWJsZT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZnLXRvb2xiYXIgdWktdG9vbGJhciB1aS13aWRnZXQtaGVhZGVyIHVpLWNvcm5lci1ibCB1aS1jb3JuZXItYnIgdWktaGVscGVyLWNsZWFyZml4XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImRhdGFUYWJsZXNfZmlsdGVyXCIgaWQ9XCJEYXRhVGFibGVzX1RhYmxlXzBfZmlsdGVyXCI+PGxhYmVsPlNlYXJjaDogPGlucHV0IHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiRGF0YVRhYmxlc19UYWJsZV8wXCI+PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cImRhdGFUYWJsZXNfcGFnaW5hdGUgZmctYnV0dG9uc2V0IHVpLWJ1dHRvbnNldCBmZy1idXR0b25zZXQtbXVsdGkgdWktYnV0dG9uc2V0LW11bHRpIHBhZ2luZ19mdWxsX251bWJlcnNcIlxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJEYXRhVGFibGVzX1RhYmxlXzBfcGFnaW5hdGVcIj48YSB0YWJpbmRleD1cIjBcIlxuXHRcdFx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmaXJzdCB1aS1jb3JuZXItdGwgdWktY29ybmVyLWJsIGZnLWJ1dHRvbiB1aS1idXR0b24gdWktc3RhdGUtZGVmYXVsdCB1aS1zdGF0ZS1kaXNhYmxlZFwiXG5cdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIkRhdGFUYWJsZXNfVGFibGVfMF9maXJzdFwiPkZpcnN0PC9hPjxhIHRhYmluZGV4PVwiMFwiXG5cdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInByZXZpb3VzIGZnLWJ1dHRvbiB1aS1idXR0b24gdWktc3RhdGUtZGVmYXVsdCB1aS1zdGF0ZS1kaXNhYmxlZFwiXG5cdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIkRhdGFUYWJsZXNfVGFibGVfMF9wcmV2aW91c1wiPlByZXZpb3VzPC9hPjxzcGFuPjxhXG5cdFx0XHRcdFx0XHRcdFx0XHR0YWJpbmRleD1cIjBcIiBjbGFzcz1cImZnLWJ1dHRvbiB1aS1idXR0b24gdWktc3RhdGUtZGVmYXVsdCB1aS1zdGF0ZS1kaXNhYmxlZFwiPjE8L2E+PGEgdGFiaW5kZXg9XCIwXCJcblx0XHRcdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmctYnV0dG9uIHVpLWJ1dHRvbiB1aS1zdGF0ZS1kZWZhdWx0XCI+MjwvYT48YVxuXHRcdFx0XHRcdFx0XHRcdFx0dGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJmZy1idXR0b24gdWktYnV0dG9uIHVpLXN0YXRlLWRlZmF1bHRcIj4zPC9hPjxhIHRhYmluZGV4PVwiMFwiXG5cdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZnLWJ1dHRvbiB1aS1idXR0b24gdWktc3RhdGUtZGVmYXVsdFwiPjQ8L2E+PGFcblx0XHRcdFx0XHRcdFx0XHRcdHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiZmctYnV0dG9uIHVpLWJ1dHRvbiB1aS1zdGF0ZS1kZWZhdWx0XCI+NTwvYT48L3NwYW4+PGEgdGFiaW5kZXg9XCIwXCJcblx0XHRcdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm5leHQgZmctYnV0dG9uIHVpLWJ1dHRvbiB1aS1zdGF0ZS1kZWZhdWx0XCJcblx0XHRcdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIkRhdGFUYWJsZXNfVGFibGVfMF9uZXh0XCI+TmV4dDwvYT48YVxuXHRcdFx0XHRcdFx0XHRcdFx0dGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJsYXN0IHVpLWNvcm5lci10ciB1aS1jb3JuZXItYnIgZmctYnV0dG9uIHVpLWJ1dHRvbiB1aS1zdGF0ZS1kZWZhdWx0XCJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPVwiRGF0YVRhYmxlc19UYWJsZV8wX2xhc3RcIj5MYXN0PC9hPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXG5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByb2R1Y3Rpb25zOiBbXVxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgIHN0b3JlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRzdG9yZVxuICAgICAgfSxcblxuICAgIH0sXG4gICAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHNlbGY9dGhpcztcblx0XHRcdCQuZ2V0KCcvcHJvZHVjdGlvbi9pbmRleCcsZnVuY3Rpb24gKHByb2R1Y3Rpb25zKSB7XG5cdFx0XHRcdHNlbGYucHJvZHVjdGlvbnMgPSBwcm9kdWN0aW9ucztcbiAgICAgIH0pXG4gICAgfSxcblx0ICB1cGRhdGVkOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgIHRoaXMucHJvZHVjdGlvbnMubWFwKGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICQoXCIudXBsb2FkX2ltZ19cIitwLmlkKS51cGxvYWRGaWxlKHtcbiAgICAgICAgICB1cmw6XCIvYWRtaW4vcHJvZHVjdGlvbi9jcmVhdGVfaW1nXCIsXG4gICAgICAgICAgZmlsZU5hbWU6XCJteWZpbGVcIlxuICAgICAgICB9KTtcbiAgICAgIH0pXG5cbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG5cdCNoZWFkZXIgaDEge1xuXHRcdGxpbmUtaGVpZ2h0OiAyMHB4O1xuXHRcdGNvbG9yOiAjZmZmO1xuXHRcdGJhY2tncm91bmQ6IG5vbmU7XG5cdFx0Zm9udC1zaXplOiAyM3B4O1xuXHR9XG5cdGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcblx0XHR3aWR0aDogNjBweDtcblx0fVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gaW5kZXgudnVlPzFkOWJjMzBlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX3ZtLl9tKDApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLl9tKDEpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLl9tKDIpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLl9tKDMpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBhdHRyczogeyBpZDogXCJjb250ZW50XCIgfSB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aWRnZXQtYm94XCIgfSwgW1xuICAgICAgICAgIF92bS5fbSg0KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2lkZ2V0LWNvbnRlbnQgbm9wYWRkaW5nXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkYXRhVGFibGVzX3dyYXBwZXJcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJEYXRhVGFibGVzX1RhYmxlXzBfd3JhcHBlclwiLCByb2xlOiBcImdyaWRcIiB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uX20oNSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidGFibGVcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFibGUgdGFibGUtYm9yZGVyZWQgZGF0YS10YWJsZSBkYXRhVGFibGVcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiRGF0YVRhYmxlc19UYWJsZV8wXCIgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDYpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZTogXCJhbGVydFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtbGl2ZVwiOiBcInBvbGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtcmVsZXZhbnRcIjogXCJhbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5wcm9kdWN0aW9ucywgZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCB7IHN0YXRpY0NsYXNzOiBcImdyYWRlQSBldmVuXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwiIFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHZhbC5wcm9kdWN0TmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwiIFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHZhbC5iYXJjb2RlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCIgXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3ModmFsLnNhbGVQcmljZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwiIFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHZhbC5jb3N0UHJpY2UpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcIiBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh2YWwud2VpZ2h0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCIgXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3ModmFsLnRhc3RlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCIgXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3ModmFsLmFkZFN0b2NrTnVtKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCIgXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3ModmFsLmZhY3RvcnkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcIiBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IHZhbC5pbWdVcmwgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcIiBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBjbGFzczogW1widXBsb2FkX2ltZ19cIiArIHZhbC5pZF0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5LiK5LygXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX20oNylcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IGF0dHJzOiB7IGlkOiBcImhlYWRlclwiIH0gfSwgW19jKFwiaDFcIiwgW192bS5fdihcIueLl+ibi+i2heW4glwiKV0pXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJuYXZiYXIgbmF2YmFyLWludmVyc2VcIiwgYXR0cnM6IHsgaWQ6IFwidXNlci1uYXZcIiB9IH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwidWxcIiwgeyBzdGF0aWNDbGFzczogXCJuYXZcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duXCIsIGF0dHJzOiB7IGlkOiBcInByb2ZpbGUtbWVzc2FnZXNcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duLXRvZ2dsZVwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiI1wiLFxuICAgICAgICAgICAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwiZHJvcGRvd25cIixcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXRhcmdldFwiOiBcIiNwcm9maWxlLW1lc3NhZ2VzXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImljb24gaWNvbi11c2VyXCIgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtfdm0uX3YoXCJXZWxjb21lIFVzZXJcIildKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiYlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmV0XCIgfSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidWxcIiwgeyBzdGF0aWNDbGFzczogXCJkcm9wZG93bi1tZW51XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImljb24tdXNlclwiIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgTXkgUHJvZmlsZVwiKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJkaXZpZGVyXCIgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJpY29uLWNoZWNrXCIgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBNeSBUYXNrc1wiKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJkaXZpZGVyXCIgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwibG9naW4uaHRtbFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJpY29uLWtleVwiIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgTG9nIE91dFwiKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZHJvcGRvd25cIiwgYXR0cnM6IHsgaWQ6IFwibWVudS1tZXNzYWdlc1wiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZHJvcGRvd24tdG9nZ2xlXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBcIiNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcImRyb3Bkb3duXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YS10YXJnZXRcIjogXCIjbWVudS1tZXNzYWdlc1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJpY29uIGljb24tZW52ZWxvcGVcIiB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW192bS5fdihcIk1lc3NhZ2VzXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWwgbGFiZWwtaW1wb3J0YW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCI1XCIpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImJcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJldFwiIH0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZHJvcGRvd24tbWVudVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzQWRkXCIsIGF0dHJzOiB7IHRpdGxlOiBcIlwiLCBocmVmOiBcIiNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJpY29uLXBsdXNcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgbmV3IG1lc3NhZ2VcIilcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcImRpdmlkZXJcIiB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNJbmJveFwiLCBhdHRyczogeyB0aXRsZTogXCJcIiwgaHJlZjogXCIjXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvbi1lbnZlbG9wZVwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBpbmJveFwiKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZGl2aWRlclwiIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic091dGJveFwiLCBhdHRyczogeyB0aXRsZTogXCJcIiwgaHJlZjogXCIjXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvbi1hcnJvdy11cFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBvdXRib3hcIilcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcImRpdmlkZXJcIiB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNUcmFzaFwiLCBhdHRyczogeyB0aXRsZTogXCJcIiwgaHJlZjogXCIjXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvbi10cmFzaFwiIH0pLCBfdm0uX3YoXCIgdHJhc2hcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsaVwiLCB7fSwgW1xuICAgICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgdGl0bGU6IFwiXCIsIGhyZWY6IFwiI1wiIH0gfSwgW1xuICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJpY29uIGljb24tY29nXCIgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbX3ZtLl92KFwiU2V0dGluZ3NcIildKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwge30sIFtcbiAgICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IHRpdGxlOiBcIlwiLCBocmVmOiBcImxvZ2luLmh0bWxcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvbiBpY29uLXNoYXJlLWFsdFwiIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW192bS5fdihcIkxvZ291dFwiKV0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdXG4gICAgKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IGF0dHJzOiB7IGlkOiBcInNlYXJjaFwiIH0gfSwgW1xuICAgICAgX2MoXCJpbnB1dFwiLCB7IGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJTZWFyY2ggaGVyZS4uLlwiIH0gfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0aXAtYm90dG9tXCIsXG4gICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiwgdGl0bGU6IFwiU2VhcmNoXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvbi1zZWFyY2ggaWNvbi13aGl0ZVwiIH0pXVxuICAgICAgKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgYXR0cnM6IHsgaWQ6IFwic2lkZWJhclwiIH0gfSwgW1xuICAgICAgX2MoXCJhXCIsIHsgc3RhdGljQ2xhc3M6IFwidmlzaWJsZS1waG9uZVwiLCBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sIFtcbiAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvbiBpY29uLWhvbWVcIiB9KSxcbiAgICAgICAgX3ZtLl92KFwiIERhc2hib2FyZFwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ1bFwiLCBbXG4gICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJhY3RpdmVcIiB9LCBbXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCJpbmRleC5odG1sXCIgfSB9LCBbXG4gICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJpY29uIGljb24taG9tZVwiIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5Lqn5ZOB5YiX6KGoXCIpXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndpZGdldC10aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImljb25cIiB9LCBbXG4gICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImljb24tdGhcIiB9KVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJoNVwiLCBbX3ZtLl92KFwiRGF0YSB0YWJsZVwiKV0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwge30sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGF0YVRhYmxlc19sZW5ndGhcIixcbiAgICAgICAgICBhdHRyczogeyBpZDogXCJEYXRhVGFibGVzX1RhYmxlXzBfbGVuZ3RoXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJsYWJlbFwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJTaG93XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzZWxlY3QyLWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcInMyaWRfYXV0b2dlbjFcIiB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzZWxlY3QyLWNob2ljZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNcIiwgb25jbGljazogXCJyZXR1cm4gZmFsc2U7XCIgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCIxMFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImFiYnJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNlbGVjdDItc2VhcmNoLWNob2ljZS1jbG9zZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGRpc3BsYXk6IFwibm9uZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfYyhcImJcIildKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNlbGVjdDItZHJvcCBzZWxlY3QyLW9mZnNjcmVlblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2VsZWN0Mi1zZWFyY2hcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNlbGVjdDItaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJpbmRleDogXCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInVsXCIsIHsgc3RhdGljQ2xhc3M6IFwic2VsZWN0Mi1yZXN1bHRzXCIgfSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgZGlzcGxheTogXCJub25lXCIgfSxcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgc2l6ZTogXCIxXCIsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIkRhdGFUYWJsZXNfVGFibGVfMF9sZW5ndGhcIixcbiAgICAgICAgICAgICAgICAgIFwiYXJpYS1jb250cm9sc1wiOiBcIkRhdGFUYWJsZXNfVGFibGVfMFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCIxMFwiLCBzZWxlY3RlZDogXCJzZWxlY3RlZFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiMTBcIilcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiMjVcIiB9IH0sIFtfdm0uX3YoXCIyNVwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCI1MFwiIH0gfSwgW192bS5fdihcIjUwXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjEwMFwiIH0gfSwgW192bS5fdihcIjEwMFwiKV0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgZW50cmllc1wiKVxuICAgICAgICAgIF0pXG4gICAgICAgIF1cbiAgICAgIClcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRoZWFkXCIsIFtcbiAgICAgIF9jKFwidHJcIiwgeyBhdHRyczogeyByb2xlOiBcInJvd1wiIH0gfSwgW1xuICAgICAgICBfYyhcInRoXCIsIHt9LCBbX3ZtLl92KFwi5Lqn5ZOB5ZCN56ewXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwge30sIFtfdm0uX3YoXCLmnaHlvaLnoIFcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCB7fSwgW192bS5fdihcIuWNluS7t1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIHt9LCBbX3ZtLl92KFwi5oiQ5pysXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwge30sIFtfdm0uX3YoXCLph43ph49cIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCB7fSwgW192bS5fdihcIuWRs+mBk1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIHt9LCBbX3ZtLl92KFwi5Ymp5L2Z5bqT5a2YXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwge30sIFtfdm0uX3YoXCLljoLlrrZcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCB7fSwgW192bS5fdihcIuW9k+WJjeWbvueJh1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIHt9LCBbX3ZtLl92KFwi5LiK5Lyg5Zu+54mHXCIpXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICBcImZnLXRvb2xiYXIgdWktdG9vbGJhciB1aS13aWRnZXQtaGVhZGVyIHVpLWNvcm5lci1ibCB1aS1jb3JuZXItYnIgdWktaGVscGVyLWNsZWFyZml4XCJcbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGF0YVRhYmxlc19maWx0ZXJcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcIkRhdGFUYWJsZXNfVGFibGVfMF9maWx0ZXJcIiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiU2VhcmNoOiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBcImFyaWEtY29udHJvbHNcIjogXCJEYXRhVGFibGVzX1RhYmxlXzBcIiB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgXCJkYXRhVGFibGVzX3BhZ2luYXRlIGZnLWJ1dHRvbnNldCB1aS1idXR0b25zZXQgZmctYnV0dG9uc2V0LW11bHRpIHVpLWJ1dHRvbnNldC1tdWx0aSBwYWdpbmdfZnVsbF9udW1iZXJzXCIsXG4gICAgICAgICAgICBhdHRyczogeyBpZDogXCJEYXRhVGFibGVzX1RhYmxlXzBfcGFnaW5hdGVcIiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgIFwiZmlyc3QgdWktY29ybmVyLXRsIHVpLWNvcm5lci1ibCBmZy1idXR0b24gdWktYnV0dG9uIHVpLXN0YXRlLWRlZmF1bHQgdWktc3RhdGUtZGlzYWJsZWRcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0YWJpbmRleDogXCIwXCIsIGlkOiBcIkRhdGFUYWJsZXNfVGFibGVfMF9maXJzdFwiIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIkZpcnN0XCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgXCJwcmV2aW91cyBmZy1idXR0b24gdWktYnV0dG9uIHVpLXN0YXRlLWRlZmF1bHQgdWktc3RhdGUtZGlzYWJsZWRcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0YWJpbmRleDogXCIwXCIsIGlkOiBcIkRhdGFUYWJsZXNfVGFibGVfMF9wcmV2aW91c1wiIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIlByZXZpb3VzXCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICBcImZnLWJ1dHRvbiB1aS1idXR0b24gdWktc3RhdGUtZGVmYXVsdCB1aS1zdGF0ZS1kaXNhYmxlZFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGFiaW5kZXg6IFwiMFwiIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIxXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmZy1idXR0b24gdWktYnV0dG9uIHVpLXN0YXRlLWRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRhYmluZGV4OiBcIjBcIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiMlwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmctYnV0dG9uIHVpLWJ1dHRvbiB1aS1zdGF0ZS1kZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0YWJpbmRleDogXCIwXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIjNcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZnLWJ1dHRvbiB1aS1idXR0b24gdWktc3RhdGUtZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGFiaW5kZXg6IFwiMFwiIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCI0XCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmZy1idXR0b24gdWktYnV0dG9uIHVpLXN0YXRlLWRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRhYmluZGV4OiBcIjBcIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiNVwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuZXh0IGZnLWJ1dHRvbiB1aS1idXR0b24gdWktc3RhdGUtZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRhYmluZGV4OiBcIjBcIiwgaWQ6IFwiRGF0YVRhYmxlc19UYWJsZV8wX25leHRcIiB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJOZXh0XCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgXCJsYXN0IHVpLWNvcm5lci10ciB1aS1jb3JuZXItYnIgZmctYnV0dG9uIHVpLWJ1dHRvbiB1aS1zdGF0ZS1kZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGFiaW5kZXg6IFwiMFwiLCBpZDogXCJEYXRhVGFibGVzX1RhYmxlXzBfbGFzdFwiIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIkxhc3RcIildXG4gICAgICAgICAgICApXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdXG4gICAgKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbnZhciBlc0V4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5leHBvcnQgZGVmYXVsdCBlc0V4cG9ydHNcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTVkNDY2MmUwXCIsIGVzRXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNWQ0NjYyZTBcIixcImhhc1Njb3BlZFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy92aWV3cy9hZG1pbi9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMyJdLCJzb3VyY2VSb290IjoiIn0=
webpackJsonp([0],[
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5d4662e0_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(32);
var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5d4662e0_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
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

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _product_list = __webpack_require__(22);

var _product_list2 = _interopRequireDefault(_product_list);

var _import_record = __webpack_require__(27);

var _import_record2 = _interopRequireDefault(_import_record);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {};
  },

  computed: {
    store: function store() {
      return this.$store;
    },
    current_view: function current_view() {

      var component = this.$route.params.component;
      return component;
    }

  },
  methods: {},
  created: function created() {},
  components: {
    productList: _product_list2.default,
    importRecord: _import_record2.default
  },
  updated: function updated() {}
};

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_product_list_vue__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_product_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_product_list_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9d3d96d8_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_product_list_vue__ = __webpack_require__(26);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(23)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9d3d96d8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_product_list_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9d3d96d8_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_product_list_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/admin/compents/product_list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] product_list.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9d3d96d8", Component.options)
  } else {
    hotAPI.reload("data-v-9d3d96d8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(24);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(19)("ccfa98a4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9d3d96d8\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./product_list.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9d3d96d8\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./product_list.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(true);
// imports


// module
exports.push([module.i, "\n#header h1[data-v-9d3d96d8] {\n  line-height: 20px;\n  color: #fff;\n  background: none;\n  font-size: 23px;\n}\ninput[type=\"file\"][data-v-9d3d96d8] {\n  width: 60px;\n}\n.ajax-upload-dragdrop[data-v-9d3d96d8] {\n  width: 50px !important;\n}\n.ajax-file-upload-container[data-v-9d3d96d8] {\n  display: none;\n}\n.wrap[data-v-9d3d96d8] {\n  width: 50px;\n  height: 30px;\n  overflow: hidden;\n  position: relative;\n}\n.wrap span[data-v-9d3d96d8] {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background: #ccc;\n    border-radius: 5px;\n    line-height: 30px;\n    text-align: center;\n}\n.wrap .wrap_inner[data-v-9d3d96d8] {\n    opacity: 0;\n    position: absolute;\n    left: 0;\n    top: 0;\n    z-index: 5;\n}\n.gradeA img[data-v-9d3d96d8] {\n  max-width: 100px;\n  max-height: 50px;\n}\n", "", {"version":3,"sources":["/Users/secret/study/koa_study/src/views/admin/compents/product_list.vue"],"names":[],"mappings":";AAAA;EACE,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;CAAE;AAEpB;EACE,YAAY;CAAE;AAEhB;EACE,uBAAuB;CAAE;AAE3B;EACE,cAAc;CAAE;AAElB;EACE,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,mBAAmB;CAAE;AACrB;IACE,mBAAmB;IACnB,QAAQ;IACR,OAAO;IACP,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;CAAE;AACvB;IACE,WAAW;IACX,mBAAmB;IACnB,QAAQ;IACR,OAAO;IACP,WAAW;CAAE;AAEjB;EACE,iBAAiB;EACjB,iBAAiB;CAAE","file":"product_list.vue","sourcesContent":["#header h1 {\n  line-height: 20px;\n  color: #fff;\n  background: none;\n  font-size: 23px; }\n\ninput[type=\"file\"] {\n  width: 60px; }\n\n.ajax-upload-dragdrop {\n  width: 50px !important; }\n\n.ajax-file-upload-container {\n  display: none; }\n\n.wrap {\n  width: 50px;\n  height: 30px;\n  overflow: hidden;\n  position: relative; }\n  .wrap span {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background: #ccc;\n    border-radius: 5px;\n    line-height: 30px;\n    text-align: center; }\n  .wrap .wrap_inner {\n    opacity: 0;\n    position: absolute;\n    left: 0;\n    top: 0;\n    z-index: 5; }\n\n.gradeA img {\n  max-width: 100px;\n  max-height: 50px; }\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 25 */
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
  methods: {
    get_productions: function get_productions() {
      var self = this;
      $.get('/admin/production', function (productions) {
        self.productions = productions;
      });
    }
  },
  created: function created() {
    this.get_productions();
  },
  updated: function updated() {
    var self = this;
    this.productions.map(function (p) {
      $(".upload_img_" + p.id).uploadFile({
        url: "/admin/production/create_img?barcode=" + p.barcode,
        fileName: "file",
        onSuccess: function onSuccess(files, data, xhr, pd) {
          self.get_productions();
        }
      });
    });
  }
};

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _c("div", { staticClass: "widget-box" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "widget-content nopadding" }, [
        _c(
          "div",
          {
            staticClass: "dataTables_wrapper",
            attrs: { id: "DataTables_Table_0_wrapper", role: "grid" }
          },
          [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "table",
              {
                staticClass: "table table-bordered data-table dataTable",
                attrs: { id: "DataTables_Table_0" }
              },
              [
                _vm._m(2),
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
                        _c("div", { staticClass: "wrap" }, [
                          _c("span", [_vm._v("上传")]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "wrap_inner",
                              class: ["upload_img_" + val.id]
                            },
                            [_vm._v("上传")]
                          )
                        ])
                      ])
                    ])
                  })
                )
              ]
            ),
            _vm._v(" "),
            _vm._m(3)
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
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
            _vm._v("Show\n\t\t\t\t\t\t"),
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
     require("vue-hot-reload-api").rerender("data-v-9d3d96d8", esExports)
  }
}

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_import_record_vue__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_import_record_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_import_record_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3d4d39f5_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_import_record_vue__ = __webpack_require__(31);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(28)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3d4d39f5"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_import_record_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3d4d39f5_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_import_record_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/admin/compents/import_record.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] import_record.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3d4d39f5", Component.options)
  } else {
    hotAPI.reload("data-v-3d4d39f5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(19)("1599f1b8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3d4d39f5\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./import_record.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3d4d39f5\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./import_record.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"import_record.vue","sourceRoot":""}]);

// exports


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: function data() {
    return {
      records: []
    };
  },

  computed: {
    store: function store() {
      return this.$store;
    }

  },
  methods: {
    import_record: function import_record() {
      var self = this;
      $.get('/admin/import_records', function (records) {
        self.records = records;
      });
    }
  },
  created: function created() {
    this.import_record();
  },
  updated: function updated() {}
};

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _c("hr"),
    _vm._v(" "),
    _c("div", { staticClass: "row-fluid" }, [
      _c("div", { staticClass: "span12" }, [
        _c("div", { staticClass: "widget-box" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "widget-content nopadding" }, [
            _c("table", { staticClass: "table table-bordered table-striped" }, [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.records, function(val) {
                  return _c("tr", { staticClass: "odd gradeX" }, [
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
                    _c("td", { staticClass: " " }, [_vm._v(_vm._s(val.taste))]),
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
                      _vm._v(_vm._s(val.activeUser))
                    ])
                  ])
                })
              )
            ])
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
    return _c("div", { staticClass: "widget-title" }, [
      _c("span", { staticClass: "icon" }, [
        _c("i", { staticClass: "icon-th" })
      ]),
      _vm._v(" "),
      _c("h5", [_vm._v("入库记录")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
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
        _c("th", {}, [_vm._v("加入库存")]),
        _vm._v(" "),
        _c("th", {}, [_vm._v("厂家")]),
        _vm._v(" "),
        _c("th", {}, [_vm._v("操作人")])
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3d4d39f5", esExports)
  }
}

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c(
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
                  _c("span", { staticClass: "text" }, [
                    _vm._v(_vm._s(_vm.store.state.current_user.name))
                  ]),
                  _c("b", { staticClass: "caret" })
                ]
              ),
              _vm._v(" "),
              _vm._m(1)
            ]
          ),
          _vm._v(" "),
          _vm._m(2),
          _vm._v(" "),
          _vm._m(3),
          _vm._v(" "),
          _vm._m(4)
        ])
      ]
    ),
    _vm._v(" "),
    _vm._m(5),
    _vm._v(" "),
    _c("div", { attrs: { id: "sidebar" } }, [
      _vm._m(6),
      _vm._v(" "),
      _c("ul", [
        _c(
          "li",
          { class: [_vm.current_view == "product-list" ? "active" : ""] },
          [
            _c("router-link", { attrs: { to: "/product-list" } }, [
              _c("span", [_vm._v("产品列表")])
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { class: [_vm.current_view == "import-record" ? "active" : ""] },
          [
            _c("router-link", { attrs: { to: "/import-record" } }, [
              _c("span", [_vm._v("入库记录")])
            ])
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { attrs: { id: "content" } },
      [_c(_vm.current_view, { tag: "component" })],
      1
    )
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
    return _c("ul", { staticClass: "dropdown-menu" }, [
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
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
            _c("span", { staticClass: "label label-important" }, [_vm._v("5")]),
            _vm._v(" "),
            _c("b", { staticClass: "caret" })
          ]
        ),
        _vm._v(" "),
        _c("ul", { staticClass: "dropdown-menu" }, [
          _c("li", [
            _c("a", { staticClass: "sAdd", attrs: { title: "", href: "#" } }, [
              _c("i", { staticClass: "icon-plus" }),
              _vm._v(" new message")
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "divider" }),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              { staticClass: "sInbox", attrs: { title: "", href: "#" } },
              [_c("i", { staticClass: "icon-envelope" }), _vm._v(" inbox")]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "divider" }),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              { staticClass: "sOutbox", attrs: { title: "", href: "#" } },
              [_c("i", { staticClass: "icon-arrow-up" }), _vm._v(" outbox")]
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
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", {}, [
      _c("a", { attrs: { title: "", href: "#" } }, [
        _c("i", { staticClass: "icon icon-cog" }),
        _vm._v(" "),
        _c("span", { staticClass: "text" }, [_vm._v("Settings")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", {}, [
      _c("a", { attrs: { title: "", href: "login.html" } }, [
        _c("i", { staticClass: "icon icon-share-alt" }),
        _vm._v(" "),
        _c("span", { staticClass: "text" }, [_vm._v("Logout")])
      ])
    ])
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
    return _c("a", { staticClass: "visible-phone", attrs: { href: "#" } }, [
      _c("i", { staticClass: "icon icon-home" }),
      _vm._v(" Dashboard")
    ])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWRtaW4vaW5kZXgudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWRtaW4vY29tcGVudHMvcHJvZHVjdF9saXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWRtaW4vY29tcGVudHMvcHJvZHVjdF9saXN0LnZ1ZT8yMGZmIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hZG1pbi9jb21wZW50cy9wcm9kdWN0X2xpc3QudnVlP2JkMGEiLCJ3ZWJwYWNrOi8vL3Byb2R1Y3RfbGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FkbWluL2NvbXBlbnRzL3Byb2R1Y3RfbGlzdC52dWU/MTkwMiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWRtaW4vY29tcGVudHMvaW1wb3J0X3JlY29yZC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FkbWluL2NvbXBlbnRzL2ltcG9ydF9yZWNvcmQudnVlPzllY2UiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FkbWluL2NvbXBlbnRzL2ltcG9ydF9yZWNvcmQudnVlP2JmNjIiLCJ3ZWJwYWNrOi8vL2ltcG9ydF9yZWNvcmQudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hZG1pbi9jb21wZW50cy9pbXBvcnRfcmVjb3JkLnZ1ZT9kNTk5Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hZG1pbi9pbmRleC52dWU/MWM5ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7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QUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsU0FBUyxlQUFlLEVBQUU7QUFDaEQsbUJBQW1CLFNBQVMsOENBQThDLEVBQUU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1Qsa0JBQWtCLHdDQUF3QztBQUMxRDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVDQUF1QyxZQUFZLEVBQUU7QUFDekUsZUFBZSxnQ0FBZ0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImpzLzAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9pbmRleC52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCBfX3Z1ZV90ZW1wbGF0ZV9fIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTVkNDY2MmUwXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL2FkbWluL2luZGV4LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5LnN1YnN0cigwLCAyKSAhPT0gXCJfX1wifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gaW5kZXgudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTVkNDY2MmUwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNWQ0NjYyZTBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3MvYWRtaW4vaW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuICBNb2RpZmllZCBieSBFdmFuIFlvdSBAeXl4OTkwODAzXG4qL1xuXG52YXIgaGFzRG9jdW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG5cbmlmICh0eXBlb2YgREVCVUcgIT09ICd1bmRlZmluZWQnICYmIERFQlVHKSB7XG4gIGlmICghaGFzRG9jdW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3Z1ZS1zdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudC4gJyArXG4gICAgXCJVc2UgeyB0YXJnZXQ6ICdub2RlJyB9IGluIHlvdXIgV2VicGFjayBjb25maWcgdG8gaW5kaWNhdGUgYSBzZXJ2ZXItcmVuZGVyaW5nIGVudmlyb25tZW50LlwiXG4gICkgfVxufVxuXG52YXIgbGlzdFRvU3R5bGVzID0gcmVxdWlyZSgnLi9saXN0VG9TdHlsZXMnKVxuXG4vKlxudHlwZSBTdHlsZU9iamVjdCA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgcGFydHM6IEFycmF5PFN0eWxlT2JqZWN0UGFydD5cbn1cblxudHlwZSBTdHlsZU9iamVjdFBhcnQgPSB7XG4gIGNzczogc3RyaW5nO1xuICBtZWRpYTogc3RyaW5nO1xuICBzb3VyY2VNYXA6ID9zdHJpbmdcbn1cbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHsvKlxuICBbaWQ6IG51bWJlcl06IHtcbiAgICBpZDogbnVtYmVyLFxuICAgIHJlZnM6IG51bWJlcixcbiAgICBwYXJ0czogQXJyYXk8KG9iaj86IFN0eWxlT2JqZWN0UGFydCkgPT4gdm9pZD5cbiAgfVxuKi99XG5cbnZhciBoZWFkID0gaGFzRG9jdW1lbnQgJiYgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSlcbnZhciBzaW5nbGV0b25FbGVtZW50ID0gbnVsbFxudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwXG52YXIgaXNQcm9kdWN0aW9uID0gZmFsc2VcbnZhciBub29wID0gZnVuY3Rpb24gKCkge31cblxuLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG52YXIgaXNPbGRJRSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9tc2llIFs2LTldXFxiLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSlcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocGFyZW50SWQsIGxpc3QsIF9pc1Byb2R1Y3Rpb24pIHtcbiAgaXNQcm9kdWN0aW9uID0gX2lzUHJvZHVjdGlvblxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIGxpc3QpXG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgICAgZG9tU3R5bGUucmVmcy0tXG4gICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSlcbiAgICB9XG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbmV3TGlzdClcbiAgICAgIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzID0gW11cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXVxuICAgICAgaWYgKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKClcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMgLyogQXJyYXk8U3R5bGVPYmplY3Q+ICovKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pXG4gICAgICB9XG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIGlmIChkb21TdHlsZS5wYXJ0cy5sZW5ndGggPiBpdGVtLnBhcnRzLmxlbmd0aCkge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5sZW5ndGggPSBpdGVtLnBhcnRzLmxlbmd0aFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHsgaWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0cyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAoKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIHN0eWxlRWxlbWVudC50eXBlID0gJ3RleHQvY3NzJ1xuICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudClcbiAgcmV0dXJuIHN0eWxlRWxlbWVudFxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICB2YXIgdXBkYXRlLCByZW1vdmVcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlW2RhdGEtdnVlLXNzci1pZH49XCInICsgb2JqLmlkICsgJ1wiXScpXG5cbiAgaWYgKHN0eWxlRWxlbWVudCkge1xuICAgIGlmIChpc1Byb2R1Y3Rpb24pIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGFuZCBpbiBwcm9kdWN0aW9uIG1vZGUuXG4gICAgICAvLyBzaW1wbHkgZG8gbm90aGluZy5cbiAgICAgIHJldHVybiBub29wXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGJ1dCBpbiBkZXYgbW9kZS5cbiAgICAgIC8vIGZvciBzb21lIHJlYXNvbiBDaHJvbWUgY2FuJ3QgaGFuZGxlIHNvdXJjZSBtYXAgaW4gc2VydmVyLXJlbmRlcmVkXG4gICAgICAvLyBzdHlsZSB0YWdzIC0gc291cmNlIG1hcHMgaW4gPHN0eWxlPiBvbmx5IHdvcmtzIGlmIHRoZSBzdHlsZSB0YWcgaXNcbiAgICAgIC8vIGNyZWF0ZWQgYW5kIGluc2VydGVkIGR5bmFtaWNhbGx5LiBTbyB3ZSByZW1vdmUgdGhlIHNlcnZlciByZW5kZXJlZFxuICAgICAgLy8gc3R5bGVzIGFuZCBpbmplY3QgbmV3IG9uZXMuXG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgaWYgKGlzT2xkSUUpIHtcbiAgICAvLyB1c2Ugc2luZ2xldG9uIG1vZGUgZm9yIElFOS5cbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrK1xuICAgIHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKSlcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSlcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKVxuICB9IGVsc2Uge1xuICAgIC8vIHVzZSBtdWx0aS1zdHlsZS10YWcgbW9kZSBpbiBhbGwgb3RoZXIgY2FzZXNcbiAgICBzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShvYmopXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcbiAgICAgICAgICBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuICAgICAgICAgIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKVxuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKVxuICAgIH1cbiAgfVxufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgdGV4dFN0b3JlID0gW11cblxuICByZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudFxuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpXG4gIH1cbn0pKClcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzc1xuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKVxuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKVxuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXNcbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSlcbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZUVsZW1lbnQsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzc1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWFcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXBcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKVxuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZGV2dG9vbHMvZG9jcy9qYXZhc2NyaXB0LWRlYnVnZ2luZ1xuICAgIC8vIHRoaXMgbWFrZXMgc291cmNlIG1hcHMgaW5zaWRlIHN0eWxlIHRhZ3Mgd29yayBwcm9wZXJseSBpbiBDaHJvbWVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VVUkw9JyArIHNvdXJjZU1hcC5zb3VyY2VzWzBdICsgJyAqLydcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArICcgKi8nXG4gIH1cblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzXG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpXG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKVxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIi8qKlxuICogVHJhbnNsYXRlcyB0aGUgbGlzdCBmb3JtYXQgcHJvZHVjZWQgYnkgY3NzLWxvYWRlciBpbnRvIHNvbWV0aGluZ1xuICogZWFzaWVyIHRvIG1hbmlwdWxhdGUuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChwYXJlbnRJZCwgbGlzdCkge1xuICB2YXIgc3R5bGVzID0gW11cbiAgdmFyIG5ld1N0eWxlcyA9IHt9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIHZhciBpZCA9IGl0ZW1bMF1cbiAgICB2YXIgY3NzID0gaXRlbVsxXVxuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl1cbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXVxuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgaWQ6IHBhcmVudElkICsgJzonICsgaSxcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9XG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0geyBpZDogaWQsIHBhcnRzOiBbcGFydF0gfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXNcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiPHRlbXBsYXRlPlxuXHQ8ZGl2PlxuXHRcdDxkaXYgaWQ9XCJoZWFkZXJcIj5cblx0XHRcdDxoMT7ni5fom4votoXluII8L2gxPlxuXHRcdDwvZGl2PlxuXG5cdFx0PGRpdiBpZD1cInVzZXItbmF2XCIgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWludmVyc2VcIj5cblx0XHRcdDx1bCBjbGFzcz1cIm5hdlwiPlxuXHRcdFx0XHQ8bGkgY2xhc3M9XCJkcm9wZG93blwiIGlkPVwicHJvZmlsZS1tZXNzYWdlc1wiPjxhIHRpdGxlPVwiXCIgaHJlZj1cIiNcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI3Byb2ZpbGUtbWVzc2FnZXNcIiBjbGFzcz1cImRyb3Bkb3duLXRvZ2dsZVwiPjxpXG5cdFx0XHRcdFx0Y2xhc3M9XCJpY29uIGljb24tdXNlclwiPjwvaT4gPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+e3sgc3RvcmUuc3RhdGUuY3VycmVudF91c2VyLm5hbWUgfX08L3NwYW4+PGIgY2xhc3M9XCJjYXJldFwiPjwvYj48L2E+XG5cdFx0XHRcdFx0PHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiPlxuXHRcdFx0XHRcdFx0PGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJpY29uLXVzZXJcIj48L2k+IE15IFByb2ZpbGU8L2E+PC9saT5cblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxuXHRcdFx0XHRcdFx0PGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJpY29uLWNoZWNrXCI+PC9pPiBNeSBUYXNrczwvYT48L2xpPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiZGl2aWRlclwiPjwvbGk+XG5cdFx0XHRcdFx0XHQ8bGk+PGEgaHJlZj1cImxvZ2luLmh0bWxcIj48aSBjbGFzcz1cImljb24ta2V5XCI+PC9pPiBMb2cgT3V0PC9hPjwvbGk+XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC9saT5cblx0XHRcdFx0PGxpIGNsYXNzPVwiZHJvcGRvd25cIiBpZD1cIm1lbnUtbWVzc2FnZXNcIj48YSBocmVmPVwiI1wiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBkYXRhLXRhcmdldD1cIiNtZW51LW1lc3NhZ2VzXCJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZHJvcGRvd24tdG9nZ2xlXCI+PGkgY2xhc3M9XCJpY29uIGljb24tZW52ZWxvcGVcIj48L2k+IDxzcGFuXG5cdFx0XHRcdFx0Y2xhc3M9XCJ0ZXh0XCI+TWVzc2FnZXM8L3NwYW4+IDxzcGFuIGNsYXNzPVwibGFiZWwgbGFiZWwtaW1wb3J0YW50XCI+NTwvc3Bhbj4gPGIgY2xhc3M9XCJjYXJldFwiPjwvYj48L2E+XG5cdFx0XHRcdFx0PHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiPlxuXHRcdFx0XHRcdFx0PGxpPjxhIGNsYXNzPVwic0FkZFwiIHRpdGxlPVwiXCIgaHJlZj1cIiNcIj48aSBjbGFzcz1cImljb24tcGx1c1wiPjwvaT4gbmV3IG1lc3NhZ2U8L2E+PC9saT5cblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxuXHRcdFx0XHRcdFx0PGxpPjxhIGNsYXNzPVwic0luYm94XCIgdGl0bGU9XCJcIiBocmVmPVwiI1wiPjxpIGNsYXNzPVwiaWNvbi1lbnZlbG9wZVwiPjwvaT4gaW5ib3g8L2E+PC9saT5cblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxuXHRcdFx0XHRcdFx0PGxpPjxhIGNsYXNzPVwic091dGJveFwiIHRpdGxlPVwiXCIgaHJlZj1cIiNcIj48aSBjbGFzcz1cImljb24tYXJyb3ctdXBcIj48L2k+IG91dGJveDwvYT48L2xpPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiZGl2aWRlclwiPjwvbGk+XG5cdFx0XHRcdFx0XHQ8bGk+PGEgY2xhc3M9XCJzVHJhc2hcIiB0aXRsZT1cIlwiIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJpY29uLXRyYXNoXCI+PC9pPiB0cmFzaDwvYT48L2xpPlxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDwvbGk+XG5cdFx0XHRcdDxsaSBjbGFzcz1cIlwiPjxhIHRpdGxlPVwiXCIgaHJlZj1cIiNcIj48aSBjbGFzcz1cImljb24gaWNvbi1jb2dcIj48L2k+IDxzcGFuIGNsYXNzPVwidGV4dFwiPlNldHRpbmdzPC9zcGFuPjwvYT48L2xpPlxuXHRcdFx0XHQ8bGkgY2xhc3M9XCJcIj48YSB0aXRsZT1cIlwiIGhyZWY9XCJsb2dpbi5odG1sXCI+PGkgY2xhc3M9XCJpY29uIGljb24tc2hhcmUtYWx0XCI+PC9pPiA8c3BhbiBjbGFzcz1cInRleHRcIj5Mb2dvdXQ8L3NwYW4+PC9hPlxuXHRcdFx0XHQ8L2xpPlxuXHRcdFx0PC91bD5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGlkPVwic2VhcmNoXCI+XG5cdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBoZXJlLi4uXCIvPlxuXHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJ0aXAtYm90dG9tXCIgdGl0bGU9XCJTZWFyY2hcIj48aSBjbGFzcz1cImljb24tc2VhcmNoIGljb24td2hpdGVcIj48L2k+PC9idXR0b24+XG5cdFx0PC9kaXY+XG5cblx0XHQ8ZGl2IGlkPVwic2lkZWJhclwiPlxuXHRcdFx0PGEgaHJlZj1cIiNcIiBjbGFzcz1cInZpc2libGUtcGhvbmVcIj48aSBjbGFzcz1cImljb24gaWNvbi1ob21lXCI+PC9pPiBEYXNoYm9hcmQ8L2E+XG5cdFx0XHQ8dWw+XG5cdFx0XHRcdDxsaSA6Y2xhc3M9XCJbY3VycmVudF92aWV3ID09ICdwcm9kdWN0LWxpc3QnID8gJ2FjdGl2ZSc6JyddXCI+XG5cdFx0XHRcdFx0PHJvdXRlci1saW5rIDp0bz1cIicvcHJvZHVjdC1saXN0J1wiPjxzcGFuPuS6p+WTgeWIl+ihqDwvc3Bhbj48L3JvdXRlci1saW5rPlxuXHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHQ8bGkgOmNsYXNzPVwiW2N1cnJlbnRfdmlldyA9PSAnaW1wb3J0LXJlY29yZCcgPyAnYWN0aXZlJzonJ11cIj5cblx0XHRcdFx0XHQ8cm91dGVyLWxpbmsgOnRvPVwiJy9pbXBvcnQtcmVjb3JkJ1wiPjxzcGFuPuWFpeW6k+iusOW9lTwvc3Bhbj48L3JvdXRlci1saW5rPlxuXHRcdFx0XHQ8L2xpPlxuXHRcdFx0PC91bD5cblx0XHQ8L2Rpdj5cblxuXHRcdDxkaXYgaWQ9XCJjb250ZW50XCI+XG5cblx0XHRcdDxjb21wb25lbnQgdi1iaW5kOmlzPVwiY3VycmVudF92aWV3XCI+PC9jb21wb25lbnQ+XG5cdFx0XHQ8IS0tPGltcG9ydC1yZWNvcmQ+PC9pbXBvcnQtcmVjb3JkPi0tPlxuXHRcdFx0PCEtLTxwcm9kdWN0LWxpc3Q+PC9wcm9kdWN0LWxpc3Q+LS0+XG5cdFx0PC9kaXY+XG5cblxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCBwcm9kdWN0TGlzdCBmcm9tICcuL2NvbXBlbnRzL3Byb2R1Y3RfbGlzdC52dWUnO1xuXHRpbXBvcnQgaW1wb3J0UmVjb3JkIGZyb20gJy4vY29tcGVudHMvaW1wb3J0X3JlY29yZC52dWUnO1xuXG4gIGV4cG9ydCBkZWZhdWx0e1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuLy8gICAgICAgIHByb2R1Y3Rpb25zOiBbXVxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgIHN0b3JlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRzdG9yZVxuICAgICAgfSxcbiAgICAgIGN1cnJlbnRfdmlldzogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHZhciBjb21wb25lbnQgPSB0aGlzLiRyb3V0ZS5wYXJhbXMuY29tcG9uZW50O1xuICAgICAgICByZXR1cm4gY29tcG9uZW50XG4gICAgICB9XG5cbiAgICB9LFxuXHQgIG1ldGhvZHM6e1xuXG5cdCAgfSxcbiAgICBjcmVhdGVkOiBmdW5jdGlvbiAoKSB7XG5cbiAgICB9LFxuXHQgIGNvbXBvbmVudHM6e1xuICAgICAgcHJvZHVjdExpc3QsXG4gICAgICBpbXBvcnRSZWNvcmRcblx0ICB9LFxuXHQgIHVwZGF0ZWQ6IGZ1bmN0aW9uICgpIHtcblxuXG5cblxuXG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBpbmRleC52dWU/Y2ViZWIzMDYiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTlkM2Q5NmQ4XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOmZhbHNlfSFzYXNzLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Byb2R1Y3RfbGlzdC52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vcHJvZHVjdF9saXN0LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IF9fdnVlX3RlbXBsYXRlX18gZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtOWQzZDk2ZDhcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9wcm9kdWN0X2xpc3QudnVlXCJcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi05ZDNkOTZkOFwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL2FkbWluL2NvbXBlbnRzL3Byb2R1Y3RfbGlzdC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHByb2R1Y3RfbGlzdC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtOWQzZDk2ZDhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi05ZDNkOTZkOFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aWV3cy9hZG1pbi9jb21wZW50cy9wcm9kdWN0X2xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtOWQzZDk2ZDhcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcHJvZHVjdF9saXN0LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiY2NmYTk4YTRcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtOWQzZDk2ZDhcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcHJvZHVjdF9saXN0LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi05ZDNkOTZkOFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wcm9kdWN0X2xpc3QudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTlkM2Q5NmQ4XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy92aWV3cy9hZG1pbi9jb21wZW50cy9wcm9kdWN0X2xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuI2hlYWRlciBoMVtkYXRhLXYtOWQzZDk2ZDhdIHtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgZm9udC1zaXplOiAyM3B4O1xcbn1cXG5pbnB1dFt0eXBlPVxcXCJmaWxlXFxcIl1bZGF0YS12LTlkM2Q5NmQ4XSB7XFxuICB3aWR0aDogNjBweDtcXG59XFxuLmFqYXgtdXBsb2FkLWRyYWdkcm9wW2RhdGEtdi05ZDNkOTZkOF0ge1xcbiAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcXG59XFxuLmFqYXgtZmlsZS11cGxvYWQtY29udGFpbmVyW2RhdGEtdi05ZDNkOTZkOF0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLndyYXBbZGF0YS12LTlkM2Q5NmQ4XSB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi53cmFwIHNwYW5bZGF0YS12LTlkM2Q5NmQ4XSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi53cmFwIC53cmFwX2lubmVyW2RhdGEtdi05ZDNkOTZkOF0ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgei1pbmRleDogNTtcXG59XFxuLmdyYWRlQSBpbWdbZGF0YS12LTlkM2Q5NmQ4XSB7XFxuICBtYXgtd2lkdGg6IDEwMHB4O1xcbiAgbWF4LWhlaWdodDogNTBweDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9zZWNyZXQvc3R1ZHkva29hX3N0dWR5L3NyYy92aWV3cy9hZG1pbi9jb21wZW50cy9wcm9kdWN0X2xpc3QudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFBQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjtDQUFFO0FBRXBCO0VBQ0UsWUFBWTtDQUFFO0FBRWhCO0VBQ0UsdUJBQXVCO0NBQUU7QUFFM0I7RUFDRSxjQUFjO0NBQUU7QUFFbEI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7Q0FBRTtBQUNyQjtJQUNFLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsT0FBTztJQUNQLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0NBQUU7QUFDdkI7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixPQUFPO0lBQ1AsV0FBVztDQUFFO0FBRWpCO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtDQUFFXCIsXCJmaWxlXCI6XCJwcm9kdWN0X2xpc3QudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNoZWFkZXIgaDEge1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBmb250LXNpemU6IDIzcHg7IH1cXG5cXG5pbnB1dFt0eXBlPVxcXCJmaWxlXFxcIl0ge1xcbiAgd2lkdGg6IDYwcHg7IH1cXG5cXG4uYWpheC11cGxvYWQtZHJhZ2Ryb3Age1xcbiAgd2lkdGg6IDUwcHggIWltcG9ydGFudDsgfVxcblxcbi5hamF4LWZpbGUtdXBsb2FkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLndyYXAge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAud3JhcCBzcGFuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6ICNjY2M7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgLndyYXAgLndyYXBfaW5uZXIge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgei1pbmRleDogNTsgfVxcblxcbi5ncmFkZUEgaW1nIHtcXG4gIG1heC13aWR0aDogMTAwcHg7XFxuICBtYXgtaGVpZ2h0OiA1MHB4OyB9XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTlkM2Q5NmQ4XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy92aWV3cy9hZG1pbi9jb21wZW50cy9wcm9kdWN0X2xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cblx0XHQ8ZGl2IGNsYXNzPVwid2lkZ2V0LWJveFwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cIndpZGdldC10aXRsZVwiPjxzcGFuIGNsYXNzPVwiaWNvblwiPjxpIGNsYXNzPVwiaWNvbi10aFwiPjwvaT48L3NwYW4+XG5cdFx0XHRcdDxoNT5EYXRhIHRhYmxlPC9oNT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cIndpZGdldC1jb250ZW50IG5vcGFkZGluZ1wiPlxuXHRcdFx0XHQ8ZGl2IGlkPVwiRGF0YVRhYmxlc19UYWJsZV8wX3dyYXBwZXJcIiBjbGFzcz1cImRhdGFUYWJsZXNfd3JhcHBlclwiIHJvbGU9XCJncmlkXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIlwiPlxuXHRcdFx0XHRcdFx0PGRpdiBpZD1cIkRhdGFUYWJsZXNfVGFibGVfMF9sZW5ndGhcIiBjbGFzcz1cImRhdGFUYWJsZXNfbGVuZ3RoXCI+PGxhYmVsPlNob3dcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInNlbGVjdDItY29udGFpbmVyXCIgaWQ9XCJzMmlkX2F1dG9nZW4xXCI+PGEgaHJlZj1cIiNcIiBvbmNsaWNrPVwicmV0dXJuIGZhbHNlO1wiXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzZWxlY3QyLWNob2ljZVwiPiA8c3Bhbj4xMDwvc3Bhbj48YWJiclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwic2VsZWN0Mi1zZWFyY2gtY2hvaWNlLWNsb3NlXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCI+PC9hYmJyPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+PGI+PC9iPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInNlbGVjdDItZHJvcCBzZWxlY3QyLW9mZnNjcmVlblwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInNlbGVjdDItc2VhcmNoXCI+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgY2xhc3M9XCJzZWxlY3QyLWlucHV0XCJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiaW5kZXg9XCIwXCI+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3M9XCJzZWxlY3QyLXJlc3VsdHNcIj48L3VsPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PHNlbGVjdCBzaXplPVwiMVwiIG5hbWU9XCJEYXRhVGFibGVzX1RhYmxlXzBfbGVuZ3RoXCIgYXJpYS1jb250cm9scz1cIkRhdGFUYWJsZXNfVGFibGVfMFwiXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIxMFwiIHNlbGVjdGVkPVwic2VsZWN0ZWRcIj4xMDwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIyNVwiPjI1PC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjUwXCI+NTA8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMTAwXCI+MTAwPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDwvc2VsZWN0PiBlbnRyaWVzPC9sYWJlbD48L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ib3JkZXJlZCBkYXRhLXRhYmxlIGRhdGFUYWJsZVwiIGlkPVwiRGF0YVRhYmxlc19UYWJsZV8wXCI+XG5cdFx0XHRcdFx0XHQ8dGhlYWQ+XG5cdFx0XHRcdFx0XHQ8dHIgcm9sZT1cInJvd1wiPlxuXHRcdFx0XHRcdFx0XHQ8dGggY2xhc3M9XCJcIiA+5Lqn5ZOB5ZCN56ewPC90aD5cblx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzPVwiXCI+5p2h5b2i56CBPC90aD5cblx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzPVwiXCI+5Y2W5Lu3PC90aD5cblx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzPVwiXCI+5oiQ5pysPC90aD5cblx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzPVwiXCI+6YeN6YePPC90aD5cblx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzPVwiXCI+5ZGz6YGTPC90aD5cblx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzPVwiXCI+5Ymp5L2Z5bqT5a2YPC90aD5cblx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzPVwiXCI+5Y6C5a62PC90aD5cblx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzPVwiXCI+5b2T5YmN5Zu+54mHPC90aD5cblx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzPVwiXCI+5LiK5Lyg5Zu+54mHPC90aD5cblx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHQ8L3RoZWFkPlxuXG5cdFx0XHRcdFx0XHQ8dGJvZHkgcm9sZT1cImFsZXJ0XCIgYXJpYS1saXZlPVwicG9saXRlXCIgYXJpYS1yZWxldmFudD1cImFsbFwiPlxuXG5cdFx0XHRcdFx0XHQ8dHIgY2xhc3M9XCJncmFkZUEgZXZlblwiIHYtZm9yPVwidmFsIGluIHByb2R1Y3Rpb25zXCI+XG5cdFx0XHRcdFx0XHRcdDx0ZCBjbGFzcz1cIiBcIj57eyB2YWwucHJvZHVjdE5hbWUgfX08L3RkPlxuXHRcdFx0XHRcdFx0XHQ8dGQgY2xhc3M9XCIgXCI+e3sgdmFsLmJhcmNvZGUgfX08L3RkPlxuXHRcdFx0XHRcdFx0XHQ8dGQgY2xhc3M9XCIgXCI+e3sgdmFsLnNhbGVQcmljZSB9fTwvdGQ+XG5cdFx0XHRcdFx0XHRcdDx0ZCBjbGFzcz1cIiBcIj57eyB2YWwuY29zdFByaWNlIH19PC90ZD5cblx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzPVwiIFwiPnt7IHZhbC53ZWlnaHQgfX08L3RkPlxuXHRcdFx0XHRcdFx0XHQ8dGQgY2xhc3M9XCIgXCI+e3sgdmFsLnRhc3RlIH19PC90ZD5cblx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzPVwiIFwiPnt7IHZhbC5hZGRTdG9ja051bSB9fTwvdGQ+XG5cdFx0XHRcdFx0XHRcdDx0ZCBjbGFzcz1cIiBcIj57eyB2YWwuZmFjdG9yeSB9fTwvdGQ+XG5cdFx0XHRcdFx0XHRcdDx0ZCBjbGFzcz1cIiBcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIDpzcmM9XCJ2YWwuaW1nVXJsXCIgPlxuXHRcdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdFx0XHQ8dGQgY2xhc3M9XCIgXCIgPjxkaXYgY2xhc3M9XCJ3cmFwXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gPuS4iuS8oDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IDpjbGFzcz1cIlsndXBsb2FkX2ltZ18nK3ZhbC5pZF1cIiBjbGFzcz1cIndyYXBfaW5uZXJcIj7kuIrkvKA8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+PC90ZD5cblx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHQ8L3Rib2R5PlxuXHRcdFx0XHRcdDwvdGFibGU+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZnLXRvb2xiYXIgdWktdG9vbGJhciB1aS13aWRnZXQtaGVhZGVyIHVpLWNvcm5lci1ibCB1aS1jb3JuZXItYnIgdWktaGVscGVyLWNsZWFyZml4XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZGF0YVRhYmxlc19maWx0ZXJcIiBpZD1cIkRhdGFUYWJsZXNfVGFibGVfMF9maWx0ZXJcIj48bGFiZWw+U2VhcmNoOiA8aW5wdXQgdHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cIkRhdGFUYWJsZXNfVGFibGVfMFwiPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJkYXRhVGFibGVzX3BhZ2luYXRlIGZnLWJ1dHRvbnNldCB1aS1idXR0b25zZXQgZmctYnV0dG9uc2V0LW11bHRpIHVpLWJ1dHRvbnNldC1tdWx0aSBwYWdpbmdfZnVsbF9udW1iZXJzXCJcblx0XHRcdFx0XHRcdFx0aWQ9XCJEYXRhVGFibGVzX1RhYmxlXzBfcGFnaW5hdGVcIj48YSB0YWJpbmRleD1cIjBcIlxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZpcnN0IHVpLWNvcm5lci10bCB1aS1jb3JuZXItYmwgZmctYnV0dG9uIHVpLWJ1dHRvbiB1aS1zdGF0ZS1kZWZhdWx0IHVpLXN0YXRlLWRpc2FibGVkXCJcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJEYXRhVGFibGVzX1RhYmxlXzBfZmlyc3RcIj5GaXJzdDwvYT48YSB0YWJpbmRleD1cIjBcIlxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInByZXZpb3VzIGZnLWJ1dHRvbiB1aS1idXR0b24gdWktc3RhdGUtZGVmYXVsdCB1aS1zdGF0ZS1kaXNhYmxlZFwiXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiRGF0YVRhYmxlc19UYWJsZV8wX3ByZXZpb3VzXCI+UHJldmlvdXM8L2E+PHNwYW4+PGFcblx0XHRcdFx0XHRcdFx0dGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJmZy1idXR0b24gdWktYnV0dG9uIHVpLXN0YXRlLWRlZmF1bHQgdWktc3RhdGUtZGlzYWJsZWRcIj4xPC9hPjxhIHRhYmluZGV4PVwiMFwiXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmctYnV0dG9uIHVpLWJ1dHRvbiB1aS1zdGF0ZS1kZWZhdWx0XCI+MjwvYT48YVxuXHRcdFx0XHRcdFx0XHR0YWJpbmRleD1cIjBcIiBjbGFzcz1cImZnLWJ1dHRvbiB1aS1idXR0b24gdWktc3RhdGUtZGVmYXVsdFwiPjM8L2E+PGEgdGFiaW5kZXg9XCIwXCJcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmZy1idXR0b24gdWktYnV0dG9uIHVpLXN0YXRlLWRlZmF1bHRcIj40PC9hPjxhXG5cdFx0XHRcdFx0XHRcdHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiZmctYnV0dG9uIHVpLWJ1dHRvbiB1aS1zdGF0ZS1kZWZhdWx0XCI+NTwvYT48L3NwYW4+PGEgdGFiaW5kZXg9XCIwXCJcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibmV4dCBmZy1idXR0b24gdWktYnV0dG9uIHVpLXN0YXRlLWRlZmF1bHRcIlxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJEYXRhVGFibGVzX1RhYmxlXzBfbmV4dFwiPk5leHQ8L2E+PGFcblx0XHRcdFx0XHRcdFx0dGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJsYXN0IHVpLWNvcm5lci10ciB1aS1jb3JuZXItYnIgZmctYnV0dG9uIHVpLWJ1dHRvbiB1aS1zdGF0ZS1kZWZhdWx0XCJcblx0XHRcdFx0XHRcdFx0aWQ9XCJEYXRhVGFibGVzX1RhYmxlXzBfbGFzdFwiPkxhc3Q8L2E+PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwcm9kdWN0aW9uczogW11cbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICBzdG9yZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmVcbiAgICAgIH0sXG5cbiAgICB9LFxuICAgIG1ldGhvZHM6e1xuICAgICAgZ2V0X3Byb2R1Y3Rpb25zOmZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgJC5nZXQoJy9hZG1pbi9wcm9kdWN0aW9uJyxmdW5jdGlvbiAocHJvZHVjdGlvbnMpIHtcbiAgICAgICAgICBzZWxmLnByb2R1Y3Rpb25zID0gcHJvZHVjdGlvbnM7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmdldF9wcm9kdWN0aW9ucygpXG5cbiAgICB9LFxuICAgIHVwZGF0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpc1xuICAgICAgdGhpcy5wcm9kdWN0aW9ucy5tYXAoZnVuY3Rpb24gKHApIHtcbiAgICAgICAgJChcIi51cGxvYWRfaW1nX1wiK3AuaWQpLnVwbG9hZEZpbGUoe1xuICAgICAgICAgIHVybDpcIi9hZG1pbi9wcm9kdWN0aW9uL2NyZWF0ZV9pbWc/YmFyY29kZT1cIitwLmJhcmNvZGUsXG4gICAgICAgICAgZmlsZU5hbWU6XCJmaWxlXCIsXG4gICAgICAgICAgb25TdWNjZXNzOmZ1bmN0aW9uIChmaWxlcyxkYXRhLHhocixwZCkge1xuICAgICAgICAgICAgc2VsZi5nZXRfcHJvZHVjdGlvbnMoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuXHQjaGVhZGVyIGgxIHtcblx0XHRsaW5lLWhlaWdodDogMjBweDtcblx0XHRjb2xvcjogI2ZmZjtcblx0XHRiYWNrZ3JvdW5kOiBub25lO1xuXHRcdGZvbnQtc2l6ZTogMjNweDtcblx0fVxuXHRpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XG5cdFx0d2lkdGg6IDYwcHg7XG5cdH1cblx0LmFqYXgtdXBsb2FkLWRyYWdkcm9we1xuXHRcdHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG5cdH1cblx0LmFqYXgtZmlsZS11cGxvYWQtY29udGFpbmVye1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cblx0LndyYXB7XG5cdFx0d2lkdGg6IDUwcHg7XG5cdFx0aGVpZ2h0OiAzMHB4O1xuXHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHNwYW57XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRsZWZ0OiAwO1xuXHRcdFx0dG9wOiAwO1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRiYWNrZ3JvdW5kOiAjY2NjO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRcdFx0bGluZS1oZWlnaHQ6IDMwcHg7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0fVxuXHRcdC53cmFwX2lubmVye1xuXHRcdFx0b3BhY2l0eTogMDtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdGxlZnQ6IDA7XG5cdFx0XHR0b3A6IDA7XG5cdFx0XHR6LWluZGV4OiA1O1xuXHRcdH1cblx0fVxuXHQuZ3JhZGVBe1xuXHRcdGltZ3tcblx0XHRcdG1heC13aWR0aDogMTAwcHg7XG5cdFx0XHRtYXgtaGVpZ2h0OiA1MHB4O1xuXHRcdH1cblx0fVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHJvZHVjdF9saXN0LnZ1ZT82Y2RhZGFiYSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXItZmx1aWRcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aWRnZXQtYm94XCIgfSwgW1xuICAgICAgX3ZtLl9tKDApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2lkZ2V0LWNvbnRlbnQgbm9wYWRkaW5nXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRhdGFUYWJsZXNfd3JhcHBlclwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiRGF0YVRhYmxlc19UYWJsZV8wX3dyYXBwZXJcIiwgcm9sZTogXCJncmlkXCIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWJsZSB0YWJsZS1ib3JkZXJlZCBkYXRhLXRhYmxlIGRhdGFUYWJsZVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcIkRhdGFUYWJsZXNfVGFibGVfMFwiIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHJvbGU6IFwiYWxlcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtbGl2ZVwiOiBcInBvbGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1yZWxldmFudFwiOiBcImFsbFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnByb2R1Y3Rpb25zLCBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgeyBzdGF0aWNDbGFzczogXCJncmFkZUEgZXZlblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwiIFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3ModmFsLnByb2R1Y3ROYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCIgXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh2YWwuYmFyY29kZSkpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwiIFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3ModmFsLnNhbGVQcmljZSkpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwiIFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3ModmFsLmNvc3RQcmljZSkpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwiIFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3ModmFsLndlaWdodCkpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwiIFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3ModmFsLnRhc3RlKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCIgXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh2YWwuYWRkU3RvY2tOdW0pKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcIiBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHZhbC5mYWN0b3J5KSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCIgXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IHZhbC5pbWdVcmwgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcIiBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndyYXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5LiK5LygXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwid3JhcF9pbm5lclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcInVwbG9hZF9pbWdfXCIgKyB2YWwuaWRdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5LiK5LygXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uX20oMylcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2lkZ2V0LXRpdGxlXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvblwiIH0sIFtcbiAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvbi10aFwiIH0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImg1XCIsIFtfdm0uX3YoXCJEYXRhIHRhYmxlXCIpXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7fSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJkYXRhVGFibGVzX2xlbmd0aFwiLFxuICAgICAgICAgIGF0dHJzOiB7IGlkOiBcIkRhdGFUYWJsZXNfVGFibGVfMF9sZW5ndGhcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImxhYmVsXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcIlNob3dcXG5cXHRcXHRcXHRcXHRcXHRcXHRcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNlbGVjdDItY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiczJpZF9hdXRvZ2VuMVwiIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNlbGVjdDItY2hvaWNlXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiLCBvbmNsaWNrOiBcInJldHVybiBmYWxzZTtcIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIjEwXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYWJiclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2VsZWN0Mi1zZWFyY2gtY2hvaWNlLWNsb3NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgZGlzcGxheTogXCJub25lXCIgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW19jKFwiYlwiKV0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2VsZWN0Mi1kcm9wIHNlbGVjdDItb2Zmc2NyZWVuXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzZWxlY3QyLXNlYXJjaFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2VsZWN0Mi1pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmluZGV4OiBcIjBcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidWxcIiwgeyBzdGF0aWNDbGFzczogXCJzZWxlY3QyLXJlc3VsdHNcIiB9KVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBkaXNwbGF5OiBcIm5vbmVcIiB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBzaXplOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiRGF0YVRhYmxlc19UYWJsZV8wX2xlbmd0aFwiLFxuICAgICAgICAgICAgICAgICAgXCJhcmlhLWNvbnRyb2xzXCI6IFwiRGF0YVRhYmxlc19UYWJsZV8wXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjEwXCIsIHNlbGVjdGVkOiBcInNlbGVjdGVkXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIxMFwiKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCIyNVwiIH0gfSwgW192bS5fdihcIjI1XCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjUwXCIgfSB9LCBbX3ZtLl92KFwiNTBcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiMTAwXCIgfSB9LCBbX3ZtLl92KFwiMTAwXCIpXSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBlbnRyaWVzXCIpXG4gICAgICAgICAgXSlcbiAgICAgICAgXVxuICAgICAgKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGhlYWRcIiwgW1xuICAgICAgX2MoXCJ0clwiLCB7IGF0dHJzOiB7IHJvbGU6IFwicm93XCIgfSB9LCBbXG4gICAgICAgIF9jKFwidGhcIiwge30sIFtfdm0uX3YoXCLkuqflk4HlkI3np7BcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCB7fSwgW192bS5fdihcIuadoeW9oueggVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIHt9LCBbX3ZtLl92KFwi5Y2W5Lu3XCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwge30sIFtfdm0uX3YoXCLmiJDmnKxcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCB7fSwgW192bS5fdihcIumHjemHj1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIHt9LCBbX3ZtLl92KFwi5ZGz6YGTXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwge30sIFtfdm0uX3YoXCLliankvZnlupPlrZhcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCB7fSwgW192bS5fdihcIuWOguWutlwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIHt9LCBbX3ZtLl92KFwi5b2T5YmN5Zu+54mHXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwge30sIFtfdm0uX3YoXCLkuIrkvKDlm77niYdcIildKVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgIFwiZmctdG9vbGJhciB1aS10b29sYmFyIHVpLXdpZGdldC1oZWFkZXIgdWktY29ybmVyLWJsIHVpLWNvcm5lci1iciB1aS1oZWxwZXItY2xlYXJmaXhcIlxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkYXRhVGFibGVzX2ZpbHRlclwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiRGF0YVRhYmxlc19UYWJsZV8wX2ZpbHRlclwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJTZWFyY2g6IFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIFwiYXJpYS1jb250cm9sc1wiOiBcIkRhdGFUYWJsZXNfVGFibGVfMFwiIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICBcImRhdGFUYWJsZXNfcGFnaW5hdGUgZmctYnV0dG9uc2V0IHVpLWJ1dHRvbnNldCBmZy1idXR0b25zZXQtbXVsdGkgdWktYnV0dG9uc2V0LW11bHRpIHBhZ2luZ19mdWxsX251bWJlcnNcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcIkRhdGFUYWJsZXNfVGFibGVfMF9wYWdpbmF0ZVwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgXCJmaXJzdCB1aS1jb3JuZXItdGwgdWktY29ybmVyLWJsIGZnLWJ1dHRvbiB1aS1idXR0b24gdWktc3RhdGUtZGVmYXVsdCB1aS1zdGF0ZS1kaXNhYmxlZFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRhYmluZGV4OiBcIjBcIiwgaWQ6IFwiRGF0YVRhYmxlc19UYWJsZV8wX2ZpcnN0XCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiRmlyc3RcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICBcInByZXZpb3VzIGZnLWJ1dHRvbiB1aS1idXR0b24gdWktc3RhdGUtZGVmYXVsdCB1aS1zdGF0ZS1kaXNhYmxlZFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRhYmluZGV4OiBcIjBcIiwgaWQ6IFwiRGF0YVRhYmxlc19UYWJsZV8wX3ByZXZpb3VzXCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiUHJldmlvdXNcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgIFwiZmctYnV0dG9uIHVpLWJ1dHRvbiB1aS1zdGF0ZS1kZWZhdWx0IHVpLXN0YXRlLWRpc2FibGVkXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0YWJpbmRleDogXCIwXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIjFcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZnLWJ1dHRvbiB1aS1idXR0b24gdWktc3RhdGUtZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGFiaW5kZXg6IFwiMFwiIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIyXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmZy1idXR0b24gdWktYnV0dG9uIHVpLXN0YXRlLWRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRhYmluZGV4OiBcIjBcIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiM1wiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmctYnV0dG9uIHVpLWJ1dHRvbiB1aS1zdGF0ZS1kZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0YWJpbmRleDogXCIwXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIjRcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZnLWJ1dHRvbiB1aS1idXR0b24gdWktc3RhdGUtZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGFiaW5kZXg6IFwiMFwiIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCI1XCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5leHQgZmctYnV0dG9uIHVpLWJ1dHRvbiB1aS1zdGF0ZS1kZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGFiaW5kZXg6IFwiMFwiLCBpZDogXCJEYXRhVGFibGVzX1RhYmxlXzBfbmV4dFwiIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIk5leHRcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICBcImxhc3QgdWktY29ybmVyLXRyIHVpLWNvcm5lci1iciBmZy1idXR0b24gdWktYnV0dG9uIHVpLXN0YXRlLWRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0YWJpbmRleDogXCIwXCIsIGlkOiBcIkRhdGFUYWJsZXNfVGFibGVfMF9sYXN0XCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiTGFzdFwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF1cbiAgICApXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxudmFyIGVzRXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmV4cG9ydCBkZWZhdWx0IGVzRXhwb3J0c1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtOWQzZDk2ZDhcIiwgZXNFeHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi05ZDNkOTZkOFwiLFwiaGFzU2NvcGVkXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL3ZpZXdzL2FkbWluL2NvbXBlbnRzL3Byb2R1Y3RfbGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtM2Q0ZDM5ZjVcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6ZmFsc2V9IXNhc3MtbG9hZGVyIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW1wb3J0X3JlY29yZC52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vaW1wb3J0X3JlY29yZC52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCBfX3Z1ZV90ZW1wbGF0ZV9fIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTNkNGQzOWY1XFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vaW1wb3J0X3JlY29yZC52dWVcIlxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTNkNGQzOWY1XCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3MvYWRtaW4vY29tcGVudHMvaW1wb3J0X3JlY29yZC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGltcG9ydF9yZWNvcmQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTNkNGQzOWY1XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtM2Q0ZDM5ZjVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3MvYWRtaW4vY29tcGVudHMvaW1wb3J0X3JlY29yZC52dWVcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0zZDRkMzlmNVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9pbXBvcnRfcmVjb3JkLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMTU5OWYxYjhcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtM2Q0ZDM5ZjVcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW1wb3J0X3JlY29yZC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtM2Q0ZDM5ZjVcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW1wb3J0X3JlY29yZC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtM2Q0ZDM5ZjVcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL3ZpZXdzL2FkbWluL2NvbXBlbnRzL2ltcG9ydF9yZWNvcmQudnVlXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcImltcG9ydF9yZWNvcmQudnVlXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtM2Q0ZDM5ZjVcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL3ZpZXdzL2FkbWluL2NvbXBlbnRzL2ltcG9ydF9yZWNvcmQudnVlXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG5cblx0PGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxuXHRcdDxocj5cblx0XHQ8ZGl2IGNsYXNzPVwicm93LWZsdWlkXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwic3BhbjEyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJ3aWRnZXQtYm94XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIndpZGdldC10aXRsZVwiPiA8c3BhbiBjbGFzcz1cImljb25cIj4gPGkgY2xhc3M9XCJpY29uLXRoXCI+PC9pPiA8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8aDU+5YWl5bqT6K6w5b2VPC9oNT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwid2lkZ2V0LWNvbnRlbnQgbm9wYWRkaW5nXCI+XG5cdFx0XHRcdFx0XHQ8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ib3JkZXJlZCB0YWJsZS1zdHJpcGVkXCI+XG5cdFx0XHRcdFx0XHRcdDx0aGVhZD5cblx0XHRcdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0XHRcdDx0aCBjbGFzcz1cIlwiID7kuqflk4HlkI3np7A8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdDx0aCBjbGFzcz1cIlwiPuadoeW9oueggTwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzPVwiXCI+5Y2W5Lu3PC90aD5cblx0XHRcdFx0XHRcdFx0XHQ8dGggY2xhc3M9XCJcIj7miJDmnKw8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdDx0aCBjbGFzcz1cIlwiPumHjemHjzwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzPVwiXCI+5ZGz6YGTPC90aD5cblx0XHRcdFx0XHRcdFx0XHQ8dGggY2xhc3M9XCJcIj7liqDlhaXlupPlrZg8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdDx0aCBjbGFzcz1cIlwiPuWOguWutjwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzPVwiXCI+5pON5L2c5Lq6PC90aD5cblx0XHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdFx0PC90aGVhZD5cblx0XHRcdFx0XHRcdFx0PHRib2R5PlxuXHRcdFx0XHRcdFx0XHQ8dHIgY2xhc3M9XCJvZGQgZ3JhZGVYXCIgdi1mb3I9XCJ2YWwgaW4gcmVjb3Jkc1wiPlxuXHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzcz1cIiBcIj57eyB2YWwucHJvZHVjdE5hbWUgfX08L3RkPlxuXHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzcz1cIiBcIj57eyB2YWwuYmFyY29kZSB9fTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzPVwiIFwiPnt7IHZhbC5zYWxlUHJpY2UgfX08L3RkPlxuXHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzcz1cIiBcIj57eyB2YWwuY29zdFByaWNlIH19PC90ZD5cblx0XHRcdFx0XHRcdFx0XHQ8dGQgY2xhc3M9XCIgXCI+e3sgdmFsLndlaWdodCB9fTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzPVwiIFwiPnt7IHZhbC50YXN0ZSB9fTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzPVwiIFwiPnt7IHZhbC5hZGRTdG9ja051bSB9fTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzPVwiIFwiPnt7IHZhbC5mYWN0b3J5IH19PC90ZD5cblx0XHRcdFx0XHRcdFx0XHQ8dGQgY2xhc3M9XCIgXCI+e3sgdmFsLmFjdGl2ZVVzZXIgfX08L3RkPlxuXHRcdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdFx0XHQ8L3Rib2R5PlxuXHRcdFx0XHRcdFx0PC90YWJsZT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByZWNvcmRzOiBbXVxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgIHN0b3JlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRzdG9yZVxuICAgICAgfSxcblxuICAgIH0sXG4gICAgbWV0aG9kczp7XG4gICAgICBpbXBvcnRfcmVjb3JkOmZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgJC5nZXQoJy9hZG1pbi9pbXBvcnRfcmVjb3JkcycsZnVuY3Rpb24gKHJlY29yZHMpIHtcbiAgICAgICAgICBzZWxmLnJlY29yZHMgPSByZWNvcmRzO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5pbXBvcnRfcmVjb3JkKClcbiAgICB9LFxuICAgIHVwZGF0ZWQ6IGZ1bmN0aW9uICgpIHtcblxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuXG5cbjwvc3R5bGU+XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBpbXBvcnRfcmVjb3JkLnZ1ZT9lYmZhYWIxNiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXItZmx1aWRcIiB9LCBbXG4gICAgX2MoXCJoclwiKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93LWZsdWlkXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzcGFuMTJcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2lkZ2V0LWJveFwiIH0sIFtcbiAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndpZGdldC1jb250ZW50IG5vcGFkZGluZ1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZSB0YWJsZS1ib3JkZXJlZCB0YWJsZS1zdHJpcGVkXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnJlY29yZHMsIGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgeyBzdGF0aWNDbGFzczogXCJvZGQgZ3JhZGVYXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwiIFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHZhbC5wcm9kdWN0TmFtZSkpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwiIFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHZhbC5iYXJjb2RlKSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCIgXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3ModmFsLnNhbGVQcmljZSkpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwiIFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHZhbC5jb3N0UHJpY2UpKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcIiBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh2YWwud2VpZ2h0KSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCIgXCIgfSwgW192bS5fdihfdm0uX3ModmFsLnRhc3RlKSldKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcIiBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh2YWwuYWRkU3RvY2tOdW0pKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcIiBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh2YWwuZmFjdG9yeSkpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwiIFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHZhbC5hY3RpdmVVc2VyKSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aWRnZXQtdGl0bGVcIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpY29uXCIgfSwgW1xuICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJpY29uLXRoXCIgfSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiaDVcIiwgW192bS5fdihcIuWFpeW6k+iusOW9lVwiKV0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0aGVhZFwiLCBbXG4gICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgX2MoXCJ0aFwiLCB7fSwgW192bS5fdihcIuS6p+WTgeWQjeensFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIHt9LCBbX3ZtLl92KFwi5p2h5b2i56CBXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwge30sIFtfdm0uX3YoXCLljZbku7dcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCB7fSwgW192bS5fdihcIuaIkOacrFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIHt9LCBbX3ZtLl92KFwi6YeN6YePXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwge30sIFtfdm0uX3YoXCLlkbPpgZNcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCB7fSwgW192bS5fdihcIuWKoOWFpeW6k+WtmFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIHt9LCBbX3ZtLl92KFwi5Y6C5a62XCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwge30sIFtfdm0uX3YoXCLmk43kvZzkurpcIildKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbnZhciBlc0V4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5leHBvcnQgZGVmYXVsdCBlc0V4cG9ydHNcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTNkNGQzOWY1XCIsIGVzRXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtM2Q0ZDM5ZjVcIixcImhhc1Njb3BlZFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy92aWV3cy9hZG1pbi9jb21wZW50cy9pbXBvcnRfcmVjb3JkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX3ZtLl9tKDApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJuYXZiYXIgbmF2YmFyLWludmVyc2VcIiwgYXR0cnM6IHsgaWQ6IFwidXNlci1uYXZcIiB9IH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwidWxcIiwgeyBzdGF0aWNDbGFzczogXCJuYXZcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duXCIsIGF0dHJzOiB7IGlkOiBcInByb2ZpbGUtbWVzc2FnZXNcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duLXRvZ2dsZVwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiI1wiLFxuICAgICAgICAgICAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwiZHJvcGRvd25cIixcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXRhcmdldFwiOiBcIiNwcm9maWxlLW1lc3NhZ2VzXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImljb24gaWNvbi11c2VyXCIgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uc3RvcmUuc3RhdGUuY3VycmVudF91c2VyLm5hbWUpKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcImJcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJldFwiIH0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uX20oMSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl9tKDMpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl9tKDQpXG4gICAgICAgIF0pXG4gICAgICBdXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5fbSg1KSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgYXR0cnM6IHsgaWQ6IFwic2lkZWJhclwiIH0gfSwgW1xuICAgICAgX3ZtLl9tKDYpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidWxcIiwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgeyBjbGFzczogW192bS5jdXJyZW50X3ZpZXcgPT0gXCJwcm9kdWN0LWxpc3RcIiA/IFwiYWN0aXZlXCIgOiBcIlwiXSB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwicm91dGVyLWxpbmtcIiwgeyBhdHRyczogeyB0bzogXCIvcHJvZHVjdC1saXN0XCIgfSB9LCBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5Lqn5ZOB5YiX6KGoXCIpXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICB7IGNsYXNzOiBbX3ZtLmN1cnJlbnRfdmlldyA9PSBcImltcG9ydC1yZWNvcmRcIiA/IFwiYWN0aXZlXCIgOiBcIlwiXSB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwicm91dGVyLWxpbmtcIiwgeyBhdHRyczogeyB0bzogXCIvaW1wb3J0LXJlY29yZFwiIH0gfSwgW1xuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuWFpeW6k+iusOW9lVwiKV0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBhdHRyczogeyBpZDogXCJjb250ZW50XCIgfSB9LFxuICAgICAgW19jKF92bS5jdXJyZW50X3ZpZXcsIHsgdGFnOiBcImNvbXBvbmVudFwiIH0pXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IGF0dHJzOiB7IGlkOiBcImhlYWRlclwiIH0gfSwgW19jKFwiaDFcIiwgW192bS5fdihcIueLl+ibi+i2heW4glwiKV0pXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ1bFwiLCB7IHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duLW1lbnVcIiB9LCBbXG4gICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LCBbXG4gICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvbi11c2VyXCIgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIE15IFByb2ZpbGVcIilcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJkaXZpZGVyXCIgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSwgW1xuICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImljb24tY2hlY2tcIiB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgTXkgVGFza3NcIilcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJkaXZpZGVyXCIgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwibG9naW4uaHRtbFwiIH0gfSwgW1xuICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImljb24ta2V5XCIgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIExvZyBPdXRcIilcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXG4gICAgICBcImxpXCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duXCIsIGF0dHJzOiB7IGlkOiBcIm1lbnUtbWVzc2FnZXNcIiB9IH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duLXRvZ2dsZVwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaHJlZjogXCIjXCIsXG4gICAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJkcm9wZG93blwiLFxuICAgICAgICAgICAgICBcImRhdGEtdGFyZ2V0XCI6IFwiI21lbnUtbWVzc2FnZXNcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvbiBpY29uLWVudmVsb3BlXCIgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtfdm0uX3YoXCJNZXNzYWdlc1wiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsIGxhYmVsLWltcG9ydGFudFwiIH0sIFtfdm0uX3YoXCI1XCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJiXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZXRcIiB9KVxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ1bFwiLCB7IHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duLW1lbnVcIiB9LCBbXG4gICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJzQWRkXCIsIGF0dHJzOiB7IHRpdGxlOiBcIlwiLCBocmVmOiBcIiNcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvbi1wbHVzXCIgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBuZXcgbWVzc2FnZVwiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJkaXZpZGVyXCIgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzSW5ib3hcIiwgYXR0cnM6IHsgdGl0bGU6IFwiXCIsIGhyZWY6IFwiI1wiIH0gfSxcbiAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImljb24tZW52ZWxvcGVcIiB9KSwgX3ZtLl92KFwiIGluYm94XCIpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcImRpdmlkZXJcIiB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNPdXRib3hcIiwgYXR0cnM6IHsgdGl0bGU6IFwiXCIsIGhyZWY6IFwiI1wiIH0gfSxcbiAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImljb24tYXJyb3ctdXBcIiB9KSwgX3ZtLl92KFwiIG91dGJveFwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJkaXZpZGVyXCIgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzVHJhc2hcIiwgYXR0cnM6IHsgdGl0bGU6IFwiXCIsIGhyZWY6IFwiI1wiIH0gfSxcbiAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImljb24tdHJhc2hcIiB9KSwgX3ZtLl92KFwiIHRyYXNoXCIpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdXG4gICAgKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImxpXCIsIHt9LCBbXG4gICAgICBfYyhcImFcIiwgeyBhdHRyczogeyB0aXRsZTogXCJcIiwgaHJlZjogXCIjXCIgfSB9LCBbXG4gICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImljb24gaWNvbi1jb2dcIiB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtfdm0uX3YoXCJTZXR0aW5nc1wiKV0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwibGlcIiwge30sIFtcbiAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IHRpdGxlOiBcIlwiLCBocmVmOiBcImxvZ2luLmh0bWxcIiB9IH0sIFtcbiAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvbiBpY29uLXNoYXJlLWFsdFwiIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW192bS5fdihcIkxvZ291dFwiKV0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgYXR0cnM6IHsgaWQ6IFwic2VhcmNoXCIgfSB9LCBbXG4gICAgICBfYyhcImlucHV0XCIsIHsgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlNlYXJjaCBoZXJlLi4uXCIgfSB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRpcC1ib3R0b21cIixcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiLCB0aXRsZTogXCJTZWFyY2hcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJpY29uLXNlYXJjaCBpY29uLXdoaXRlXCIgfSldXG4gICAgICApXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJhXCIsIHsgc3RhdGljQ2xhc3M6IFwidmlzaWJsZS1waG9uZVwiLCBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sIFtcbiAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImljb24gaWNvbi1ob21lXCIgfSksXG4gICAgICBfdm0uX3YoXCIgRGFzaGJvYXJkXCIpXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG52YXIgZXNFeHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuZXhwb3J0IGRlZmF1bHQgZXNFeHBvcnRzXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi01ZDQ2NjJlMFwiLCBlc0V4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTVkNDY2MmUwXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL3ZpZXdzL2FkbWluL2luZGV4LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==
webpackJsonp([4],[,,,,,,,,,,,,,,,,,function(module,t,e){"use strict";function s(t){r||e(42)}Object.defineProperty(t,"__esModule",{value:!0});var a=e(44),i=e.n(a),o=e(45),r=!1,n=e(5),c=s,l=n(i.a,o.a,!1,c,"data-v-2d5ad594",null);l.options.__file="src/views/admin/production/edit.vue",l.esModule&&Object.keys(l.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),t.default=l.exports},,,,,,,,function(module,exports){function t(t,s){var a=t[1]||"",i=t[3];if(!i)return a;if(s&&"function"==typeof btoa){var o=e(i);return[a].concat(i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"})).concat([o]).join("\n")}return[a].join("\n")}function e(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}module.exports=function(e){var s=[];return s.toString=function(){return this.map(function(s){var a=t(s,e);return s[2]?"@media "+s[2]+"{"+a+"}":a}).join("")},s.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var a={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(a[o]=!0)}for(i=0;i<t.length;i++){var r=t[i];"number"==typeof r[0]&&a[r[0]]||(e&&!r[2]?r[2]=e:e&&(r[2]="("+r[2]+") and ("+e+")"),s.push(r))}},s}},function(module,exports,t){function e(t){for(var e=0;e<t.length;e++){var s=t[e],i=c[s.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](s.parts[o]);for(;o<s.parts.length;o++)i.parts.push(a(s.parts[o]));i.parts.length>s.parts.length&&(i.parts.length=s.parts.length)}else{for(var r=[],o=0;o<s.parts.length;o++)r.push(a(s.parts[o]));c[s.id]={id:s.id,refs:1,parts:r}}}}function s(){var t=document.createElement("style");return t.type="text/css",l.appendChild(t),t}function a(t){var e,a,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(v)return p;r.parentNode.removeChild(r)}if(f){var n=d++;r=u||(u=s()),e=i.bind(null,r,n,!1),a=i.bind(null,r,n,!0)}else r=s(),e=o.bind(null,r),a=function(){r.parentNode.removeChild(r)};return e(t),function(s){if(s){if(s.css===t.css&&s.media===t.media&&s.sourceMap===t.sourceMap)return;e(t=s)}else a()}}function i(t,e,s,a){var i=s?"":a.css;if(t.styleSheet)t.styleSheet.cssText=m(e,i);else{var o=document.createTextNode(i),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(o,r[e]):t.appendChild(o)}}function o(t,e){var s=e.css,a=e.media,i=e.sourceMap;if(a&&t.setAttribute("media",a),i&&(s+="\n/*# sourceURL="+i.sources[0]+" */",s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=s;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(s))}}var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var n=t(27),c={},l=r&&(document.head||document.getElementsByTagName("head")[0]),u=null,d=0,v=!1,p=function(){},f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());module.exports=function(t,s,a){v=a;var i=n(t,s);return e(i),function(s){for(var a=[],o=0;o<i.length;o++){var r=i[o],l=c[r.id];l.refs--,a.push(l)}s?(i=n(t,s),e(i)):i=[];for(var o=0;o<a.length;o++){var l=a[o];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete c[l.id]}}}};var m=function(){var t=[];return function(e,s){return t[e]=s,t.filter(Boolean).join("\n")}}()},function(module,exports){module.exports=function(t,e){for(var s=[],a={},i=0;i<e.length;i++){var o=e[i],r=o[0],n=o[1],c=o[2],l=o[3],u={id:t+":"+i,css:n,media:c,sourceMap:l};a[r]?a[r].parts.push(u):s.push(a[r]={id:r,parts:[u]})}return s}},function(module,t,e){"use strict";function s(t){r||e(29)}Object.defineProperty(t,"__esModule",{value:!0});var a=e(31),i=e.n(a),o=e(32),r=!1,n=e(5),c=s,l=n(i.a,o.a,!1,c,"data-v-6a632350",null);l.options.__file="src/views/admin/compents/layout.vue",l.esModule&&Object.keys(l.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),t.default=l.exports},function(module,exports,t){var e=t(30);"string"==typeof e&&(e=[[module.i,e,""]]),e.locals&&(module.exports=e.locals);t(26)("3d97905a",e,!1)},function(module,exports,t){exports=module.exports=t(25)(void 0),exports.push([module.i,"\n#header h1[data-v-6a632350] {\n  line-height: 20px;\n  color: #fff;\n  background: none;\n  font-size: 23px;\n}\n",""])},function(module,exports,t){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={data:function(){return{}},computed:{store:function(){return this.$store},current_view:function(){return this.$route.path}},methods:{logout:function(){$.ajax({url:"/admin/logout",type:"delete",success:function(){window.location.reload()}})}},created:function(){},components:{},updated:function(){}}},function(module,t,e){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),t._v(" "),s("div",{staticClass:"navbar navbar-inverse",attrs:{id:"user-nav"}},[s("ul",{staticClass:"nav"},[s("li",{staticClass:"dropdown",attrs:{id:"profile-messages"}},[s("a",{staticClass:"dropdown-toggle",attrs:{title:"",href:"#","data-toggle":"dropdown","data-target":"#profile-messages"}},[s("i",{staticClass:"icon icon-user"}),t._v(" "),s("span",{staticClass:"text"},[t._v(t._s(t.store.state.current_user.name))]),s("b",{staticClass:"caret"})]),t._v(" "),s("ul",{staticClass:"dropdown-menu"},[t._m(1),t._v(" "),s("li",{staticClass:"divider"}),t._v(" "),t._m(2),t._v(" "),s("li",{staticClass:"divider"}),t._v(" "),s("li",{attrs:{click:t.logout}},[t._v("Log Out")])])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("li",{},[s("a",{attrs:{title:""},on:{click:t.logout}},[s("i",{staticClass:"icon icon-share-alt"}),t._v(" "),s("span",{staticClass:"text"},[t._v("Logout")])])])])]),t._v(" "),t._m(5),t._v(" "),s("div",{attrs:{id:"sidebar"}},[t._m(6),t._v(" "),s("ul",[s("li",{class:["/production"==t.current_view?"active":""]},[s("router-link",{attrs:{to:"/production"}},[s("span",[t._v("产品列表")])])],1),t._v(" "),s("li",{class:["/import_record"==t.current_view?"active":""]},[s("router-link",{attrs:{to:"/import_record"}},[s("span",[t._v("入库记录")])])],1),t._v(" "),s("li",{class:["/sell_record"==t.current_view?"active":""]},[s("router-link",{attrs:{to:"/sell_record"}},[s("span",[t._v("销售记录")])])],1)])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"header"}},[s("h1",[t._v("花间超市")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"icon-user"}),t._v(" My Profile")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"icon-check"}),t._v(" My Tasks")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"dropdown",attrs:{id:"menu-messages"}},[s("a",{staticClass:"dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown","data-target":"#menu-messages"}},[s("i",{staticClass:"icon icon-envelope"}),t._v(" "),s("span",{staticClass:"text"},[t._v("Messages")]),t._v(" "),s("span",{staticClass:"label label-important"},[t._v("5")]),t._v(" "),s("b",{staticClass:"caret"})]),t._v(" "),s("ul",{staticClass:"dropdown-menu"},[s("li",[s("a",{staticClass:"sAdd",attrs:{title:"",href:"#"}},[s("i",{staticClass:"icon-plus"}),t._v(" new message")])]),t._v(" "),s("li",{staticClass:"divider"}),t._v(" "),s("li",[s("a",{staticClass:"sInbox",attrs:{title:"",href:"#"}},[s("i",{staticClass:"icon-envelope"}),t._v(" inbox")])]),t._v(" "),s("li",{staticClass:"divider"}),t._v(" "),s("li",[s("a",{staticClass:"sOutbox",attrs:{title:"",href:"#"}},[s("i",{staticClass:"icon-arrow-up"}),t._v(" outbox")])]),t._v(" "),s("li",{staticClass:"divider"}),t._v(" "),s("li",[s("a",{staticClass:"sTrash",attrs:{title:"",href:"#"}},[s("i",{staticClass:"icon-trash"}),t._v(" trash")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{},[s("a",{attrs:{title:"",href:"#"}},[s("i",{staticClass:"icon icon-cog"}),t._v(" "),s("span",{staticClass:"text"},[t._v("Settings")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"search"}},[s("input",{attrs:{type:"text",placeholder:"Search here..."}}),t._v(" "),s("button",{staticClass:"tip-bottom",attrs:{type:"submit",title:"Search"}},[s("i",{staticClass:"icon-search icon-white"})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"visible-phone",attrs:{href:"#"}},[s("i",{staticClass:"icon icon-home"}),t._v(" Dashboard")])}];s._withStripped=!0;var i={render:s,staticRenderFns:a};t.a=i},,,,,,,,,,function(module,exports,t){var e=t(43);"string"==typeof e&&(e=[[module.i,e,""]]),e.locals&&(module.exports=e.locals);t(26)("3fd5b499",e,!1)},function(module,exports,t){exports=module.exports=t(25)(void 0),exports.push([module.i,"",""])},function(module,exports,t){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=t(28),s=function(t){return t&&t.__esModule?t:{default:t}}(e);exports.default={data:function(){return{production:{}}},computed:{store:function(){return this.$store}},methods:{get_production:function(){var t=this;$.get("/admin/production/"+this.$route.params.id,function(e){t.production=e.production})},save:function(){var t=this;$.ajax({url:"/admin/production/"+this.$route.params.id,type:"put",data:this.production,success:function(e,s){alert("修改成功"),t.get_production()}})}},created:function(){this.get_production()},components:{layout:s.default},updated:function(){}}},function(module,t,e){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("layout"),t._v(" "),s("div",{attrs:{id:"content"}},[t._m(0),t._v(" "),s("div",{staticClass:"container-fluid"},[s("hr"),t._v(" "),s("div",{staticClass:"row-fluid"},[s("div",{staticClass:"span6"},[s("div",{staticClass:"widget-box"},[t._m(1),t._v(" "),s("div",{staticClass:"widget-content nopadding"},[s("form",{staticClass:"form-horizontal"},[s("div",{staticClass:"control-group"},[s("label",{staticClass:"control-label"},[t._v("条形码")]),t._v(" "),s("div",{staticClass:"controls"},[s("span",[t._v(t._s(t.production.barcode))])])]),t._v(" "),s("div",{staticClass:"control-group"},[s("label",{staticClass:"control-label"},[t._v("商品名称")]),t._v(" "),s("div",{staticClass:"controls"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.production.productName,expression:"production.productName"}],attrs:{type:"text"},domProps:{value:t.production.productName},on:{input:function(e){e.target.composing||t.$set(t.production,"productName",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"control-group"},[s("label",{staticClass:"control-label"},[t._v("卖价")]),t._v(" "),s("div",{staticClass:"controls"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.production.salePrice,expression:"production.salePrice"}],attrs:{type:"text"},domProps:{value:t.production.salePrice},on:{input:function(e){e.target.composing||t.$set(t.production,"salePrice",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"control-group"},[s("label",{staticClass:"control-label"},[t._v("陈本")]),t._v(" "),s("div",{staticClass:"controls"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.production.costPrice,expression:"production.costPrice"}],attrs:{type:"text"},domProps:{value:t.production.costPrice},on:{input:function(e){e.target.composing||t.$set(t.production,"costPrice",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"control-group"},[s("label",{staticClass:"control-label"},[t._v("重量")]),t._v(" "),s("div",{staticClass:"controls"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.production.weight,expression:"production.weight"}],attrs:{type:"text"},domProps:{value:t.production.weight},on:{input:function(e){e.target.composing||t.$set(t.production,"weight",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"control-group"},[s("label",{staticClass:"control-label"},[t._v("味道")]),t._v(" "),s("div",{staticClass:"controls"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.production.taste,expression:"production.taste"}],attrs:{type:"text"},domProps:{value:t.production.taste},on:{input:function(e){e.target.composing||t.$set(t.production,"taste",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"control-group"},[s("label",{staticClass:"control-label"},[t._v("厂家")]),t._v(" "),s("div",{staticClass:"controls"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.production.factory,expression:"production.factory"}],attrs:{type:"text"},domProps:{value:t.production.factory},on:{input:function(e){e.target.composing||t.$set(t.production,"factory",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"control-group"},[s("label",{staticClass:"control-label"},[t._v("剩余库存")]),t._v(" "),s("div",{staticClass:"controls"},[s("span",[t._v(t._s(t.production.addStockNum))])])]),t._v(" "),s("div",{staticClass:"form-actions",staticStyle:{"text-align":"right"}},[s("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:t.save}},[t._v("保存")])])])])])])])])])],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"content-header"}},[s("div",{attrs:{id:"breadcrumb"}},[s("a",{staticClass:"tip-bottom",attrs:{href:"index.html","data-original-title":"Go to Home"}},[s("i",{staticClass:"icon-home"}),t._v(" Home")]),t._v(" "),s("a",{staticClass:"tip-bottom",attrs:{href:"#","data-original-title":""}},[t._v("Form elements")]),t._v(" "),s("a",{staticClass:"current",attrs:{href:"#"}},[t._v("Common elements")])]),t._v(" "),s("h1",[t._v("商品修改")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"widget-title"},[s("span",{staticClass:"icon"},[s("i",{staticClass:"icon-align-justify"})]),t._v(" "),s("h5",[t._v("修改")])])}];s._withStripped=!0;var i={render:s,staticRenderFns:a};t.a=i}]);
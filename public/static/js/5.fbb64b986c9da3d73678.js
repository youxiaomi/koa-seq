webpackJsonp([5],[,,,,,,,,,,,,,,,,function(module,t,e){"use strict";function s(t){i||e(44)}Object.defineProperty(t,"__esModule",{value:!0});var a=e(46),n=e.n(a),r=e(47),i=!1,o=e(4),c=s,l=o(n.a,r.a,c,"data-v-ccbe62f8",null);l.options.__file="src/views/admin/production/add_stock.vue",l.esModule&&Object.keys(l.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] add_stock.vue: functional components are not supported with templates, they should use render functions."),t.default=l.exports},,,,,,,function(module,exports){function t(t,s){var a=t[1]||"",n=t[3];if(!n)return a;if(s&&"function"==typeof btoa){var r=e(n);return[a].concat(n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"})).concat([r]).join("\n")}return[a].join("\n")}function e(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}module.exports=function(e){var s=[];return s.toString=function(){return this.map(function(s){var a=t(s,e);return s[2]?"@media "+s[2]+"{"+a+"}":a}).join("")},s.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var a={},n=0;n<this.length;n++){var r=this[n][0];"number"==typeof r&&(a[r]=!0)}for(n=0;n<t.length;n++){var i=t[n];"number"==typeof i[0]&&a[i[0]]||(e&&!i[2]?i[2]=e:e&&(i[2]="("+i[2]+") and ("+e+")"),s.push(i))}},s}},function(module,exports,t){function e(t){for(var e=0;e<t.length;e++){var s=t[e],n=c[s.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](s.parts[r]);for(;r<s.parts.length;r++)n.parts.push(a(s.parts[r]));n.parts.length>s.parts.length&&(n.parts.length=s.parts.length)}else{for(var i=[],r=0;r<s.parts.length;r++)i.push(a(s.parts[r]));c[s.id]={id:s.id,refs:1,parts:i}}}}function s(){var t=document.createElement("style");return t.type="text/css",l.appendChild(t),t}function a(t){var e,a,i=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(i){if(v)return p;i.parentNode.removeChild(i)}if(f){var o=d++;i=u||(u=s()),e=n.bind(null,i,o,!1),a=n.bind(null,i,o,!0)}else i=s(),e=r.bind(null,i),a=function(){i.parentNode.removeChild(i)};return e(t),function(s){if(s){if(s.css===t.css&&s.media===t.media&&s.sourceMap===t.sourceMap)return;e(t=s)}else a()}}function n(t,e,s,a){var n=s?"":a.css;if(t.styleSheet)t.styleSheet.cssText=h(e,n);else{var r=document.createTextNode(n),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(r,i[e]):t.appendChild(r)}}function r(t,e){var s=e.css,a=e.media,n=e.sourceMap;if(a&&t.setAttribute("media",a),n&&(s+="\n/*# sourceURL="+n.sources[0]+" */",s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),t.styleSheet)t.styleSheet.cssText=s;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(s))}}var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=t(25),c={},l=i&&(document.head||document.getElementsByTagName("head")[0]),u=null,d=0,v=!1,p=function(){},f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());module.exports=function(t,s,a){v=a;var n=o(t,s);return e(n),function(s){for(var a=[],r=0;r<n.length;r++){var i=n[r],l=c[i.id];l.refs--,a.push(l)}s?(n=o(t,s),e(n)):n=[];for(var r=0;r<a.length;r++){var l=a[r];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete c[l.id]}}}};var h=function(){var t=[];return function(e,s){return t[e]=s,t.filter(Boolean).join("\n")}}()},function(module,exports){module.exports=function(t,e){for(var s=[],a={},n=0;n<e.length;n++){var r=e[n],i=r[0],o=r[1],c=r[2],l=r[3],u={id:t+":"+n,css:o,media:c,sourceMap:l};a[i]?a[i].parts.push(u):s.push(a[i]={id:i,parts:[u]})}return s}},function(module,t,e){"use strict";function s(t){i||e(27)}Object.defineProperty(t,"__esModule",{value:!0});var a=e(29),n=e.n(a),r=e(30),i=!1,o=e(4),c=s,l=o(n.a,r.a,c,"data-v-50208b60",null);l.options.__file="src/views/admin/compents/layout.vue",l.esModule&&Object.keys(l.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] layout.vue: functional components are not supported with templates, they should use render functions."),t.default=l.exports},function(module,exports,t){var e=t(28);"string"==typeof e&&(e=[[module.i,e,""]]),e.locals&&(module.exports=e.locals);t(24)("5578eb78",e,!1)},function(module,exports,t){exports=module.exports=t(23)(void 0),exports.push([module.i,"\n#header h1[data-v-50208b60] {\n  line-height: 20px;\n  color: #fff;\n  background: none;\n  font-size: 23px;\n}\n",""])},function(module,exports,t){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={data:function(){return{}},computed:{store:function(){return this.$store},current_view:function(){return this.$route.path}},methods:{logout:function(){$.ajax({url:"/admin/logout",type:"delete",success:function(){window.location.reload()}})}},created:function(){},components:{},updated:function(){}}},function(module,t,e){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),t._v(" "),s("div",{staticClass:"navbar navbar-inverse",attrs:{id:"user-nav"}},[s("ul",{staticClass:"nav"},[s("li",{staticClass:"dropdown",attrs:{id:"profile-messages"}},[s("a",{staticClass:"dropdown-toggle",attrs:{title:"",href:"#","data-toggle":"dropdown","data-target":"#profile-messages"}},[s("i",{staticClass:"icon icon-user"}),t._v(" "),s("span",{staticClass:"text"},[t._v(t._s(t.store.state.current_user.name))]),s("b",{staticClass:"caret"})]),t._v(" "),s("ul",{staticClass:"dropdown-menu"},[t._m(1),t._v(" "),s("li",{staticClass:"divider"}),t._v(" "),t._m(2),t._v(" "),s("li",{staticClass:"divider"}),t._v(" "),s("li",{attrs:{click:t.logout}},[t._v("Log Out")])])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("li",{},[s("a",{attrs:{title:""},on:{click:t.logout}},[s("i",{staticClass:"icon icon-share-alt"}),t._v(" "),s("span",{staticClass:"text"},[t._v("Logout")])])])])]),t._v(" "),t._m(5),t._v(" "),s("div",{attrs:{id:"sidebar"}},[t._m(6),t._v(" "),s("ul",[s("li",{class:["/production"==t.current_view?"active":""]},[s("router-link",{attrs:{to:"/production"}},[s("span",[t._v("产品列表")])])],1),t._v(" "),s("li",{class:["/import_record"==t.current_view?"active":""]},[s("router-link",{attrs:{to:"/import_record"}},[s("span",[t._v("入库记录")])])],1),t._v(" "),s("li",{class:["/sell_record"==t.current_view?"active":""]},[s("router-link",{attrs:{to:"/sell_record"}},[s("span",[t._v("销售记录")])])],1)])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"header"}},[s("h1",[t._v("花间超市")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"icon-user"}),t._v(" My Profile")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"icon-check"}),t._v(" My Tasks")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"dropdown",attrs:{id:"menu-messages"}},[s("a",{staticClass:"dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown","data-target":"#menu-messages"}},[s("i",{staticClass:"icon icon-envelope"}),t._v(" "),s("span",{staticClass:"text"},[t._v("Messages")]),t._v(" "),s("span",{staticClass:"label label-important"},[t._v("5")]),t._v(" "),s("b",{staticClass:"caret"})]),t._v(" "),s("ul",{staticClass:"dropdown-menu"},[s("li",[s("a",{staticClass:"sAdd",attrs:{title:"",href:"#"}},[s("i",{staticClass:"icon-plus"}),t._v(" new message")])]),t._v(" "),s("li",{staticClass:"divider"}),t._v(" "),s("li",[s("a",{staticClass:"sInbox",attrs:{title:"",href:"#"}},[s("i",{staticClass:"icon-envelope"}),t._v(" inbox")])]),t._v(" "),s("li",{staticClass:"divider"}),t._v(" "),s("li",[s("a",{staticClass:"sOutbox",attrs:{title:"",href:"#"}},[s("i",{staticClass:"icon-arrow-up"}),t._v(" outbox")])]),t._v(" "),s("li",{staticClass:"divider"}),t._v(" "),s("li",[s("a",{staticClass:"sTrash",attrs:{title:"",href:"#"}},[s("i",{staticClass:"icon-trash"}),t._v(" trash")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{},[s("a",{attrs:{title:"",href:"#"}},[s("i",{staticClass:"icon icon-cog"}),t._v(" "),s("span",{staticClass:"text"},[t._v("Settings")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"search"}},[s("input",{attrs:{type:"text",placeholder:"Search here..."}}),t._v(" "),s("button",{staticClass:"tip-bottom",attrs:{type:"submit",title:"Search"}},[s("i",{staticClass:"icon-search icon-white"})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"visible-phone",attrs:{href:"#"}},[s("i",{staticClass:"icon icon-home"}),t._v(" Dashboard")])}];s._withStripped=!0;var n={render:s,staticRenderFns:a};t.a=n},,,,,,,,,,,,,,function(module,exports,t){var e=t(45);"string"==typeof e&&(e=[[module.i,e,""]]),e.locals&&(module.exports=e.locals);t(24)("d15edf0c",e,!1)},function(module,exports,t){exports=module.exports=t(23)(void 0),exports.push([module.i,"",""])},function(module,exports,t){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=t(26),s=function(t){return t&&t.__esModule?t:{default:t}}(e);exports.default={data:function(){return{production:{},addStock:0}},computed:{store:function(){return this.$store}},methods:{get_production:function(){var t=this;$.get("/admin/production/"+this.$route.params.id,function(e){t.production=e.production})},save:function(){var t=this;$.ajax({url:"/admin/production/addstock/"+this.$route.params.id,type:"put",data:{addStock:this.addStock},success:function(e,s){alert("修改成功"),t.addStock=0,t.get_production()}})}},created:function(){this.get_production()},components:{layout:s.default},updated:function(){}}},function(module,t,e){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("layout"),t._v(" "),s("div",{attrs:{id:"content"}},[t._m(0),t._v(" "),s("div",{staticClass:"container-fluid"},[s("hr"),t._v(" "),s("div",{staticClass:"row-fluid"},[s("div",{staticClass:"span6"},[s("div",{staticClass:"widget-box"},[t._m(1),t._v(" "),s("div",{staticClass:"widget-content nopadding"},[s("form",{staticClass:"form-horizontal"},[s("div",{staticClass:"control-group"},[s("label",{staticClass:"control-label"},[t._v("条形码")]),t._v(" "),s("div",{staticClass:"controls"},[s("span",[t._v(t._s(t.production.barcode))])])]),t._v(" "),s("div",{staticClass:"control-group"},[s("label",{staticClass:"control-label"},[t._v("商品名称")]),t._v(" "),s("div",{staticClass:"controls"},[s("span",[t._v(t._s(t.production.productName))])])]),t._v(" "),s("div",{staticClass:"control-group"},[s("label",{staticClass:"control-label"},[t._v("剩余库存")]),t._v(" "),s("div",{staticClass:"controls"},[s("span",[t._v(t._s(t.production.addStockNum))])])]),t._v(" "),s("div",{staticClass:"control-group"},[s("label",{staticClass:"control-label"},[t._v("加入库存")]),t._v(" "),s("div",{staticClass:"controls"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.addStock,expression:"addStock"}],attrs:{type:"text"},domProps:{value:t.addStock},on:{input:function(e){e.target.composing||(t.addStock=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-actions",staticStyle:{"text-align":"right"}},[s("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:t.save}},[t._v("保存")])])])])])])])])])],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"content-header"}},[s("div",{attrs:{id:"breadcrumb"}},[s("a",{staticClass:"tip-bottom",attrs:{href:"index.html","data-original-title":"Go to Home"}},[s("i",{staticClass:"icon-home"}),t._v(" Home")]),t._v(" "),s("a",{staticClass:"tip-bottom",attrs:{href:"#","data-original-title":""}},[t._v("Form elements")]),t._v(" "),s("a",{staticClass:"current",attrs:{href:"#"}},[t._v("Common elements")])]),t._v(" "),s("h1",[t._v("加入库存")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"widget-title"},[s("span",{staticClass:"icon"},[s("i",{staticClass:"icon-align-justify"})]),t._v(" "),s("h5",[t._v("修改")])])}];s._withStripped=!0;var n={render:s,staticRenderFns:a};t.a=n}]);
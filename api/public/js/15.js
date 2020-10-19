(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{156:function(t,a,e){"use strict";e.r(a);var o=e(1),s=e(2),i={components:{Layout:o.default},mixins:[s.a],data:function(){return{expiryDate:"",type:"",amount:0,couponData:this.coupons}},props:{coupons:Array},mounted:function(){var t=document.createElement("script");t.setAttribute("src","../admin/assets/pages/jquery.dashboard.js"),document.head.appendChild(t)},methods:{addCoupon:function(){this.$inertia.post("/admins/coupons",{date:this.expiryDate,type:this.type,amount:this.amount},{replace:!1,preserveState:!1,preserveScroll:!1,only:[],headers:{}}).then((function(){document.getElementById("closeButton").click()}))}}},n=(e(252),e(0)),r=Object(n.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("layout",{attrs:{title:"Admin | Coupons List"}},[e("th",{staticStyle:{"vertical-align":"middle"},attrs:{scope:"col"}},[t._v("Avatar")]),t._v(" "),e("div",{staticClass:"content-page"},[e("div",{staticClass:"content"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12"},[e("div",{staticClass:"page-title-box"},[e("h4",{staticClass:"page-title"},[t._v("Dashboard")]),t._v(" "),e("ol",{staticClass:"breadcrumb p-0 m-0"},[e("li",{attrs:{CLASS:"active"}},[t._v("\n                                        Coupons List\n                                    ")])]),t._v(" "),e("div",{staticClass:"clearfix"})])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"card-box"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-toggle":"modal","data-target":"#exampleModal"}},[t._v("\n  Add coupons\n")]),t._v(" "),e("table",{staticClass:"table"},[e("thead",{staticClass:"thead-dark"},[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("User")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Code")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Expire")])])]),t._v(" "),e("tbody",t._l(t.couponData,(function(a){return e("tr",{key:a.id},[e("th",[t._v(t._s(a.user_id))]),t._v(" "),e("th",[t._v(t._s(a.code))]),t._v(" "),e("th",[t._v(t._s(a.expire_date))])])})),0)])])])])])])]),t._v(" "),e("div",{staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Add coupons")]),t._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"type"}},[t._v("Expiry date")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.expiryDate,expression:"expiryDate"}],staticClass:"form-control",attrs:{type:"date",placeholder:"Expiry date"},domProps:{value:t.expiryDate},on:{input:function(a){a.target.composing||(t.expiryDate=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"type"}},[t._v("Coupon type")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],staticClass:"form-control",attrs:{name:"type",id:"type"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.type=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"",disabled:""}},[t._v("Select type")]),t._v(" "),e("option",{attrs:{value:"fixed"}},[t._v("Fixed amount")]),t._v(" "),e("option",{attrs:{value:"ratio"}},[t._v("Ratio")])])]),t._v(" "),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"form-control",attrs:{type:"number",placeholder:"Amount"},domProps:{value:t.amount},on:{input:function(a){a.target.composing||(t.amount=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("button",{staticClass:"btn btn-primary btn-block",on:{click:function(a){return a.preventDefault(),t.addCoupon(a)}}},[t._v("ADD COUPON")])])]),t._v(" "),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button",id:"closeButton","data-dismiss":"modal"}},[t._v("Close")])])])])])])}),[],!1,null,"2d028464",null);a.default=r.exports},213:function(t,a,e){(t.exports=e(3)(!1)).push([t.i,"@keyframes fadeOut{from{opacity:1}to{opacity:0}}.fadeOut{animation-name:fadeOut}@keyframes fadeInDown{from{opacity:0;transform:translate3d(0, -100%, 0)}to{opacity:1;transform:none}}.fadeInDown{animation-name:fadeInDown}@keyframes fadeInUp{from{opacity:0;transform:translate3d(0, 100%, 0)}to{opacity:1;transform:none}}.fadeInUp{animation-name:fadeInUp}.fade-enter-active,.fade-leave-active{transition:opacity 150ms ease-out}.fade-enter,.fade-leave-to{opacity:0}.notices{position:fixed;display:flex;top:0;bottom:0;left:0;right:0;padding:2em;overflow:hidden;z-index:1052;pointer-events:none}.notices .toast{display:inline-flex;align-items:center;animation-duration:150ms;margin:.5em 0;box-shadow:0 1px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);border-radius:.25em;pointer-events:auto;opacity:.92;color:#fff;min-height:3em;cursor:pointer}.notices .toast .toast-text{margin:0;padding:.5em 1em;word-break:break-all}.notices .toast .toast-icon{display:none}.notices .toast-success{background-color:#28a745}.notices .toast-info{background-color:#17a2b8}.notices .toast-warning{background-color:#ffc107}.notices .toast-error{background-color:#dc3545}.notices .toast-default{background-color:#343a40}.notices .toast.is-top,.notices .toast.is-bottom{align-self:center}.notices .toast.is-top-right,.notices .toast.is-bottom-right{align-self:flex-end}.notices .toast.is-top-left,.notices .toast.is-bottom-left{align-self:flex-start}.notices.is-top{flex-direction:column}.notices.is-bottom{flex-direction:column-reverse}.notices.is-custom-parent{position:absolute}@media screen and (max-width: 768px){.notices{padding:0;position:fixed !important}}\n",""])},252:function(t,a,e){"use strict";var o=e(52);e.n(o).a},253:function(t,a,e){(t.exports=e(3)(!1)).push([t.i,"\ninput[type=file][data-v-2d028464] {\n    cursor: pointer;\n    width: 100%;\n    height: 58px;\n    overflow: hidden;\n}\ninput[type=file][data-v-2d028464]:before {\n    width: 100%;\n    height: 60px;\n    font-size: 16px;\n    line-height: 32px;\n    content: 'Select your file';\n    display: inline-block;\n    background: white;\n    border: 1px solid #000;\n    padding: 0 10px;\n    text-align: center;\n    font-family: Helvetica, Arial, sans-serif;\n}\ninput[type=file][data-v-2d028464]::-webkit-file-upload-button {\n    visibility: hidden;\n}\n",""])},52:function(t,a,e){var o=e(253);"string"==typeof o&&(o=[[t.i,o,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e(4)(o,s);o.locals&&(t.exports=o.locals)}}]);
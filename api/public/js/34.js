(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{151:function(t,e,s){"use strict";s.r(e);var i=s(2),r={components:{Layout:s(1).default},mixins:[i.a],data:function(){return{isAdvance:!1,invite:{email:"",role:"",roles:[]},inviteError:{email:"",roles:""},register:{email:"",password:"",confirm_password:"",role:"",roles:[],permissions:[],sendMail:!1},registerError:{email:"",password:"",confirm_password:"",roles:""}}},props:{roles:Array,permissions:Array},computed:{},created:function(){},mounted:function(){},methods:{inviteNewAdmin:function(){var t=this;this.$inertia.post("/admins/admin-resource/invite/admin",this.invite).then((function(){t.invite.email="",t.invite.roles=[]}))},addRole:function(){if(""===this.register.role||this.register.roles.includes(this.register.role)){if(this.register.roles.includes(this.register.role))return this.registerError.roles="Almost selected";this.registerError.roles=""}else this.register.roles.push(this.register.role),this.register.role="",this.registerError.roles=""},deleteFromRegisterRoleList:function(t){this.register.roles.splice(t,1)},deleteFromInviteRoleList:function(t){this.invite.roles.splice(t,1)},saveAdmin:function(){var t=this;""===this.register.email||""===this.register.password||""===this.register.confirm_password||this.register.password!==this.register.confirm_password||this.register.roles.length<1?(""===this.register.email?this.registerError.email="Email required":this.registerError.email="",""===this.register.password?this.registerError.password="Password required":this.registerError.password="",""===this.register.confirm_password?this.registerError.confirm_password="Confirm password required":this.registerError.confirm_password="",this.register.password!==this.register.confirm_password?this.registerError.password="Password doesnt match":this.registerError.pasword="",this.register.roles.length<1?this.registerError.roles="No roles selected":this.registerError.roles=""):this.$inertia.post("/admins/admin-resource",this.register).then((function(){t.register.email="",t.register.password="",t.register.confirm_password="",t.register.roles=[],t.register.sendMail=!1}))},addInviteRole:function(){if(""===this.invite.role||this.invite.roles.includes(this.invite.role)){if(this.invite.roles.includes(this.invite.role))return this.inviteError.roles="Almost selected";this.inviteError.roles=""}else this.invite.roles.push(this.invite.role),this.invite.role="",this.inviteError.roles=""}}},a=s(0),o=Object(a.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("layout",{attrs:{title:"Admin | Admin Add"}},[s("div",{staticClass:"content-page"},[s("div",{staticClass:"content"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12"},[s("div",{staticClass:"page-title-box"},[s("h4",{staticClass:"page-title"},[t._v("Dashboard")]),t._v(" "),s("ol",{staticClass:"breadcrumb p-0 m-0"},[s("li",[s("inertia-link",{attrs:{href:"/admins/dashboard"}},[t._v("Dashboard")])],1),t._v(" "),s("li",[s("inertia-link",{attrs:{href:"/admins/admin"}},[t._v("Admin")])],1),t._v(" "),s("li",{attrs:{CLASS:"active"}},[t._v("\n                                    Admin Add\n                                ")])]),t._v(" "),s("div",{staticClass:"clearfix"})])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"card-box"},[s("h4",{staticClass:"header-title m-t-0 m-b-30"},[t._v("Invite")]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"input-group"},[s("span",{staticClass:"input-group-addon"},[s("i",{staticClass:"fa fa-mail-reply"})]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.invite.email,expression:"invite.email"}],staticClass:"form-control",attrs:{type:"text",id:"example-input1-group1",name:"example-input1-group1",placeholder:"Mail"},domProps:{value:t.invite.email},on:{input:function(e){e.target.composing||t.$set(t.invite,"email",e.target.value)}}})]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.invite.role,expression:"invite.role"}],staticClass:"form-control",staticStyle:{"margin-top":"15px"},attrs:{name:"roles",id:"roles-invite"},on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.invite,"role",e.target.multiple?s:s[0])},t.addInviteRole]}},[s("option",{attrs:{value:""}},[t._v("Select roles")]),t._v(" "),t._l(t.roles,(function(e){return s("option",{domProps:{value:e.slug}},[t._v(t._s(e.name))])}))],2),t._v(" "),t.invite.roles.length>0?s("div",{staticClass:"col-md-12"},[s("h3",{staticClass:"text-primary"},[t._v("Selected Roles")]),t._v(" "),s("ul",{staticStyle:{"list-style":"none"}},t._l(t.invite.roles,(function(e,i){return s("li",[s("i",{staticClass:"mdi mdi-delete text-danger",on:{click:function(e){return t.deleteFromInviteRoleList(i)}}}),t._v("  "+t._s(e))])})),0)]):t._e(),t._v(" "),s("span",{staticClass:"text-danger"},[t._v(t._s(t.inviteError.roles))]),t._v(" "),s("button",{staticClass:"btn btn-primary btn-block",staticStyle:{"margin-top":"10px"},on:{click:function(e){return e.preventDefault(),t.inviteNewAdmin(e)}}},[s("i",{staticClass:"fa fa-mail-forward"}),t._v(" Invite")])])])])]),t._v(" "),s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"card-box"},[s("h4",{staticClass:"header-title m-t-0 m-b-30"},[t._v("Register manually")]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6",staticStyle:{"margin-top":"10px"}},[s("div",{staticClass:"input-group"},[s("span",{staticClass:"input-group-addon"},[s("i",{staticClass:"fa fa-mail-reply"})]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.register.email,expression:"register.email"}],staticClass:"form-control",attrs:{type:"text",name:"example-input1-group1",placeholder:"Mail"},domProps:{value:t.register.email},on:{input:function(e){e.target.composing||t.$set(t.register,"email",e.target.value)}}})]),t._v(" "),s("span",{staticClass:"text-danger"},[t._v(t._s(t.registerError.email))])]),t._v(" "),s("div",{staticClass:"col-md-6",staticStyle:{"margin-top":"10px"}},[s("div",{staticClass:"input-group"},[s("span",{staticClass:"input-group-addon"},[s("i",{staticClass:"fa fa-key"})]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.register.password,expression:"register.password"}],staticClass:"form-control",attrs:{type:"password",name:"example-input1-group1",placeholder:"Password"},domProps:{value:t.register.password},on:{input:function(e){e.target.composing||t.$set(t.register,"password",e.target.value)}}})]),t._v(" "),s("span",{staticClass:"text-danger"},[t._v(t._s(t.registerError.password))])]),t._v(" "),s("div",{staticClass:"col-md-6",staticStyle:{"margin-top":"10px"}},[s("div",{staticClass:"input-group"},[s("span",{staticClass:"input-group-addon"},[s("i",{staticClass:"fa fa-key"})]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.register.confirm_password,expression:"register.confirm_password"}],staticClass:"form-control",attrs:{type:"password",name:"example-input1-group1",placeholder:"Password Confirmation"},domProps:{value:t.register.confirm_password},on:{input:function(e){e.target.composing||t.$set(t.register,"confirm_password",e.target.value)}}})]),t._v(" "),s("span",{staticClass:"text-danger"},[t._v(t._s(t.registerError.confirm_password))])]),t._v(" "),s("div",{staticClass:"col-md-6",staticStyle:{"margin-top":"10px"}},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.register.role,expression:"register.role"}],staticClass:"form-control",attrs:{name:"roles",id:"roles"},on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.register,"role",e.target.multiple?s:s[0])},t.addRole]}},[s("option",{attrs:{value:""}},[t._v("Select roles")]),t._v(" "),t._l(t.roles,(function(e){return s("option",{domProps:{value:e.slug}},[t._v(t._s(e.name))])}))],2),t._v(" "),s("span",{staticClass:"text-danger"},[t._v(t._s(t.registerError.roles))])]),t._v(" "),s("hr"),t._v(" "),t.register.roles.length>0?s("div",{staticClass:"col-md-12"},[s("h3",{staticClass:"text-primary"},[t._v("Selected Roles")]),t._v(" "),s("ul",{staticStyle:{"list-style":"none"}},t._l(t.register.roles,(function(e,i){return s("li",[s("i",{staticClass:"mdi mdi-delete text-danger",on:{click:function(e){return t.deleteFromRegisterRoleList(i)}}}),t._v("  "+t._s(e))])})),0)]):t._e(),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"col-md-12",staticStyle:{"margin-top":"10px"}},[s("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.saveAdmin(e)}}},[s("i",{staticClass:"fa fa-save"}),t._v("  Register User")])]),t._v(" "),s("div",{staticClass:"col-md-12",staticStyle:{"margin-top":"10px"}},[s("p",[t._v("Tops*:")]),t._v(" "),s("ul",[s("li",[t._v("Password should be at least 8 character")]),t._v(" "),s("li",[t._v("Password should include at least one upper case and one lower case letter")]),t._v(" "),s("li",[t._v("Password should include at least one regular expression")]),t._v(" "),s("li",[t._v("chose roles based on permission list.")]),t._v(" "),s("li",[t._v("If a permission disables in one roles and enables in another roles user still cant excess on this permission")])])])])])])])])])])])}),[],!1,null,null,null);e.default=o.exports},213:function(t,e,s){(t.exports=s(3)(!1)).push([t.i,"@keyframes fadeOut{from{opacity:1}to{opacity:0}}.fadeOut{animation-name:fadeOut}@keyframes fadeInDown{from{opacity:0;transform:translate3d(0, -100%, 0)}to{opacity:1;transform:none}}.fadeInDown{animation-name:fadeInDown}@keyframes fadeInUp{from{opacity:0;transform:translate3d(0, 100%, 0)}to{opacity:1;transform:none}}.fadeInUp{animation-name:fadeInUp}.fade-enter-active,.fade-leave-active{transition:opacity 150ms ease-out}.fade-enter,.fade-leave-to{opacity:0}.notices{position:fixed;display:flex;top:0;bottom:0;left:0;right:0;padding:2em;overflow:hidden;z-index:1052;pointer-events:none}.notices .toast{display:inline-flex;align-items:center;animation-duration:150ms;margin:.5em 0;box-shadow:0 1px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);border-radius:.25em;pointer-events:auto;opacity:.92;color:#fff;min-height:3em;cursor:pointer}.notices .toast .toast-text{margin:0;padding:.5em 1em;word-break:break-all}.notices .toast .toast-icon{display:none}.notices .toast-success{background-color:#28a745}.notices .toast-info{background-color:#17a2b8}.notices .toast-warning{background-color:#ffc107}.notices .toast-error{background-color:#dc3545}.notices .toast-default{background-color:#343a40}.notices .toast.is-top,.notices .toast.is-bottom{align-self:center}.notices .toast.is-top-right,.notices .toast.is-bottom-right{align-self:flex-end}.notices .toast.is-top-left,.notices .toast.is-bottom-left{align-self:flex-start}.notices.is-top{flex-direction:column}.notices.is-bottom{flex-direction:column-reverse}.notices.is-custom-parent{position:absolute}@media screen and (max-width: 768px){.notices{padding:0;position:fixed !important}}\n",""])}}]);
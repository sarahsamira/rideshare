(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{49:function(t,s,a){"use strict";a.r(s);var i={components:{},data:function(){return{timeoutInMiliseconds:18e5,timeoutId:null,notifications:[],unreadNotifications:null,unreadMessages:"",messages:[]}},props:{},computed:{},created:function(){},mounted:function(){var t=this;this.setupTimers(),axios.get("/admins/get/notifications").then((function(s){t.notifications=s.data.notifications,t.unreadNotifications=s.data.counter})),Echo.channel("admin.notifications."+this.$page.auth.user.id).listen("AdminNotifications",(function(s){t.notifications.push({data:s});new Audio("/admin/assets/audio/notification.mp3").play(),t.unreadNotifications=t.unreadNotifications+1}))},methods:{logout:function(){this.$inertia.post("/admins/logout")},screenLock:function(){this.$inertia.post("/admins/lock")},startTimer:function(){this.timeoutId=window.setTimeout(this.screenLock,this.timeoutInMiliseconds)},resetTimer:function(){window.clearTimeout(this.timeoutId),this.startTimer()},setupTimers:function(){document.addEventListener("mousemove",this.resetTimer,!1),document.addEventListener("mousedown",this.resetTimer,!1),document.addEventListener("keypress",this.resetTimer,!1),document.addEventListener("touchmove",this.resetTimer,!1),this.startTimer()},markAsReadNotifications:function(){return this.unreadNotifications=null,axios.post("/admins/mark-as-read/notifications")}}},e=a(0),n=Object(e.a)(i,(function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"topbar"},[i("div",{staticClass:"topbar-left"},[i("inertia-link",{staticClass:"logo",attrs:{href:"/admin/dashboard"}},[i("span",[t._v("AP"),i("span",[t._v("I")])]),i("i",{staticClass:"mdi mdi-layers"})])],1),t._v(" "),i("div",{staticClass:"navbar navbar-default",attrs:{role:"navigation"}},[i("div",{staticClass:"container"},[i("ul",{staticClass:"nav navbar-nav navbar-left"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),i("li",{staticClass:"dropdown hidden-xs"},[i("a",{staticClass:"dropdown-toggle menu-item",attrs:{"data-toggle":"dropdown",href:"#","aria-expanded":"false"}},["en"===t.$page.locale?i("span",[t._v("English")]):t._e(),t._v(" "),"bd"===t.$page.locale?i("span",[t._v("বাংলা")]):t._e(),t._v(" "),i("span",{staticClass:"caret"})]),t._v(" "),i("ul",{staticClass:"dropdown-menu",attrs:{role:"menu"}},[i("li",[i("inertia-link",{attrs:{href:"/admins/language/en"}},[t._v("English")])],1),t._v(" "),i("li",[i("inertia-link",{attrs:{href:"/admins/language/bd"}},[t._v("বাংলা")])],1)])])]),t._v(" "),i("ul",{staticClass:"nav navbar-nav navbar-right"},[i("li",[i("a",{staticClass:"right-menu-item dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown"},on:{click:t.markAsReadNotifications}},[i("i",{staticClass:"mdi mdi-bell"}),t._v(" "),t.unreadNotifications?i("span",{staticClass:"badge up bg-success"},[t._v(t._s(t.unreadNotifications))]):t._e()]),t._v(" "),i("ul",{staticClass:"dropdown-menu dropdown-menu-right arrow-dropdown-menu arrow-menu-right dropdown-lg user-list notify-list"},[t._m(3),t._v(" "),t._l(t.notifications,(function(s){return t.notifications.length>0?i("li",[i("inertia-link",{staticClass:"user-list-item",attrs:{href:s.data.link}},[i("div",{staticClass:"icon bg-info"},[i("i",{staticClass:"mdi mdi-account"})]),t._v(" "),i("div",{staticClass:"user-desc"},[i("span",{staticClass:"name"},[t._v(t._s(s.data.data))]),t._v(" "),i("span",{staticClass:"time"},[t._v(t._s(s.created_at))])])])],1):t._e()})),t._v(" "),i("li",{staticClass:"all-msgs text-center"},[i("p",{staticClass:"m-0"},[i("inertia-link",{attrs:{href:"/admins/notifications"}},[t._v("See all Notification")])],1)])],2)]),t._v(" "),i("li",[i("a",{staticClass:"right-menu-item dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown"}},[i("i",{staticClass:"mdi mdi-email"}),t._v(" "),t.unreadMessages?i("span",{staticClass:"badge up bg-danger"},[t._v(t._s(t.unreadMessages))]):t._e()]),t._v(" "),i("ul",{staticClass:"dropdown-menu dropdown-menu-right arrow-dropdown-menu arrow-menu-right dropdown-lg user-list notify-list"},[t._m(4),t._v(" "),t._l(t.messages,(function(s){return t.messages.length>0?i("li",[i("inertia-link",{staticClass:"user-list-item",attrs:{href:"/admins/messages?user="+s.id}},[i("div",{staticClass:"avatar"},[s.profile_picture?i("img",{attrs:{src:s.profile_picture,alt:""}}):i("img",{attrs:{src:a(9),alt:""}})]),t._v(" "),i("div",{staticClass:"user-desc"},[i("span",{staticClass:"name"},[t._v(t._s(s.first_name)+" "+t._s(s.last_name))]),t._v(" "),i("span",{staticClass:"desc"},[t._v(t._s(s.message))]),t._v(" "),i("span",{staticClass:"time"},[t._v("2 hours ago")])])])],1):t._e()})),t._v(" "),i("li",{staticClass:"all-msgs text-center"},[i("p",{staticClass:"m-0"},[i("inertia-link",{attrs:{href:"/admins/messages"}},[t._v("See all Messages")])],1)])],2)]),t._v(" "),i("li",{staticClass:"dropdown user-box"},[i("a",{staticClass:"dropdown-toggle waves-effect user-link",attrs:{href:"","data-toggle":"dropdown","aria-expanded":"true"}},[t.$page.auth.user.profile_picture?i("img",{staticClass:"iimg-circle user-img",attrs:{src:t.$page.auth.user.profile_picture,alt:"user-img"}}):i("img",{staticClass:"img-circle user-img",attrs:{src:a(9),alt:"user-img"}})]),t._v(" "),i("ul",{staticClass:"dropdown-menu dropdown-menu-right arrow-dropdown-menu arrow-menu-right user-list notify-list"},[i("li",[i("h5",[t._v("Hi, "+t._s(t.$page.auth.user.first_name))])]),t._v(" "),i("li",[i("inertia-link",{attrs:{href:"/admins/profile"}},[i("i",{staticClass:"ti-user m-r-5"}),t._v(" Profile")])],1),t._v(" "),i("li",[i("inertia-link",{attrs:{href:"/admins/settings"}},[i("i",{staticClass:"ti-settings m-r-5"}),t._v(" Settings")])],1),t._v(" "),i("li",[i("a",{attrs:{href:"javascript:void(0)"},on:{click:function(s){return s.preventDefault(),t.screenLock(s)}}},[i("i",{staticClass:"ti-lock m-r-5"}),t._v(" Lock screen")])]),t._v(" "),i("li",[i("a",{attrs:{href:"javascript:void(0)"},on:{click:t.logout}},[i("i",{staticClass:"ti-power-off m-r-5"}),t._v(" Logout")])])])])])])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("button",{staticClass:"button-menu-mobile open-left waves-effect"},[s("i",{staticClass:"mdi mdi-menu"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"hidden-xs"},[s("form",{staticClass:"app-search",attrs:{role:"search"}},[s("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Search..."}}),this._v(" "),s("a",{attrs:{href:""}},[s("i",{staticClass:"fa fa-search"})])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",{staticClass:"dropdown hidden-xs"},[a("a",{staticClass:"dropdown-toggle menu-item",attrs:{"data-toggle":"dropdown",href:"#","aria-expanded":"false"}},[t._v("New\n                        "),a("span",{staticClass:"caret"})]),t._v(" "),a("ul",{staticClass:"dropdown-menu",attrs:{role:"menu"}},[a("li",[a("a",{attrs:{href:"#"}},[t._v("User")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("Task")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("Schedule")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("Work")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("h5",[this._v("Notifications")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("h5",[this._v("Messages")])])}],!1,null,null,null);s.default=n.exports},9:function(t,s){t.exports="/images/assistant.svg?e89591e44ab6760c13f0ede9220082b4"}}]);
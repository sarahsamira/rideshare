(window.webpackJsonp=window.webpackJsonp||[]).push([[0,39,44],{1:function(t,i,e){"use strict";e.r(i);var s=e(49),a=e(50),n={data:function(){return{mobile:""}},mixins:[{components:{},data:function(){return{}},props:{},computed:{},created:function(){},mounted:function(){},methods:{isMobile:function(){var t,i=!1;return t=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(i=!0),i}}}],props:{title:String},components:{topy:s.default,sidy:a.default},computed:{success:function(){return this.$page.success},errors:function(){return this.$page.errors},fault:function(){return this.$page.fault}},watch:{title:{immediate:!0,handler:function(t){document.title=t}},success:function(){null!=this.$page.success&&(this.$toast.open({message:this.success,type:"success",position:"top-right",duration:5e3,dismissible:!0}),this.$page.success=null)},errors:function(){if(Object.keys(this.errors).length>0){for(var t=0;t<this.errors[Object.keys(this.errors)[0]].length;t++)this.$toast.open({message:this.errors[Object.keys(this.errors)[0]][t],type:"error",position:"top-right",duration:5e3,dismissible:!0});this.errors=[]}},fault:function(){null!=this.$page.fault&&(this.$toast.open({message:this.fault,type:"error",position:"top-right",duration:5e3,dismissible:!0}),this.$page.fault=null)}},mounted:function(){this.isMobile()?this.mobile="forced enlarged":this.mobile=""},methods:{}},r=(e(214),e(0)),o=Object(r.a)(n,(function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"fixed-left"},[i("div",{class:this.mobile,attrs:{id:"wrapper"}},[i("topy"),this._v(" "),i("sidy"),this._v(" "),this._t("default"),this._v(" "),i("footer",{staticClass:"footer text-right bg-white"},[this._v("\n            Copyright © 2020 rideshare , developed by Samreena Alam.\n        ")])],2)])}),[],!1,null,null,null);i.default=o.exports},2:function(t,e,s){"use strict";var a=s(36),n=s.n(a).a;e.a={components:{},data:function(){return{}},props:{},computed:{},created:function(){},mounted:function(){!function(t){var i=function(){this.$body=t("body"),this.$portletIdentifier=".portlet",this.$portletCloser='.portlet a[data-toggle="remove"]',this.$portletRefresher='.portlet a[data-toggle="reload"]'};i.prototype.init=function(){var i=this;t(document).on("click",this.$portletCloser,(function(e){e.preventDefault();var s=t(this).closest(i.$portletIdentifier),a=s.parent();s.slideUp("slow",(function(){t(this).remove()})),0==a.children().length&&a.slideUp("slow",(function(){t(this).remove()}))})),t(document).on("click",this.$portletRefresher,(function(e){e.preventDefault();var s=t(this).closest(i.$portletIdentifier);s.append('<div class="panel-disabled"><div class="portlet-loader"></div></div>');var a=s.find(".panel-disabled");setTimeout((function(){a.fadeOut("fast",(function(){a.remove()}))}),500+5*Math.random()*300)}))},t.Portlet=new i,t.Portlet.Constructor=i}(window.jQuery),function(t){var i=function(){};i.prototype.initTooltipPlugin=function(){t.fn.tooltip&&t('[data-toggle="tooltip"]').tooltip()},i.prototype.initPopoverPlugin=function(){t.fn.popover&&t('[data-toggle="popover"]').popover()},i.prototype.initCustomModalPlugin=function(){t('[data-plugin="custommodal"]').on("click",(function(i){Custombox.open({target:t(this).attr("href"),effect:t(this).attr("data-animation"),overlaySpeed:t(this).attr("data-overlaySpeed"),overlayColor:t(this).attr("data-overlayColor")}),i.preventDefault()}))},i.prototype.initNiceScrollPlugin=function(){t.fn.niceScroll&&t(".nicescroll").niceScroll({cursorcolor:"#98a6ad",cursorwidth:"6px",cursorborderradius:"5px"})},i.prototype.initSlimScrollPlugin=function(){t.fn.slimScroll&&t(".slimscroll-alt").slimScroll({position:"right",size:"5px",color:"#98a6ad",wheelStep:10})},i.prototype.initRangeSlider=function(){t.fn.slider&&t('[data-plugin="range-slider"]').slider({})},i.prototype.initSwitchery=function(){t('[data-plugin="switchery"]').each((function(i,e){new Switchery(t(this)[0],t(this).data())}))},i.prototype.initMultiSelect=function(){t('[data-plugin="multiselect"]').length>0&&t('[data-plugin="multiselect"]').multiSelect(t(this).data())},i.prototype.initPeityCharts=function(){t('[data-plugin="peity-pie"]').each((function(i,e){var s=t(this).attr("data-colors")?t(this).attr("data-colors").split(","):[],a=t(this).attr("data-width")?t(this).attr("data-width"):20,n=t(this).attr("data-height")?t(this).attr("data-height"):20;t(this).peity("pie",{fill:s,width:a,height:n})})),t('[data-plugin="peity-donut"]').each((function(i,e){var s=t(this).attr("data-colors")?t(this).attr("data-colors").split(","):[],a=t(this).attr("data-width")?t(this).attr("data-width"):20,n=t(this).attr("data-height")?t(this).attr("data-height"):20;t(this).peity("donut",{fill:s,width:a,height:n})})),t('[data-plugin="peity-donut-alt"]').each((function(i,e){t(this).peity("donut")})),t('[data-plugin="peity-line"]').each((function(i,e){t(this).peity("line",t(this).data())})),t('[data-plugin="peity-bar"]').each((function(i,e){var s=t(this).attr("data-colors")?t(this).attr("data-colors").split(","):[],a=t(this).attr("data-width")?t(this).attr("data-width"):20,n=t(this).attr("data-height")?t(this).attr("data-height"):20;t(this).peity("bar",{fill:s,width:a,height:n})}))},i.prototype.initKnob=function(){t('[data-plugin="knob"]').each((function(i,e){t(this).knob()}))},i.prototype.initCircliful=function(){t('[data-plugin="circliful"]').each((function(i,e){t(this).circliful()}))},i.prototype.initCounterUp=function(){t(this).attr("data-delay")&&t(this).attr("data-delay"),t(this).attr("data-time")&&t(this).attr("data-time");t('[data-plugin="counterup"]').each((function(i,e){t(this).counterUp({delay:100,time:1200})}))},i.prototype.init=function(){this.initTooltipPlugin(),this.initPopoverPlugin(),this.initNiceScrollPlugin(),this.initSlimScrollPlugin(),this.initCustomModalPlugin(),this.initRangeSlider(),this.initSwitchery(),this.initMultiSelect(),this.initPeityCharts(),this.initKnob(),this.initCircliful(),this.initCounterUp(),t.Portlet.init()},t.Components=new i,t.Components.Constructor=i}(window.jQuery),window.jQuery.Components.init(),function(t){var i=function(){this.$body=t("body"),this.$openLeftBtn=t(".open-left"),this.$menuItem=t("#sidebar-menu a")};i.prototype.openLeftBar=function(){t("#wrapper").toggleClass("enlarged"),t("#wrapper").addClass("forced"),t("#wrapper").hasClass("enlarged")&&t("body").hasClass("fixed-left")?t("body").removeClass("fixed-left").addClass("fixed-left-void"):!t("#wrapper").hasClass("enlarged")&&t("body").hasClass("fixed-left-void")&&t("body").removeClass("fixed-left-void").addClass("fixed-left"),t("#wrapper").hasClass("enlarged")?t(".left ul").removeAttr("style"):t(".subdrop").siblings("ul:first").show(),s(".slimscrollleft"),t("body").trigger("resize")},i.prototype.menuItemClick=function(i){t("#wrapper").hasClass("enlarged")||(t(this).parent().hasClass("has_sub"),t(this).hasClass("subdrop")?t(this).hasClass("subdrop")&&(t(this).removeClass("subdrop"),t(this).next("ul").slideUp(350),t(".pull-right i",t(this).parent()).removeClass("md-remove").addClass("md-add")):(t("ul",t(this).parents("ul:first")).slideUp(350),t("a",t(this).parents("ul:first")).removeClass("subdrop"),t("#sidebar-menu .pull-right i").removeClass("md-remove").addClass("md-add"),t(this).next("ul").slideDown(350),t(this).addClass("subdrop"),t(".pull-right i",t(this).parents(".has_sub:last")).removeClass("md-add").addClass("md-remove"),t(".pull-right i",t(this).siblings("ul")).removeClass("md-remove").addClass("md-add")))},i.prototype.init=function(){var i=this,e=navigator.userAgent.match(/iP/i)?"touchstart":"click";this.$openLeftBtn.on(e,(function(t){t.stopPropagation(),i.openLeftBar()})),i.$menuItem.on(e,i.menuItemClick),t("#sidebar-menu ul li.has_sub a.active").parents("li:last").children("a:first").addClass("active").trigger("click")},t.Sidemenu=new i,t.Sidemenu.Constructor=i}(window.jQuery),function(t){var i=function(){this.$body=t("body"),this.$fullscreenBtn=t("#btn-fullscreen")};i.prototype.launchFullscreen=function(t){t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen()},i.prototype.exitFullscreen=function(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()},i.prototype.toggle_fullscreen=function(){(document.fullscreenEnabled||document.mozFullScreenEnabled||document.webkitFullscreenEnabled)&&(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement?this.exitFullscreen():this.launchFullscreen(document.documentElement))},i.prototype.init=function(){var t=this;t.$fullscreenBtn.on("click",(function(){t.toggle_fullscreen()}))},t.FullScreen=new i,t.FullScreen.Constructor=i}(window.jQuery),function(i){var s=function(){this.VERSION="1.6.1",this.AUTHOR="Coderthemes",this.SUPPORT="coderthemes@gmail.com",this.pageScrollElement="html, body",this.$body=i("body")};s.prototype.onDocReady=function(s){FastClick.attach(document.body),resizefunc.push("initscrolls"),resizefunc.push("changeptype"),i(".animate-number").each((function(){i(this).animateNumbers(i(this).attr("data-value"),!0,parseInt(i(this).attr("data-duration")))})),i(window).resize(t(e,100)),i("body").trigger("resize"),i(".right-bar-toggle").on("click",(function(t){i("#wrapper").toggleClass("right-bar-enabled")}))},s.prototype.init=function(){i(document).ready(this.onDocReady),i.Sidemenu.init(),i.FullScreen.init()},i.App=new s,i.App.Constructor=s}(window.jQuery),window.jQuery.App.init();var t=function(t,i,e){var s,a;return function(){var n=this,r=arguments,o=function(){s=null,e||(a=t.apply(n,r))},l=e&&!s;return clearTimeout(s),s=setTimeout(o,i),l&&(a=t.apply(n,r)),a}};function e(){if(n.isArray(resizefunc))for(i=0;i<resizefunc.length;i++)window[resizefunc[i]]()}function s(t){n("#wrapper").hasClass("enlarged")?(n(t).css("overflow","inherit").parent().css("overflow","inherit"),n(t).siblings(".slimScrollBar").css("visibility","hidden")):(n(t).css("overflow","hidden").parent().css("overflow","hidden"),n(t).siblings(".slimScrollBar").css("visibility","visible"))}n(document).ready((function(){n("#sidebar-menu a").each((function(){var t=window.location.href.split(/[?#]/)[0];this.href==t&&(n(this).addClass("active"),n(this).parent().addClass("active"),n(this).parent().parent().prev().addClass("active"),n(this).parent().parent().prev().click())}))}))},methods:{}}},214:function(t,i,e){"use strict";var s=e(43);e.n(s).a},215:function(t,i,e){(i=t.exports=e(3)(!1)).i(e(213),""),i.push([t.i,"\n",""])},43:function(t,i,e){var s=e(215);"string"==typeof s&&(s=[[t.i,s,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e(4)(s,a);s.locals&&(t.exports=s.locals)},49:function(t,i,e){"use strict";e.r(i);var s={components:{},data:function(){return{timeoutInMiliseconds:18e5,timeoutId:null,notifications:[],unreadNotifications:null,unreadMessages:"",messages:[]}},props:{},computed:{},created:function(){},mounted:function(){var t=this;this.setupTimers(),axios.get("/admins/get/notifications").then((function(i){t.notifications=i.data.notifications,t.unreadNotifications=i.data.counter})),Echo.channel("admin.notifications."+this.$page.auth.user.id).listen("AdminNotifications",(function(i){t.notifications.push({data:i});new Audio("/admin/assets/audio/notification.mp3").play(),t.unreadNotifications=t.unreadNotifications+1}))},methods:{logout:function(){this.$inertia.post("/admins/logout")},screenLock:function(){this.$inertia.post("/admins/lock")},startTimer:function(){this.timeoutId=window.setTimeout(this.screenLock,this.timeoutInMiliseconds)},resetTimer:function(){window.clearTimeout(this.timeoutId),this.startTimer()},setupTimers:function(){document.addEventListener("mousemove",this.resetTimer,!1),document.addEventListener("mousedown",this.resetTimer,!1),document.addEventListener("keypress",this.resetTimer,!1),document.addEventListener("touchmove",this.resetTimer,!1),this.startTimer()},markAsReadNotifications:function(){return this.unreadNotifications=null,axios.post("/admins/mark-as-read/notifications")}}},a=e(0),n=Object(a.a)(s,(function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"topbar"},[s("div",{staticClass:"topbar-left"},[s("inertia-link",{staticClass:"logo",attrs:{href:"/admin/dashboard"}},[s("span",[t._v("AP"),s("span",[t._v("I")])]),s("i",{staticClass:"mdi mdi-layers"})])],1),t._v(" "),s("div",{staticClass:"navbar navbar-default",attrs:{role:"navigation"}},[s("div",{staticClass:"container"},[s("ul",{staticClass:"nav navbar-nav navbar-left"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("li",{staticClass:"dropdown hidden-xs"},[s("a",{staticClass:"dropdown-toggle menu-item",attrs:{"data-toggle":"dropdown",href:"#","aria-expanded":"false"}},["en"===t.$page.locale?s("span",[t._v("English")]):t._e(),t._v(" "),"bd"===t.$page.locale?s("span",[t._v("বাংলা")]):t._e(),t._v(" "),s("span",{staticClass:"caret"})]),t._v(" "),s("ul",{staticClass:"dropdown-menu",attrs:{role:"menu"}},[s("li",[s("inertia-link",{attrs:{href:"/admins/language/en"}},[t._v("English")])],1),t._v(" "),s("li",[s("inertia-link",{attrs:{href:"/admins/language/bd"}},[t._v("বাংলা")])],1)])])]),t._v(" "),s("ul",{staticClass:"nav navbar-nav navbar-right"},[s("li",[s("a",{staticClass:"right-menu-item dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown"},on:{click:t.markAsReadNotifications}},[s("i",{staticClass:"mdi mdi-bell"}),t._v(" "),t.unreadNotifications?s("span",{staticClass:"badge up bg-success"},[t._v(t._s(t.unreadNotifications))]):t._e()]),t._v(" "),s("ul",{staticClass:"dropdown-menu dropdown-menu-right arrow-dropdown-menu arrow-menu-right dropdown-lg user-list notify-list"},[t._m(3),t._v(" "),t._l(t.notifications,(function(i){return t.notifications.length>0?s("li",[s("inertia-link",{staticClass:"user-list-item",attrs:{href:i.data.link}},[s("div",{staticClass:"icon bg-info"},[s("i",{staticClass:"mdi mdi-account"})]),t._v(" "),s("div",{staticClass:"user-desc"},[s("span",{staticClass:"name"},[t._v(t._s(i.data.data))]),t._v(" "),s("span",{staticClass:"time"},[t._v(t._s(i.created_at))])])])],1):t._e()})),t._v(" "),s("li",{staticClass:"all-msgs text-center"},[s("p",{staticClass:"m-0"},[s("inertia-link",{attrs:{href:"/admins/notifications"}},[t._v("See all Notification")])],1)])],2)]),t._v(" "),s("li",[s("a",{staticClass:"right-menu-item dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown"}},[s("i",{staticClass:"mdi mdi-email"}),t._v(" "),t.unreadMessages?s("span",{staticClass:"badge up bg-danger"},[t._v(t._s(t.unreadMessages))]):t._e()]),t._v(" "),s("ul",{staticClass:"dropdown-menu dropdown-menu-right arrow-dropdown-menu arrow-menu-right dropdown-lg user-list notify-list"},[t._m(4),t._v(" "),t._l(t.messages,(function(i){return t.messages.length>0?s("li",[s("inertia-link",{staticClass:"user-list-item",attrs:{href:"/admins/messages?user="+i.id}},[s("div",{staticClass:"avatar"},[i.profile_picture?s("img",{attrs:{src:i.profile_picture,alt:""}}):s("img",{attrs:{src:e(9),alt:""}})]),t._v(" "),s("div",{staticClass:"user-desc"},[s("span",{staticClass:"name"},[t._v(t._s(i.first_name)+" "+t._s(i.last_name))]),t._v(" "),s("span",{staticClass:"desc"},[t._v(t._s(i.message))]),t._v(" "),s("span",{staticClass:"time"},[t._v("2 hours ago")])])])],1):t._e()})),t._v(" "),s("li",{staticClass:"all-msgs text-center"},[s("p",{staticClass:"m-0"},[s("inertia-link",{attrs:{href:"/admins/messages"}},[t._v("See all Messages")])],1)])],2)]),t._v(" "),s("li",{staticClass:"dropdown user-box"},[s("a",{staticClass:"dropdown-toggle waves-effect user-link",attrs:{href:"","data-toggle":"dropdown","aria-expanded":"true"}},[t.$page.auth.user.profile_picture?s("img",{staticClass:"iimg-circle user-img",attrs:{src:t.$page.auth.user.profile_picture,alt:"user-img"}}):s("img",{staticClass:"img-circle user-img",attrs:{src:e(9),alt:"user-img"}})]),t._v(" "),s("ul",{staticClass:"dropdown-menu dropdown-menu-right arrow-dropdown-menu arrow-menu-right user-list notify-list"},[s("li",[s("h5",[t._v("Hi, "+t._s(t.$page.auth.user.first_name))])]),t._v(" "),s("li",[s("inertia-link",{attrs:{href:"/admins/profile"}},[s("i",{staticClass:"ti-user m-r-5"}),t._v(" Profile")])],1),t._v(" "),s("li",[s("inertia-link",{attrs:{href:"/admins/settings"}},[s("i",{staticClass:"ti-settings m-r-5"}),t._v(" Settings")])],1),t._v(" "),s("li",[s("a",{attrs:{href:"javascript:void(0)"},on:{click:function(i){return i.preventDefault(),t.screenLock(i)}}},[s("i",{staticClass:"ti-lock m-r-5"}),t._v(" Lock screen")])]),t._v(" "),s("li",[s("a",{attrs:{href:"javascript:void(0)"},on:{click:t.logout}},[s("i",{staticClass:"ti-power-off m-r-5"}),t._v(" Logout")])])])])])])])])}),[function(){var t=this.$createElement,i=this._self._c||t;return i("li",[i("button",{staticClass:"button-menu-mobile open-left waves-effect"},[i("i",{staticClass:"mdi mdi-menu"})])])},function(){var t=this.$createElement,i=this._self._c||t;return i("li",{staticClass:"hidden-xs"},[i("form",{staticClass:"app-search",attrs:{role:"search"}},[i("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Search..."}}),this._v(" "),i("a",{attrs:{href:""}},[i("i",{staticClass:"fa fa-search"})])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("li",{staticClass:"dropdown hidden-xs"},[e("a",{staticClass:"dropdown-toggle menu-item",attrs:{"data-toggle":"dropdown",href:"#","aria-expanded":"false"}},[t._v("New\n                        "),e("span",{staticClass:"caret"})]),t._v(" "),e("ul",{staticClass:"dropdown-menu",attrs:{role:"menu"}},[e("li",[e("a",{attrs:{href:"#"}},[t._v("User")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("Task")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("Schedule")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("Work")])])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("li",[i("h5",[this._v("Notifications")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("li",[i("h5",[this._v("Messages")])])}],!1,null,null,null);i.default=n.exports},50:function(t,i,e){"use strict";e.r(i);var s={components:{},data:function(){return{}},props:{},computed:{},created:function(){},mounted:function(){},methods:{}},a=e(0),n=Object(a.a)(s,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"left side-menu"},[e("div",{staticClass:"sidebar-inner slimscrollleft"},[e("div",{attrs:{id:"sidebar-menu"}},[e("ul",[e("li",{staticClass:"menu-title"},[t._v("Navigation")]),t._v(" "),t._m(0),t._v(" "),e("li",{staticClass:"has_sub"},[e("inertia-link",{staticClass:"waves-effect",attrs:{href:"/admins/dashboard"}},[e("i",{staticClass:"mdi mdi-view-dashboard"}),e("span",[t._v(" Dashboard ")])])],1),t._v(" "),e("li",{staticClass:"has_sub"},[t._m(1),t._v(" "),e("ul",{staticClass:"list-unstyled"},[e("li",[e("inertia-link",{attrs:{href:"/admins/mail"}},[t._v("Mail")])],1),t._v(" "),e("li",[e("inertia-link",{attrs:{href:"/admins/email/support"}},[t._v("Support")])],1),t._v(" "),e("li",[e("inertia-link",{attrs:{href:"/admins/email/contact"}},[t._v("Contacts")])],1)])]),t._v(" "),e("li",{staticClass:"has_sub"},[t._m(2),t._v(" "),e("ul",{staticClass:"list-unstyled"},[e("li",[e("inertia-link",{attrs:{href:"/admins/admin"}},[t._v("Admin")])],1),t._v(" "),e("li",[e("inertia-link",{attrs:{href:"/admins/user"}},[t._v("User")])],1),t._v(" "),e("li",[e("inertia-link",{attrs:{href:"/admins/rider"}},[t._v("Rider")])],1)])]),t._v(" "),e("li",[e("inertia-link",{attrs:{href:"/admins/coupons"}},[e("i",{staticClass:"mdi mdi-more"}),e("span",[t._v(" Coupons ")])])],1),t._v(" "),e("li",{staticClass:"menu-title"},[t._v("Marketing")]),t._v(" "),t._m(3)])]),t._v(" "),e("div",{staticClass:"clearfix"}),t._v(" "),t._m(4)])])}),[function(){var t=this.$createElement,i=this._self._c||t;return i("li",[i("a",{staticClass:"waves-effect",attrs:{href:"/"}},[i("i",{staticClass:"mdi mdi-home"}),this._v(" "),i("span",[this._v("Home")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("a",{staticClass:"waves-effect",attrs:{href:"javascript:void(0);"}},[i("i",{staticClass:"mdi  mdi-contact-mail"}),this._v(" "),i("span",[this._v(" Mails ")]),this._v(" "),i("span",{staticClass:"menu-arrow"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("a",{staticClass:"waves-effect",attrs:{href:"javascript:void(0);"}},[i("i",{staticClass:"mdi mdi-account"}),this._v(" "),i("span",[this._v(" User ")]),this._v(" "),i("span",{staticClass:"menu-arrow"})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("li",{staticClass:"has_sub"},[e("a",{staticClass:"waves-effect",attrs:{href:"javascript:void(0);"}},[e("i",{staticClass:"mdi mdi-share"}),e("span",[t._v(" Social site ")]),t._v(" "),e("span",{staticClass:"menu-arrow"})]),t._v(" "),e("ul",{staticClass:"list-unstyled"},[e("li",[e("a",{attrs:{href:"javascript:void(0);"}},[t._v("Social Media")])]),t._v(" "),e("li",[e("a",{attrs:{href:"javascript:void(0);"}},[t._v("You tube")])]),t._v(" "),e("li",[e("a",{attrs:{href:"javascript:void(0);"}},[t._v("Blogs Sharing")])])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"help-box"},[e("h5",{staticClass:"text-muted m-t-0"},[t._v("For Help ?")]),t._v(" "),e("p",{},[e("span",{staticClass:"text-custom"},[t._v("Email:")]),t._v(" "),e("br"),t._v(" samreenaalam9558@gmail.com")]),t._v(" "),e("p",{staticClass:"m-b-0"},[e("span",{staticClass:"text-custom"},[t._v("Call:")]),t._v(" "),e("br"),t._v(" (+880) 170 536 6238")])])}],!1,null,null,null);i.default=n.exports},9:function(t,i){t.exports="/images/assistant.svg?e89591e44ab6760c13f0ede9220082b4"}}]);
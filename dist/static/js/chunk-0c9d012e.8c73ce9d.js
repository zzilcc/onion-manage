(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c9d012e"],{4175:function(e,t,n){"use strict";var s=n("e783"),i=n.n(s);i.a},"7f7f":function(e,t,n){var s=n("86cc").f,i=Function.prototype,l=/^\s*function ([^ (]*)/,o="name";o in i||n("9e1e")&&s(i,o,{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},b3d7:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"js-manage"}},[n("section",{staticClass:"onion-index"},[n("section",{staticClass:"onion-index-header"},[n("div",{staticClass:"onion-index-header-wrap"},[e._m(0),n("div",{staticClass:"onion-header-right"},[n("el-dropdown",{staticClass:"avatar-container",attrs:{trigger:"click"}},[n("div",{staticClass:"avatar-wrapper"},[n("img",{staticClass:"user-avatar",attrs:{src:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3266090804,66355162&fm=26&gp=0.jpg"}}),e._v("\n              "+e._s(e.user.username)),n("i",{staticClass:"el-icon-caret-bottom"})]),n("el-dropdown-menu",{staticClass:"user-dropdown",attrs:{slot:"dropdown"},slot:"dropdown"},[n("router-link",{staticClass:"inlineBlock",attrs:{to:"/home"}},[n("el-dropdown-item",[e._v("首页")])],1),n("router-link",{staticClass:"inlineBlock",attrs:{to:"/about"}},[n("el-dropdown-item",[e._v("个人信息")])],1),n("el-dropdown-item",{attrs:{divided:""}},[n("span",{staticStyle:{display:"block"},on:{click:e.logout}},[e._v("退出登录")])])],1)],1)],1)])]),n("section",{staticClass:"onion-index-mian"},[n("section",{staticClass:"onion-index-mian-left"},[n("el-row",{staticClass:"tac"},[n("el-col",{attrs:{span:4}},[n("el-menu",{staticClass:"el-menu-vertical-demo",on:{open:e.handleOpen,close:e.handleClose}},[n("router-link",{attrs:{to:"/home"}},[n("el-menu-item",{attrs:{index:"3"}},[n("i",{staticClass:"el-icon-document"}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v("首页")])])],1),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-s-tools"}),n("span",[e._v("商品")])]),n("el-menu-item-group",[n("router-link",{attrs:{to:"goodsList"}},[n("el-menu-item",{attrs:{index:"1-1"}},[e._v("商品管理")])],1),n("router-link",{attrs:{to:"goodsCategories"}},[n("el-menu-item",{attrs:{index:"1-3"}},[e._v("分类管理")])],1)],1)],2),n("el-submenu",{attrs:{index:"3"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-user-solid"}),n("span",[e._v("订单")])])],2)],1)],1)],1)],1),n("section",{staticClass:"onion-index-mian-content"},[n("el-breadcrumb",{staticClass:"breadcrumb-container onion-breadcrumb",attrs:{"separator-class":"el-icon-arrow-right"}},e._l(e.levelList,(function(t){return n("el-breadcrumb-item",{key:t.path,attrs:{to:t.path}},[e._v(e._s(t.meta.title))])})),1),n("router-view")],1)])])])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"onion-header-left"},[n("span",[e._v("洋葱美美哒")])])}],l=(n("7f7f"),{data:function(){return{leftNav:[{name:"首页",index:"1",children:[]},{name:"商品",index:"2",children:[{name:"商品列表",index:"1-1",link:"/goods/goodsList",children:[]},{name:"添加商品",index:"1-2",link:"/goods/addGoods",children:[]},{name:"商品分类",index:"1-3",children:[]}]},{name:"订单",index:"3",children:[]}],isCollapse:!1,user:{userName:"黄紫茜"},levelList:[]}},watch:{$route:function(){this.getBreadcrumb()}},created:function(){this.getBreadcrumb()},methods:{getBreadcrumb:function(){this.levelList=this.$route.matched.filter((function(e){return e.name}))},handleOpen:function(){this.isCollapse=!1},handleClose:function(){this.isCollapse=!0},toggleClick:function(){this.isCollapse=!this.isCollapse},userInfoClick:function(){this.$router.push({path:"/about"})},logout:function(){this.$router.push("/login")},handleFullScreen:function(){var e=document.documentElement;this.fullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullScreen?e.webkitRequestFullScreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.msRequestFullscreen&&e.msRequestFullscreen(),this.fullscreen=!this.fullscreen}}}),o=l,a=(n("4175"),n("2877")),r=Object(a["a"])(o,s,i,!1,null,null,null);t["default"]=r.exports},e783:function(e,t,n){}}]);
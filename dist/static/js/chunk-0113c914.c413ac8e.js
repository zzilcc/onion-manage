(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0113c914"],{"0d58":function(e,t,r){var a=r("ce10"),n=r("e11e");e.exports=Object.keys||function(e){return a(e,n)}},"110a":function(e,t,r){"use strict";var a=r("d7ca"),n=r.n(a);n.a},"11e9":function(e,t,r){var a=r("52a7"),n=r("4630"),o=r("6821"),i=r("6a99"),l=r("69a8"),c=r("c69a"),s=Object.getOwnPropertyDescriptor;t.f=r("9e1e")?s:function(e,t){if(e=o(e),t=i(t,!0),c)try{return s(e,t)}catch(r){}if(l(e,t))return n(!a.f.call(e,t),e[t])}},1495:function(e,t,r){var a=r("86cc"),n=r("cb7c"),o=r("0d58");e.exports=r("9e1e")?Object.defineProperties:function(e,t){n(e);var r,i=o(t),l=i.length,c=0;while(l>c)a.f(e,r=i[c++],t[r]);return e}},"2aeb":function(e,t,r){var a=r("cb7c"),n=r("1495"),o=r("e11e"),i=r("613b")("IE_PROTO"),l=function(){},c="prototype",s=function(){var e,t=r("230e")("iframe"),a=o.length,n="<",i=">";t.style.display="none",r("fab2").appendChild(t),t.src="javascript:",e=t.contentWindow.document,e.open(),e.write(n+"script"+i+"document.F=Object"+n+"/script"+i),e.close(),s=e.F;while(a--)delete s[c][o[a]];return s()};e.exports=Object.create||function(e,t){var r;return null!==e?(l[c]=a(e),r=new l,l[c]=null,r[i]=e):r=s(),void 0===t?r:n(r,t)}},"3b1b":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("section",{staticClass:"onion-order-add"},[r("el-form",{staticClass:"demo-form-inline onion-order-add_form",attrs:{inline:!0,model:e.reqParam,"label-width":"120px"}},[r("el-form-item",{attrs:{label:"下单时间"}},[r("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.datePicker.pickerOptions},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1),r("el-form-item",{attrs:{label:"付款方式"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.reqParam.payType,callback:function(t){e.$set(e.reqParam,"payType",t)},expression:"reqParam.payType"}},e._l(e.payOptions,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),r("el-form-item",{attrs:{label:"订单号"}},[r("el-input",{attrs:{placeholder:"请输入订单号"},model:{value:e.reqParam.orderId,callback:function(t){e.$set(e.reqParam,"orderId",t)},expression:"reqParam.orderId"}})],1),r("el-form-item",{attrs:{label:""}},[r("el-input",{attrs:{placeholder:"请输入收货人姓名或手机号"},model:{value:e.reqParam.shippingPA,callback:function(t){e.$set(e.reqParam,"shippingPA",t)},expression:"reqParam.shippingPA"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.searchClick}},[e._v("筛选")])],1)],1)],1),r("section",{staticClass:"onion-table"},[r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",stripe:""}},[r("el-table-column",{attrs:{prop:"orderId",label:"订单号",sortable:""}}),r("el-table-column",{attrs:{prop:"shippingPerson",label:"姓名",sortable:""}}),r("el-table-column",{attrs:{prop:"shippingPhone",label:"手机号"}}),r("el-table-column",{attrs:{prop:"payType",label:"支付方式",formatter:e.payTypeFormatter}}),r("el-table-column",{attrs:{prop:"payMoney",label:"实付金额"}}),r("el-table-column",{attrs:{prop:"orderStatus",label:"订单状态",formatter:e.statusFormatter}}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(r){return r.preventDefault(),e.lookDetail(t.row,"edit")}}},[e._v("详情")]),1===t.row.orderStatus?r("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(r){return r.preventDefault(),e.cancelOrder(t.row)}}},[e._v("取消")]):e._e(),r("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(r){return r.preventDefault(),e.lookSmallCode(t.row)}}},[r("el-image",{staticStyle:{width:"40px",height:"40px"},attrs:{src:t.row.smallProCode,"preview-src-list":e.srcList}})],1)]}}])})],1),r("pages",{attrs:{total:e.total,"page-size":e.reqParam.pageSize},on:{handleSizeChangeSub:e.handleSizeChangeFun,handleCurrentChangeSub:e.handleCurrentChangeFun}})],1),r("el-dialog",{attrs:{title:"提示",visible:e.dialog.dialogVisible,width:"30%"},on:{"update:visible":function(t){return e.$set(e.dialog,"dialogVisible",t)}}},[r("span",{domProps:{textContent:e._s(e.dialog.dialogMsg)}}),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.cancel}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.okClick}},[e._v("确 定")])],1)])],1)},n=[],o=r("6407"),i=r("4ec3"),l={components:{pages:o["a"]},data:function(){return{dialog:{dialogVisible:!1,dialogMsg:""},datePicker:{pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,r=new Date;r.setTime(r.getTime()-6048e5),e.$emit("pick",[r,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,r=new Date;r.setTime(r.getTime()-2592e6),e.$emit("pick",[r,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,r=new Date;r.setTime(r.getTime()-7776e6),e.$emit("pick",[r,t])}}]}},date:"",reqParam:{orderId:"",beginTime:"",endTime:"",payType:"",orderStatus:"",userId:"",shippingPA:"",pageNum:1,pageSize:2},payOptions:[{value:"1",label:"微信"},{value:"2",label:"余额"}],tableData:[{orderId:111,shippingPerson:111,shippingPhone:11111,payType:1,payMoney:22.22,orderStatus:1,smallProCode:"http://123.img"},{orderId:111,shippingPerson:111,shippingPhone:11111,payType:1,payMoney:22.22,orderStatus:1,smallProCode:"http://123.img"}],total:1,srcList:[]}},methods:{statusFormatter:function(e){var t=["待支付","待发货","已发货","已收货","已关闭"];return t[e.orderStatus]},payTypeFormatter:function(e){var t=["微信支付","余额支付"];return t[e.payType]},searchClick:function(){this.date&&(this.reqParam.beginTime=this.date[0],this.reqParam.endTime=this.date[1]),this.getOrderList()},handleSizeChangeFun:function(e){this.reqParam.pageSize=e,this.getOrderList()},handleCurrentChangeFun:function(e){this.reqParam.pageNum=e,this.getOrderList()},getOrderList:function(){var e=this;Object(i["j"])(this.reqParam).then((function(t){e.tableData=t.obj.orderList,e.total=t.obj.totalNum})).catch((function(e){console.log(e)}))},lookDetail:function(e){this.$store.commit("orderDetail",{orderId:e.orderId,orderStatus:e.orderStatus}),this.$router.push({path:"/orderDetail"})},okClick:function(){Object(i["c"])({orderId:this.reqParam.orderId}).then((function(e){})).catch((function(e){console.log(e)})),this.dialog.dialogVisible=!1},cancel:function(){this.dialog.dialogVisible=!1},cancelOrder:function(e){this.dialog.dialogVisible=!0,this.dialog.dialogMsg="是否取消该订单？",this.reqParam.orderId=e.orderId},lookSmallCode:function(e){this.srcList=[],this.srcList.push(e.smallProCode)}},created:function(){this.getOrderList()}},c=l,s=(r("110a"),r("2877")),u=Object(s["a"])(c,a,n,!1,null,null,null);t["default"]=u.exports},"52a7":function(e,t){t.f={}.propertyIsEnumerable},"5dbc":function(e,t,r){var a=r("d3f4"),n=r("8b97").set;e.exports=function(e,t,r){var o,i=t.constructor;return i!==r&&"function"==typeof i&&(o=i.prototype)!==r.prototype&&a(o)&&n&&n(e,o),e}},"613b":function(e,t,r){var a=r("5537")("keys"),n=r("ca5a");e.exports=function(e){return a[e]||(a[e]=n(e))}},"626a":function(e,t,r){var a=r("2d95");e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==a(e)?e.split(""):Object(e)}},6407:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-pagination",{attrs:{"page-size":e.pageSize,layout:"total, prev, pager, next",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},n=[],o=(r("c5f6"),{data:function(){return{currentPage1:5}},props:{pageSize:{type:Number,default:1},total:{type:Number,default:1}},methods:{handleSizeChange:function(e){this.$emit("handleSizeChangeSub",e)},handleCurrentChange:function(e){this.$emit("handleCurrentChangeSub",e)}}}),i=o,l=r("2877"),c=Object(l["a"])(i,a,n,!1,null,"76b7d2ce",null);t["a"]=c.exports},6821:function(e,t,r){var a=r("626a"),n=r("be13");e.exports=function(e){return a(n(e))}},"77f1":function(e,t,r){var a=r("4588"),n=Math.max,o=Math.min;e.exports=function(e,t){return e=a(e),e<0?n(e+t,0):o(e,t)}},"8b97":function(e,t,r){var a=r("d3f4"),n=r("cb7c"),o=function(e,t){if(n(e),!a(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,a){try{a=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),a(e,[]),t=!(e instanceof Array)}catch(n){t=!0}return function(e,r){return o(e,r),t?e.__proto__=r:a(e,r),e}}({},!1):void 0),check:o}},9093:function(e,t,r){var a=r("ce10"),n=r("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return a(e,n)}},aa77:function(e,t,r){var a=r("5ca1"),n=r("be13"),o=r("79e5"),i=r("fdef"),l="["+i+"]",c="​",s=RegExp("^"+l+l+"*"),u=RegExp(l+l+"*$"),p=function(e,t,r){var n={},l=o((function(){return!!i[e]()||c[e]()!=c})),s=n[e]=l?t(d):i[e];r&&(n[r]=s),a(a.P+a.F*l,"String",n)},d=p.trim=function(e,t){return e=String(n(e)),1&t&&(e=e.replace(s,"")),2&t&&(e=e.replace(u,"")),e};e.exports=p},c366:function(e,t,r){var a=r("6821"),n=r("9def"),o=r("77f1");e.exports=function(e){return function(t,r,i){var l,c=a(t),s=n(c.length),u=o(i,s);if(e&&r!=r){while(s>u)if(l=c[u++],l!=l)return!0}else for(;s>u;u++)if((e||u in c)&&c[u]===r)return e||u||0;return!e&&-1}}},c5f6:function(e,t,r){"use strict";var a=r("7726"),n=r("69a8"),o=r("2d95"),i=r("5dbc"),l=r("6a99"),c=r("79e5"),s=r("9093").f,u=r("11e9").f,p=r("86cc").f,d=r("aa77").trim,f="Number",h=a[f],m=h,b=h.prototype,g=o(r("2aeb")(b))==f,v="trim"in String.prototype,y=function(e){var t=l(e,!1);if("string"==typeof t&&t.length>2){t=v?t.trim():d(t,3);var r,a,n,o=t.charCodeAt(0);if(43===o||45===o){if(r=t.charCodeAt(2),88===r||120===r)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+t}for(var i,c=t.slice(2),s=0,u=c.length;s<u;s++)if(i=c.charCodeAt(s),i<48||i>n)return NaN;return parseInt(c,a)}}return+t};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof h&&(g?c((function(){b.valueOf.call(r)})):o(r)!=f)?i(new m(y(t)),r,h):y(t)};for(var P,k=r("9e1e")?s(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;k.length>O;O++)n(m,P=k[O])&&!n(h,P)&&p(h,P,u(m,P));h.prototype=b,b.constructor=h,r("2aba")(a,f,h)}},ce10:function(e,t,r){var a=r("69a8"),n=r("6821"),o=r("c366")(!1),i=r("613b")("IE_PROTO");e.exports=function(e,t){var r,l=n(e),c=0,s=[];for(r in l)r!=i&&a(l,r)&&s.push(r);while(t.length>c)a(l,r=t[c++])&&(~o(s,r)||s.push(r));return s}},d7ca:function(e,t,r){},e11e:function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},fab2:function(e,t,r){var a=r("7726").document;e.exports=a&&a.documentElement},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47fc3b91"],{"0d58":function(e,t,r){var n=r("ce10"),o=r("e11e");e.exports=Object.keys||function(e){return n(e,o)}},"11e9":function(e,t,r){var n=r("52a7"),o=r("4630"),a=r("6821"),i=r("6a99"),s=r("69a8"),l=r("c69a"),c=Object.getOwnPropertyDescriptor;t.f=r("9e1e")?c:function(e,t){if(e=a(e),t=i(t,!0),l)try{return c(e,t)}catch(r){}if(s(e,t))return o(!n.f.call(e,t),e[t])}},1495:function(e,t,r){var n=r("86cc"),o=r("cb7c"),a=r("0d58");e.exports=r("9e1e")?Object.defineProperties:function(e,t){o(e);var r,i=a(t),s=i.length,l=0;while(s>l)n.f(e,r=i[l++],t[r]);return e}},"192d":function(e,t,r){"use strict";var n=r("a1a0"),o=r.n(n);o.a},"2aeb":function(e,t,r){var n=r("cb7c"),o=r("1495"),a=r("e11e"),i=r("613b")("IE_PROTO"),s=function(){},l="prototype",c=function(){var e,t=r("230e")("iframe"),n=a.length,o="<",i=">";t.style.display="none",r("fab2").appendChild(t),t.src="javascript:",e=t.contentWindow.document,e.open(),e.write(o+"script"+i+"document.F=Object"+o+"/script"+i),e.close(),c=e.F;while(n--)delete c[l][a[n]];return c()};e.exports=Object.create||function(e,t){var r;return null!==e?(s[l]=n(e),r=new s,s[l]=null,r[i]=e):r=c(),void 0===t?r:o(r,t)}},"4fc2":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"onion-orderGoods"},[r("section",{staticClass:"onion-orderGoods-left"},[r("el-form",{staticClass:"demo-form-inline onion-orderGoods-left-add_form",attrs:{inline:!0,model:e.reqParam,"label-width":"120px"}},[r("el-form-item",{attrs:{label:"商品分类"}},[r("SelectTree",{attrs:{options:e.categoryTreeData,props:e.defaultProps},model:{value:e.reqParam.categoryId,callback:function(t){e.$set(e.reqParam,"categoryId",t)},expression:"reqParam.categoryId"}})],1),r("el-form-item",{attrs:{label:"商品名称"}},[r("el-input",{attrs:{placeholder:"请输入"},model:{value:e.reqParam.suppliesName,callback:function(t){e.$set(e.reqParam,"suppliesName",t)},expression:"reqParam.suppliesName"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.searchClick}},[e._v("查询")])],1)],1),r("section",[r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",stripe:""},on:{"selection-change":e.handleSelectionChange}},[r("el-table-column",{attrs:{type:"selection",width:"55"}}),r("el-table-column",{attrs:{prop:"suppliesName",label:"商品名称",sortable:""}}),r("el-table-column",{attrs:{prop:"unit",label:"sku"}}),r("el-table-column",{attrs:{prop:"price",label:"单价"}}),r("el-table-column",{attrs:{prop:"inventory",label:"库存"}})],1),r("pages",{attrs:{total:e.total,"page-size":e.reqParam.pageSize},on:{handleSizeChangeSub:e.handleSizeChangeFun,handleCurrentChangeSub:e.handleCurrentChangeFun}})],1)],1),r("section",{staticClass:"onion-orderGoods-right"},[r("p",{staticClass:"onion-orderGoods-right_title"},[e._v("订单信息")]),r("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.orderGoodsList,border:"",stripe:""}},[r("el-table-column",{attrs:{type:"index",width:"30"}}),r("el-table-column",{attrs:{prop:"suppliesName",label:"商品名称"}}),r("el-table-column",{attrs:{prop:"unit",label:"sku",width:"70",sortable:""}}),r("el-table-column",{attrs:{prop:"price",label:"单价",width:"90",sortable:""}}),r("el-table-column",{attrs:{label:"数量"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-input-number",{attrs:{min:1,max:1e3,label:"商品数量"},on:{change:function(r){return e.suppliesNumChange(t.row,t.$index)}},model:{value:t.row.suppliesNum,callback:function(r){e.$set(t.row,"suppliesNum",r)},expression:"scope.row.suppliesNum"}})]}}])})],1),r("p",{staticClass:"onion-orderGoods-right_title"},[e._v("用户信息")]),r("el-form",{staticClass:"demo-form-inline onion-orderGoods-left-add_form",attrs:{inline:!0,model:e.reqParam,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"姓名"}},[r("el-input",{attrs:{placeholder:"请输入"},model:{value:e.userInfo.customerName,callback:function(t){e.$set(e.userInfo,"customerName",t)},expression:"userInfo.customerName"}})],1),r("el-form-item",{attrs:{label:"手机号"}},[r("el-input",{attrs:{placeholder:"请输入"},model:{value:e.userInfo.customerPhoneNum,callback:function(t){e.$set(e.userInfo,"customerPhoneNum",t)},expression:"userInfo.customerPhoneNum"}})],1),r("el-form-item",{attrs:{label:"会员折扣"}},[r("el-input",{attrs:{disabled:"disabled"},model:{value:e.userInfo.memDiscount,callback:function(t){e.$set(e.userInfo,"memDiscount",t)},expression:"userInfo.memDiscount"}})],1),r("el-form-item",{attrs:{label:"参与活动"}},[r("el-input",{attrs:{placeholder:"请输入"},model:{value:e.userInfo.favorPrice,callback:function(t){e.$set(e.userInfo,"favorPrice",t)},expression:"userInfo.favorPrice"}})],1),r("el-form-item",{attrs:{label:"运费"}},[r("el-input",{attrs:{placeholder:"请输入运费"},model:{value:e.userInfo.distribFee,callback:function(t){e.$set(e.userInfo,"distribFee",t)},expression:"userInfo.distribFee"}})],1)],1),r("p",[e._v("合计: 99元")]),r("el-button",{attrs:{type:"primary"},on:{click:e.submitOrder}},[e._v("提交订单")])],1)])},o=[],a=r("bc3a"),i=r.n(a),s=r("eaa3"),l=r("6407"),c={components:{SelectTree:s["a"],pages:l["a"]},data:function(){return{dialog:{dialogVisible:!1,dialogMsg:""},reqParam:{suppliesName:"",categoryId:"",pageSize:2,pageNum:1},total:1,defaultProps:{parent:"parentId",value:"id",label:"label",children:"children"},tableData:[{productId:"1",suppliesCode:"1",suppliesName:"1",intro:"11",specification:"1",unit:"1",shelfLife:"1",bannerPicture:"1",listPicture:"1",imageText:[],categoryId:"1",brand:"1",category:"",efficacy:"1",manufacturersName:"1",manufacturersAddress:"1",productionCertificate:"1",price:0,inventory:0,createId:"1",createTime:"1",updateTime:"1",putawayStatus:0}],orderGoodsList:[],orderGoodsReq:{distribFee:"0",favorPrice:"0.1",memDiscount:"0.8",payMoney:"1000",payPrescription:"",payReminders:"",userId:"admin",userName:"zz"},userInfo:{customerName:"",customerPhoneNum:"",memDiscount:"",favorPrice:"",distribFee:""}}},computed:{categoryTreeData:function(){return this.$store.state.categoryTreeData},ruleForm:function(){return this.$store.state.goodsListRow}},methods:{handleSizeChangeFun:function(e){this.reqParam.pageSize=e,this.getGoodsList()},handleCurrentChangeFun:function(e){this.reqParam.pageNum=e,this.$route.query.pageNum=e,this.getGoodsList()},handleChange:function(){},getTreeCategory:function(){var e=this;i.a.get("http://tadmin.yuxinhz.cn/api/category/getTreeCategory",{}).then((function(t){e.$store.commit("categoryTreeData",t.data.obj.categoryList)})).catch((function(e){console.log(e)}))},searchClick:function(){},getGoodsList:function(){var e=this;i.a.get("http://tadmin.yuxinhz.cn/api/product/list",this.reqParam).then((function(t){e.tableData=t.data.obj.page.records,e.total=t.data.obj.page.total})).catch((function(e){console.log(e)}))},handleSelectionChange:function(e){this.orderGoodsList=JSON.parse(JSON.stringify(e))},submitOrder:function(){var e=this;this.orderGoodsReq.list=this.orderGoodsList,i.a.post("http://192.168.1.161:8102/placeOrder",this.orderGoodsReq).then((function(t){e.$message({message:"下单成功",type:"success"})})).catch((function(e){console.log(e)}))},suppliesNumChange:function(e,t){0===e.suppliesNum&&(this.orderGoodsList=this.orderGoodsList.filter((function(e){return e.suppliesNum>0})))},okClick:function(){this.dialog.dialogVisible=!1}},created:function(){this.getTreeCategory(),this.getGoodsList()}},u=c,p=(r("192d"),r("2877")),d=Object(p["a"])(u,n,o,!1,null,null,null);t["default"]=d.exports},"52a7":function(e,t){t.f={}.propertyIsEnumerable},"5dbc":function(e,t,r){var n=r("d3f4"),o=r("8b97").set;e.exports=function(e,t,r){var a,i=t.constructor;return i!==r&&"function"==typeof i&&(a=i.prototype)!==r.prototype&&n(a)&&o&&o(e,a),e}},"613b":function(e,t,r){var n=r("5537")("keys"),o=r("ca5a");e.exports=function(e){return n[e]||(n[e]=o(e))}},"626a":function(e,t,r){var n=r("2d95");e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},6407:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-pagination",{attrs:{"page-size":e.pageSize,layout:"total, prev, pager, next",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},o=[],a=(r("c5f6"),{data:function(){return{currentPage1:5}},props:{pageSize:{type:Number,default:1},total:{type:Number,default:1}},methods:{handleSizeChange:function(e){this.$emit("handleSizeChangeSub",e)},handleCurrentChange:function(e){this.$emit("handleCurrentChangeSub",e)}}}),i=a,s=r("2877"),l=Object(s["a"])(i,n,o,!1,null,"76b7d2ce",null);t["a"]=l.exports},6821:function(e,t,r){var n=r("626a"),o=r("be13");e.exports=function(e){return n(o(e))}},"77f1":function(e,t,r){var n=r("4588"),o=Math.max,a=Math.min;e.exports=function(e,t){return e=n(e),e<0?o(e+t,0):a(e,t)}},"8b97":function(e,t,r){var n=r("d3f4"),o=r("cb7c"),a=function(e,t){if(o(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,n){try{n=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),n(e,[]),t=!(e instanceof Array)}catch(o){t=!0}return function(e,r){return a(e,r),t?e.__proto__=r:n(e,r),e}}({},!1):void 0),check:a}},9093:function(e,t,r){var n=r("ce10"),o=r("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,o)}},"9fb6":function(e,t,r){},a1a0:function(e,t,r){},aa77:function(e,t,r){var n=r("5ca1"),o=r("be13"),a=r("79e5"),i=r("fdef"),s="["+i+"]",l="​",c=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),p=function(e,t,r){var o={},s=a((function(){return!!i[e]()||l[e]()!=l})),c=o[e]=s?t(d):i[e];r&&(o[r]=c),n(n.P+n.F*s,"String",o)},d=p.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(u,"")),e};e.exports=p},c366:function(e,t,r){var n=r("6821"),o=r("9def"),a=r("77f1");e.exports=function(e){return function(t,r,i){var s,l=n(t),c=o(l.length),u=a(i,c);if(e&&r!=r){while(c>u)if(s=l[u++],s!=s)return!0}else for(;c>u;u++)if((e||u in l)&&l[u]===r)return e||u||0;return!e&&-1}}},c5f6:function(e,t,r){"use strict";var n=r("7726"),o=r("69a8"),a=r("2d95"),i=r("5dbc"),s=r("6a99"),l=r("79e5"),c=r("9093").f,u=r("11e9").f,p=r("86cc").f,d=r("aa77").trim,f="Number",h=n[f],m=h,b=h.prototype,g=a(r("2aeb")(b))==f,v="trim"in String.prototype,y=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){t=v?t.trim():d(t,3);var r,n,o,a=t.charCodeAt(0);if(43===a||45===a){if(r=t.charCodeAt(2),88===r||120===r)return NaN}else if(48===a){switch(t.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+t}for(var i,l=t.slice(2),c=0,u=l.length;c<u;c++)if(i=l.charCodeAt(c),i<48||i>o)return NaN;return parseInt(l,n)}}return+t};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof h&&(g?l((function(){b.valueOf.call(r)})):a(r)!=f)?i(new m(y(t)),r,h):y(t)};for(var N,w=r("9e1e")?c(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;w.length>C;C++)o(m,N=w[C])&&!o(h,N)&&p(h,N,u(m,N));h.prototype=b,b.constructor=h,r("2aba")(n,f,h)}},cd41:function(e,t,r){"use strict";var n=r("9fb6"),o=r.n(n);o.a},ce10:function(e,t,r){var n=r("69a8"),o=r("6821"),a=r("c366")(!1),i=r("613b")("IE_PROTO");e.exports=function(e,t){var r,s=o(e),l=0,c=[];for(r in s)r!=i&&n(s,r)&&c.push(r);while(t.length>l)n(s,r=t[l++])&&(~a(c,r)||c.push(r));return c}},e11e:function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},eaa3:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-popover",{ref:"popover",attrs:{placement:"bottom-start",trigger:"click"},on:{show:e.onShowPopover,hide:e.onHidePopover}},[r("el-tree",{ref:"tree",staticClass:"select-tree",style:"min-width: "+e.treeWidth,attrs:{"highlight-current":"",data:e.data,props:e.props,"expand-on-click-node":!1,"filter-node-method":e.filterNode,"default-expand-all":!1},on:{"node-click":e.onClickNode}}),r("el-input",{ref:"input",class:{rotate:e.showStatus},style:"width: "+e.width+"px",attrs:{slot:"reference",clearable:"","suffix-icon":"el-icon-arrow-down"},slot:"reference",model:{value:e.labelModel,callback:function(t){e.labelModel=t},expression:"labelModel"}})],1)},o=[],a={name:"Pagination",props:{value:String,width:String,options:{type:Array,required:!0},props:{type:Object,required:!1,default:function(){return{parent:"parentId",value:"rowGuid",label:"areaName",children:"children"}}}},model:{prop:"value",event:"selected"},computed:{dataType:function(){var e=JSON.stringify(this.options);return-1!==e.indexOf(this.props.children)},data:function(){return this.dataType?this.options:this.switchTree()}},watch:{labelModel:function(e){e||(this.valueModel=""),this.$refs.tree.filter(e)},value:function(e){this.labelModel=this.queryTree(this.data,e)}},data:function(){return{showStatus:!1,treeWidth:"auto",labelModel:"",valueModel:"0"}},created:function(){var e=this;this.value&&(this.labelModel=this.queryTree(this.data,this.value)),this.$nextTick((function(){e.treeWidth="".concat((e.width||e.$refs.input.$refs.input.clientWidth)-24,"px")}))},methods:{onClickNode:function(e){this.labelModel=e[this.props.label],this.valueModel=e[this.props.value],this.onCloseTree()},switchTree:function(){return this.cleanChildren(this.buildTree(this.options,"0"))},onCloseTree:function(){this.$refs.popover.showPopper=!1},onShowPopover:function(){this.showStatus=!0,this.$refs.tree.filter(!1)},onHidePopover:function(){this.showStatus=!1,this.$emit("selected",this.valueModel)},filterNode:function(e,t){return!e||-1!==t[this.props.label].indexOf(e)},queryTree:function(e,t){var r=[];r=r.concat(e);while(r.length){var n=r.shift();if(n[this.props.children]&&(r=r.concat(n[this.props.children])),n[this.props.value]===t)return n[this.props.label]}return""},buildTree:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0",n=function r(n){for(var o=[],a=0;a<e.length;a++){var i=e[a];i[t.props.parent]===n&&(i.children=r(i.rowGuid),o.push(i))}return o};return n(r)},cleanChildren:function(e){var t=function e(t){return t.map((function(t){return t.children.length?e(t.children):delete t.children,t})),t};return t(e)}}},i=a,s=(r("cd41"),r("2877")),l=Object(s["a"])(i,n,o,!1,null,null,null);t["a"]=l.exports},fab2:function(e,t,r){var n=r("7726").document;e.exports=n&&n.documentElement},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e7b8a86"],{"0cd5":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{staticClass:"onion-goods-add-catagories"},[a("el-form",{staticClass:"demo-form-inline onion-goods-add-catagories_form",attrs:{inline:!0,model:t.reqParam}},[a("el-form-item",{attrs:{label:"分类名称"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:t.reqParam.categoryName,callback:function(e){t.$set(t.reqParam,"categoryName",e)},expression:"reqParam.categoryName"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.searchClick}},[t._v("查询")])],1)],1),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.addGoodsCategories()}}},[t._v("添加分类")])],1),a("section",{staticClass:"onion-table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"",stripe:""}},[a("el-table-column",{attrs:{type:"index",width:"50"}}),a("el-table-column",{attrs:{prop:"categoryName",label:"分类名称",width:"180",sortable:""}}),a("el-table-column",{attrs:{prop:"level",label:"级别",width:"180"}}),a("el-table-column",{attrs:{prop:"number",label:"商品数量"}}),a("el-table-column",{attrs:{prop:"createTime",label:"查看",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){return a.preventDefault(),t.lookChildren(e.row)}}},[t._v("\n          二级等级\n        ")])]}}])}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){return a.preventDefault(),t.editGoodsCategories(e.row)}}},[t._v("\n          编辑\n        ")]),a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(e){return e.preventDefault(),t.addGoodsCategories("addSecond")}}},[t._v("\n          增加分类\n        ")]),a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){return a.preventDefault(),t.deleteGoodsCategories(e.row)}}},[t._v("\n          删除\n        ")])]}}])})],1),a("el-pagination",{attrs:{layout:"prev, pager, next",total:50}})],1)])},n=[],r=a("bc3a"),i=a.n(r),l={data:function(){return{tableData:[{id:1,categoryName:"去黑头",level:1,number:0},{id:3,categoryName:"祛痘",level:1,number:0}],reqParam:{categoryName:"",level:"",parentId:"0"}}},methods:{addGoodsCategories:function(t){this.$router.push({path:"/addGoodsCategories?flag="+t})},lookChildren:function(t){console.log(t);var e=this;i.a.get("http://tadmin.yuxinhz.cn/api/category/list",this.reqParam).then((function(t){e.tableData=t.data.obj.page.records})).catch((function(t){console.log(t)}))},getGoodsCategories:function(){var t=this;i.a.get("http://tadmin.yuxinhz.cn/api/category/list",this.reqParam).then((function(e){t.tableData=e.data.obj.page.records})).catch((function(t){console.log(t)}))},searchClick:function(){this.getGoodsCategories()},editGoodsCategories:function(t){this.$store.commit("categoriesListRow",t),this.$router.push({path:"/addGoodsCategories"})},deleteGoodsCategories:function(t){var e=this;i.a.post("http://tadmin.yuxinhz.cn/api/category/delete",{categoryId:t.categorytId}).then((function(t){e.getGoodsList()})).catch((function(t){console.log(t)}))}},created:function(){this.getGoodsCategories()}},s=l,c=(a("12ce"),a("2877")),d=Object(c["a"])(s,o,n,!1,null,null,null);e["default"]=d.exports},"12ce":function(t,e,a){"use strict";var o=a("afa7"),n=a.n(o);n.a},afa7:function(t,e,a){}}]);
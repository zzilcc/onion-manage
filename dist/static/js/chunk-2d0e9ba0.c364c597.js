(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e9ba0"],{"8f84":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-card",{staticClass:"box-card"},[t._v("\n    statusFormatter\n  ")])],1)},r=[],n=a("bc3a"),u=a.n(n),o={data:function(){return{options:[{value:"选项1",label:"一级分类1"},{value:"选项2",label:"一级分类2"}],rules:{categoryName:[{required:!0,message:"请输入商品分类名称",trigger:"blur"}]},flag:""}},computed:{ruleForm:function(){return this.$store.state.categoriesListRow}},methods:{submitForm:function(){var t=this,e="";e="edit"===this.flag?"http://tadmin.yuxinhz.cn/api/category/update":"http://tadmin.yuxinhz.cn/api/category/add",u.a.post(e,this.ruleForm).then((function(e){t.$message({message:"添加分类成功",type:"success"}),t.$router.push({path:"/goodsCategories?pageNum="+t.$route.query.pageNum})})).catch((function(t){console.log(t)}))},resetForm:function(t){this.$refs[t].resetFields()}},mounted:function(){this.flag=this.$route.query.flag}},i=o,c=a("2877"),l=Object(c["a"])(i,s,r,!1,null,null,null);e["default"]=l.exports}}]);
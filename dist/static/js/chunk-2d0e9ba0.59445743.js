(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e9ba0"],{"8f84":function(e,r,t){"use strict";t.r(r);var o=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("el-card",{staticClass:"box-card"},[t("el-form",{ref:"ruleForm",staticClass:"demo-form-inline",attrs:{model:e.ruleForm,rules:e.rules}},[t("el-form-item",{attrs:{label:"商品分类名称",prop:"name"}},[t("el-input",{attrs:{placeholder:"商品分类名称"},model:{value:e.ruleForm.categoryName,callback:function(r){e.$set(e.ruleForm,"categoryName",r)},expression:"ruleForm.categoryName"}})],1),t("el-form-item",{attrs:{label:"父级分类"}},[t("el-input",{attrs:{placeholder:"父级分类"},model:{value:e.ruleForm.parentId,callback:function(r){e.$set(e.ruleForm,"parentId",r)},expression:"ruleForm.parentId"}})],1),t("el-form-item",{attrs:{label:"关键字"}},[t("el-input",{attrs:{placeholder:"关键字"},model:{value:e.ruleForm.keyword,callback:function(r){e.$set(e.ruleForm,"keyword",r)},expression:"ruleForm.keyword"}})],1),t("el-form-item",{attrs:{label:"商品分类描述"}},[t("el-input",{attrs:{placeholder:"商品分类描述"},model:{value:e.ruleForm.categoryDescription,callback:function(r){e.$set(e.ruleForm,"categoryDescription",r)},expression:"ruleForm.categoryDescription"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("ruleForm")}}},[e._v("确定")]),t("el-button",{on:{click:function(r){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)],1)},l=[],a={data:function(){return{ruleForm:{id:3,categoryName:"祛痘",parentId:1,sort:3,isshow:0,icon:"祛痘",keyword:null,categoryDescription:"祛痘描述",createUid:1,createTime:"2019-09-09T06:26:29.000+0000",updateTime:"2019-09-09T06:26:29.000+0000",status:0},rules:{categoryName:[{required:!0,message:"请输入商品分类名称",trigger:"blur"}]}}},methods:{submitForm:function(e){this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")}))},resetForm:function(e){this.$refs[e].resetFields()}}},n=a,s=t("2877"),u=Object(s["a"])(n,o,l,!1,null,null,null);r["default"]=u.exports}}]);
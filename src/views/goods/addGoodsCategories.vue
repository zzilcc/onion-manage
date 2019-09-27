<!--
 * @Author: 黄紫茜
 * @Date: 2019-09-27 14:46:04
 * @LastEditors: 黄紫茜
 * @LastEditTime: 2019-09-27 15:14:28
 * @Description: 
 -->
<template>
  <div>
    <el-card class="box-card">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-form-inline">
        <el-form-item label="商品分类名称" prop="name">
          <el-input v-model="ruleForm.categoryName" placeholder="商品分类名称"></el-input>
        </el-form-item>
        <el-form-item label="父级分类">
          <el-input v-model="ruleForm.parentId" placeholder="父级分类"></el-input>
        </el-form-item>
        <el-form-item label="关键字">
          <el-input v-model="ruleForm.keyword" placeholder="关键字"></el-input>
        </el-form-item>
        <el-form-item label="商品分类描述">
          <el-input v-model="ruleForm.categoryDescription" placeholder="商品分类描述"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default { 
  data () {
    return {
      ruleForm: {
        "id": 3,
        "categoryName": "祛痘", // 分类名称
        "parentId": 1, // 父分类
        "sort": 3, // 排序方式
        "isshow": 0, // 是否显示
        "icon": "祛痘", // 分类icon
        "keyword": null, // 关键字
        "categoryDescription": "祛痘描述", // 分类描述
        "createUid": 1, // 分类id
        "createTime": "2019-09-09T06:26:29.000+0000", // 创建时间
        "updateTime": "2019-09-09T06:26:29.000+0000", // 更新时间
        "status": 0 // 分类状态
      },
      rules: {
          categoryName: [
            { required: true, message: '请输入商品分类名称', trigger: 'blur' },
          ],
        }
    }
  },
  methods: {
    /**
     *  提交添加商品分类的表单
     */
    submitForm() {
      },
       /**
       *  重置添加商品分类的表单
       */
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
  }
}
</script>
<style lang='less'></style>
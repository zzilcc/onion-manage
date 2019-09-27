<!--
 * @Author: 黄紫茜
 * @Date: 2019-09-27 14:46:04
 * @LastEditors: 黄紫茜
 * @LastEditTime: 2019-09-27 15:59:02
 * @Description: 
 -->
<template>
  <div>
    <el-card class="box-card">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-form-inline">
        <el-form-item label="商品分类名称" prop="name">
          <el-input v-model="ruleForm.categoryName" placeholder="商品分类名称"></el-input>
        </el-form-item>
        <el-form-item label="上级分类">
          <el-select v-model="ruleForm.level" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
          <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
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
        "id": 1,
        "categoryName": "", // 分类名称
        "level": '', // 分类等级
      },
      options: [
        {
          value: "选项1",
          label: "一级分类1",
        },
        {
          value: "选项2",
          label: "一级分类2"
        }
      ],
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
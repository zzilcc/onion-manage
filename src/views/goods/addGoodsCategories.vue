<!--
 * @Author: 黄紫茜
 * @Date: 2019-09-27 14:46:04
 * @LastEditors: 黄紫茜
 * @LastEditTime: 2019-10-10 19:26:06
 * @Description: 
 -->
<template>
  <div>
    <el-card class="box-card">
      statusFormatter
    </el-card>
  </div>
</template>
<script>
import axios from "axios";
export default { 
  data () {
    return {
      // ruleForm: {
      //   "id": 1,
      //   "categoryName": "", // 分类名称
      //   "level": '', // 分类等级
      //   "parentCategoryName": '', // 父级分类名称
      //   "parentId: '' // 父级分类id
      // },
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
      },
      flag: '' // edit:编辑,addOne:新增一级分类, addSec 新增二级分类
    }
  },
  computed: {
    ruleForm () {
      return this.$store.state.categoriesListRow
    },
  },
  methods: {
    /**
     *  提交添加商品分类的表单
     */
    submitForm() {
      let _this = this
      let url = ''
      if (this.flag === 'edit') {
        url = 'http://tadmin.yuxinhz.cn/api/category/update'
      } else {
        url = 'http://tadmin.yuxinhz.cn/api/category/add'
      }
      axios
        .post(url, this.ruleForm)
        .then(res => {
          // console.log(res)
          _this.$message({
            message: '添加分类成功',
            type: 'success'
          });
            _this.$router.push({path: '/goodsCategories?pageNum=' + _this.$route.query.pageNum})
        })
        .catch(err => {
          console.log(err)
        });
    },
      /**
     *  重置添加商品分类的表单
     */
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  mounted () {
    this.flag = this.$route.query.flag
  }
}
</script>
<style lang='less'></style>
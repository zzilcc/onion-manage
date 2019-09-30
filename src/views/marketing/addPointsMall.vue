<!--
 * @Author: 黄紫茜
 * @Date: 2019-09-30 10:10:07
 * @LastEditors: 黄紫茜
 * @LastEditTime: 2019-09-30 11:31:09
 * @Description: 
 -->
<template>
  <div>
    <el-card class="box-card">
      <el-form :model="ruleForm"  ref="ruleForm" class="demo-form-inline">
        <section>
          <el-form-item label="排序" prop="name">
            <el-input v-model="ruleForm.sort" placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="商品名称">
            <el-input v-model="ruleForm.name" placeholder="请输入商品名称" type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="商品封面">
            
          </el-form-item>
          <el-form-item label="商品图册">
          </el-form-item>
          <el-form-item  label="库存">
            <el-input type="number" v-model="ruleForm.inventory" placeholder="请输入库存"></el-input>
          </el-form-item>
          <el-form-item label="上下架">
            <el-radio-group v-model="ruleForm.putawayStatus">
              <el-radio label="上架"></el-radio>
              <el-radio label="下架"></el-radio>
            </el-radio-group>
          </el-form-item>
        </section>
        <section>
          <el-form-item  label="消耗积分">
            <el-input type="number" v-model="ruleForm.integral" placeholder="请输入库存"></el-input>
          </el-form-item>
          <el-form-item  label="兑换限制">
            <el-input type="number" v-model="ruleForm.limitNumber" placeholder="请输入库存"></el-input>
          </el-form-item>
        </section>
        <section>
          <tinymce
              ref="editor"
              v-model="msg"
              @onClick="onClick"
          />
        </section>
        <el-form-item>
          <el-button  type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue';
import tinymce from '../../components/tinymce/tinymce.vue';
import axios from "axios";
export default {
  data () {
    return {
      msg: '',
      fileList: [],
      flag: ''// add 为新增商品, edit: 编辑商品
    }
  },
  computed: {
    ruleForm () {
      return this.$store.state.pointsMallListRow
    }
  },
  components: {
    tinymce,
  },
  methods: {
    /**
     * @description: 提交表单
     * @param {type} 
     * @return: 
     */
    submitForm () {
       let _this = this
      this.ruleForm.imageText = this.msg
      let url = ''
      this.ruleForm.inventory = parseInt(this.ruleForm.inventory)
      this.ruleForm.sort = parseInt(this.ruleForm.sort)
      this.ruleForm.integral = parseInt(this.ruleForm.integral)
      this.ruleForm.limitNumber = parseInt(this.ruleForm.limitNumber)
      if (this.flag === 'add') {
        url = 'http://tadmin.yuxinhz.cn/api/integralGoods/add'
      } else {
        url = 'http://tadmin.yuxinhz.cn/api/integralGoods/update'
      }
      axios
        .post(url, this.ruleForm)
        .then(res => {
          console.log(res)
          _this.$message({
            message:  _this.flag === 'add' ? '添加商品成功': '编辑商品成功',
            type: 'success'
          });
          _this.$router.push({path: '/pointsMall?pageNum=' + (_this.flag === 'add' ? 1 : _this.$route.query.pageNum)})
        })
        .catch(err => {
          console.log(err)
        })
    },
    /**
     * @description: 
     * @param {type} 
     * @return: 
     */
    onClick () {

    }
  },
  created () {
    this.flag = this.$route.query.flag
  }
}
</script>

<style lang="less" scoped>

</style>
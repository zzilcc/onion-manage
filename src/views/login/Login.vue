<!--
 * @Author: 黄紫茜
 * @Date: 2019-09-27 14:46:04
 * @LastEditors: 黄紫茜
 * @LastEditTime: 2019-10-09 15:03:53
 * @Description: 
 -->
<template>
  <div class="onion-login">
    <div class="onion-login-content">
      <!-- <el-card class="box-card"> -->
        <p class="onion-login-content-title">洋葱电商后台管理系统</p>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label-width="45px" label="账号">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label-width="45px" label="密码">
            <el-input type="password" v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item label-width="0" >
            <el-button type="primary" @click="onSubmit">登录</el-button>
          </el-form-item>
        </el-form>
      <!-- </el-card> -->
    </div>
  </div>
</template>
<script>
import {loginAxios } from "@/api/api.js"; 
export default { 
  data () {
    return {
      form: {
          username: '',
          password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      let _this = this
      this.$store.dispatch('toLogin', {
        username: this.form.username,
        password: this.form.password
      }).then(() => {
         this.$router.push({path:'/goodsList'})
      }).catch(err => {
        console.log(err)
        _this.$message({
          message: "账号或者密码有误，请重新输入！",
          type: "error",
          center: true
        });
      })
      // loginAxios(this.form) 
      //   .then(res => {
      //     this.$router.push({path:'/goodsList'})
      //   })
      //   .catch(err => {
      //     _this.$message({
      //       message: "账号或者密码有误，请重新输入！",
      //       type: "error",
      //       center: true
      //     });
      //   })
    }
  }
}
</script>
<style lang='less'>
.onion-login {
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
}
.onion-login-content {
  height: 200px;
  width: 400px;
  .onion-login-content-title {
    color: #000;
    height: 50px;
    font-size: 24px;
  }
}
</style>

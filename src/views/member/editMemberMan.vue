<!--
 * @Author: 黄紫茜
 * @Date: 2019-10-10 11:31:41
 * @LastEditors: 黄紫茜
 * @LastEditTime: 2019-10-12 12:06:37
 * @Description: 
 -->
<template>
  <div class="onion-edit-member-manage">
    <el-form class label-width="80px" label-position="left">
      <!-- 头像昵称 -->
      <section class="onion-edit-member-manage-top">
        <div>
          <img :src="reqParam.avatar" width="40px" height="40px" alt />
        </div>
        <div>
          <p v-text="'昵称: '+ reqParam.nickName"></p>
          <p v-text="'首次登陆时间: '+ reqParam.createTime"></p>
        </div>
      </section>
      <!-- 会员等级 -->
      <section class="onion-edit-member-manage-middle">
        <el-form-item label="会员等级">
          <el-select v-model="reqParam.levelName" placeholder="请选择">
            <el-option
              v-for="item in levelOptions"
              :key="item.levelId"
              :label="item.levelName"
              :value="item.levelId"
            ></el-option>
          </el-select>
        </el-form-item>
        <label>会员等级</label>
      </section>
      <!-- 会员资料编辑 -->
      <section class="onion-edit-member-manage-bottom">
        <el-form-item label="姓名">
          <el-input v-model="reqParam.userName" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="手机">
          <el-input v-model="reqParam.phone" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="reqParam.sex" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="生日">
          <el-input v-model="reqParam.birthDay" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="地区">
          <el-select v-model="reqParam.province" @change="choseProvince" placeholder="省级地区">
            <el-option
              v-for="item in MapData.provinceData"
              :key="item.id"
              :label="item.value"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select v-model="reqParam.city" @change="choseCity" placeholder="市级地区">
            <el-option v-for="item in MapData.cityData" :key="item.id" :label="item.value" :value="item.value"></el-option>
          </el-select>
          <el-select v-model="reqParam.area" placeholder="区级地区">
            <el-option v-for="item in MapData.areaData" :key="item.id" :label="item.value" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
      </section>
      <el-form-item>
        <el-button  @click="cancelHandle">取消</el-button>
        <el-button  type="primary" @click="saveHandle">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapData } from "../../common/js/map.js";
import { getMemberLevelBox, editMemberManageList } from "../../api/api";
export default {
  computed: {
    reqParam () {
      return this.$store.state.memberInfo
    }
  },
  data() {
    return {
      // reqParam: {
      //   userId:"",
      //   nickName: "默认昵称",
      //   avatar: "http://timg.yuxinhz.cn/userImg/1569830446258.jpg",
      //   phone: "18666025484",
      //   userName: "张三",
      //   levelId: "1",
      //   levelName: "普通会员",
      //   walletAmount: "100.00",
      //   integration: "100",
      //   createTime: "2019-10-10 02:09:06",
      //   sex: "1",
      //   birthDay: "2018-08-07",
      //   province: "",
      //   city: "",
      //   area: ""
      // },
      levelOptions: [],
      MapData: {
        provinceData: [],
        cityData: [],
        areaData: []
      },
      allMapData: mapData
    };
  },
  methods: {
    /**
     * @description: 选择省份
     * @param {type}
     * @return:
     */

    choseProvince(e) {
      var _this = this
      this.MapData.provinceData.map(item => {
        if (item.value === e) {
          _this.MapData.cityData = item.children
        }
      })
    },
    /**
     * @description: 选择市
     * @param {type}
     * @return:
     */

    choseCity(e) {
      var _this = this
      this.MapData.cityData.map(item => {
        if (item.value === e) {
          _this.MapData.areaData = item.children
        }
      })
    },
    /**
     * @description: 取消操作
     * @param {type} 
     * @return: 
     */  
    cancelHandle () {

    },
    /**
     * @description: 保存操作
     * @param {type} 
     * @return: 
     */  
    saveHandle () {
      let _this = this
      let params = JSON.parse(JSON.stringify(this.reqParam))
      delete params.avatar 
      delete params.integration 
      delete params.createTime 
      delete params.nickName 
      delete params.walletAmount 
      editMemberManageList(this.reqParam)
        .then(res => {
           _this.$message({
            message: res.code === 200 ? "编辑会员信息成功": "修改会员信息失败，请重新提交",
            type: "success"
          });
          _this.$router.push({path: '/memManage'})
        })
        .catch(err => {
          console.log(err)
        })
    },
     /**
     * @description: 获取会员等级下拉数据
     * @param {type} 
     * @return: 
     */  
    getMemberLevelOpt () {
      let _this = this
      getMemberLevelBox({})
        .then(res => {
           _this.levelOptions = res.obj
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.MapData.provinceData = this.allMapData
    this.getMemberLevelOpt()
  }
};
</script>
<style>
</style>
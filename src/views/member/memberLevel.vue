<!--
 * @Author: 黄紫茜
 * @Date: 2019-10-08 15:14:33
 * @LastEditors: 黄紫茜
 * @LastEditTime: 2019-10-12 17:04:56
 * @Description: 
 -->
<template>
  <div class="onion-member-level">
    <section class="onion-member-level_form">
      <!-- <el-button icon="el-icon-plus">添加会员卡</el-button> -->
    </section>
    <section class="onion-member-level_table">
      <el-table :data="tableData" border stripe>
        <el-table-column prop="levelNum" label="等级"></el-table-column>
        <el-table-column prop="levelName" label="等级名称"></el-table-column>
        <el-table-column prop="levelUpTerm" label="升级条件"></el-table-column>
        <el-table-column prop="rechargeAmount" label="充值方案"></el-table-column>
        <el-table-column prop="description" label="享受折扣/折"></el-table-column>
        <el-table-column prop="createTime" label="创建时间"></el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="editHandle(scope.row)"
              type="text"
              size="small"
            >编辑</el-button>
            <el-button
              @click.native.prevent="dialogPop(scope.row, '删除')"
              type="text"
              size="small"
            >删除</el-button>
            <el-button
              @click.native.prevent="dialogPop(scope.row, '分享')"
              type="text"
              size="small"
            >充值方案分享</el-button>
          </template>
        </el-table-column>
      </el-table>
       <pages
        :total="total"
        :page-size="reqParam.pageSize"
        @handleSizeChangeSub="handleSizeChangeFun"
        @handleCurrentChangeSub="handleCurrentChangeFun"
      ></pages>
    </section>
    <el-dialog :title="dialog.methods === '删除' ? '提示' : '分享设置'" :visible.sync="dialog.dialogVisible" width="30%">
      <span v-text="dialog.dialogMsg" v-if="dialog.methods === '删除'"></span>
      <div v-else>
        <p>提醒设置：</p>
        <el-form :model="shareInfo" class='' label-width="100px">
          <el-form-item label="支付时效" >
            <el-time-picker
            v-model="shareInfo.payPrescription"
            placeholder="任意时间点">
          </el-time-picker>
          </el-form-item>
          <el-form-item label="提醒语">
            <el-input type="textarea" v-model="shareInfo.payReminders" placeholder="请输入"></el-input>
          </el-form-item>
          <el-button type="primary" @click="buildCode">生成小程序码</el-button>
        </el-form>
      </div>
      <span v-if="dialog.methods === '删除'" slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="okClick">确 定</el-button>
      </span>
    </el-dialog>
     <el-dialog title="小程序码"
      :visible.sync="codeDialog.dialogVisible"
      width="50%"
      modal
      :show-close="true"
      @close="codeClose">
      <div>
        <img :src="codeDialog.url" alt="">
      </div>
    </el-dialog>
  </div>
</template>
<script>
import pages from "../../components/pagination";
import {getMemberLevelList, deleteMemberLevel, placeMemberLevelOrder} from "../../api/api"
export default {
  name:"",
  components: {pages},
  data () {
    return {
      // 小程序码展示弹框
      codeDialog: {
        dialogVisible:false,
        url: ""
      },
      // 弹框
      dialog: {
        dialogVisible: false,
        dialogMsg: "",
        methods: ''
      },
      shareInfo: {
        payPrescription: '',
        payReminders: ''
      },
      reqParam: {
        pageNum: 1,
        pageSize: 2
      },
      tableData: [
        {
          levelId: "", // 主键id
          levelNum: "0", // 等级大小
          levelName: "黄金会员", // 等级名称
          levelUpTerm: "充值", // 升级条件
          rechargeAmount: "3000", // 充值金额
          upgradeAmount: "2000", // 升级金额
          discount: "0.9", // 消费折扣
          integralRatio: "1000", // 赠送积分
          description: "大撒法大热", // 说明
          createTime: "20190901", // 创建时间
        },
      ],
      total: 1,
      rowData: {}
    }
  },
  methods: {
    /**
     * @description: 每页展示数量变化监听事件
     * @param {type}
     * @return:
     */
    handleSizeChangeFun(v) {
      this.reqParam.pageSize = v;
     this.getMemberLevel(); //更新列表
    },
    /**
     * @description: 页面变动监听事件
     * @param {type}
     * @return:
     */
    handleCurrentChangeFun(v) {
      //页面点击
      this.reqParam.pageNum = v; //当前页
      this.$route.query.pageNum = v;
      this.getMemberLevel();
    },
    /**
     * @description: 编辑
     * @param {row} 
     * @return: 
     */
    editHandle (row) {
      this.$store.commit('memberLevelRow', row)
      this.$router.push({
        path: "/editMemberLevel"
      })
    },
    /**
     * @description: 删除或者分享弹框
     * @param {row} 
     * @return: 
     */
    dialogPop (row, methods) {
      this.rowData = row
      this.dialog.methods = methods
      if (methods === '删除') {
        this.dialog.dialogMsg = "确定要删除该等级吗？"
      } 
      this.dialog.dialogVisible = true
    },
    /**
     * @description: 弹框取消事件
     * @param {type} 
     * @return: 
     */  
    cancel () {
      this.dialog.dialogVisible = false;
    },
    /**
     * @description: 弹框确定事件
     * @param {type} 
     * @return: 
     */  
    okClick () {
      let _this = this
      if (this.dialog.methods) {
        deleteMemberLevel({levelId: this.rowData.levelId})
          .then(res => {
            if(res.code === 200) {
               _this.$message({
                message: "删除成功",
                type: "success"
              })
            } else {
               _this.$message({
                message: "删除失败，请重新操作",
                type: "error"
              })
            }
            _this.dialog.dialogVisible = false
            _this.getMemberLevel()
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    /**
     * @description: 生成小程序码
     * @param {type} 
     * @return: 
     */  
    buildCode () {
      let _this = this
      this.shareInfo.levelId = this.rowData.levelId
      placeMemberLevelOrder(this.shareInfo)
        .then(res => {
           if (res.code === 200) {
            _this.dialog.dialogVisible = false
            _this.codeDialog.dialogVisible = true;
            _this.codeDialog.url = res.obj
          } else {
            _this.$message({
              message:  "小程序码生成失败，请重试",
              type: "error"
            })
          }
          _this.getMemberLevel()
        })
        .catch(err => {
          console.log(err)
        })
    },
    /**
     * @description: 获取会员等级列表
     * @param {type} 
     * @return: 
     */  
    getMemberLevel () {
      let _this = this
      getMemberLevelList(this.reqParam)
        .then(res => {
          if(res.code === 200) {
            _this.tableData = res.obj.memLevelList
            _this.total = res.obj.totalNum
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
     /**
     * @description: 小程序码弹框关闭
     * @param {type} 
     * @return: 
     */  
    codeClose  () {
      this.codeDialog.dialogVisible = false
    }
  },
  created () {
    this.getMemberLevel()
  }
}
</script>
<style>
</style>
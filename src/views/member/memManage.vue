<!--
 * @Author: 黄紫茜
 * @Date: 2019-10-08 15:14:15
 * @LastEditors: 黄紫茜
 * @LastEditTime: 2019-10-12 15:38:08
 * @Description: 
 -->
<template>
  <div class="onion-member-list">
    <section class="onion-member-list_form">
      <el-form
        :inline="true"
        :model="reqParam"
        class="demo-form-inline onion-member-list_form--content"
        label-width="120px"
      >
        <el-form-item label="会员等级">
          <el-select v-model="reqParam.levelId">
            <el-option
              v-for="item in memLevelOpt"
              :key="item.levelId"
              :label="item.levelName"
              :value="item.levelId"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="姓名/手机号">
          <el-input v-model="reqParam.text"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchClick">搜索</el-button>
        </el-form-item>
      </el-form>
    </section>
    <section class="onion-member-list_table">
      <el-table :data="tableData" border stripe>
        <el-table-column prop="avatar" label="头像和昵称"></el-table-column>
        <el-table-column  label="会员等级">
          <template slot-scope="scope">
            <p><img :src="scope.row.avatar" alt="" height="40px" width="40px">
            <span v-text="scope.row.nickName"></span></p>
          </template>
        </el-table-column>
        <el-table-column  label="姓名/手机号">
          <template slot-scope="scope">
            <span v-text="scope.row.userName + '/' +scope.row.phone"></span>
          </template>
        </el-table-column>
        <el-table-column prop="walletAmount" label="账户余额"></el-table-column>
        <el-table-column prop="integration" label="积分"></el-table-column>
        <el-table-column prop="createTime" label="首次登陆时间"></el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="editMember(scope.row, 'edit')"
              type="text"
              size="small"
            >编辑</el-button>
            <el-button
              @click.native.prevent="dialogPop(scope.row, 'recharge')"
              type="text"
              size="small"
            >积分充值</el-button>
            <el-button
              @click.native.prevent="dialogPop(scope.row, 'rechargeAgain')"
              type="text"
              size="small"
            >续充</el-button>
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
    <el-dialog
      :title="dialog.methods === 'recharge' ? '积分充值' : '续充'"
      :visible.sync="dialog.dialogVisible"
      width="50%"
    >
      <div v-if="dialog.methods === 'recharge'">
        <p v-text="'账号积分:' + this.rowData.integration"></p>
        <el-form :model="integralInfo" class>
          <el-form-item>
            <el-radio v-model="integralInfo.mark" label="1">
              增加
              <el-input v-model="addCount"></el-input>
            </el-radio>
          </el-form-item>
          <el-form-item>
            <el-radio v-model="integralInfo.mark" label="2">
              减少
              <el-input v-model="subCount"></el-input>
            </el-radio>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="cancel">取 消</el-button>
          <el-button type="primary" @click="okClick">确 定</el-button>
        </span>
      </div>
      <div v-else>
        <el-form :model="rechargeAgainInfo" class="" label-width="100px">
          <el-form-item >
            <el-radio-group v-model="amountMethods">
              <el-radio label="fixed">
                固定金额
                <el-select v-model="fixedAmount" >
                <el-option
                  v-for="item in rechargeAmountOpt"
                  :key="item.id"
                  :label="item.value"
                  :value="item.value"
                ></el-option>
              </el-select>
              </el-radio>
              <el-radio label="custom">
                自定义金额
                <el-input v-model="customAmount" ></el-input>
              </el-radio>
            </el-radio-group>
          </el-form-item>
          <p>提醒设置：</p>
          <el-form-item label="支付时效">
            <el-time-picker v-model="rechargeAgainInfo.payPrescription" placeholder="任意时间点"></el-time-picker>
          </el-form-item>
          <el-form-item label="提醒语">
            <el-input type="textarea" v-model="rechargeAgainInfo.payReminders" placeholder="请输入"></el-input>
          </el-form-item>
          <el-button type="primary" @click="buildCode">生成小程序码</el-button>
        </el-form>
      </div>
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
import {getMemberManageList, editIntegration, placeMemberOrder, getMemberLevelBox} from '../../api/api'
export default {
  name: "memberList",
  components: {
    pages
  },
  data() {
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
        methods: ""
      },
      rechargeAgainInfo: {
        payPrescription: "", // 支付时效
        payReminders: "", // 提醒语
      },
      amountMethods: "fixed" ,// 固定金额还是自定义金额
      customAmount: '', // 自定义金额
      fixedAmount: '', // 固定金额
      rechargeAmountOpt: [
        {
          value: "3000",
          key: "3000"
        },
        {
          value: "5000",
          key: "5000"
        }
      ], // 固定金额下拉数据
      integralInfo: {
        userId:'',
        // 积分充值信息
        mark: '1', // 增加积分还是减少积分
        variableIntegral: 200, // 请求参数积分大小
      },
      addCount: "", // 增加的积分的大小
      subCount: "", // 减少的积分的大小
      reqParam: {
        text: "",
        levelId: "",
        pageSize: 2,
        pageNum: 1
      },
      memLevelOpt: [
        {
          value: "黄金会员",
          label: "黄金会员"
        },
        {
          value: "铂金会员",
          label: "铂金会员"
        },
        {
          value: "钻石会员",
          label: "钻石会员"
        }
      ],
      tableData: [
      ],
      total: 11,
      rowData: {
        userId: ""
      }
    };
  },
  methods: {
    /**
     * @description: 搜索点击事件
     * @param {}
     * @return:
     */
    searchClick() {},
    /**
     * @description: 每页展示数量变化监听事件
     * @param {type}
     * @return:
     */
    handleSizeChangeFun(v) {
      this.reqParam.pageSize = v;
      this.getMemberList(); //更新列表
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
      this.getMemberList();
    },
    /**
     * @description: 获取会员列表信息
     * @param {type}
     * @return:
     */
    getMemberList() {
      let _this = this
      getMemberManageList(this.reqParam)
        .then(res => {
          _this.tableData = res.obj.list
          _this.total = res.obj.totalNum
        })
        .catch(err => {
          console.log(err)
        })
    },
    /**
     * @description: 编辑会员详情
     * @param row
     * @return:
     */
    editMember(row) {
      this.$store.commit('memberInfo', row)
      this.$router.push({path: "/editMemberMan"})
    },
    /**
     * @description: 充值或者续充
     * @param {row}}
     * @return:
     */

    dialogPop(row, methods) {
      this.rowData = row
      this.dialog.dialogVisible = true;
      this.dialog.methods = methods;
    },
    /**
     * @description: 弹框取消事件
     * @param {type}
     * @return:
     */

    cancel() {
      this.dialog.dialogVisible = false;
    },
    /**
     * @description: 弹框确定事件-积分充值
     * @param {type}
     * @return:
     */

    okClick() {
      var _this = this
      this.integralInfo.variableIntegral = this.integralInfo.mark === '1' ? this.addCount : this.subCount
      this.integralInfo.userId = this.rowData.userId
      this.integralInfo.variableIntegral=parseInt(this.integralInfo.variableIntegral)
      editIntegration(this.integralInfo)
        .then(res => {
          _this.$message({
            message: res.code === 200 ? "积分充值成功": "积分充值失败，请重新提交",
            type: "success"
          })
          _this.dialog.dialogVisible = false
          _this.getMemberList()
        })
        .catch(err => {
          console.log(err)
        })
    },
    /**
     * @description: 生成小程序码
     * @param {type}
     * @return:
     */

    buildCode() {
      let _this = this
      let params = {
        rechargeAmount: parseInt(this.amountMethods === "fixed" ? this.fixedAmount : this.customAmount), //		int	金额	
        userId: this.rowData.userId, //		string	用户id	
        nickName: this.rowData.nickName, //		string	微信昵称	
        avatar: this.rowData.avatar, // 头像
      }
     params = Object.assign(params, this.rechargeAgainInfo)
      placeMemberOrder(params)
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
           _this.memLevelOpt = res.obj
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
    this.getMemberList()
    this.getMemberLevelOpt()
  }
};
</script>

<style lang="less" scoped>
.onion-member-list {
  .el-input__inner {
    width: 70% !important;
  }
}
</style>
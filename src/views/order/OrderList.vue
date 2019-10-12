<!--
 * @Description: 商品列表
 * @Author: 黄紫茜
 * @Date: 2019-09-25 14:15:13
 * @LastEditTime: 2019-10-11 10:06:24
 * @LastEditors: 黄紫茜
 -->
<template>
  <div>
    <section class="onion-order-add">
      <el-form :inline="true" :model="reqParam" class="demo-form-inline onion-order-add_form" label-width="120px">
        <el-form-item label="下单时间">
          <el-date-picker
            v-model="date"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="datePicker.pickerOptions"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="付款方式">
          <el-select v-model="reqParam.payType" placeholder="请选择">
              <el-option
                v-for="item in payOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="订单号">
          <el-input v-model="reqParam.orderId" placeholder="请输入订单号"></el-input>
        </el-form-item>
        <el-form-item label>
          <el-input v-model="reqParam.shippingPA" placeholder="请输入收货人姓名或手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchClick">筛选</el-button>
        </el-form-item>
      </el-form>
    </section>
    <!-- </el-card> -->
    <section class="onion-table">
      <el-table :data="tableData" border stripe style="width: 100%">
        <el-table-column prop="orderId" label="订单号" sortable></el-table-column>
        <el-table-column prop="shippingPerson" label="姓名" sortable></el-table-column>
        <el-table-column prop="shippingPhone" label="手机号"></el-table-column>
        <el-table-column prop="payType" label="支付方式" :formatter="payTypeFormatter"></el-table-column>
        <el-table-column prop="payMoney" label="实付金额"></el-table-column>
        <el-table-column prop="orderStatus" label="订单状态" :formatter="statusFormatter"></el-table-column>
        <el-table-column fixed="right" label="操作" width="180">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="lookDetail(scope.row, 'edit')"
              type="text"
              size="small"
            >详情</el-button>
            <el-button
              v-if="scope.row.orderStatus === 1"
              @click.native.prevent="cancelOrder(scope.row)"
              type="text"
              size="small"
            >取消</el-button>
            <el-button
              @click.native.prevent="lookSmallCode(scope.row)"
              type="text"
              size="small"
            >
            <el-image 
              style="width: 40px; height: 40px"
              :src="scope.row.smallProCode" 
              :preview-src-list="srcList">
            </el-image>
            </el-button>
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
    <el-dialog title="提示" :visible.sync="dialog.dialogVisible" width="30%">
      <span v-text="dialog.dialogMsg"></span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="okClick">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import pages from "../../components/pagination";
import { getAdminOrderListAxios, deleteOrderAxios } from "@/api/api.js"; 
export default {
  components: {
    pages
  },
  data() {
    return {
      // 弹框
      dialog: {
        dialogVisible: false,
        dialogMsg: ""
      },
      datePicker: {
        pickerOptions: {
          shortcuts: [
            {
              text: "最近一周",
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit("pick", [start, end]);
              }
            },
            {
              text: "最近一个月",
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                picker.$emit("pick", [start, end]);
              }
            },
            {
              text: "最近三个月",
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                picker.$emit("pick", [start, end]);
              }
            }
          ]
        },
      },
      date: '', // 订单筛选时间
      reqParam: {
        orderId: '', // 订单号
        beginTime: '', // 开始时间
        endTime: '', // 结束时间
        payType: '', // 支付方式
        orderStatus: '', // 订单状态
        userId: '', // 用户id
        shippingPA: '', // 收货人名字或者电话
        pageNum: 1, // 当前页
        pageSize: 2 // 每页展示条数
      },
      payOptions: [
        {
          value: "1",
          label: "微信"
        },
        {
          value: "2",
          label: "余额",
        }
      ],
      tableData: [
        {
          "orderId": 111, // 订单号
          "shippingPerson": 111, // 姓名
          "shippingPhone": 11111, // 手机号
          "payType": 1,  // 支付方式
          "payMoney": 22.22, // 实付金额
          "orderStatus": 1, // 订单状态
          "smallProCode": "http://123.img", // 小程序码
        },
        {
          "orderId": 111, // 订单号
          "shippingPerson": 111, // 姓名
          "shippingPhone": 11111, // 手机号
          "payType": 1,  // 支付方式
          "payMoney": 22.22, // 实付金额
          "orderStatus": 1, // 订单状态
          "smallProCode": "http://123.img", // 小程序码
        },
      ],
      total: 1,
      srcList: []
    };
  },
  methods: {
    /**
     * @description: 订单状态
     * @param {type} 
     * @return: 
     */
    statusFormatter (row) {
      let state = ['待支付', '待发货', '已发货', '已收货', '已关闭']
      return state[row.orderStatus]
    },
    /**
     * @description: 支付方式
     * @param {type} 
     * @return: 
     */
    payTypeFormatter (row) {
      let state = ['微信支付', '余额支付']
      return state[row.payType]
    },
    /**
     * @description: 筛选事件
     * @param {type} 
     * @return: 
     */
    searchClick () {
      if (this.date) {
        this.reqParam.beginTime = this.date[0]
        this.reqParam.endTime = this.date[1]
      }
      this.getOrderList()
    },
    /**
     * @description: 
     * @param {type} 
     * @return: 
     */
    handleSizeChangeFun(v) {
      this.reqParam.pageSize = v;
      this.getOrderList(); //更新列表
    },
    /**
     * @description: 
     * @param {type} 
     * @return: 
     */
    handleCurrentChangeFun(v) {
      //页面点击
      this.reqParam.pageNum = v; //当前页
      this.getOrderList();
    },
    /**
     * @description:  获取订单列表
     * @return:
     */
    getOrderList() {
      let _this = this;
      // http://tadmin.yuxinhz.cn/getAdminOrderList
      getAdminOrderListAxios(this.reqParam)
        .then(res => {
          // console.log(res)
          _this.tableData = res.obj.orderList;
          _this.total = res.obj.totalNum;
        })
        .catch(err => {
          console.log(err);
        });
    },
    /**
     * @description: 查看订单详情
     * @param {type} 
     * @return: 
     */ 
    lookDetail (row) {
      this.$store.commit('orderDetail', {orderId: row.orderId, orderStatus: row.orderStatus})
      this.$router.push({path: '/orderDetail'})
    },
    /**
     * @description: 弹框点击确定
     * @param {type}
     * @return:
     */
    okClick() {
      let _this = this;
      deleteOrderAxios({orderId: this.reqParam.orderId})
        .then(res => {
          // console.log(res)
        })
        .catch(err => {
          console.log(err);
        });
      this.dialog.dialogVisible = false;
    },
    cancel() {
      this.dialog.dialogVisible = false;
    },
    /**
     * @description: 取消订单
     * @param {type} 
     * @return: 
     */ 
    cancelOrder (row) {
      this.dialog.dialogVisible = true;
      this.dialog.dialogMsg = "是否取消该订单？";
      this.reqParam.orderId = row.orderId
    },
    /**
     * @description: 查看小程序码
     * @param {type} 
     * @return: 
     */  
    lookSmallCode (row) {
      this.srcList = []
      this.srcList.push(row.smallProCode)
    }
  },
  created() {
    this.getOrderList();
  }
};
</script>
<style lang='less'>
@import "../../style/table.less";
.onion-order-add {
  padding: 10px 0;
  text-align: left;
  .onion-order-add_form {
  }
}
</style>
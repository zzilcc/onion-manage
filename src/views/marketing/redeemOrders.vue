<!--
 * @Author: 黄紫茜
 * @Date: 2019-10-10 16:28:39
 * @LastEditors: 黄紫茜
 * @LastEditTime: 2019-10-12 10:18:34
 * @Description: 
 -->
<template>
  <div>
    <section class="onion-goods-add">
      <el-form
        :inline="true"
        :model="reqParam"
        class="demo-form-inline onion-goods-add_form"
        label-width="120px"
      >
        <el-form-item label="兑换时间">
          <el-date-picker
            v-model="orderDate"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="订单号">
          <el-input v-model="reqParam.orderId" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="兑换人">
          <el-input v-model="reqParam.userName" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchClick">查询</el-button>
        </el-form-item>
      </el-form>
    </section>
    <!-- </el-card> -->
    <section class="onion-table">
      <el-table :data="tableData" border stripe style="width: 100%">
        <el-table-column prop="orderId" label="兑换订单号" sortable></el-table-column>
        <el-table-column prop="productName" label="商品名称" sortable></el-table-column>
        <el-table-column prop="createTime" label="兑换时间"></el-table-column>
        <el-table-column prop="userName" label="兑换人"></el-table-column>
        <el-table-column prop="payIntegration" label="消耗积分"></el-table-column>
        <el-table-column label="收货地址">
          <template slot-scope="scope">
            <span
              v-text="scope.row.shippingPerson + scope.row.shippingPhone +scope.row.shippingProvince +scope.row.shippingCity +scope.row.shippingAddress+scope.row.shippingCounty "
            ></span>
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
  </div>
</template>

<script>
import pages from "../../components/pagination";
import { getAdminIntegralOrderList } from '../../api/api'
export default {
  name: "",
  components: { pages },
  data() {
    return {
      reqParam: {
        beginTime: "",
        endTime: "",
        orderId: "",
        userName: "",
        pageSize: 2,
        pageNum: 1
      },
      total: 1,
      orderDate: [],
      tableData: [
        {
          orderId: 23123,
          productName: 11,
          createTime: '2019-10-2',
          userName: 11,
          payIntegration: '100',
          shippingPerson: 'zzilcc',
          shippingPhone: '15854651',
          shippingProvince: '街道',
          shippingCity: '深圳',
          shippingCounty: '广东',
          shippingAddress: '南山'
        }
      ]
    };
  },
  methods: {
    /**
     * @description: 查询
     * @param {type}
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
     * @description: 获取订单详情
     * @param {type} 
     * @return: 
     */  
    getOrederList () {
      var _this = this
      if (_this.orderDate.length > 0) {
        _this.reqParam.beginTime = _this.orderDate[0]
        _this.reqParam.endTime = _this.orderDate[1]
      }
      getAdminIntegralOrderList(this.reqParam)
        .then(res => {
          _this.tableData = res.obj.orderList
          _this.total = res.obj.totalNum
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.getOrederList()
  }
};
</script>

<style>
</style>
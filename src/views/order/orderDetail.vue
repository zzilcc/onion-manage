<!--
 * @Author: 黄紫茜
 * @Date: 2019-09-29 10:13:49
 * @LastEditors: 黄紫茜
 * @LastEditTime: 2019-10-10 19:59:02
 * @Description: 
 -->
<template>
  <div class="onion-detail">
    <el-card class="onion-detail-content">
      <section class="onion-detail-content-top">
        <p class="onion-detail-content-top-title">订单信息</p>
        <div class="onion-detail-content-top-left">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="订单编号">
              <el-input v-model="form.orderId" disabled></el-input>
            </el-form-item>
            <el-form-item label="付款方式">
              <el-input v-model="form.payType" disabled></el-input>
            </el-form-item>
            <el-form-item label="买家">
              <el-input v-model="form.shippingPhone" disabled></el-input>
            </el-form-item>
            <el-form-item label="下单人">
              <el-input v-model="form.salesPhone" disabled></el-input>
            </el-form-item>
            <el-form-item label="下单工号">
              <el-input v-model="form.salesNo" disabled></el-input>
            </el-form-item>
            <el-form-item label="下单时间">
              <el-input v-model="form.createTime" disabled></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div  class="onion-detail-content-top-right">
          <img src alt />
          <span>订单状态：</span>
          <span v-text="orderDetail.orderStatus === 1 ? '待支付': '已支付'"></span>
        </div>
      </section>
      <section class="onion-detail-content-middle">
        <el-table :data="list" style="width: 100%">
          <el-table-column prop="productName" label="商品" width="180"></el-table-column>
          <el-table-column prop="productSalePrice" label="价格" width="180"></el-table-column>
          <el-table-column prop="productNum" label="数量"></el-table-column>
          <el-table-column label="小计（元）">
            <template slot-scope="scope">{{scope.row.productSalePrice * scope.row.productNum}}</template>
          </el-table-column>
        </el-table>
      </section>
      <section class="onion-detail-content-bottom">
        <div v-text="'共' + form.orderTotalNum + '件商品' + '   运费： ￥' + form.distribFee	"></div>
        <div v-text="'优惠: '+ form.favorPrice"></div>
        <div v-text="'会员折扣: '+ form.memDiscount"></div>
        <div v-text="'合计: '+ form.payMoney"></div>
      </section>
    </el-card>
  </div>
</template>

<script>
import { getAOPDAxios } from "@/api/api.js"; 
export default {
  data() {
    return {
      detailData: {},
      form: {},
      list: [],
    };
  },
  computed: { // TODO: 请求数据
    orderDetail() {
      return this.$store.state.orderDetail;
    }
  },
  methods: {
    getOrderDetail() {
      let _this = this;
      getAOPDAxios({orderId: this.orderDetail.orderId})
        .then(res => {
          // console.log(res)
          _this.detailData = res.obj;
          _this.form = res.obj.res;
          _this.list = res.obj.resList
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getOrderDetail();
  }
};
</script>

<style lang="less" scoped>
.onion-detail {
  height: 100%;
  widows: 100%;
  .el-form-item {
    margin-bottom: 0;
  }
  .el-form-item__label {
    padding: 0;
  }
  .el-input__inner {
    padding: 0 5px;
  }
  .onion-detail-content {
    height: 100%;
    width: 100%;
    .onion-detail-content-top {
      height: 100%;
      width: 100%;
      .onion-detail-content-top-title {
        text-align: left;
        padding: 10px 0;
      }
      .onion-detail-content-top-left {
        width: 70%;
        display: inline-block;
      }
      .onion-detail-content-top-right {
        width: 29%;
        display: inline-block;
        vertical-align: top;
      }
    }
    .onion-detail-content-bottom {
      text-align: right;
    }
  }
}
</style>
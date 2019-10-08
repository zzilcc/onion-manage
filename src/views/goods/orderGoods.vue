<!--
 * @Author: 黄紫茜
 * @Date: 2019-09-29 15:32:44
 * @LastEditors: 黄紫茜
 * @LastEditTime: 2019-10-08 10:38:52
 * @Description: 
 -->
<template>
  <div class="onion-orderGoods">
    <!-- 商品列表 -->
    <section class="onion-orderGoods-left">
      <el-form
        :inline="true"
        :model="reqParam"
        class="demo-form-inline onion-orderGoods-left-add_form"
      >
        <el-form-item label="商品分类">
          <SelectTree
            v-model="reqParam.categoryId"
            :options="categoryTreeData"
            :props="defaultProps"
          />
        </el-form-item>
        <el-form-item label="商品名称">
          <el-input v-model="reqParam.suppliesName" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchClick">查询</el-button>
        </el-form-item>
      </el-form>
      <section>
        <el-table
          :data="tableData"
          border
          stripe
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="suppliesName" label="商品名称" sortable></el-table-column>
          <el-table-column prop="unit" label="sku"></el-table-column>
          <el-table-column prop="price" label="单价"></el-table-column>
          <el-table-column prop="inventory" label="库存"></el-table-column>
        </el-table>
        <pages
          :total="total"
          :page-size="reqParam.pageSize"
          @handleSizeChangeSub="handleSizeChangeFun"
          @handleCurrentChangeSub="handleCurrentChangeFun"
        ></pages>
      </section>
    </section>
    <!-- 订单信息 -->
    <section class="onion-orderGoods-right">
      <p class="onion-orderGoods-right_title">订单信息</p>
      <el-table :data="orderGoodsList" border stripe style="width: 100%" ref="multipleTable">
        <!-- <el-table-column
          type="selection"
          width="55">
        </el-table-column>-->
        <el-table-column type="index" width="30"></el-table-column>
        <el-table-column prop="suppliesName" label="商品名称"></el-table-column>
        <el-table-column prop="unit" label="sku" width="70" sortable></el-table-column>
        <el-table-column prop="price" label="单价" width="90" sortable></el-table-column>
        <el-table-column label="数量">
          <template slot-scope="scope">
            <el-input-number
              v-model="scope.row.suppliesNum"
              @change="suppliesNumChange(scope.row, scope.$index)"
              :min="1"
              :max="1000"
              label="商品数量"
            ></el-input-number>
          </template>
        </el-table-column>
      </el-table>
      <p class="onion-orderGoods-right_title">用户信息</p>
      <el-form
        :inline="true"
        :model="reqParam"
        class="demo-form-inline onion-orderGoods-left-add_form"
        label-width="100px"
      >
        <el-form-item label="姓名" >
          <el-input v-model="userInfo.customerName" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="手机号" >
          <el-input v-model="userInfo.customerPhoneNum" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="会员折扣" >
          <el-input v-model="userInfo.memDiscount"  disabled="disabled"></el-input>
        </el-form-item>
        <el-form-item label="参与活动" >
          <el-input v-model="userInfo.favorPrice" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="运费">
          <el-input v-model="userInfo.distribFee" placeholder="请输入运费"></el-input>
        </el-form-item>
      </el-form>
      <p>合计: 99元</p>
      <el-button type="primary" @click="submitOrder">提交订单</el-button>
    </section>
    <!-- <el-dialog title="提示" :visible.sync="dialog.dialogVisible" width="30%">
      <span v-text="dialog.dialogMsg"></span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="okClick">确 定</el-button>
      </span>
    </el-dialog> -->
  </div>
</template>
<script>
import axios from "axios";
import SelectTree from "../../components/tree/select-tree.vue";
import pages from "../../components/pagination";
export default {
  components: {
    SelectTree,
    pages
  },
  data() {
    return {
       // 弹框
      dialog: {
        dialogVisible: false,
        dialogMsg: ""
      },
      reqParam: {
        suppliesName: "",
        categoryId: "",
        pageSize: 2,
        pageNum: 1
      },
      total: 1,
      // 数据默认字段
      defaultProps: {
        parent: "parentId", // 父级唯一标识
        value: "id", // 唯一标识
        label: "label", // 标签显示
        children: "children" // 子级
      },
      tableData: [
        {
          productId: "1", //  商品ID
          suppliesCode: "1", //  物料代码
          suppliesName: "1", // 物料名字（商品名字）
          intro: "11", // 商品简介
          specification: "1", // 商品规格
          unit: "1", // 商品规格单位
          shelfLife: "1", // 保质期
          bannerPicture: "1", // banner图片路径
          listPicture: "1", // 商品列表图片路径
          imageText: [], // 商品详情里的图文
          categoryId: "1", // 分类ID
          brand: "1", // 品牌
          category: "",
          efficacy: "1", // 主要功效
          manufacturersName: "1", // 生产厂家名字
          manufacturersAddress: "1", // 生产厂家地址
          productionCertificate: "1", // 生产许可证
          price: 0, // 原价
          inventory: 0, // 库存
          createId: "1", // 创建人ID
          createTime: "1",
          updateTime: "1",
          putawayStatus: 0 // 上下架状态 0表示上架 1 表示下架
        }
      ],
      orderGoodsList: [
      ],
      orderGoodsReq: {
        distribFee:'0', // 运费	
        favorPrice: "0.1", // 减免价格	
        memDiscount: "0.8", //	会员折扣价格	
        payMoney: "1000", // 支付金额(合计)	
        payPrescription: "", //	支付时效	
        payReminders: "", // 提醒语	
        userId: "admin",	// 用户的id	
        userName: "zz"
      },
      userInfo: {
        customerName: '', // 客户名字
        customerPhoneNum: '' , // 客户手机号
        memDiscount: '', // 会员折扣
        favorPrice: '', // 优惠活动
        distribFee: '' // 运费
      }
    };
  },
  computed: {
    categoryTreeData() {
      return this.$store.state.categoryTreeData;
    },
    ruleForm() {
      return this.$store.state.goodsListRow;
    }
  },
  methods: {
    handleSizeChangeFun(v) {
      this.reqParam.pageSize = v;
      this.getGoodsList(); //更新列表
    },
    handleCurrentChangeFun(v) {
      //页面点击
      this.reqParam.pageNum = v; //当前页
      this.$route.query.pageNum = v;
      this.getGoodsList();
    },
    /**
     * @description: 商品数量
     * @param {type}
     * @return:
     */
    handleChange() {},
    /**
     * @description: 获取商品类目
     * @param
     * @return:
     */

    getTreeCategory() {
      let _this = this;
      axios
        .get("http://tadmin.yuxinhz.cn/api/category/getTreeCategory", {})
        .then(res => {
          // console.log(res)
          _this.$store.commit("categoryTreeData", res.data.obj.categoryList);
        })
        .catch(err => {
          console.log(err);
        });
    },
    /**
     * @description: 商品列表查询
     * @param {type}
     * @return:
     */
    searchClick() {},
    /**
     * @description: 获取商品列表
     * @param {type}
     * @return:
     */
    getGoodsList() {
      let _this = this;
      axios
        .get("http://tadmin.yuxinhz.cn/api/product/list", this.reqParam)
        .then(res => {
          // console.log(res)
          _this.tableData = res.data.obj.page.records;
          _this.total = res.data.obj.page.total;
        })
        .catch(err => {
          console.log(err);
        });
    },
    /**
     * @description: 复选框选中事件
     * @param val 选中的数据
     * @return:
     */

    handleSelectionChange(val) {
      this.orderGoodsList = JSON.parse(JSON.stringify(val));
    },
    /**
     * @description: 提交订单
     * @param {type}
     * @return:
     */

    submitOrder() {
      // this.orderGoodsList
      let _this = this
      this.orderGoodsReq.list = this.orderGoodsList
      axios
        .post("http://192.168.1.161:8102/placeOrder", this.orderGoodsReq)
        .then(res => {
           _this.$message({
            message: "下单成功",
            type: "success"
          });
        })
        .catch(err => {
          console.log(err)
        })
    },
    /**
     * @description: 商品数量增减
     * @param {type}
     * @return:
     */

    suppliesNumChange(row, index) {
      if (row.suppliesNum === 0) {
        this.orderGoodsList = this.orderGoodsList.filter(item => {
          return item.suppliesNum > 0;
        });
        // this.$refs.multipleTable.toggleRowSelection(this.tableData[index])
      }
    },
    /**
     * @description: 弹框点击确定
     * @param {type}
     * @return:
     */
    okClick() {
      this.dialog.dialogVisible = false;
    },
  },
  created() {
    this.getTreeCategory();
    this.getGoodsList();
  }
};
</script>

<style lang="less">
@import "../../style/table.less";
.onion-orderGoods {
  vertical-align: middle;
  height: 100%;
  .onion-orderGoods-left {
    width: 48%;
    height: 100%;
    padding: 10px 0;
    text-align: left;
    float: left;
    vertical-align: middle;
    .onion-orderGoods-left-add_form {
    }
  }
  .onion-orderGoods-right {
    width: 48%;
    height: 100%;
    vertical-align: middle;
    float: right;
    text-align: left;
    .onion-orderGoods-right_title {
      font-size: 16px;
      color: #000;
      text-align: left;
    }
  }
}
</style>
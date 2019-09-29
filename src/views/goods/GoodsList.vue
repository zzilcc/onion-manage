<!--
 * @Description: 商品列表
 * @Author: 黄紫茜
 * @Date: 2019-09-25 14:15:13
 * @LastEditTime: 2019-09-28 10:25:42
 * @LastEditors: 黄紫茜
 -->
<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="0">出售中</el-menu-item>
      <el-menu-item index="-1">告罄中</el-menu-item>
    </el-menu>
    <!-- <el-card class="box-card"> -->
    <section class="onion-goods-add">
      <el-form :inline="true" :model="reqParam" class="demo-form-inline onion-goods-add_form" >
        <el-form-item label="商品名称">
          <el-input v-model="reqParam.suppliesName" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchClick">查询</el-button>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="addGoods('','add')">添加商品</el-button>
    </section>
    <!-- </el-card> -->
    <section class="onion-table">
      <el-table
        :data="tableData"
        border
        stripe
        style="width: 100%">
        <!-- <el-table-column
          type="selection"
          width="55">
        </el-table-column> -->
        <el-table-column
          type="index"
          width="50">
        </el-table-column>
        <el-table-column
          prop="listPicture"
          label="商品缩略图"
          sortable>
        </el-table-column>
        <el-table-column
          prop="suppliesName"
          label="商品名称"
          sortable>
        </el-table-column>
        <el-table-column
          prop="unit"
          label="sku"
          >
        </el-table-column>
        <el-table-column
          prop="price"
          label="单价"
         >
        </el-table-column>
        <el-table-column
          prop="inventory"
          label="库存">
        </el-table-column>
        <el-table-column
          prop="goodsDescription"
          label="总销量">
        </el-table-column>
        <el-table-column
          prop="createTime"
          label="商品创建时间"
          sortable>
        </el-table-column>
        <el-table-column
          prop="status"
          label="商品状态"
          sortable>
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="120">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="addGoods(scope.row, 'edit')"
              type="text"
              size="small">
              编辑
            </el-button>
            <el-button v-if="activeIndex === '0'"
              @click.native.prevent="soldOutGoods(scope.row)"
              type="text"
              size="small">
              下架
            </el-button>
            <el-button
              @click.native.prevent="putawayGoods(scope.row)"
              type="text"
              size="small" v-if="activeIndex === '-1'">
              上架
            </el-button>
            <el-button
              @click.native.prevent="deleteGoods(scope.row)"
              type="text"
              size="small">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    <pages :total="total" :page-size="reqParam.pageSize" @handleSizeChangeSub="handleSizeChangeFun" @handleCurrentChangeSub="handleCurrentChangeFun"></pages>
    </section>
  </div>
</template>
<script>
// import { goodsList } from "@/api/api.js";
import axios from "axios";
import pages from '../../components/pagination'
export default {
  components: {
    pages
  },
  data () {
    return {
      tableData: [
        {
          "productId": '1', //  商品ID
          "suppliesCode": '1',  //  物料代码
          "suppliesName": '1', // 物料名字（商品名字）
          "intro": '11', // 商品简介
          "specification": '1', // 商品规格
          "unit": '1', // 商品规格单位
          "shelfLife": '1', // 保质期
          "bannerPicture": '1', // banner图片路径
          "listPicture": '1', // 商品列表图片路径
          "imageText": [], // 商品详情里的图文
          "categoryId": '1', // 分类ID
          "brand": '1', // 品牌
          category:'',
          "efficacy": '1', // 主要功效
          "manufacturersName": '1', // 生产厂家名字
          "manufacturersAddress": '1', // 生产厂家地址	
          "productionCertificate": '1', // 生产许可证
          "price": 0, // 原价
          "inventory": 0, // 库存
          "createId": '1', // 创建人ID
          "createTime": '1', 
          "updateTime": '1', 
          "putawayStatus": 0, // 上下架状态 0表示上架 1 表示下架
        }
      ],
      activeIndex: '0',
      reqParam: {
        suppliesName: '',
        putawayStatus: 0,
        pageSize: 2,
        pageNum: 1
      },
      total: 1,
    }
  },
  methods: {
    handleSizeChangeFun(v) {
      this.reqParam.pageSize = v;
      this.getGoodsList(); //更新列表
    },
    handleCurrentChangeFun(v) { //页面点击
      this.reqParam.pageNum = v; //当前页
      this.getGoodsList()
    },
    /**
     * @description:  获取商品列表
     * @return: 
     */
    getGoodsList () {
      let params = this.reqParam
      // goodsList(param)
      //   .then(res => {
      //     console.log(res)
      //     debugger
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })
      let _this = this
      axios
        .get('http://tadmin.yuxinhz.cn/api/product/list', {
            params
        })
        .then(res => {
            // console.log(res)
            _this.tableData = res.data.obj.page.records
            _this.total = res.data.obj.page.total
            _this.reqParam.pageSize = res.data.obj.page.size
        })
        .catch(err => {
          console.log(err)
        })
    },
    /**
     * @description: 查询
     * @return: 
     */
    searchClick () {
      this.getGoodsList()
    },
    /**
     * 添加分类
     */
    addGoods (row, flag) {
      if(flag === 'add') {
        let param = {
          productId: "", //  商品ID
          suppliesCode: "", //  物料代码
          suppliesName: "", // 物料名字（商品名字）
          intro: "", // 商品简介
          specification: "", // 商品规格
          unit: "", // 商品规格单位
          shelfLife: "", // 保质期
          bannerPicture: "", // banner图片路径
          listPicture: "", // 商品列表图片路径
          imageText: [], // 商品详情里的图文
          categoryId: "", // 分类ID
          brand: "", // 品牌
          category: '',
          efficacy: "", // 主要功效
          manufacturersName: "", // 生产厂家名字
          manufacturersAddress: "", // 生产厂家地址
          productionCertificate: "", // 生产许可证
          price: 0, // 原价
          inventory: "", // 库存
          createId: "", // 创建人ID
          fileList: []
        }
        this.$store.commit('goodsListRow', param)
      } else {
        this.$store.commit('goodsListRow', row)
      }
      this.$router.push({path: '/addGoods?flag=' + flag})
    },
    /**
     * @description: 出售中和告罄中的点击事件
     * @param {type} 
     * @return: 
     */
    handleSelect(key, keyPath) {
      this.activeIndex = keyPath[0]
      this.reqParam.putawayStatus =  this.activeIndex
      this.getGoodsList()
    },
    /**
     * @description: 商品下架
     * @param {type} 
     * @return: 
     */  
    soldOutGoods (row) {
      let _this = this
       axios
        .post('http://tadmin.yuxinhz.cn/api/product/soldOut', {'productId': row.productId})
        .then(res => {
            // console.log(res)
            _this.getGoodsList()
        })
        .catch(err => {
          console.log(err)
        })
    },
    /**
     * @description: 商品上架
     * @param {type} 
     * @return: 
     */  
    putawayGoods (row) {
      let _this = this
       axios
        .post('http://tadmin.yuxinhz.cn/api/product/putaway', {'productId': row.productId})
        .then(res => {
          // console.log(res)
          _this.getGoodsList()
        })
        .catch(err => {
          console.log(err)
        })
    },
    /**
     * @description: 删除商品
     * @param {type} 
     * @return: 
     */
    deleteGoods (row) {
      let _this = this
      axios
        .post('http://tadmin.yuxinhz.cn/api/product/delete', {'productId': row.productId})
        .then(res => {
          // console.log(res)
          _this.getGoodsList()
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.getGoodsList()
  },
}
</script>
<style lang='less'>
 @import '../../style/table.less';
 .onion-goods-add {
   padding: 10px 0;
   text-align: right;
   .onion-goods-add_form {
     float: left;
   }
 }
</style>
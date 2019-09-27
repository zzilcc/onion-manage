<!--
 * @Description: 商品列表
 * @Author: 黄紫茜
 * @Date: 2019-09-25 14:15:13
 * @LastEditTime: 2019-09-27 16:58:57
 * @LastEditors: 黄紫茜
 -->
<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">出售中</el-menu-item>
      <el-menu-item index="2">告罄中</el-menu-item>
      <el-menu-item index="3">仓库中</el-menu-item>
    </el-menu>
    <!-- <el-card class="box-card"> -->
    <section class="onion-goods-add">
      <el-button type="primary" @click="addGoods">添加商品</el-button>
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
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small">
              编辑
            </el-button>
            <el-button v-if="activeIndex !== '3'"
              @click.native.prevent="updateRow(scope.$index, tableData)"
              type="text"
              size="small">
              下架
            </el-button>
            <el-button
              @click.native.prevent="updateRow(scope.$index, tableData)"
              type="text"
              size="small" v-if="activeIndex === '3'">
              上架
            </el-button>
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    <el-pagination
      layout="prev, pager, next"
      :total="50">
    </el-pagination>
    </section>
  </div>
</template>
<script>
import { goodsList } from "@/api/api.js";
export default { 
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
          "efficacy": '1', // 主要功效
          "manufacturersName": '1', // 生产厂家名字
          "manufacturersAddress": '1', // 生产厂家地址	
          "productionCertificate": '1', // 生产许可证
          "price": '1', // 原价
          "inventory": '1', // 库存
          "createId": '1', // 创建人ID
          "createTime": '1', 
          "updateTime": '1', 
          "putawayStatus": 0, // 上下架状态 0表示上架 1 表示下架
        },
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
          "efficacy": '1', // 主要功效
          "manufacturersName": '1', // 生产厂家名字
          "manufacturersAddress": '1', // 生产厂家地址	
          "productionCertificate": '1', // 生产许可证
          "price": '1', // 原价
          "inventory": '1', // 库存
          "createId": '1', // 创建人ID
          "createTime": '1', 
          "updateTime": '1', 
          "putawayStatus": 0, // 上下架状态 0表示上架 1 表示下架
        },
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
          "efficacy": '1', // 主要功效
          "manufacturersName": '1', // 生产厂家名字
          "manufacturersAddress": '1', // 生产厂家地址	
          "productionCertificate": '1', // 生产许可证
          "price": '1', // 原价
          "inventory": '1', // 库存
          "createId": '1', // 创建人ID
          "createTime": '1', 
          "updateTime": '1', 
          "putawayStatus": 0, // 上下架状态 0表示上架 1 表示下架
        },
      ],
      activeIndex: '1',
    }
  },
  methods: {
    /**
     * @description:  获取商品列表
     * @param {type} 
     * @return: 
     */
    getGoodsList () {
      goodsList()
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    /**
     * 添加分类
     */
    addGoods () {
      this.$router.push({path: '/addGoods'})
    },
    /**
     * @description: 
     * @param {type} 
     * @return: 
     */
    handleSelect(key, keyPath) {
      this.activeIndex = keyPath[0]
      console.log(key, keyPath)
    }
  },
  created () {
    this.getGoodsList()
  }
}
</script>
<style lang='less'>
 @import '../../style/table.less';
 .onion-goods-add {
   padding: 10px 0;
   text-align: right;
 }
</style>
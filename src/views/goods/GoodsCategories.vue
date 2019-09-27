<!--
 * @Author: 黄紫茜
 * @Date: 2019-09-27 14:46:04
 * @LastEditors: 黄紫茜
 * @LastEditTime: 2019-09-27 16:32:37
 * @Description: 
 -->
<template>
  <div>
    <!-- <el-card class="box-card"> -->
    <section class="onion-goods-add-catagories">
      <el-button type="primary" @click="addGoodsCategories">添加分类</el-button>
    </section>
    <!-- </el-card> -->
    <section class="onion-table">
      <el-table
      :data="tableData"
      border
      stripe
      style="width: 100%">
      <el-table-column
          type="index"
          width="50">
      </el-table-column>
      <el-table-column
        prop="categoryName"
        label="分类名称"
        width="180"
        sortable>
      </el-table-column>
      <el-table-column
        prop="level"
        label="级别"
        width="180">
      </el-table-column>
      <el-table-column
        prop="number"
        label="商品数量">
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="查看"
        sortable>
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="lookChildren(scope)"
            type="text"
            size="small">
            二级等级
          </el-button>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="updateRow(scope.$index, tableData)"
            type="text"
            size="small">
            编辑
          </el-button>
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small">
            移除
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
export default { 
  data () {
    return {
      tableData: [
        {
          "id": 1,
          "categoryName": "去黑头", // 分类名称
          "level": 1, // 分类等级
          "number": 0, // 商品数量
        },
        {
          "id": 3,
          "categoryName": "祛痘", // 分类名称
          "level": 1, // 分类等级
          "number": 0, // 商品数量
        },

      ]
    }
  },
  methods: {
    /**
     * 添加分类
     */
    addGoodsCategories () {
      this.$router.push({path: '/addGoodsCategories'})
    },
    /**
     * @description: 查看二级分类
     * @param {scope: 某一行的数据} 
     * @return: 
     */  
    lookChildren (scope) {
      console.log(scope)
    }
  }
}
</script>
<style lang='less'>
 @import '../../style/table.less';
 .onion-goods-add-catagories {
   padding-bottom: 10px;
   text-align: right;
 }
</style>
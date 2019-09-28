<!--
 * @Author: 黄紫茜
 * @Date: 2019-09-27 14:46:04
 * @LastEditors: 黄紫茜
 * @LastEditTime: 2019-09-28 10:25:05
 * @Description: 
 -->
<template>
  <div>
    <!-- <el-card class="box-card"> -->
    <section class="onion-goods-add-catagories">
      <el-form :inline="true" :model="reqParam" class="demo-form-inline onion-goods-add-catagories_form" >
        <el-form-item label="分类名称">
          <el-input v-model="reqParam.categoryName" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchClick">查询</el-button>
        </el-form-item>
      </el-form>
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
            @click.native.prevent="lookChildren(scope.row)"
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
            @click.native.prevent="editGoodsCategories(scope.row)"
            type="text"
            size="small">
            编辑
          </el-button>
          <el-button
            @click.native.prevent="deleteGoodsCategories(scope.row)"
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
import axios from "axios"
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
      ],
      // 请求参数
      reqParam: {
        categoryName: ''
      }
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
     * @param {row: 某一行的数据} 
     * @return: 
     */  
    lookChildren (row) {
      console.log(row)
      let _this = this
      axios
        .get('http://tadmin.yuxinhz.cn/api/category/list', this.reqParam)
        .then(res => {
            console.log(res)
            _this.tableData = res.data.obj.page.records
        })
        .catch(err => {
          console.log(err)
        })
    },
    /**
     * @description: 获取分类列表
     * @param {type} 
     * @return: 
     */
    getGoodsCategories () {
      let _this = this
      axios
        .get('http://tadmin.yuxinhz.cn/api/category/list', this.reqParam)
        .then(res => {
            console.log(res)
            _this.tableData = res.data.obj.page.records
        })
        .catch(err => {
          console.log(err)
        })
    },
    /**
     * @description: 查询
     * @param {type} 
     * @return: 
     */  
    searchClick () {
      this.getGoodsCategories()
    },
    /**
     * @description: 编辑分类
     * @param row 
     * @return: 
     */
    editGoodsCategories (row) {
      this.$store.commit('categoriesListRow', row)
      this.$router.push({path: '/addGoodsCategories'})
    },
    /**
     * @description: 删除分类
     * @param row
     * @return: 
    */
    deleteGoodsCategories (row) {
      let _this = this
      axios
        .post('http://tadmin.yuxinhz.cn/api/category/delete', {'categoryId': row.categorytId})
        .then(res => {
          console.log(res)
          _this.getGoodsList()
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.getGoodsCategories()
  }
}
</script>
<style lang='less'>
 @import '../../style/table.less';
 .onion-goods-add-catagories {
   padding-bottom: 10px;
   text-align: right;
   .onion-goods-add-catagories_form {
     float: left;
   }
 }
</style>
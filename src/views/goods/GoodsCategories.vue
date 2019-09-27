<!--
 * @Author: 黄紫茜
 * @Date: 2019-09-27 14:46:04
 * @LastEditors: 黄紫茜
 * @LastEditTime: 2019-09-27 15:31:03
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
        prop="keyword"
        label="级别"
        width="180">
      </el-table-column>
      <el-table-column
        prop="categoryDescription"
        label="商品数量">
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="查看"
        sortable>
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
          "id": 3,
          "categoryName": "祛痘", // 分类名称
          "parentId": 1, // 父分类
          "sort": 3, // 排序方式
          "isshow": 0, // 是否显示
          "icon": "祛痘", // 分类icon
          "keyword": null, // 关键字
          "categoryDescription": "祛痘描述", // 分类描述
          "createUid": 1, // 分类id
          "createTime": "2019-09-09T06:26:29.000+0000", // 创建时间
          "updateTime": "2019-09-09T06:26:29.000+0000", // 更新时间
          "status": 0 // 分类状态
        },
        {
          "id": 3,
          "categoryName": "祛痘", // 分类名称
          "parentId": 1, // 父分类
          "sort": 3, // 排序方式
          "isshow": 0, // 是否显示
          "icon": "祛痘", // 分类icon
          "keyword": null, // 关键字
          "categoryDescription": "祛痘描述", // 分类描述
          "createUid": 1, // 分类id
          "createTime": "2019-09-09T06:26:29.000+0000", // 创建时间
          "updateTime": "2019-09-09T06:26:29.000+0000", // 更新时间
          "status": 0 // 分类状态
        },
        {
          "id": 3,
          "categoryName": "祛痘", // 分类名称
          "parentId": 1, // 父分类
          "sort": 3, // 排序方式
          "isshow": 0, // 是否显示
          "icon": "祛痘", // 分类icon
          "keyword": null, // 关键字
          "categoryDescription": "祛痘描述", // 分类描述
          "createUid": 1, // 分类id
          "createTime": "2019-09-09T06:26:29.000+0000", // 创建时间
          "updateTime": "2019-09-09T06:26:29.000+0000", // 更新时间
          "status": 0 // 分类状态
        },
        {
          "id": 3,
          "categoryName": "祛痘", // 分类名称
          "parentId": 1, // 父分类
          "sort": 3, // 排序方式
          "isshow": 0, // 是否显示
          "icon": "祛痘", // 分类icon
          "keyword": null, // 关键字
          "categoryDescription": "祛痘描述", // 分类描述
          "createUid": 1, // 分类id
          "createTime": "2019-09-09T06:26:29.000+0000", // 创建时间
          "updateTime": "2019-09-09T06:26:29.000+0000", // 更新时间
          "status": 0 // 分类状态
        },
        {
          "id": 3,
          "categoryName": "祛痘", // 分类名称
          "parentId": 1, // 父分类
          "sort": 3, // 排序方式
          "isshow": 0, // 是否显示
          "icon": "祛痘", // 分类icon
          "keyword": null, // 关键字
          "categoryDescription": "祛痘描述", // 分类描述
          "createUid": 1, // 分类id
          "createTime": "2019-09-09T06:26:29.000+0000", // 创建时间
          "updateTime": "2019-09-09T06:26:29.000+0000", // 更新时间
          "status": 0 // 分类状态
        },
        {
          "id": 3,
          "categoryName": "祛痘", // 分类名称
          "parentId": 1, // 父分类
          "sort": 3, // 排序方式
          "isshow": 0, // 是否显示
          "icon": "祛痘", // 分类icon
          "keyword": null, // 关键字
          "categoryDescription": "祛痘描述", // 分类描述
          "createUid": 1, // 分类id
          "createTime": "2019-09-09T06:26:29.000+0000", // 创建时间
          "updateTime": "2019-09-09T06:26:29.000+0000", // 更新时间
          "status": 0 // 分类状态
        },
        {
          "id": 3,
          "categoryName": "祛痘", // 分类名称
          "parentId": 1, // 父分类
          "sort": 3, // 排序方式
          "isshow": 0, // 是否显示
          "icon": "祛痘", // 分类icon
          "keyword": null, // 关键字
          "categoryDescription": "祛痘描述", // 分类描述
          "createUid": 1, // 分类id
          "createTime": "2019-09-09T06:26:29.000+0000", // 创建时间
          "updateTime": "2019-09-09T06:26:29.000+0000", // 更新时间
          "status": 0 // 分类状态
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
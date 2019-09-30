<!--
 * @Author: 黄紫茜
 * @Date: 2019-09-27 14:46:04
 * @LastEditors: 黄紫茜
 * @LastEditTime: 2019-09-29 14:13:09
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
      <el-button type="primary" @click="addGoodsCategories('', 'addOne')">添加一级分类</el-button>
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
        v-if="reqParam.level === '一级分类'"
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
        width="180">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="addGoodsCategories(scope.row, 'edit')"
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
          <el-button
            @click.native.prevent="addGoodsCategories(scope.row, 'addSec')"
            type="text"
            size="small"
            v-if="reqParam.level === '一级分类'"
            >
            添加二级分类
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <pages :total="total" :page-size="reqParam.pageSize" @handleSizeChangeSub="handleSizeChangeFun" @handleCurrentChangeSub="handleCurrentChangeFun"></pages>
    </section>
    <el-dialog
      title="提示"
      :visible.sync="dialog.dialogVisible"
      width="30%"
      >
      <span v-text="dialog.dialogMsg"></span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="okClick">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import axios from "axios"
import pages from '../../components/pagination'
export default { 
  components: {
    pages
  },
  data () {
    return {
      // 弹框
      dialog: {
        dialogVisible: false,
        dialogMsg: ''
      },
      row:{},
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
        "id": '',
        "categoryName": "", // 分类名称
        "level": '一级分类', // 分类等级
        "number": 0, // 商品数量
        "parentCategoryName": '', // 父级分类名称
        "parentId": '0', // 父级分类id
        pageSize: 2,
        pageNum: 1
      },
      total: 2
    }
  },
  methods: {
     handleSizeChangeFun(v) {
      this.reqParam.pageSize = v;
      this.getGoodsCategories(); //更新列表
    },
    handleCurrentChangeFun(v) { //页面点击
      this.reqParam.pageNum = v; //当前页
      this.$route.query.pageNum = v
      this.getGoodsCategories()
    },
    /**
     * 添加分类
     */
    addGoodsCategories (row, flag) {
      let param = {}
      if(flag === 'addOne') {
        param = {
          "id": '',
          "categoryName": "", // 分类名称
          "level": '一级分类', // 分类等级
          "number": 0, // 商品数量
          "parentCategoryName": '', // 父级分类名称
          "parentId": '0', // 父级分类id
          "pageSize": 2,
          "pageNum": this.reqParam.pageNum
        }
      } else if(flag === 'addSec') {
        param = {
          "id": '',
          "categoryName": "", // 分类名称
          "level": '二级分类', // 分类等级
          "number": 0, // 商品数量
          "parentCategoryName": row.categoryName, // 父级分类名称
          "parentId": row.id, // 父级分类id
          "pageSize": 2,
          "pageNum": this.reqParam.pageNum
        }
      } else {
        param = {
          "id": row.id,
          "categoryName": "", // 分类名称
          "level": row.level, // 分类等级
          "number": 0, // 商品数量
          "parentCategoryName": '', // 父级分类名称
          "parentId": '', // 父级分类id
          "pageSize": 2,
          "pageNum": this.reqParam.pageNum
        }
      }
      this.$store.commit('categoriesListRow', param)
      this.$router.push({path: '/addGoodsCategories?flag=' + flag + '&pageNum=' + this.reqParam.pageNum})
    },
    /**
     * @description: 查看二级分类
     * @param {row: 某一行的数据} 
     * @return: 
     */  
    lookChildren (row) {
      let _this = this
      this.reqParam.level = '二级分类'
      this.reqParam.parentId = row.id
      this.getGoodsCategories()
    },
    /**
     * @description: 获取分类列表
     * @param {type} 
     * @return: 
     */
    getGoodsCategories () {
      if (this.$route.query.pageNum) {
        this.reqParam.pageNum = parseInt(this.$route.query.pageNum)
      }
      let params = this.reqParam
      let _this = this
      axios
        .get('http://tadmin.yuxinhz.cn/api/category/list', {params})
        .then(res => {
            // console.log(res)
            _this.tableData = res.data.obj.page.records
            _this.total = res.data.obj.page.total
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
     * @description: 删除分类
     * @param row
     * @return: 
    */
    deleteGoodsCategories (row) {
      this.row = row
      this.dialog.dialogVisible = true
      this.dialog.dialogMsg = '是否确定删除该分类？'
    },
    /**
     * @description: 调用删除分类接口
     * @param {type} 
     * @return: 
     */
    post_del () {
      let _this = this
      axios
        .post('http://tadmin.yuxinhz.cn/api/category/delete', {'categoryId': this.row.id})
        .then(res => {
          // console.log(res)
          _this.$message({
            message: '删除分类成功',
            type: 'success'
          });
          _this.getGoodsCategories()
        })
        .catch(err => {
          console.log(err)
        })
    },
    /**
     * @description: 弹框点击确定
     * @param {type} 
     * @return: 
     */
    okClick () {
      this.post_del()
      this.dialog.dialogVisible = false
    },
    cancel () {
      this.dialog.dialogVisible = false
    },
  },
  created () {
    this.getGoodsCategories()
  },
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
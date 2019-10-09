<!--
 * @Author: 黄紫茜
 * @Date: 2019-09-29 19:53:52
 * @LastEditors: 黄紫茜
 * @LastEditTime: 2019-10-09 19:08:17
 * @Description: 
 -->
<template>
   <div>
    <!-- <el-card class="box-card"> -->
    <section class="onion-pointsMall-add">
      <el-form :inline="true" :model="reqParam" class="demo-form-inline onion-pointsMall-add_form" label-width="120px">
        <el-form-item label="商品名称">
          <el-input v-model="reqParam.suppliesName" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchClick">查询</el-button>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="addpointsMall('','add')">添加商品</el-button>
    </section>
    <!-- </el-card> -->
    <section class="onion-table">
      <el-table :data="tableData" border stripe style="width: 100%">
        <!-- <el-table-column
          type="selection"
          width="55">
        </el-table-column>-->
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column prop="name" label="商品名称" sortable></el-table-column>
        <el-table-column prop="limitNumber" label="兑换限制"></el-table-column>
        <el-table-column prop="createTime" label="创建时间"></el-table-column>
        <el-table-column prop="integral" label="积分"></el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="addpointsMall(scope.row, 'edit')"
              type="text"
              size="small"
            >编辑</el-button>
            <el-button
              v-if="scope.row.putawayStatus === 0"
              @click.native.prevent="del_putaway_soldOut_pointsMallClick(scope.row, '下架')"
              type="text"
              size="small"
            >下架</el-button>
            <el-button
              @click.native.prevent="del_putaway_soldOut_pointsMallClick(scope.row, '上架')"
              type="text"
              size="small"
              v-if="scope.row.putawayStatus === -1"
            >上架</el-button>
            <el-button
              @click.native.prevent="del_putaway_soldOut_pointsMallClick(scope.row, '删除')"
              type="text"
              size="small"
            >删除</el-button>
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
// import { pointsMallList } from "@/api/api.js";
import axios from "axios";
import pages from "../../components/pagination";
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
      tableData: [
        {
          bannerPicture: "string", //
          details: null, //
          id: "25779fc1d2cd493eaba881a1ca0f3fe4", //
          imageText: "string", //
          integral: 900, //
          inventory: null, //
          limitNumber: 0, //
          listPicture: "string", //
          name: "stringzzzzz啧啧啧1", //
          putawayStatus: 0, //
          sort: 0, //
          status: 0, //
          createTime: ''
        }
      ],
      activeIndex: "0",
      reqParam: {
        name: "",
        putawayStatus: '',
        pageSize: 2,
        pageNum: 1
      },
      total: 1,
      row: {},
      method: ""
    };
  },
  methods: {
    cancel() {
      this.dialog.dialogVisible = false;
    },
    /**
     * @description: 弹框点击确定
     * @param {type}
     * @return:
     */
    okClick() {
      let url = "";
      if (this.method === "删除") {
        url = "http://tadmin.yuxinhz.cn/api/integralGoods/delete";
      } else if (this.method === "上架") {
        url = "http://tadmin.yuxinhz.cn/api/integralGoods/putaway";
      } else if (this.method === "下架") {
        url = "http://tadmin.yuxinhz.cn/api/integralGoods/soldOut";
      }
      this.post_del_putaway_soldOut_pointsMall(url);
      this.dialog.dialogVisible = false;
    },
    handleSizeChangeFun(v) {
      this.reqParam.pageSize = v;
      this.getPointsMallList(); //更新列表
    },
    handleCurrentChangeFun(v) {
      //页面点击
      this.reqParam.pageNum = v; //当前页
      this.$route.query.pageNum = v;
      this.getPointsMallList();
    },
    /**
     * @description:  获取商品列表
     * @return:
     */
    getPointsMallList() {
      let params = this.reqParam;
      let _this = this;
      axios
        .get("http://tadmin.yuxinhz.cn/api/integralGoods/list", {
          params
        })
        .then(res => {
          // console.log(res)
          _this.tableData = res.data.obj.page.records;
          _this.total = res.data.obj.page.total;
          _this.reqParam.pageSize = res.data.obj.page.size;
        })
        .catch(err => {
          console.log(err);
        });
    },
    /**
     * @description: 查询
     * @return:
     */
    searchClick() {
      this.getPointsMallList();
    },
    /**
     * 添加分类
     */
    addpointsMall(row, flag) {
      if (flag === "add") {
        let param = {
          bannerPicture: "", //
          details: null, //
          id: "", //
          imageText: "", //
          integral: '', //
          inventory: '', //
          limitNumber: '', //
          listPicture: "", //
          name: "", //
          putawayStatus: 0, //
          sort: '', //
          status: 0, //
          createTime: ''
        };
        this.$store.commit("pointsMallListRow", param);
      } else {
        this.$store.commit("pointsMallListRow", row);
      }
      this.$router.push({
        path: "/addpointsMall?flag=" + flag
      });
    },
    /**
     * @description: 上下架删除商品点击事件
     * @param {type}
     * @return:
     */
    del_putaway_soldOut_pointsMallClick(row, flag) {
      this.row = row;
      this.method = flag;
      this.dialog.dialogVisible = true;
      this.dialog.dialogMsg = "是否确定" + flag + "该商品？";
    },
    /**
     * @description: 上下架，删除商品接口调用
     * @param {type}
     * @return:
     */
    post_del_putaway_soldOut_pointsMall(url) {
      let _this = this;
      axios
        .post(url, { id: this.row.id })
        .then(res => {
          // console.log(res)
          _this.$message({
            message: _this.method + "商品成功",
            type: "success"
          });
          _this.getPointsMallList();
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getPointsMallList();
  }
};
</script>
<style lang='less'>
@import "../../style/table.less";
.onion-pointsMall-add {
  padding: 10px 0;
  text-align: right;
  .onion-pointsMall-add_form {
    float: left;
  }
}
</style>
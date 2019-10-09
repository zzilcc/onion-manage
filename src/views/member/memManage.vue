<!--
 * @Author: 黄紫茜
 * @Date: 2019-10-08 15:14:15
 * @LastEditors: 黄紫茜
 * @LastEditTime: 2019-10-09 19:08:28
 * @Description: 
 -->
<template>
  <div class="onion-member-list">
    <section class="onion-member-list_form">
      <el-form :inline="true" :model="reqParam" class="demo-form-inline onion-member-list_form--content" label-width="120px">
        <el-form-item label="会员等级">
          <el-select v-model="reqParam.memLevel">
            <el-option 
              v-for="item in memLevelOpt"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="姓名/手机号">
          <el-input v-model="reqParam.userInfo"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click='searchClick'>搜索</el-button>
        </el-form-item>
      </el-form>
    </section>
    <section class="onion-member-list_table">
      <el-table :data="tableData" border stripe>
        <el-table-column prop="avatar" label="头像和昵称" ></el-table-column>
        <el-table-column prop="level" label="会员等级" ></el-table-column>
        <el-table-column prop="nameAddNum" label="姓名/手机号"></el-table-column>
        <el-table-column prop="balance" label="账户余额" ></el-table-column>
        <el-table-column prop="points" label="积分" ></el-table-column>
        <el-table-column prop="firstTime" label="首次登陆时间" ></el-table-column>
        <el-table-column  label="操作" width="100">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="editMember(scope.row, 'edit')"
              type="text"
              size="small"
            >
             编辑  
            </el-button>
            <el-button
              @click.native.prevent="recharge(scope.row, 'recharge')"
              type="text"
              size="small"
            >
             充值  
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <pages
        :total="total"
        :page-size="reqParam.pageSize"
        @handleSizeChangeSub="handleSizeChangeFun"
        @handleCurrentChangeSub="handleCurrentChangeFun"
      >
      </pages>
    </section>
  </div>
</template>

<script>
import pages from "../../components/pagination";
export default {
  name: "memberList",
  components: {
    pages
  },
  data () {
    return {
      reqParam: {
        userInfo: '',
        memLevel: '',
        pageSize: 2,
        pageNum: 1
      },
      memLevelOpt:[
        {
          value: "黄金会员",
          label: "黄金会员"
        },
        {
          value: "铂金会员",
          label: "铂金会员"
        },
        {
          value: "钻石会员",
          label: "钻石会员"
        },
      ],
      tableData: [
        {
          avatar: "乐可可的巴蜀时光",
          level: "黄金会员",
          nameAddNum: "周乐云/18515664654",
          balance: "1111.00",
          points: "541",
          firstTime: "2019.09.09 12：50"
        },
        {
          avatar: "可乐",
          level: "铂金会员",
          nameAddNum: "哈哈/18515664654",
          balance: "4562.00",
          points: "5410",
          firstTime: "2019.10.09 12：50"
        }
      ],
      total: 11,
      
    }
  },
  methods: {
    /**
     * @description: 搜索点击事件
     * @param {} 
     * @return: 
     */
    searchClick () {
      
    },
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
     * @description: 获取会员列表信息
     * @param {type} 
     * @return: 
     */
    getMemberList () {
      
    },
    /**
     * @description: 编辑会员详情
     * @param row
     * @return: 
     */  
    editMember (row) {
      
    },
    /**
     * @description: 充值
     * @param {row}} 
     * @return: 
     */  
    recharge (row) {
      
    }
  }
}
</script>

<style>

</style>
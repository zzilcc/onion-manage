<!--
 * @Author: 黄紫茜
 * @Date: 2019-10-08 15:14:33
 * @LastEditors: 黄紫茜
 * @LastEditTime: 2019-10-09 17:46:20
 * @Description: 
 -->
<template>
  <div class="onion-member-level">
    <section class="onion-member-level_form">
      <!-- <el-button icon="el-icon-plus">添加会员卡</el-button> -->
    </section>
    <section class="onion-member-level_table">
      <el-table :data="tableData" border stripe>
        <el-table-column prop="levelNum" label="等级"></el-table-column>
        <el-table-column prop="levelName" label="等级名称"></el-table-column>
        <el-table-column prop="levelUpTerm" label="升级条件"></el-table-column>
        <el-table-column prop="rechargeAmount" label="充值方案"></el-table-column>
        <el-table-column prop="description" label="享受折扣/折"></el-table-column>
        <el-table-column prop="createTime" label="创建时间"></el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="editHandle(scope.row)"
              type="text"
              size="small"
            >编辑</el-button>
            <el-button
              @click.native.prevent="deleteHandle(scope.row)"
              type="text"
              size="small"
            >删除</el-button>
            <el-button
              @click.native.prevent="sharehandle(scope.row)"
              type="text"
              size="small"
            >充值方案分享</el-button>
          </template>
        </el-table-column>
      </el-table>
    </section>
  </div>
</template>

<script>
export default {
  name:"",
  components: {},
  data () {
    return {
      reqParam: {
        
      },
      tableData: [
        {
          levelId: "", // 主键id
          levelNum: "0", // 等级大小
          levelName: "黄金会员", // 等级名称
          levelUpTerm: "充值", // 升级条件
          rechargeAmount: "3000", // 充值金额
          upgradeAmount: "2000", // 升级金额
          discount: "0.9", // 消费折扣
          integralRatio: "1000", // 赠送积分
          description: "大撒法大热", // 说明
          createTime: "20190901", // 创建时间
        },
        {
          levelId: "", // 主键id
          levelNum: "0", // 等级大小
          levelName: "黄金会员", // 等级名称
          levelUpTerm: "充值", // 升级条件
          rechargeAmount: "3000", // 充值金额
          upgradeAmount: "2000", // 升级金额
          discount: "0.9", // 消费折扣
          integralRatio: "1000", // 赠送积分
          description: "大撒法大热", // 说明
          createTime: "20190901", // 创建时间
        }
      ],
      total: 1,
    }
  },
  methods: {
    /**
     * @description: 编辑
     * @param {row} 
     * @return: 
     */
    editHandle (row) {
      this.$store.commit('memberLevelRow', row)
      this.$router.push({
        path: "/editMemberLevel"
      })
    },
    /**
     * @description: 删除
     * @param {row} 
     * @return: 
     */
    deleteHandle (row) {

    },
    /**
     * @description: 分享
     * @param {row} 
     * @return: 
     */
    shareHandle (row) {

    },
  }
}
</script>
<style>
</style>
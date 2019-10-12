<!--
 * @Author: 黄紫茜
 * @Date: 2019-10-08 15:20:48
 * @LastEditors: 黄紫茜
 * @LastEditTime: 2019-10-11 18:10:47
 * @Description: 
 -->
 <template>
   <div class="onion-job-management">
     <el-table
      :data="tableData"
      >
      <el-table-column
        prop="postName"
        label="职务"
       >
      </el-table-column>
      <el-table-column
        prop="discountProportion"
        label="减免折扣(%)"
        >
        <template slot-scope="scope">
          <el-input v-model="scope.row.discountProportion" ></el-input>
        </template>
      </el-table-column>
    </el-table>
    <div class="onion-job-management-save">
      <el-button type="primary" @click="saveHandle">保存</el-button>
    </div>
   </div>
 </template>
 
 <script>
 import {getDiscountsrList, updateDiscountsrList} from '../../api/api';
 export default {
   name: '',
   data () {
     return {
       tableData: [
         {
           postName: '总监',
           discountProportion: '80%'
         },
         {
           postName: '经理',
           discountProportion: '70%'
         }
       ],
     }
   },
   methods: {
     /**
      * @description: 保存
      * @param {type} 
      * @return: 
      */
     saveHandle () {
       var _this = this
       updateDiscountsrList(this.tableData)
        .then(res => {
          _this.$message({
            message: res.code === 200 ? "修改折扣成功": "修改折扣失败，请重新提交",
            type: "success"
          });
          _this.getJobData()
        })
        .catch(err => {
          console.log(err)
        })
     },
     /**
      * @description: 获取职务信息
      * @param {type} 
      * @return: 
      */
     getJobData () {
       var _this = this
       getDiscountsrList({}).then(res => {
         _this.tableData = res.obj.list
       }).catch(err => {
         console.log(err)
       })
     }
   },
   created () {
     this.getJobData()
   }
 }
 </script>
 
<style lang="less" scoped>
 .onion-job-management {
   .el-table::before {
    height: 0px;
  }
  .onion-job-management-save {
    padding: 10px 0;
  }
 }
 </style>

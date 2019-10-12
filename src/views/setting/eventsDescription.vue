<!--
 * @Author: 黄紫茜
 * @Date: 2019-10-08 15:20:58
 * @LastEditors: 黄紫茜
 * @LastEditTime: 2019-10-12 10:05:20
 * @Description: 
 -->
 <template>
   <div class="onion-events-description">
     <p class="onion-events-description-title">说明</p>
     <el-form :model="reqParam"  class="demo-form-inline" > 
        <el-form-item >
          <el-input :rows="10" type="textarea" v-model="reqParam.textarea" placeholder="请输入活动说明"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="saveHandle">保存</el-button>
        </el-form-item>
      </el-form>
   </div>
 </template>
 
 <script>
import {getEventeventList, updateEventeventList} from '../../api/api';
 export default {
   data () {
     return  {
       reqParam: {
         textarea: ''
       }
     }
   },
   methods: {
     /**
      * @description: 保存事件 
      * @param {type} 
      * @return: 
      */
     saveHandle () {
       var _this = this
       updateEventeventList({data: this.reqParam.textarea})
        .then(res => {
          _this.$message({
            message: res.code === 200 ? "修改活动说明成功": "修改活动说明失败，请重新提交",
            type: "success"
          });
          _this.getEventList()
        })
        .catch(err => {
          console.log(err)
        })
     },
     getEventList () {
       var _this = this
       getEventeventList({})
        .then(res => {
          _this.reqParam.textarea = res.obj.data
        })
        .catch(err => {
          console.log(err)
        })
     }
   },
   created () {
     this.getEventList()
   }
 }
 </script>
<style lang="less" scoped>
.onion-events-description {
  .onion-events-description-title {
    font-size: 20px;
    text-align: left;
    color: #000;
  }
}
</style> 
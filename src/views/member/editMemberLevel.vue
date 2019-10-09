<!--
 * @Author: 黄紫茜
 * @Date: 2019-10-09 16:03:18
 * @LastEditors: 黄紫茜
 * @LastEditTime: 2019-10-09 20:02:46
 * @Description: 
 -->
<template>
  <div class="onion-edit-member-level">
    <el-form  :model="reqParam" class="onion-edit-member-level_form" label-width="120px">
      <p class="onion-edit-member-level_form--title">基本信息</p>
      <el-form-item label="排序">
        <el-input v-model="reqParam.levelNum" ></el-input> <span class="onion-edit-member-level_form--tip">请填写数字，数字越大，等级越高</span>
      </el-form-item>
      <el-form-item label="会员卡等级名称">
        <el-input v-model="reqParam.levelName" ></el-input>
      </el-form-item>
      <el-form-item label="充值金额">
        <el-input v-model="reqParam.rechargeAmount" ></el-input>
      </el-form-item>
      <p class="onion-edit-member-level_form--title">享受权益</p>
      <el-form-item label="消费折扣">
        <el-input v-model="reqParam.discount" ></el-input>
      </el-form-item>
      <el-form-item label="消费送积分比例">
        <el-input v-model="reqParam.integralRatio" ></el-input>
      </el-form-item>
      <el-form-item label="开卡送">
        <!-- <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox> -->
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkedGiftList" >
          <el-checkbox v-for="gift in reqParam.list" :label="gift.giftName" :key="gift.giftId"><img :src="gift.giftImageUrl" alt="">{{gift.giftName}}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <p class="onion-edit-member-level_form--title">升级条件</p>
      <el-form-item label="充值">
        <el-input v-model="reqParam.upgradeAmount" ></el-input>
      </el-form-item>
      <p class="onion-edit-member-level_form--title">说明</p>
      <el-form-item label="说明">
        <el-input v-model="reqParam.description" type="textarea"></el-input>
      </el-form-item>
      <el-form-item>
          <el-button @click="cancel">取消</el-button>
          <el-button  type="primary" @click="saveInfo">保存</el-button>
        </el-form-item>
    </el-form>
    <el-dialog title="分享" :visible.sync="dialog.dialogVisible" width="30%">
      <div>

      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="okClick">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data () {
    return {
      reqParam: {
        levelNum: "",
        levelName: "",
        rechargeAmount: "",
        discount: "",
        integralRatio: "",
        upgradeAmount: "",
        description: "",
        list: [
          {
            giftId: '123',
            giftName: '口红',
            giftImageUrl: '',
            isCheck: '1'
          },
          {
            giftId: '543',
            giftName: '香水',
            giftImageUrl: '',
            isCheck: ''
          }
        ]
      },
      checkedGiftList: [
      ]
    }
  },
  methods: {
    /**
     * @description: 保存事件
     * @param {type} 
     * @return: 
     */
    saveInfo () {

    },
    /**
     * @description: 取消事件
     * @param {type} 
     * @return: 
     */
    cancel () {

    }
  }
}
</script>

<style lang="less" scoped>
  .onion-edit-member-level {
    .onion-edit-member-level_form {
      .onion-edit-member-level_form--title {
        color:#000;
        font-size: 16px;
        text-align: left;
        border-left: 4px solid #ff935c;
        padding: 0px 5px;
      }
      .onion-edit-member-level_form--tip {
        color:#eee;
        font-size: 16px;
      }
    }
  }
</style>
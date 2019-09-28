<!--
 * @Description: In User Settings Edit
 * @Author: huangziqian
 * @Date: 2019-09-25 14:15:13
 * @LastEditTime: 2019-09-28 11:23:18
 * @LastEditors: 黄紫茜
 -->
<template>
  <div>
    <el-card class="box-card">
      <el-steps :active="stepStatus" finish-status="success" simple style="margin-top: 20px">
        <el-step title="1.编辑基本信息" @click.native="step_click(1)"></el-step>
        <el-step title="2.编辑商品详情" @click.native="step_click(2)"></el-step>
      </el-steps>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-form-inline">
        <section v-show="stepStatus === 1">
          <p>
            <span>基本信息</span>
          </p>
          <el-form-item label="商品名称" prop="name">
            <el-input v-model="ruleForm.suppliesName" placeholder="请输入商品名称"></el-input>
          </el-form-item>
          <el-form-item label="简介">
            <el-input v-model="ruleForm.intro" placeholder="请输入简介" type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="商品缩略图">
            <el-upload
              class="avatar-uploader"
              action=""
              :show-file-list="false"
              :limit="1"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="商品品牌">
            <el-select v-model="ruleForm.brand" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="商品类目">
            <el-select v-model="ruleForm.brand" placeholder="请选择">
              <el-option
                v-for="item in optionsBrand"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
              </el-select>
            <!-- <SelectTree
              :props="props"
              :options="optionData"
              :value="valueId"
              :clearable="isClearable"
              :accordion="isAccordion"
              @getValue="getValue($event)"
            /> -->
          </el-form-item>
          <el-form-item label="商品展示图">
            <!-- <el-upload
            ref="upload"
            :action="uploadurl"
            :auto-upload="false"
            :http-request="uploadFile"
            list-type="picture"
            :limit="3"
            :on-exceed="handleExceed"
          >
            <el-button slot="trigger" size="small" type="primary">
              <i class="el-icon-upload el-icon--right"></i>&nbsp;选取图片
            </el-button>
            </el-upload>-->
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList"
              list-type="picture"
            >
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <p>
            <span>价格库存</span>
          </p>
          <!-- <el-form-item label="商品编码">
          <el-input v-model="ruleForm.productId" placeholder="请选择"></el-input>
          </el-form-item>-->
          <el-form-item label="售价">
            <el-input v-model="ruleForm.price" placeholder="请输入售价"></el-input>
          </el-form-item>
          <el-form-item label="库存">
            <el-input v-model="ruleForm.inventory" placeholder="请输入库存"></el-input>
          </el-form-item>
          <el-form-item label="规格">
            <el-input v-model="ruleForm.specification" placeholder="请输入规格"></el-input>
          </el-form-item>
        </section>
        <section v-show="stepStatus === 2">
          <!-- <tinymce-text id="tinymce" @release="release"></tinymce-text>s -->
          <div>富文本编辑器</div>
        </section>
        <el-form-item>
           <el-button @click="stepTo"  v-text="stepStatus === 1 ? '下一步' : '上一步' "></el-button>
          <el-button v-show="stepStatus === 2" type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
// import SelectTree from "../../components/tree/select-tree.vue";
// import TinymceText from '../../components/rich_text/TinymceText';
import axios from "axios";
export default {
  components: {
    // SelectTree,
    // TinymceText
  },
  computed: {
    /* 转树形数据 */
    // optionData() {
    //   let cloneData = JSON.parse(JSON.stringify(this.list)); // 对源数据深度克隆
    //   return cloneData.filter(father => {
    //     // 循环所有项，并添加children属性
    //     let branchArr = cloneData.filter(child => father.id == child.parentId); // 返回每一项的子级数组
    //     branchArr.length > 0 ? (father.children = branchArr) : ""; //给父级添加一个children属性，并赋值
    //     return father.parentId == 0; //返回第一层
    //   });
    // },
    ruleForm () {
      return this.$store.state.goodsListRow
    }
  },
  data() {
    return {
      fileList: [],
      rules: {
        goodsName: [
          { required: true, message: "请输入商品名称", trigger: "blur" }
        ]
      },
      imageUrl: "",
      options: [
        {
          value: "选项1",
          label: "羽素",
        },
        {
          value: "选项2",
          label: "纽崔莱恩"
        }
      ],
      optionsBrand: [
        {
           value: "一级分类",
          label: "一级分类",
        },
        {
           value: "二级分类",
          label: "二级分类",
        }
      ],
      value: "",
      isClearable: true, // 可清空（可选）
      isAccordion: true, // 可收起（可选）
      valueId: 20, // 初始ID（可选）
      props: {
        // 配置项（必选）
        value: "id",
        label: "name",
        children: "children"
        // disabled:true
      },
      // 商品分类选项列表（必选）
      list: [
        { id: 1, parentId: 0, name: "一级分类", rank: 1 },
        { id: 2, parentId: 0, name: "二级分类", rank: 1 },
      ],
      stepStatus: 1
    };
  },
  methods: {
    /**
     *  提交添加商品的表单
     */
    submitForm() {
      let _this = this
      axios
        .post('http://tadmin.yuxinhz.cn/api/product/add', this.ruleForm)
        .then(res => {
          console.log(res)
          _this.$router.push({path: '/goodsList'})
        })
        .catch(err => {
          console.log(err)
        })
      // this.$refs[formName].validate(valid => {
      //   if (valid) {
      //     alert("submit!");
      //   } else {
      //     console.log("error submit!!");
      //     return false;
      //   }
      // });
    },
    /**
     *  重置添加商品的表单
     */
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    // 取值
    getValue(value) {
      this.valueId = value;
      console.log(this.valueId);
    },
    uploadFile(file) {
      this.fileData.append("files", file.file);
    },
    submitUpload() {
      this.loading = true;
      this.fileData = new FormData();
      this.$refs.upload.submit();
      // this.fileData.append('schoolId', 28);
      // axios.post(this.uploadurl, this.fileData).then(res => {
      //   if (res.data.code === 200 && res.data.data === 1) {
      //     this.dialogVisible = false;
      //     this.loading = false;
      //   } else {
      //     this.loading = false;
      //     this.$message.error(res.data.errMessage);
      //   }
      // });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    step_click(flag) {
      this.stepStatus = flag
    },
    stepTo () {
      if (this.stepStatus === 1) {
        this.stepStatus++
      } else {
        this.stepStatus--
      }
    },
    release(content){
      console.log(content);
    }
  }
};
</script>
<style lang='less'>
p {
  text-align: left;
  padding: 2px 5px;
  margin: 10px 0;
  border-left: 4px solid #ff935c;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.avatar {
  width: 100px;
  height: 100px;
  display: block;
}
</style>
<!--
 * @Description: In User Settings Edit
 * @Author: huangziqian
 * @Date: 2019-09-25 14:15:13
 * @LastEditTime: 2019-10-11 16:05:05
 * @LastEditors: 黄紫茜
 -->
<template>
  <div class="onion-add-goods">
    <el-card class="box-card">
      <el-steps :active="stepStatus" finish-status="success" simple style="margin-top: 20px">
        <el-step title="1.编辑基本信息" @click.native="step_click(1)"></el-step>
        <el-step title="2.编辑商品详情" @click.native="step_click(2)"></el-step>
      </el-steps>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-form-inline" label-width="100px">
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
              :http-request="submitUpload"
              :show-file-list="false"
              :limit="1"
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
            <SelectTree
              v-model="ruleForm.categoryId"
              :options="categoryTreeData"
              :props="defaultProps"
            />
          </el-form-item>
          <el-form-item label="商品展示图">
            <el-upload
              class="upload-demo"
              action=""
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="imgList"
              :http-request="submitUploadMul"
              list-type="picture">
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
            <el-input type="number" v-model="ruleForm.price" placeholder="请输入售价"></el-input>
          </el-form-item>
          <el-form-item label="库存">
            <el-input type="number" v-model="ruleForm.inventory" placeholder="请输入库存"></el-input>
          </el-form-item>
          <el-form-item label="规格">
            <el-input v-model="ruleForm.specification" placeholder="请输入规格"></el-input>
          </el-form-item>
        </section>
        <section v-if="stepStatus === 2">
          <!-- <tinymce-editor  :init="{plugins: 'wordcount image'}" v-model="content"></tinymce-editor> -->
          <tinymce ref="editor" v-model="msg" @onClick="onClick" />
          <!-- <button @click="clear">清空内容</button>
          <button @click="disabled = true">禁用</button>-->
        </section>
        <el-form-item>
          <el-button @click="stepTo" v-text="stepStatus === 1 ? '下一步' : '上一步' "></el-button>
          <el-button v-show="stepStatus === 2" type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import SelectTree from "../../components/tree/select-tree.vue";
import Editor from "@tinymce/tinymce-vue";
import tinymce from "@/components/tinymce/tinymce.vue";
import { updateGoodsAxios, updatePriceGoodsAxios, getTreeCategoryAxios, fileUploadAxios } from "@/api/api.js"; // 获取商品列表
import axios from "axios";
export default {
  components: {
    tinymce,
    SelectTree
    //  'tinymce-editor': Editor // <- Important part
  },
  computed: {
    categoryTreeData() {
      console.log(this.$store.state.categoryTreeData);
      return this.$store.state.categoryTreeData;
    },
    ruleForm() {
      return this.$store.state.goodsListRow;
    }
  },
  data() {
    return {
      // 弹框
      dialog: {
        dialogVisible: "false",
        dialogMsg: ""
      },
      // 数据默认字段
      defaultProps: {
        parent: "parentId", // 父级唯一标识
        value: "id", // 唯一标识
        label: "label", // 标签显示
        children: "children" // 子级
      },
      content: "",
      msg: "",
      imgList: [],
      rules: {
        goodsName: [
          { required: true, message: "请输入商品名称", trigger: "blur" }
        ]
      },
      imageUrl: "",
      dialogImageUrl: "",
      options: [
        {
          value: "羽素",
          label: "羽素"
        },
        {
          value: "纽崔莱恩",
          label: "纽崔莱恩"
        }
      ],
      // 商品分类选项列表（必选）
      stepStatus: 1,
      flag: "" // add 为新增商品, edit: 编辑商品
    };
  },
  methods: {
    /**
     * @description: 照片
     * @param {type}
     * @return:
     */
    handleRemove(file) {
    },
    handlePreview(file) {
    },
    /**
     * @description: 富文本编辑
     * @param {type}
     * @return:
     */
    onClick() {},
    /**
     *  提交添加商品的表单
     */
    submitForm() {
      let _this = this;
      this.ruleForm.imageText = this.msg;
      this.ruleForm.bannerPicture= this.imageUrl
      this.ruleForm.listPicture = this.imgList
      let url = "";
      this.ruleForm.price = parseInt(this.ruleForm.price);
      this.ruleForm.inventory = parseInt(this.ruleForm.inventory);
      if (this.flag === "add") {
        url = "http://tadmin.yuxinhz.cn/api/product/add";
      } else {
        url = "http://tadmin.yuxinhz.cn/api/product/update";
      }
      axios
        .post(url, this.ruleForm)
        .then(res => {
          console.log(res);
          _this.$message({
            message: _this.flag === "add" ? "添加商品成功" : "编辑商品成功",
            type: "success"
          });
          _this.$router.push({
            path:
              "/goodsList?pageNum=" +
              (_this.flag === "add" ? 1 : _this.$route.query.pageNum)
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    /**
     *  重置添加商品的表单
     */
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    /**
     * @description: 覆盖原先的上传提交事件
     * @param {type}
     * @return:
     */
    submitUpload(content) {
      let formData = new FormData();
      formData.append("file", content.file);
      // let config = {
      //   "Content-Type": "multipart/form-data"
      // };
      let _this = this;
      fileUploadAxios(formData)
        .then(res => {
           _this.imageUrl = res.obj.url
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    submitUploadMul(content) {
      let formData = new FormData();
      formData.append("file", content.file);
      let config = {
        "Content-Type": "multipart/form-data"
      };
      let _this = this;
       fileUploadAxios(formData)
        .then(res => {
           _this.imgList.push(res.obj)
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    beforeAvatarUpload(file) {
      const isJPGorPng = file.type === "image/jpeg" || file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPGorPng) {
        this.$message.error("上传头像图片只能是 JPG/png 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPGorPng && isLt2M;
    },
    // 取值
    getValue(value) {
      this.valueId = value;
      console.log(this.valueId);
    },
    step_click(flag) {
      this.stepStatus = flag;
    },
    stepTo() {
      if (this.stepStatus === 1) {
        this.stepStatus++;
      } else {
        this.stepStatus--;
      }
    },
    /**
     * @description: 获取商品类目
     * @param
     * @return:
     */

    getTreeCategory() {
      let _this = this;
      axios
        .get("http://tadmin.yuxinhz.cn/api/category/getTreeCategory", {})
        .then(res => {
          // console.log(res)
          _this.$store.commit("categoryTreeData", res.data.obj.categoryList);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    // this.getTreeCategory();
  },
  mounted () {
     this.flag = this.$route.query.flag;
  }
};
</script>
<style lang='less'>
.onion-add-goods p {
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
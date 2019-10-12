<!--
 * @Author: 黄紫茜
 * @Date: 2019-09-27 14:46:04
 * @LastEditors: 黄紫茜
 * @LastEditTime: 2019-10-11 16:02:34
 * @Description: 
 -->
<template>
  <div id="js-manage">
    <section class="onion-index">
      <!-- 头部信息 -->
      <section class="onion-index-header">
        <div class="onion-index-header-wrap">
          <div class="onion-header-left">
            <span>洋葱美美哒</span>
          </div>
          <div class="onion-header-right">
            <el-dropdown class="avatar-container" trigger="click">
              <div class="avatar-wrapper">
                <img
                  src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3266090804,66355162&fm=26&gp=0.jpg"
                  class="user-avatar"
                />
                {{user.username }}
                <i class="el-icon-caret-bottom" />
              </div>
              <el-dropdown-menu slot="dropdown" class="user-dropdown">
                <!-- <router-link class="inlineBlock" to="/home">
                  <el-dropdown-item>首页</el-dropdown-item>
                </router-link> -->
                <router-link class="inlineBlock" to="/about">
                  <el-dropdown-item>个人信息</el-dropdown-item>
                </router-link>
                <el-dropdown-item divided>
                  <span style="display:block;" @click="logout">退出登录</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </section>
      <!-- 中间内容 -->
      <section class="onion-index-mian">
        <!-- 左侧导航 -->
        <section class="onion-index-mian-left">
          <el-tree :data="leftNav" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        </section>
        <section class="onion-index-mian-content">
          <!-- <button @click="toggleClick" v-text="isCollapse? '展开': '收缩'"></button> -->
          <el-breadcrumb
            class="breadcrumb-container onion-breadcrumb"
            separator-class="el-icon-arrow-right"
          >
            <el-breadcrumb-item
              v-for="item in levelList"
              :key="item.path"
              :to="item.path"
            >{{item.meta.title}}</el-breadcrumb-item>
          </el-breadcrumb>
          <router-view></router-view>
        </section>
      </section>
    </section>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      leftNav: [
        {
          name: "商品",
          id: "goods",
          index: "1",
          class: "",
          children: [
            {
              name: "商品管理",
              index: "1-1",
              url: "/goodsList",
              children: []
            },
            {
              name: "商品下单",
              index: "1-2",
              url: "/orderGoods",
              children: []
            },
            {
              name: "分类管理",
              index: "1-3",
              children: [],
              url: "/goodsCategories",
            }
          ]
        },
        {
          name: "订单管理",
          id: "order",
          index: "2",
          class: "",
          children: [
            {
              name: "订单管理",
              index: "1-1",
              url: "/orderList",
              children: []
            }
          ]
        },
        {
          name: "会员",
          id: "member",
          index: "3",
          class: "",
          children: [
            {
              name: "会员管理",
              index: "1-1",
              url: "/memManage",
              children: []
            },
            {
              name: "会员等级",
              index: "1-2",
              url: "/memberLevel",
              children: []
            },
          ]
        },
        {
          name: "财务",
          id: "financial",
          index: "4",
          class: "",
          children: [
            {
              name: "充值",
              index: "1-1",
              url: "/rechargeFin",
              children: []
            },
            {
              name: "积分",
              index: "1-2",
              url: "/pointsFin",
              children: []
            },
            {
              name: "余额",
              index: "1-3",
              url: "/balanceFin",
              children: []
            },
            {
              name: "交易流水",
              index: "1-4",
              url: "/dealPipelining",
              children: []
            },
          ]
        },
        {
          name: "营销",
          id: "marketing",
          index: "5",
          class: "",
          children: [
            {
              name: "积分商城",
              index: "5-1",
              url: "",
              children: [
                {
                  name: "商品列表",
                  index: "5-1-1",
                  url: "/pointsMall",
                  children: []
                },
                {
                  name: "添加商品-积分",
                  index: "5-1-2",
                  url: "/addPointsMall",
                  children: []
                },
                {
                  name: "兑换订单",
                  index: "5-1-3",
                  url: "/redeemOrders",
                  children: []
                },
              ]
            }
          ]
        },
        {
          name: "设置",
          id: "setting",
          index: "6",
          class: "",
          children: [
            {
              name: "职务管理",
              index: "1-2",
              url: "/jobManagement",
              children: []
            },
            {
              name: "活动说明",
              index: "1-3",
              url: "/eventsDescription",
              children: []
            }
          ]
        },
      ],
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      isCollapse: false,
      user: {
        userName: "黄紫茜"
      },
      levelList: []
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  created() {
    this.getBreadcrumb();
    // this.getTreeCategory()
  },
  methods: {
    /**
     * 获取导航路由
     */
    getBreadcrumb() {
      this.levelList = this.$route.matched.filter(item => item.name);
    },
    handleOpen() {
      this.isCollapse = false;
    },
    handleClose() {
      this.isCollapse = true;
    },
    toggleClick() {
      this.isCollapse = !this.isCollapse;
    },
    /**
     * 个人信息页面点击
     */
    userInfoClick() {
      this.$router.push({ path: "/about" });
    },
    // 用户名下拉菜单选择事件
    logout() {
      this.$router.push("/login");
    },
    // 全屏事件
    handleFullScreen() {
      let element = document.documentElement;
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    },
    handleNodeClick (data) {
      if (data.children.length < 1) {
        this.$router.push({'path': data.url})
      }
    }
  }
};
</script>
<style lang="less">
#js-manage {
  height: 100%;
  width: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  position: relative;
}
.onion-index {
  height: 100%;
  width: 100%;
  position: relative;
  padding-top: 60px;
  .onion-index-header {
    position: absolute;
    top: 0;
    left: 0;
    height: 60px;
    width: 100%;
    background-color: #ff935c;
    .onion-index-header-wrap {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      line-height: 60px;
      .onion-header-left {
        width: 30%;
        height: 100%;
        text-align: left;
      }
      .onion-header-left span {
        font-size: 16px;
      }
      .onion-header-right {
        width: 60%;
        height: 100%;
        text-align: right;
      }
      .onion-user-icon {
        cursor: pointer;
      }
    }
  }
  .onion-index-mian {
    height: 100%;
    width: 100%;
    position: relative;
    .onion-index-mian-left {
      height: 100%;
      width: 180px;
      position: absolute;
      top: 0;
      left: 0;
      text-align: left;
      border-right: 1px solid #f7efef;
    }
    .onion-index-mian-content {
      height: 100%;
      width: 100%;
      padding: 20px 20px 20px 200px;
      overflow: auto;
    }
  }
}
.onion-login-section {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.onion-breadcrumb {
  padding-bottom: 20px;
}
.avatar-container {
  height: 50px;
  display: inline-block;
  // position: absolute;
  // right: 35px;
  .avatar-wrapper {
    cursor: pointer;
    margin-top: 5px;
    position: relative;
    line-height: initial;
    .user-avatar {
      width: 40px;
      height: 40px;
      border-radius: 10px;
    }
    .el-icon-caret-bottom {
      position: absolute;
      right: -20px;
      top: 25px;
      font-size: 12px;
    }
  }
}
</style>
/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-25 14:15:13
 * @LastEditTime: 2019-10-09 17:35:12
 * @LastEditors: 黄紫茜
 */
import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store';
// import NProgress from 'nprogress' //进度条
import 'nprogress/nprogress.css'
import { networkInterfaces } from 'os';


Vue.use(Router)

const getComponent = (name, component) => () =>
    import (`@/views/${name}/${component}.vue`);

const myRouter = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: getComponent('login','Login')
    },
    {
      path: '/home',
      component: getComponent('home','Home'),
      name: 'home',
      meta: {
        title: '首页',
        requiresAuth: true
      },
      children: [
        {
          path: '/goods',
          component: getComponent('goods','Goods'),
          name: 'goods',
          meta: {
            title: '商品'
          },
          children: [
            {
              path: '/goodsList',
              component: getComponent('goods','GoodsList'),
              name: 'goodsList',
              meta: {
                title: '商品列表',
                requiresAuth: true
              }
            },
            {
              path: '/addGoods',
              component: getComponent('goods','AddGoods'),
              name: 'addGoods',
              meta: {
                title: '添加商品'
              }
            }, 
            {
              path: '/orderGoods',
              component: getComponent('goods','orderGoods'),
              name: 'orderGoods',
              meta: {
                title: '商品下单',
                requiresAuth: true
              }
            }, 
            {
              path: '/goodsCategories',
              component: getComponent('goods','GoodsCategories'),
              name: 'managoodsCategoriesge',
              meta: {
                title: '商品分类',
                requiresAuth: true
              },
              children: [
              ]
            },
            {
              path: '/addGoodsCategories',
              component: getComponent('goods','addGoodsCategories'),
              name: 'addGoodsCategories',
              meta: {
                title: '添加商品分类'
              }
            }
          ]
        },
        {
          path: '/order',
          component: getComponent('order', 'order'),
          name: 'order',
          meta: {
            title: '订单管理'
          },
          children: [
            {
              path: '/orderList',
              component: getComponent('order', 'orderList'),
              name: 'orderList',
              meta: {
                title: '订单列表',
                requiresAuth: true
              },
            },
            {
              path: '/orderDetail',
              component: getComponent('order', 'orderDetail'),
              name: 'orderDetail',
              meta: {
                title: '订单详情',
                requiresAuth: true
              }
            }
          ]
        },
        {
          path: "/member",
          component: getComponent('member', 'member'),
          name: "member",
          meta: {
            title: "会员",
            requiresAuth: true
          },
          children: [
            {
              path: "/memManage",
              component: getComponent('member', 'memManage'),
              name: "memManage",
              meta: {
                title: "会员管理"
              },
            },
            {
              path: "/memberLevel",
              component: getComponent('member', 'memberLevel'),
              name: "memberLevel",
              meta: {
                title: "会员等级"
              }
            },
            {
              path: "/editMemberLevel",
              component: getComponent('member', 'editMemberLevel'),
              name: "editMemberLevel",
              meta: {
                title: "会员等级编辑"
              }
            },
          ]
        },
        {
          path: "/financial",
          component: getComponent('financial', 'financial'),
          name: "financial",
          meta: {
            title: "财务"
          },
          children: [
            {
              path: "/rechargeFin",
              component: getComponent('member', 'rechargeFin'),
              name: "rechargeFin",
              meta: {
                title: "充值"
              },
            },
            {
              path: "/pointsFin",
              component: getComponent('member', 'pointsFin'),
              name: "pointsFin",
              meta: {
                title: "积分"
              }
            },
            {
              path: "/balanceFin",
              component: getComponent('member', 'balanceFin'),
              name: "balanceFin",
              meta: {
                title: "余额"
              }
            },
            {
              path: "/dealPipelining",
              component: getComponent('member', 'dealPipelining'),
              name: "dealPipelining",
              meta: {
                title: "交易流水"
              }
            },
          ]
        },
        {
          path: '/marketing',
          component: getComponent('marketing', 'marketing'),
          name: 'marketing',
          meta: {
            title: '营销',
            requiresAuth: true
          },
          children: [
            {
              path: '/pointsMall',
              component: getComponent('marketing', 'pointsMall'),
              name: 'pointsMall',
              meta: {
                title: '积分商城',
                requiresAuth: true
              },
            },
            {
              path: '/addPointsMall',
              component: getComponent('marketing', 'addPointsMall'),
              name: 'addPointsMall',
              meta: {
                title: '添加商品'
              },
            },
          ]
        },
        {
          path: '/setting',
          component: getComponent('setting', 'setting'),
          name: 'setting',
          meta: {
            title: '设置'
          },
          children: [
            {
              path: '/pointsMall',
              component: getComponent('setting', 'employeeManagement'),
              name: 'employeeManagement',
              meta: {
                title: '员工管理'
              },
            },
            {
              path: '/addPointsMall',
              component: getComponent('setting', 'jobManagement'),
              name: 'jobManagement',
              meta: {
                title: '职务管理'
              },
            },
            {
              path: '/addPointsMall',
              component: getComponent('setting', 'eventsDescription'),
              name: 'eventsDescription',
              meta: {
                title: '活动说明'
              },
            },
          ]
        },
        {
          path: '/about',
          component: getComponent('about','About'),
          name: 'about',
          meta: {
            title: '个人信息'
          }
        }
      ]
    }
  ]
})

// 判断是否存在token
myRouter.beforeEach((to, from, next) => {
  // NProgress.start()
  // if(to.path !== './login' && !store.state.token){
  //   next('/login')
  //   NProgress.done() // 结束process
  // } else {
  //   next()
  // }
  // if (to.meta.roles) {
  //   to.meta.roles.includes(...store.getters.roles) ? next() : next('/404')
  // } else {
  //   next()
  // }
  let token = window.localStorage.getItem('token')
  if (to.meta.requiresAuth) {
    if (token) {
      next()
    } else {
      store.dispatch('logOut')
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } 
  } else {
    next()
  }
})

// myRouter.afterEach(() => {
//   NProgress.done() // 结束process
// })
export default myRouter

/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-25 14:15:13
 * @LastEditTime: 2019-09-30 10:12:09
 * @LastEditors: 黄紫茜
 */
import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store';
import NProgress from 'nprogress' //进度条
import 'nprogress/nprogress.css'


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
        title: '首页'
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
                title: '商品列表'
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
                title: '商品下单'
              }
            }, 
            {
              path: '/goodsCategories',
              component: getComponent('goods','GoodsCategories'),
              name: 'managoodsCategoriesge',
              meta: {
                title: '商品分类'
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
          path: '/marketing',
          component: getComponent('marketing', 'marketing'),
          name: 'marketing',
          meta: {
            title: '营销'
          },
          children: [
            {
              path: '/pointsMall',
              component: getComponent('marketing', 'pointsMall'),
              name: 'pointsMall',
              meta: {
                title: '积分商城'
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
                title: '订单列表'
              },
            },
            {
              path: '/orderDetail',
              component: getComponent('order', 'orderDetail'),
              name: 'orderDetail',
              meta: {
                title: '订单详情'
              }
            }
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
  NProgress.start()
  if(to.path !== './login' && !store.state.token){
    next('/login')
    NProgress.done() // 结束process
  } else {
    next()
  }
  if (to.meta.roles) {
    to.meta.roles.includes(...store.getters.roles) ? next() : next('/404')
  } else {
    next()
  }
})

myRouter.afterEach(() => {
  NProgress.done() // 结束process
})
export default myRouter

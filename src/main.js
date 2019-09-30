/*
 * @Author: 黄紫茜
 * @Date: 2019-09-27 14:46:04
 * @LastEditors: 黄紫茜
 * @LastEditTime: 2019-09-29 11:31:45
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './plugins/element.js'
import './style/common.less';
import './style/theme/index.css';
// import 'element-ui/lib/theme-chalk/index.css';
import './style/override-element-ui.less';
import {Message } from 'element-ui';
Vue.prototype.$message = Message
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

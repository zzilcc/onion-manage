import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './plugins/element.js'
import './style/common.less';
import './style/theme/index.css';

// import 'element-ui/lib/theme-chalk/index.css';
import './style/override-element-ui.less';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/*
 * @Author: Topskys
 * @Date: 2022-08-22 19:00:39
 * @LastEditTime: 2022-08-22 19:17:25
 * @LastEditors: Topskys
 * @Description: 程序入口
 * @FilePath: \quick-apijson\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
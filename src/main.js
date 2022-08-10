// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*
* @Author: xizixin
* @Describe: Entrance to the file
* @Date: 2018-06-22
*/
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import globalPlugin from "./untils/global"
import filter from './untils/filter'

import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/global.css'
import './untils/rem'
import "@/router/permission"

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(globalPlugin)
filter.map(item => Vue.filter(item.name, item.fn))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

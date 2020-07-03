import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from '@/utils/axios'
import './plugins/vant.js'

// 样式
import '@/assets/css/globle.scss'
import 'vant/lib/index.css'
// 引入格式化时间组件函数
import dataFormat from '@/assets/js/dataFormat'

// 全局注册格式化时间函数
Vue.filter('dataFormat', dataFormat)

Vue.config.productionTip = false
// 在Vue原型中加入$http属性为axios
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

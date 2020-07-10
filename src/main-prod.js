import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from '@/utils/axios'
// import './plugins/vant.js'

// 样式
import '@/assets/css/globle.scss'
// import 'vant/lib/index.css'
// 引入格式化时间组件函数
import dataFormat from '@/assets/js/dataFormat'

// 引入nprogress的JS和css文件
// import 'nprogress/nprogress.css'

// 全局注册格式化时间函数
Vue.filter('dataFormat', dataFormat)
// 注册全局指令，自动聚焦
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function(el) {
    // 聚焦元素
    el.focus()
  }
})
Vue.config.productionTip = false
// 在Vue原型中加入$http属性为axios
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

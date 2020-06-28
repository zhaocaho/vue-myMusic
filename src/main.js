import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './plugins/vant.js'

// 样式
import '@/assets/css/globle.scss'
import 'vant/lib/index.css'

Vue.config.productionTip = false
// 在Vue原型中加入$http属性为axios
Vue.prototype.$http = axios
// 配置axios的根路径
axios.defaults.baseURL = 'http://localhost:3000/'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

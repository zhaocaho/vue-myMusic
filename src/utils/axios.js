import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/'

// http request 拦截器
axios.interceptors.request.use(
  config => {
    // 进度条(nprogress)配置在请求拦截器
    //   NProgress.start()
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// axios响应拦截器
axios.interceptors.response.use(
  function(response) {
    // NProgress.done() // 设置加载进度条(结束..)
    return response
  },
  function(error) {
    return Promise.reject(error)
  }
)

export default axios

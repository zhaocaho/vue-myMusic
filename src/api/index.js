const API = {
  // 登录
  login: {
    // 手机登录
    LOGIN_CELLPHONE: '/login/cellphone',
    // 退出登录
    LOGOUT: '/logout',
    // 发送验证码
    CAPTCHA_SEND: '/captcha/sent',
    // 验证验证码
    CAPTCHA_VERIFY: '/captcha/verify',
    // 注册或修改密码
    REGISTER_CELLPHONE: '/register/cellphone'
  },
  // 我的页面
  home: {
    // 用户详情
    USER_DETAIL: '/user/detail',
    // 获取用户播放记录
    USER_RECORD: '/user/record'
  },
  // 发现页面
  find: {
    // 轮播图
    BANNER_LIST: '/banner'
  },
  // music界面
  music: {
    // 获取音乐url
    SONG_URL: '/song/url',
    // 搜索
    SEARCH: '/search',
    // 搜索建议
    SEARCH_SUGGEST: '/search/suggest'
  }
}

export default API

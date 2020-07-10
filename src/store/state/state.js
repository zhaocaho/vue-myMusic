const state = {
  // 设备型号(PC,ANDRIO,IOS,PAD)
  platform: 0,
  // 是否已经登录
  isLogin: false,
  // 登录按钮loading状态
  isLoading: false,
  // 验证码是否验证成功
  isCaptchaRight: false,
  // 登录后的个人信息
  personalData: {},
  // 选择audio
  audio: ''
}

export default state

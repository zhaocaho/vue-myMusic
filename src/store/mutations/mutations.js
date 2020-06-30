// 公用部分的方法放到vuex中
const mutations = {
  // 判断设备是什么型号
  judgeSystem: function(state) {
    const BrowserInfo = {
      isAndroid: Boolean(navigator.userAgent.match(/android/gi)), // 是否是Android浏览器
      isIphone: Boolean(navigator.userAgent.match(/iphone|ipod|iOS/gi)), // 是否是苹果浏览器
      isIpad: Boolean(navigator.userAgent.match(/ipad/gi)), // 是否是 IPad 浏览器
      isWeixin: Boolean(navigator.userAgent.match(/MicroMessenger/gi)), // 是否是微信平台浏览器
      isAli: Boolean(navigator.userAgent.match(/AlipayClient/gi)), // 是否是支付宝平台浏览器
      isPhone: Boolean(
        /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)
      ) // 是否是手机端
    }
    if (/Win/i.test(navigator.platform) || /Mac/i.test(navigator.platform)) {
      state.platform = 0
    } else if (BrowserInfo.isAndroid) {
      state.platform = 1
    } else if (BrowserInfo.isPhone) {
      state.platform = 2
    } else if (BrowserInfo.isIpad) {
      state.platform = 3
    } else {
      state.platform = 0
    }
  }
}

export default mutations
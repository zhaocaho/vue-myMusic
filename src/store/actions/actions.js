import * as types from 'store/mutation-types.js'
import API from '@/api'
import { SUCCESS, useAxiosPost, useAxiosGet } from '@/assets/js/common.js'
import { Notify } from 'vant'
const actions = {
  // 电话登录
  async [types.LOGIN_CELLPHONE]({ commit }, params) {
    const result = await useAxiosPost(API.login.LOGIN_CELLPHONE, params)
    console.log(result)
    if (result.data.code === SUCCESS) {
      //   console.log(result.data)
      commit(types.LOGIN_CELLPHONE, result.data)
    } else {
      Notify('密码错误')
      commit('loginError')
    }
  },
  // 退出登录
  async [types.LOGOUT]({ commit }) {
    const result = await useAxiosPost(API.login.LOGOUT)
    console.log(result)
    commit(types.LOGOUT)
  },
  // 发送验证码
  async [types.CAPTCHA_SEND]({ commit }, data) {
    await useAxiosGet(API.login.CAPTCHA_SEND, data)
  },
  // 验证验证码
  async [types.CAPTCHA_VERIFY]({ commit }, data) {
    const result = await useAxiosGet(API.login.CAPTCHA_VERIFY, data)
    console.log(result)
    if (result.data.code === SUCCESS) {
      commit(types.CAPTCHA_VERIFY)
    } else {
      Notify('网络出错')
    }
  },
  // 注册或修改密码
  async [types.REGISTER_CELLPHONE]({ commit }, data) {
    const result = await useAxiosPost(
      API.login.REGISTER_CELLPHONE,
      data,
      '用户名格式错误或者已被占用'
    )
    console.log(result)
    if (result.data.code === SUCCESS) {
      commit(types.LOGIN_CELLPHONE)
    } else {
      Notify('网络出错')
    }
  }
}

export default actions

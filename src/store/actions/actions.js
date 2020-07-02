import * as types from 'store/mutation-types.js'
import API from '@/api'
import { SUCCESS, useAxiosPost } from '@/assets/js/common.js'
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
  }
}

export default actions

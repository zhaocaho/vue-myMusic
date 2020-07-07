import * as types from 'store/mutation-types.js'
import API from '@/api'
import { SUCCESS, useAxiosGet } from '@/assets/js/common.js'
import { Notify } from 'vant'

const state = {
  userDetailData: {}
}
const mutations = {
  [types.USER_DETAIL](state, data) {
    console.log(data)
    state.userDetailData = data
  }
}
const actions = {
  async [types.USER_DETAIL]({ commit, rootState }) {
    const data = {
      uid: rootState.personalData.userId
    }
    const result = await useAxiosGet(API.home.USER_DETAIL, data)
    // console.log(result)
    if (result.data.code === SUCCESS) {
      commit(types.USER_DETAIL, result.data)
    } else {
      Notify('11')
    }
  },
  async [types.USER_RECORD]({ commit }, data) {
    const result = await useAxiosGet(API.home.USER_RECORD, data)
    console.log(result)
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}

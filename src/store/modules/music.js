import * as types from 'store/mutation-types.js'
import API from '@/api'
import { SUCCESS, useAxiosGet } from '@/assets/js/common.js'
import { Notify } from 'vant'

const state = {
  // 音乐id,名字那些
  musicData: '',
  // 音乐连接
  playUrl:
    'http://m8.music.126.net/20200708145406/d95a71d393bad533392a90d22ad0de01/ymusic/e23b/4394/b8d6/41653f743c00064d4f40c90875e1ebb8.mp3',
  // 搜索的数据，包括hasMore(Boolean),songCount(总数),songs(歌曲列表)
  searchData: {},
  // 搜索列表
  searchList: []
}
const mutations = {
  // 搜索
  [types.SEARCH](state, data) {
    console.log(data)
    state.searchData = data
    state.searchList = data.songs
  },
  // 获取音乐id
  getMUsicData(state, data) {
    state.musicData = data
  },
  // 获取音乐url
  [types.SONG_URL](state, data) {
    state.playUrl = data.data[0].url
  }
}
const actions = {
  // 获取音乐rul
  async [types.SONG_URL]({ commit, rootState }, id) {
    const data = { id: id }
    const result = await useAxiosGet(API.music.SONG_URL, data)
    console.log(result)
    if (result.data.code === SUCCESS) {
      commit(types.SONG_URL, result.data)
    } else {
      Notify('11')
    }
  },
  // 搜索
  async [types.SEARCH]({ commit, dispatch }, data) {
    const result = await useAxiosGet(API.music.SEARCH, data)
    // console.log(result)
    if (result.data.code === SUCCESS) {
      // console.log(result.data.result)
      commit(types.SEARCH, result.data.result)
      // dispatch(types.SONG_URL, result.data.result.songs.id)
    }
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}

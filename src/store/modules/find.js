import * as types from 'store/mutation-types.js'
import API from '@/api'
import axios from 'axios'

const state = {}
const mutations = {}
const actions = {}
const getters = {}
// 获取轮播图
actions[types.BANNER_LISTS] = ({ commit }, n) => {
  console.log('执行了')
  axios
    .get(API.find.BANNER_LIST, { params: { type: n } })
    .then(result => {
      commit(types.BANNER_LISTS, result)
    })
    .catch(err => {
      console.log(err)
    })
}
//
mutations[types.BANNER_LISTS] = (state, result) => {
  state.bannerList = result
  console.log(state.bannerList)
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

// state中的数据用mutation来操作
// 模块的actions调用方法与原来一直,this.$store.dispatch(types.BANNER_LISTS)
//                               ...mapActions([types.BANNER_LISTS])
//    可以用对象来对actions重新命名 ...mapActions({bannerList:types.BANNER_LISTS})
//    加了命名空间的module在调用actions时候要加模块名字
//                                                 ...mapActions('find', {
//                                                     bannerList: types.BANNER_LISTS
//                                                   })
//   如果不使用mapActions    ,将模块的名称加到函数前面，用路径表示
//                         bannerList(n) {
//                             this.$store.dispatch(`find/${types.BANNER_LISTS}`, n)
//                           }

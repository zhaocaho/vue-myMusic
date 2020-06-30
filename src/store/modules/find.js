import * as types from 'store/mutation-types.js'
import API from '@/api'
import { SUCCESS, useAxios } from '@/assets/js/common.js'
import { Notify } from 'vant'

const state = {
  bannerList: []
}
const mutations = {}
const actions = {
  async [types.BANNER_LISTS]({ dispatch, rootState, commit }) {
    const data = {
      type: rootState.platform
    }
    const result = await useAxios(API.find.BANNER_LIST, data)
    // console.log(result)
    if (SUCCESS === 200) {
      const bannerList = result.data.banners
      commit(types.BANNER_LISTS, bannerList)
    } else {
      Notify('网络错误')
    }
  }
}
const getters = {}

// mutations
// 轮播图赋值
mutations[types.BANNER_LISTS] = (state, result) => {
  state.bannerList = result
  console.log(state.bannerList)
}
// actions
// 获取轮播图
// actions[types.BANNER_LISTS] = ({ commit }, n) => {
//   console.log('执行了')
//   axios
//     .get(API.find.BANNER_LIST, { params: { type: n } })
//     .then(result => {
//       commit(types.BANNER_LISTS, result)
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }
// actions[types.BANNER_LISTS] = ({ dispatch, rootState, commit }) => {
//   // console.log(rootState)  对象的解构赋值不需要按顺序，数组的需要按顺序
//   const data = {
//     type: rootState.platform
//   }
//   const result = useAxios(API.find.BANNER_LIST, data, SUCCESS)
//   console.log(result)
// }
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

//   state的用法    两种都可以，mutation也有两种
//                       ...mapState({
//                         aaa: state => state.find.aaa
//                       })
//                        ...mapState('find', {
//                          aaa: state => state.aaa
//                        })
//

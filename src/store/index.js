import Vue from 'vue'
import Vuex from 'vuex'
import state from 'store/state/state.js'
import mutations from 'store/mutations/mutations.js'
import actions from 'store/actions/actions.js'
import find from 'store/modules/find.js'
import home from 'store/modules/home.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    home,
    find
  }
})

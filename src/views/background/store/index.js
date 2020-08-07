import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    currentUsername: null,
    currentUserId: null,
    priority: null
  },
  mutations: {
    changeUserInfo(state, {nickname,priority, userId, isLogin}) {
      state.currentUsername = nickname,
      state.isLogin = isLogin
      state.priority = priority
      state.currentUserId = userId
    }
  },
  actions: {
  },
  modules: {
  }
})
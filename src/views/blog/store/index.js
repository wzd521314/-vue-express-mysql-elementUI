import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blog: {
      currentPage: 1,
      pagesize: 5,
      total: undefined,
      list: []
    },

    blogDetail: {
      content: ''
    }
  },
  mutations: {
    changeBlogList(state, payload) {
      state.blog.list = payload
    },
    changeBlogCurrentPage(state, page) {
      state.blog.currentPage = page
    },
    initBlogTotal(state, count) {
      state.blog.total = count
    },
    changeBlogDetailContent(state, index) {
      state.blogDetail.content = state.blog.list[index].content
    }
  },
  actions: {
  },
  modules: {
  }
})

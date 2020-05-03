import Vue from 'vue'
import VueRouter from 'vue-router'

const createBlog = () => import('background/router/createBlog.vue')
const editBlog = () => import('background/router/editBlog.vue')



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/createBlog'
  },
  {
    path: '/createBlog',
    name: 'createBlog',
    component: createBlog
  },
  {
    path: '/editBlog',
    name: 'editBlog',
    component: editBlog
  }
]

const router = new VueRouter({
  routes
})

export default router

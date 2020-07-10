import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const Home = () => import ('blog/router/home.vue')
const Article = () => import ('blog/router/article.vue')
const Chat = () => import ('blog/router/chat.vue')
const About = () => import ('blog/router/about.vue')
const articleContent = () => import ('blog/router/articleContent.vue')



Vue.use(VueRouter)

// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/article',
    name: 'Article',
    component: Article,
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/articleContent',
    name: 'articleContent',
    component: articleContent
  },
  {
    path: '',
    redirect: '/home'
  }
]

const router = new VueRouter({
  routes,
  mode: 'hash'
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import('blog/router/home.vue')
const Article = () => import('blog/router/article.vue')
const Chat = () => import('blog/router/chat.vue')
const About = () => import('blog/router/about.vue')
const Test = () => import('blog/router/test.vue')
const Detail = () => import('blog/router/detail.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    
  },
  {
    path: '/article',
    name: 'Article',
    component: Article,
    children: [
      {
        path: 'test',
        name: 'test',
        component: Test
      }
    ]
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  },
  {
     path: '/about',
     name: 'About',
     component: About
  },
  {
     path: '/detail',
     name: 'Detail',
     component: Detail
  }
]

const router = new VueRouter({
  routes,
  mode: 'hash'
  
})

export default router

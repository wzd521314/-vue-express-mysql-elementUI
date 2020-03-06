import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('components/home.vue')
const About = () => import('components/about.vue')

Vue.use(VueRouter)

const routes = [
  {
     path: '/home',
     name: 'Home',
     component: Home
  },
  {
     path: '/about',
     name: 'About',
     component: About
  }
]

const router = new VueRouter({
  routes
})

export default router

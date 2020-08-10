import Vue from 'vue'
import VueRouter from 'vue-router'


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const Home = () => import ('blog/router/home.vue')
const Categories = () => import ('blog/router/categories.vue')
const Archive = () => import ('blog/router/archive.vue')
const About = () => import ('blog/router/about.vue')
const articleContent = () => import ('blog/router/articleContent.vue')
const Login = () => import ('blog/router/login.vue')
const Register = () => import ('blog/router/register.vue')
const Update = () => import('blog/router/update.vue')




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
    path: '/categories',
    name: 'Categories',
    component: Categories,
  },
  {
    path: '/archive',
    name: 'Archive',
    component: Archive,
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
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter(to, from , next) {
      if(from.name === 'articleContent') {
        to.params.from = 'comment'
      }
      next()
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/update',
    name: 'Update',
    component: Update
  },
  {
    path: '',
    redirect: '/home'
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router

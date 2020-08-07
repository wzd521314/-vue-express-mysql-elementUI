import Vue from 'vue'

import App from 'blog/App.vue'
import router from './router'
import store from './store'
//import router from 'blog/router/index.js'
import 'font-awesome/css/font-awesome.css'
import 'element-ui/lib/theme-chalk/display.css';
import {checkToken} from 'network/users.js'


router.beforeEach(async function (to, from ,next) {
    let res = await checkToken()
    //token验证成功，修改vux中的信息
    if(res.status === 200) {
      store.commit('changeUserInfo', {
        nickname: res.data.nickname,
        priority: res.data.priority,
        userId: res.data.userId,
        isLogin: true
      })
    }
    //token验证失败，修改vuex中的信息
    if(res.status === 401) {
      store.commit('changeUserInfo', {
        nickname: null,
        priority: null,
        userId: null,
        isLogin: false
      })
    }
    next()
})
// const originalPush = router.prototype.push
// router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#blog')

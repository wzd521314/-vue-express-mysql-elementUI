import Vue from 'vue'
import background from './background.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import router from 'background/router/index.js'
import {checkToken} from 'network/users.js'

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import store from '../blog/store';
// use
Vue.use(mavonEditor)

Vue.use(ElementUI);

Vue.config.productionTip = false


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

  //当权限为1的人才可以访问该页面
  if(store.state.priority === 1) {
    next()
  }else {
    window.location.href = '/'
    next(false)
  }
  
  
})

new Vue({
  router,
  render: h => h(background)
}).$mount('#background')

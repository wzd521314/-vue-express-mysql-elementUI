import Vue from 'vue'
import App from 'blog/App.vue'
import router from './router'
import store from './store'
//import router from 'blog/router/index.js'
import 'font-awesome/css/font-awesome.css'


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

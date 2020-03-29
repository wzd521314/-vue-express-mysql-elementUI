import Vue from 'vue'
import App from 'blog/App.vue'
import router from './router'
//import router from 'blog/router/index.js'
import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#blog')

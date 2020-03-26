import Vue from 'vue'
import App from 'blog/App.vue'
//import router from 'blog/router/index.js'

Vue.config.productionTip = false

new Vue({
  //router,
  render: h => h(App)
}).$mount('#blog')

import Vue from 'vue'
import App from 'index/App.vue'
import router from 'index/router/index.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

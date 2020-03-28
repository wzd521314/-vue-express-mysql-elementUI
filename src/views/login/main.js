import Vue from 'vue'
import login from './login.vue'
import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(login)
}).$mount('#login')

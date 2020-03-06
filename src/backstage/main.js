import Vue from 'vue'
import backstage from './backstage.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(backstage)
}).$mount('#backstage')

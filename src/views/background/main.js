import Vue from 'vue'
import background from './background.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(background)
}).$mount('#background')

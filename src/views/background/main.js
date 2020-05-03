import Vue from 'vue'
import background from './background.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import router from 'background/router/index.js'

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// use
Vue.use(mavonEditor)

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(background)
}).$mount('#background')

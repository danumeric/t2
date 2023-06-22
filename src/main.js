import Vue from 'vue'
import App from './App.vue'
import globals from './plugins/globals'

import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
Vue.config.productionTip = false
 new Vue({
  router,
  store,
  vuetify,
  globals,
  render: (h) => h(App),
}).$mount('#app')

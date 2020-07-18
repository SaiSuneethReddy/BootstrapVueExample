import Vue from 'vue'
import App from './App.vue'
import router from './router'

//Importing BootstrapVue 
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

//styling imports
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
// this is an optional installation we required to use bootstrap icons
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

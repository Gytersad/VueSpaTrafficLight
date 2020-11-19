import Vue from 'vue'
import App from './App'
import router from './router/router'
import light from './components/light'
import timer from './components/timer'

Vue.config.productionTip = false
Vue.component('light', light)
Vue.component('timer', timer)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

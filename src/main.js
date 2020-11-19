import Vue from 'vue'
import App from './App'
import router from './router/router'
import Light from './components/Light'
import Timer from './components/Timer'

Vue.config.productionTip = false
Vue.component('Light', Light)
Vue.component('Timer', Timer)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

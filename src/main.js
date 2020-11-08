import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import router from './router'
import i18n from './i18n'

Vue.config.productionTip = false

Vue.mixin({
  methods: {
    $c: str => str.charAt(0).toUpperCase() + str.slice(1) //  capitalize first letter
  }
})

new Vue({
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')

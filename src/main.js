import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import router from './router'
import i18n from './i18n'
import Vue2TouchEvents from 'vue2-touch-events'

Vue.config.productionTip = false

Vue.use(Vue2TouchEvents, {
  disableClick: true
})
Vue.mixin({
  methods: {
    $c: str => str.charAt(0).toUpperCase() + str.slice(1) //  capitalize first letter
  }
})

store.commit('setLocale', i18n.locale)

new Vue({
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')

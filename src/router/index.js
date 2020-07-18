import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'
import Settings from '../views/Settings'
import Game1v1 from '../views/Game1v1'

Vue.use(VueRouter)

function topBar (set) {
  store.commit('topBar', set)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter (to, from, next) {
      topBar('expanded')
    }
  },
  {
    path: '/settings',
    name: 'Game settings',
    component: Settings,
    beforeEnter (to, from, next) {
      console.log('settings')
      topBar('default')
    }
  },
  {
    path: '/1v1',
    name: 'Piou 1v1',
    component: Game1v1,
    beforeEnter (to, from, next) {
      topBar('hidden')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

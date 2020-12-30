import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'
import Mode1v1 from '../views/Mode1v1'
import ModeGroup from '@/views/ModeGroup'
import Rules from '@/views/Rules'

Vue.use(VueRouter)

function topBar (set) {
  store.commit('topBar', set)
}

const routes = [
  {
    path: '*',
    name: 'Home',
    component: Home,
    beforeEnter (to, from, next) {
      topBar('expanded')
      next()
    }
  },
  {
    path: '/rules',
    name: 'Piou !',
    component: Rules,
    beforeEnter (to, from, next) {
      topBar('default')
      next()
    }
  },
  // {
  //   path: '/select-game',
  //   name: 'Piou !',
  //   component: GameSelector,
  //   beforeEnter (to, from, next) {
  //     topBar('default')
  //     next()
  //   }
  // },
  {
    path: '/1v1',
    name: 'Piou 1v1',
    component: Mode1v1,
    beforeEnter (to, from, next) {
      topBar('default')
      next()
    }
  },
  {
    path: '/play',
    name: 'Piou group game',
    component: ModeGroup,
    beforeEnter (to, from, next) {
      topBar('default')
      next()
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

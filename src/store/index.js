import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    topBar: 'expanded',
    gameMode: ''
  },
  mutations: {
    topBar (state, set) {
      state.topBar = set
    },
    gameMode (state, mode) {
      state.gameMode = mode
    }
  },
  actions: {
  },
  modules: {
  }
})

export default store

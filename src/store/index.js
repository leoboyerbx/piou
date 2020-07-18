import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    topBar: 'expanded',
    gameSettings: {}
  },
  mutations: {
    topBar (state, set) {
      state.topBar = set
    },
    gameSettings (state, settings) {
      state.gameSettings = settings
    }
  },
  actions: {
  },
  modules: {
  }
})

export default store

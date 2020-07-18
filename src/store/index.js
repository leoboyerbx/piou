import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentStep: 'initial',
    gameMode: ''
  },
  mutations: {
    currentStep (state, step) {
      state.currentStep = step
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

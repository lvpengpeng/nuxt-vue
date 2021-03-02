import Vue from 'vue'
import Vuex from 'vuex'
import filter from './filter';

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    counter: 0
  },
  mutations: {
    increment (state) {
      state.counter++
    }
  },
  modules: {
    filter
  }
})

export default store
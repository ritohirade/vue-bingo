import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    remainingNumber: allRange(75),
    resultNumber: 0,
    history: [1, 2, 3],
    nowShuffle: false
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

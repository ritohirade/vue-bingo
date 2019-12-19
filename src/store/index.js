import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  mutations,
  state: {
    remainingNumber: allRange(75),
    resultNumber: 0,
    history: [1, 2, 3],
    nowShuffle: false
  }
});

function allRange(num) {
  if (typeof num !== 'number') {
    return null;
  }
  const args = [];
  for (let i = 1;i <= num; i++) {
    args.push(i);
  }
  return args;
}

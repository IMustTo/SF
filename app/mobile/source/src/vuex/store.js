import Vue from 'vue';
import Vuex from 'vuex';
import count from './modules/count';

Vue.use(Vuex);

/* eslint-disable no-new */
export default new Vuex.Store({
  modules: {
      count, // eslint-disable-line
  },
});

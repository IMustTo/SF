export default {
  state: {
    count: 0,
  },

  actions: {
    addNum: ({ commit }, data) => {
      setTimeout(() => {
        commit('ADD', data);
      }, 2000);
    },
  },

  getters: {
    getCount: state => state.count,
  },

  mutations: {
    ADD(state, { num }) {
      state.count += num;
    },
  },
};

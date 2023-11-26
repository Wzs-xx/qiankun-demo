import { createStore } from 'vuex';

export default createStore({
  state: {
    GlobalData: {},
  },
  mutations: {
    setGlobalData(state, value) {
      state.GlobalData = value;
    },
  },
  actions: {},
  modules: {},
});

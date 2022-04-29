import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modalOpen: false,
  },
  mutations: {
    toggleModal (state) {
      // mutate state
      state.modalOpen ? state.modalOpen = false : state.modalOpen = true;
    }
  },
  actions: {
    toggleModal(context){
      context.commit('toggleModal');
    }
  },
  modules: {
  },
});

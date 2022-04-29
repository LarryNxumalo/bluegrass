import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // modalOpen: [
    //   {
    //     backdrop: false,
    //     removal: true,
    //     toast: false,
    //   }
    // ],
    modalOpen: {
      backdrop: false,
      removal: true,
      toast: false,
    }
  },
  mutations: {
    toggleModalB (state) {
      // mutate state
      state.modalOpen.backdrop ? state.modalOpen.backdrop = true : state.modalOpen.backdrop = false;
    },
    toggleModalT (state) {
      // mutate state
      state.modalOpen.toast ? state.modalOpen.toast = false : state.modalOpen.toast = true;
    },
    toggleModalR (state) {
      // mutate state
      state.modalOpen.removal ? state.modalOpen.removal = false : state.modalOpen.removal = true;
    },
  },
  actions: {
    toggleModalB(context){
      context.commit('toggleModalB');
    },
    toggleModalT(context){
      context.commit('toggleModalT');
    },
    toggleModalR(context){
      context.commit('toggleModalR');
    },
  },
  modules: {
  },
});

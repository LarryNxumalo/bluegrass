import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      token: '',
      id: '',
      is_admin: false,
      is_logged_in: false,
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});

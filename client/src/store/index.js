import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:3000/api' });

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    currentUser: null,
    products: null,
    carts: null,
  },
  mutations: {
    fetchAllProducts(state, payload) {
      state.products = [...payload];
    },
    login(state, payload) {
      state.isLoggedIn = true;
      state.currentUser = payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = null;
    },
  },
  actions: {
    requestAllProducts({ commit }) {
      api
        .get('/products', {
          method: 'GET',
        })
        .then((result) => {
          commit('fetchAllProducts', result.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    checkLoginStatus({ commit }) {
      if (localStorage.getItem('token')) {
        commit('login');
      } else {
        commit('logout');
      }
    },
    logout({ commit }) {
      localStorage.clear();
      commit('logout');
    },
  },
  modules: {
  },
});

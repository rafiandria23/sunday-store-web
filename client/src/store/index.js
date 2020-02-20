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
    FETCH_ALL_PRODUCTS(state, payload) {
      state.products = [...payload];
    },
    LOGIN(state) {
      state.isLoggedIn = true;
    },
    LOGOUT(state) {
      state.isLoggedIn = false;
      state.currentUser = null;
    },
    SET_CURRENT_USER(state, payload) {
      state.currentUser = { ...payload };
    },
  },
  actions: {
    requestAllProducts({ commit }) {
      api
        .get('/products', {
          method: 'GET',
        })
        .then((result) => {
          commit('FETCH_ALL_PRODUCTS', result.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    checkLoginStatus({ commit }) {
      if (localStorage.getItem('token')) {
        commit('LOGIN');
      } else {
        commit('LOGOUT');
      }
    },
    logout({ commit }) {
      localStorage.clear();
      commit('LOGOUT');
    },
  },
  modules: {
  },
});

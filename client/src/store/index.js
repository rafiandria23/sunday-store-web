import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

let api = null;

if (process.env.NODE_ENV !== "production") {
  api = axios.create({ baseURL: "http://localhost:3000/api" });
} else {
  api = axios.create({ baseURL: "https://sunday-store.herokuapp.com/api" });
}

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    currentUser: null,
    isSuperAdmin: false,
    products: null,
    carts: null
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
      state.isSuperAdmin = false;
      state.currentUser = null;
    },
    SET_CURRENT_USER(state, payload) {
      state.currentUser = { ...payload };
    },
    SET_SUPER_ADMIN(state) {
      state.isSuperAdmin = true;
    }
  },
  actions: {
    requestAllProducts({ commit }) {
      api
        .get("/products", {
          method: "GET"
        })
        .then(result => {
          commit("FETCH_ALL_PRODUCTS", result.data);
        })
        .catch(err => {
          console.log(err.response);
        });
    },
    checkLoginStatus({ commit }) {
      if (localStorage.getItem("token")) {
        api
          .get("/users/check", { headers: { token: localStorage.getItem("token") } })
          .then(({ data }) => {
            localStorage.setItem("currentUser", JSON.stringify(data.currentUser));
            commit("LOGIN");
            commit("SET_CURRENT_USER", JSON.parse(localStorage.getItem("currentUser")));
            this.dispatch("checkRole");
          })
          .catch(err => console.log(err.response));
      } else {
        commit("LOGOUT");
      }
    },
    logout({ commit }) {
      localStorage.clear();
      commit("LOGOUT");
    },
    checkRole({ commit }) {
      if (this.state.currentUser) {
        switch (this.state.currentUser.role) {
          case "Super Admin":
            commit("SET_SUPER_ADMIN");
            break;

          default:
            break;
        }
      }
    }
  },
  modules: {}
});

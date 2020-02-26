import Vue from "vue";
import io from "socket.io-client";
import VueSocketIOExt from "vue-socket.io-extended";
import axios from "axios";
import Swal from "sweetalert2";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

let rates = null;

const currencyRates = async () => {
  await axios
    .get("https://api.exchangeratesapi.io/latest?base=USD")
    .then(({ data }) => {
      rates = data.rates.IDR;
    })
    .catch(err => {
      console.log(err.response);
    });
};

currencyRates();

Vue.prototype.$Swal = Swal;

let socket = null;

if (process.env.NODE_ENV !== "production") {
  Vue.prototype.$axios = axios.create({ baseURL: "http://localhost:3000/api" }); // process.env.DEV_API_URL
  socket = io("http://localhost:3000");
} else {
  Vue.prototype.$axios = axios.create({ baseURL: "https://sunday-store.herokuapp.com/api" });
  socket = io("https://sunday-store.herokuapp.com");
}

Vue.use(VueSocketIOExt, socket);

const getFormatter = async () => {
  await axios
    .get("https://api.ipgeolocation.io/ipgeo?apiKey=d679a3798b774ad9868c9689705f5f97")
    .then(({ data }) => {
      if (data.country_code2 === "ID") {
        Vue.prototype.$currencyFormatter = input => {
          const formatter = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
          });
          return formatter.format(input * rates);
        };
      } else {
        Vue.prototype.$currencyFormatter = input => {
          const formatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
          });
          return formatter.format(input);
        };
      }
    });
}

getFormatter();

new Vue({
  router,
  store,
  render: h => h(App),
  watch: {
    $route(to, from) {
      document.title = `Sunday Store | ${to.meta.title}` || "Sunday Store";
    }
  }
}).$mount("#app");

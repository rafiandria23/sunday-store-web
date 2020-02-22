import Vue from 'vue';
import io from 'socket.io-client';
import VueSocketIOExt from 'vue-socket.io-extended';
import axios from 'axios';
import Swal from 'sweetalert2';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.prototype.$Swal = Swal;

let socket = null;

if (process.env.NODE_ENV !== 'production') {
  Vue.prototype.$axios = axios.create({ baseURL: 'http://localhost:3000/api' }); // process.env.DEV_API_URL
  socket = io('http://localhost:3000/api');
} else {
  Vue.prototype.$axios = axios.create({ baseURL: process.env.API_URL });
  socket = io(process.env.API_URL);
}

Vue.use(VueSocketIOExt, socket);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

import Vue from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.prototype.$Swal = Swal;
Vue.prototype.$axios = axios.create({ baseURL: 'http://localhost:3000/api' }); // process.env.DEV_API_URL


// if (process.env.NODE_ENV === 'development' || 'test') {
//   Vue.prototype.axios = axios({ baseURL: 'http://localhost:3000/api' }); // process.env.DEV_API_URL
// } else {
//   Vue.prototype.axios = axios({ baseURL: process.env.API_URL });
// }

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

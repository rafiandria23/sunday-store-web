import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import RegisterForm from '@/components/RegisterForm.vue';
import LoginForm from '@/components/LoginForm.vue';
import ProductContainer from '@/components/ProductContainer.vue';
import ProductDetail from '@/components/ProductDetail.vue';
import Dashboard from '@/components/Dashboard.vue';
import AddProduct from '@/components/AddProduct.vue';
import EditProduct from '@/components/EditProduct.vue';
import Home from '../views/Home.vue';

const api = axios.create({ baseURL: 'http://localhost:3000/api' });

Vue.use(VueRouter);

const beforeEnter = async (to, from, next) => {
  if (localStorage.getItem('token')) {
    await api
      .get('/users/check', { headers: { token: localStorage.getItem('token') } })
      .then(({ data }) => {
        console.log(data.message);
        next({ path: from.path });
      })
      .catch((err) => console.log(err.response));
  } else {
    next();
  }
};

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterForm,
    beforeEnter,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginForm,
    beforeEnter,
  },
  {
    path: '/users/:UserId',
    name: 'User',
    props: true,
    meta: { requiresAuth: true },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'products',
        name: 'Products',
        component: ProductContainer,
      },
      {
        path: 'edit-product/:ProductId',
        name: 'Edit Product',
        component: EditProduct,
        props: true,
      },
      {
        path: 'add-product',
        name: 'Add Product',
        component: AddProduct,
        props: true,
      },
    ],
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductContainer,
  },
  {
    path: '/products/:ProductId',
    name: 'Product',
    component: ProductDetail,
    props: true,
  },
  {
    path: '/carts',
    name: 'Carts',
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem('token')) {
      api.get('/users/check', { headers: { token: localStorage.getItem('token') } })
        .then(({ data }) => {
          console.log(data.message);
          next();
        })
        .catch((err) => console.log(err.response));
    } else {
      next({ name: 'Login' });
    }
  } else {
    next();
  }
});

export default router;

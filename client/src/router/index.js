import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";
import RegisterForm from "@/components/RegisterForm.vue";
import LoginForm from "@/components/LoginForm.vue";
import ProductContainer from "@/components/ProductContainer.vue";
import ProductDetail from "@/components/ProductDetail.vue";
import Dashboard from "@/components/Dashboard.vue";
import AddProduct from "@/components/AddProduct.vue";
import EditProduct from "@/components/EditProduct.vue";
import CartContainer from "@/components/CartContainer.vue";
import TransactionContainer from "@/components/TransactionContainer.vue";
import Home from "../views/Home.vue";

let api = null;

if (process.env.NODE_ENV !== "production") {
  api = axios.create({ baseURL: "http://localhost:3000/api" });
} else {
  api = axios.create({ baseURL: "https://sunday-store.herokuapp.com/api" });
}

Vue.use(VueRouter);

const beforeEnter = async (to, from, next) => {
  if (localStorage.getItem("token")) {
    await api
      .get("/users/check", { headers: { token: localStorage.getItem("token") } })
      .then(({ data }) => {
        console.log(data.message);
        next({ path: from.path });
      })
      .catch(err => console.log(err.response));
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home"
    }
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterForm,
    meta: {
      title: "Register"
    },
    beforeEnter
  },
  {
    path: "/login",
    name: "Login",
    component: LoginForm,
    meta: {
      title: "Login"
    },
    beforeEnter
  },
  {
    path: "/users/:UserId",
    name: "User",
    props: true,
    meta: {
      requiresAuth: true,
      title: "Profile"
    }
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true,
      title: "Dashboard"
    },
    children: [
      {
        path: "products",
        name: "Products",
        component: ProductContainer,
        meta: {
          title: "Products"
        }
      },
      {
        path: "carts",
        name: "Carts",
        component: CartContainer,
        meta: {
          title: "Carts"
        }
      },
      {
        path: "transactions",
        name: "Transactions",
        component: TransactionContainer,
        meta: {
          title: "Transactions"
        }
      },
      {
        path: "edit-product/:ProductId",
        name: "Edit Product",
        component: EditProduct,
        props: true,
        meta: {
          title: "Edit Product"
        }
      },
      {
        path: "add-product",
        name: "Add Product",
        component: AddProduct,
        props: true,
        meta: {
          title: "Add Product"
        }
      }
    ]
  },
  {
    path: "/products",
    name: "Products",
    component: ProductContainer,
    meta: {
      title: "Products"
    }
  },
  {
    path: "/products/:ProductId",
    name: "Product",
    component: ProductDetail,
    props: true,
    meta: {
      title: "Product Detail"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("token")) {
      api
        .get("/users/check", { headers: { token: localStorage.getItem("token") } })
        .then(({ data }) => {
          next();
        })
        .catch(err => console.log(err.response));
    } else {
      next({ name: "Login" });
    }
  } else {
    next();
  }
});

export default router;

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" to="/">Sunday Store</router-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link id="home" class="nav-link" to="/" exact>Home</router-link>
          </li>
          <li class="nav-item">
            <router-link
              v-if="checkRole() && isLoggedIn()"
              class="nav-link"
              to="/dashboard/products"
              >Dashboard</router-link
            >
            <router-link v-if="!checkRole() && isLoggedIn()" class="nav-link" to="/dashboard"
              >Dashboard</router-link
            >
          </li>
          <li class="nav-item dropdown">
            <!-- <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Dropdown</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div> -->
          </li>
        </ul>
        <div class="form-inline my-2 my-lg-0">
          <ul class="navbar-nav mr-auto">
            <li v-if="!isLoggedIn()" class="nav-item d-flex">
              <router-link class="nav-link" to="/register">Register</router-link>
              <p class="nav-link">or</p>
            </li>
            <li class="nav-item ml-1">
              <router-link
                v-if="!isLoggedIn()"
                class="btn btn-outline-dark my-2 my-sm-0"
                to="/login"
                >Login</router-link
              >
              <button
                v-if="isLoggedIn()"
                @click="logout"
                type="button"
                class="btn btn-outline-dark my-2 my-sm-0"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
    logout() {
      this.$store.dispatch('logout');
      this.$router.push({ name: 'Login' });
      this.$store.dispatch('checkLoginStatus');
    },
    checkRole() {
      return this.$store.state.isSuperAdmin;
    }
  }
};
</script>

<style lang="sass" scoped></style>

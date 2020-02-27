<template>
  <div class="container shadow p-5 rounded login-form">
    <h1>Login</h1>
    <form @submit.prevent="login" autocomplete="on">
      <div class="form-group">
        <label for="user_email">Email Address</label>
        <input
          v-model="userData.user_email"
          type="email"
          class="form-control"
          id="user_email"
          placeholder="Enter your email..."
          required
        />
      </div>
      <div class="form-group">
        <label for="user_password">Password</label>
        <input
          v-model="userData.user_password"
          type="password"
          class="form-control"
          id="user_password"
          placeholder="Enter password..."
          autocomplete="on"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
      <Spinner v-if="isLoading" />
    </form>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue';

export default {
  components: {
    Spinner
  },
  data() {
    return {
      isLoading: false,
      userData: {
        user_email: '',
        user_password: ''
      }
    };
  },
  methods: {
    login() {
      this.isLoading = true;
      this.$axios
        .post('/users/login', {
          email: this.userData.user_email,
          password: this.userData.user_password
        })
        .then(({ data }) => {
          this.isLoading = false;
          const Toast = this.$Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: toast => {
              toast.addEventListener('mouseenter', this.$Swal.stopTimer);
              toast.addEventListener('mouseleave', this.$Swal.resumeTimer);
            }
          });
          Toast.fire({
            icon: 'success',
            title: 'Successfully logged in!'
          });
          localStorage.setItem('token', data.token);
          this.$store.dispatch('checkLoginStatus');
          this.$router.push({ name: 'Home' });
        })
        .catch(err => {
          this.isLoading = false;
          this.$Swal.fire({
            icon: 'error',
            title: 'Validation Error!',
            text: err.response.data.message
          });
          console.log(err.response);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.login-form {
  max-width: 400px;
}
</style>

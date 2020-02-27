<template>
  <div class="container">
    <form @submit.prevent="register" autocomplete="on">
      <div class="form-group">
        <label for="user_fullname">Full Name</label>
        <input
          v-model="userData.user_fullname"
          type="text"
          class="form-control"
          id="user_fullname"
          placeholder="Enter your full name..."
          required
        />
      </div>
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
          required
          autocomplete="on"
        />
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
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
        user_fullname: '',
        user_email: '',
        user_password: ''
      }
    };
  },
  methods: {
    register() {
      this.$axios
        .post('/users/register', {
          name: this.userData.user_fullname,
          email: this.userData.user_email,
          password: this.userData.user_password
        })
        .then(result => {
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
            title: 'Successfully registered!',
            text: result.data.message
          });
          this.$router.push({ name: 'Login' });
        })
        .catch(err => {
          this.isLoading = false;
          this.$Swal.fire({
            icon: 'error',
            title: 'Validation Error!',
            html: err.response.data.message.join('<br>')
          });
          console.log(err.response);
        });
    }
  }
};
</script>

<style lang="sass" scoped></style>

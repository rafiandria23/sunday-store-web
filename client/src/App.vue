<template>
  <div id="app">
    <Header />
    <router-view class="main" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header
  },
  sockets: {
    connect() {
      // console.log('Socket is connected!');
    },
    reloadProducts(data) {
      this.$store.dispatch("requestAllProducts");
      this.$store.dispatch("checkLoginStatus");
      this.$router.push({ name: "Products" });
    },
    reloadCarts(data) {
      this.$store.dispatch("requestAllProducts");
      this.$store.dispatch("checkLoginStatus");
      this.$router.push({ name: "Carts" }).catch(err => {});
    }
  },
  created() {
    this.$store.dispatch("requestAllProducts");
    this.$store.dispatch("checkLoginStatus");
  },
  beforeMount() {
    this.$store.dispatch("checkRole");
  }
};
</script>

<style lang="scss">
.main {
  margin-top: 2em;
}
</style>

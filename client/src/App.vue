<template>
  <div id="app">
    <Header/>
    <router-view class="main"/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {
    Header,
  },
  created() {
    this.$store.dispatch('requestAllProducts');
    this.$store.dispatch('checkLoginStatus');
  },
};
</script>

<style lang="scss">
  .main {
    margin-top: 2em;
  }
</style>

<template>
  <div class="home">
    <ProductContainer/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductContainer from '@/components/ProductContainer.vue';

export default {
  name: 'Home',
  components: {
    ProductContainer,
  },
};
</script>

<style lang="sass" scoped>

</style>

<template>
  <div class="home">
    <ProductCarousel :products="this.$store.state.products"/>
    <ProductContainer />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductContainer from "@/components/ProductContainer.vue";
import ProductCarousel from "@/components/ProductCarousel.vue";

export default {
  name: "Home",
  components: {
    ProductContainer,
    ProductCarousel
  }
};
</script>

<style lang="sass" scoped></style>

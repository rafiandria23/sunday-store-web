<template>
  <div v-if="getAllProducts()"
  class="d-flex container justify-content-around flex-wrap">
    <div
    class="d-flex flex-column align-items-stretch card my-3 product-card"
    style="width: 18rem;"
    v-for="(product, idx) in getAllProducts()"
    :key="idx">
      <img :src="product.image_url" class="card-img-top" :alt="product.name">
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">{{ product.description }}</p>
        <router-link
          class="btn btn-primary m-1"
          :to="{name: 'Product', params: {ProductId: product.id}}">
          See Product
        </router-link>
        <router-link
          v-if="checkRole()"
          class="btn btn-secondary m-1"
          :to="{name: 'Edit Product',  params: {ProductId: product.id}, }">
          Edit Product
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductContainer',
  methods: {
    getAllProducts() {
      return this.$store.state.products;
    },
    checkRole() {
      return this.$store.state.isSuperAdmin;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

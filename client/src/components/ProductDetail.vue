<template>
  <div v-if="product" class="jumbotron product-container jumbotron-fluid d-flex">
    <div class="container product-heading">
      <h1 class="display-4">{{ product.name }}</h1>
      <p class="lead">
        {{ product.description }}
      </p>
    </div>
    <div
    class="shadow d-flex flex-column align-items-stretch card my-3 product-card"
    style="width: 18rem;">
      <img :src="product.image_url" class="card-img-top" :alt="product.name">
      <div class="card-body">
        <h5 class="card-title">{{ product.price }}</h5>
        <p class="card-text">{{ product.stock }} Left</p>
        <router-link
          class="btn btn-primary"
          :to="{name: 'Product', params: {ProductId: product.id}}">
          Add to Cart
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  props: ['ProductId'],
  data() {
    return {
      product: null,
    };
  },
  created() {
    this.$axios.get(`/products/${this.ProductId}`)
      .then((result) => {
        console.log(result.data);
        this.product = { ...result.data };
      })
      .catch((err) => {
        console.log(err.message);
      });
  },
};
</script>

<style lang="scss" scoped>
  .product-container {
    max-height: 250px;

    .product-heading {
      max-width: 40em;
      max-height: 250px;
    }

    .product-card {
      position: absolute;
      z-index: 100;
      right: 0;
      text-align: center;
      margin: 4em;
    }
  }
</style>

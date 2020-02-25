<template>
  <div class="cart-container">
    <ul class="list-group list-group-flush">
      <li class="list-group-item" v-for="cart in carts" :key="cart.id">
        <img src="..." alt="..." class="img-thumbnail">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CartContainer",
  computed: {
    carts() {
      const carts = this.$store.state.currentUser.Carts;
      const cartWithProducts = this.$store.state.products.map(product => {
        
      })
    }
  }
};
</script>

<style lang="scss" scoped></style>

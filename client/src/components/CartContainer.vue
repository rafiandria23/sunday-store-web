<template>
  <div class="cart-container" v-if="getCarts().length !== 0">
    <ul class="list-group list-group-flush">
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
        v-for="cart in getCarts()"
        :key="cart.id"
      >
        <img
          :src="cart.productDetail.image_url"
          :alt="cart.productDetail.name"
          class="img-thumbnail"
        />
        <div class="cart-detail">
          <h5><div class="text-primary product-title" type="button" @click.prevent="toProductDetail(cart.productDetail.id)">{{ cart.productDetail.name }}</div></h5>
          <QtyForm class="mt-3" :cart="cart"/>
        </div>
        <h5><strong>{{ currencyFormatter(cart.productDetail.price) }}</strong></h5>
      </li>
    </ul>
  </div>
</template>

<script>
import QtyForm from "@/components/QtyForm.vue";

export default {
  name: "CartContainer",
  components: {
    QtyForm
  },
  methods: {
    getCarts() {
      const carts = [];
      this.$store.state.currentUser.Carts.map(cart => {
        this.$store.state.products.map(product => {
          if (cart.ProductId === product.id) {
            cart.productDetail = product;
            carts.push(cart);
          }
        });
      });
      return carts;
    },
    currencyFormatter(input) {
      return this.$currencyFormatter(input);
    },
    toProductDetail(ProductId) {
      return this.$router.push({path: `/products/${ProductId}`});
    }
  }
};
</script>

<style lang="scss" scoped>
.cart-detail {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h6 {
    word-wrap: break-word;
  }

  .product-title:hover {
    text-decoration: underline;
  }
}
</style>

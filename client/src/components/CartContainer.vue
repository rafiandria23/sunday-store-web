<template>
  <div>
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
            <h6>
              <div
                class="text-primary product-title text-justify px-4"
                type="button"
                @click.prevent="toProductDetail(cart.productDetail.id)"
              >
                {{ cart.productDetail.name }}
              </div>
            </h6>
            <QtyForm class="mt-3" :cart="cart" />
          </div>
          <h5>
            <strong>{{ currencyFormatter(cart.productDetail.price) }}</strong>
          </h5>
        </li>
        <li class="list-group-item">
          <div class="d-felx justify-content-between text-right">
            <h5>Subtotal {{ `(${totalItems} items)` }}</h5>
            <h5>
              <strong>{{ `${currencyFormatter(getSubtotal)}` }}</strong>
            </h5>
          </div>
        </li>
      </ul>
      <button class="btn btn-primary mt-3 float-right" type="button" @click="checkout">
        Proceed to Checkout
      </button>
    </div>
    <div v-else>
      No carts for now. Let's go Shopping!
    </div>
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
      return this.$router.push({ path: `/products/${ProductId}` });
    },
    checkout() {
      // show payment methods here
      this.$axios
        .post(
          "/transactions",
          { carts: this.getCarts() },
          { headers: { token: localStorage.getItem("token") } }
        )
        .then(({ data }) => {
          this.deleteAllCarts();
        })
        .catch(err => {
          console.log(err.response);
        });
    },
    deleteAllCarts() {
      this.$axios
        .put(
          "/carts/checkout",
          { carts: this.getCarts() },
          { headers: { token: localStorage.getItem("token") } }
        )
        .then(({ data }) => {
          console.log(data.result);
        })
        .catch(err => {
          console.log(err.response);
        });
    }
  },
  computed: {
    getSubtotal() {
      const prices = [];
      this.getCarts().forEach(cart => {
        prices.push(cart.productDetail.price * cart.amount);
      });
      return prices.reduce((acc, curVal) => acc + curVal);
    },
    totalItems() {
      if (this.getCarts().length === 1) {
        return this.getCarts()[0].amount;
      } else {
        let totalItems = null;
        this.getCarts().forEach(cart => {
          totalItems += cart.amount;
        });
        return totalItems;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.cart-container {
  .img-thumbnail {
    height: 180px;
    object-fit: contain;
  }
}

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

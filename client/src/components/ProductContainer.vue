<template>
  <div v-if="getAllProducts()" class="d-flex container justify-content-around flex-wrap">
    <div
      class="d-flex flex-column align-items-stretch card my-3 product-card"
      style="width: 18rem;"
      v-for="(product, idx) in getAllProducts()"
      :key="idx"
    >
      <img :src="product.image_url" class="card-img-top" :alt="product.name" />
      <div class="card-body">
        <router-link
          class="card-title"
          :to="{ name: 'Product', params: { ProductId: product.id } }"
        >
          <strong>{{ product.name }}</strong>
        </router-link>
        <h4 class="m-3"><strong>{{ currencyFormatter(product.price) }}</strong></h4>
        <div class="mt-4">
          <router-link
            class="btn btn-secondary m-1"
            :to="{ name: 'Product', params: { ProductId: product.id } }"
          >
            See Product
          </router-link>
          <button
            type="button"
            v-if="!checkRole()"
            class="btn btn-primary m-1"
            @click.prevent="addCart(product.id)"
          >
            Add to Cart
          </button>
          <router-link
            v-if="checkRole()"
            class="btn btn-primary m-1"
            :to="{ name: 'Edit Product', params: { ProductId: product.id } }"
          >
            Edit Product
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductContainer",
  methods: {
    getAllProducts() {
      return this.$store.state.products;
    },
    checkRole() {
      return this.$store.state.isSuperAdmin;
    },
    addCart(ProductId) {
      const cartData = {
        ProductId: Number(ProductId)
      };
      const token = localStorage.getItem("token");
      this.$axios
        .post("/carts", cartData, { headers: { token } })
        .then(({ data }) => {
          const Toast = this.$Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: toast => {
              toast.addEventListener("mouseenter", this.$Swal.stopTimer);
              toast.addEventListener("mouseleave", this.$Swal.resumeTimer);
            }
          });
          Toast.fire({
            icon: "success",
            title: data.message
          });
          // this.$router.push({ name: "Home" });
        })
        .catch(err => {
          console.log(err.response);
        });
    },
    currencyFormatter(input) {
      return this.$currencyFormatter(input);
    }
  }
};
</script>

<style lang="scss" scoped></style>

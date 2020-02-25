<template>
  <div v-if="product" class="jumbotron product-container d-flex my-0">
    <div class="container product-heading">
      <h1 class="display-4">{{ product.name }}</h1>
      <p class="lead">
        {{ product.description }}
      </p>
    </div>
    <div
      class="shadow d-flex flex-column align-items-center card my-3 product-card"
      style="width: 18rem;"
    >
      <img :src="product.image_url" class="card-img-top" :alt="product.name" />
      <div class="card-body">
        <h5 class="card-title">{{ product.price }}</h5>
        <p class="card-text">{{ product.stock }} Left</p>
        <!-- <router-link
          class="btn btn-primary"
          :to="{ name: 'Product', params: { ProductId: product.id } }"
        >
          Add to Cart
        </router-link> -->
        <button type="button" class="btn btn-primary" @click.prevent="addCart()">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetail",
  props: ["ProductId"],
  data() {
    return {
      product: null
    };
  },
  created() {
    this.$axios
      .get(`/products/${this.ProductId}`)
      .then(result => {
        this.product = { ...result.data };
      })
      .catch(err => {
        console.log(err.response);
      });
  },
  methods: {
    addCart() {
      const cartData = {
        ProductId: Number(this.ProductId)
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
          this.$router.push({ name: "Home" });
        })
        .catch(err => {
          console.log(err.response);
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>

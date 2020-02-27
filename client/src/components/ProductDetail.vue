<template>
  <div v-if="product" class="jumbotron product-container d-flex justify-content-between my-0">
    <div class="container product-heading px-5">
      <h3 class="text-justify">{{ product.name }}</h3>
      <div class="text-justify mt-5">
        {{ product.description }}
      </div>
    </div>
    <div
      class="shadow d-flex flex-column align-items-center pt-4 card product-card"
      style="width: 40rem;"
    >
      <img :src="product.image_url" class="card-img-top" :alt="product.name" />
      <div class="card-body d-flex flex-column align-items-center">
        <h4 class="card-title pt-4"><strong>{{ this.$currencyFormatter(product.price) }}</strong></h4>
          In Stock <em class="card-text">{{ product.stock }} Left</em>
        <button v-if="!checkRole()" type="button" class="btn btn-primary" @click.prevent="addCart()">
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
    },
    checkRole() {
      return this.$store.state.isSuperAdmin;
    }
  }
};
</script>

<style lang="scss" scoped></style>

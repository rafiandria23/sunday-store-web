<template>
  <div class="edit-product">
    <img :src="productData.image_url" :alt="productData.name" class="img-thumbnail mb-4">
    <form @submit.prevent="editProduct">
      <div class="form-group">
        <label for="edit-product-name">Product Name</label>
        <input
          type="text"
          class="form-control"
          id="edit-product-name"
          v-model="productData.name"
        />
      </div>
      <div class="form-group">
        <label for="edit-product-description">Product Description</label>
        <textarea
          type="text"
          class="form-control"
          id="edit-product-description"
          rows="3"
          v-model="productData.description"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="edit-product-image-url">Product Image URL</label>
        <input
          type="text"
          class="form-control"
          id="edit-product-image-url"
          v-model="productData.image_url"
        />
      </div>
      <div class="form-group">
        <label for="edit-product-price">Product Price</label>
        <input
          type="number"
          class="form-control"
          id="edit-product-price"
          v-model="productData.price"
        />
      </div>
      <div class="form-group">
        <label for="edit-product-stock">Product Stocks</label>
        <input
          type="number"
          class="form-control"
          id="edit-product-stock"
          v-model="productData.stock"
        />
      </div>
      <button type="submit" class="btn btn-primary">Edit Product</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditProduct',
  data() {
    return {
      productData: null,
      ProductId: this.$route.params.ProductId,
    };
  },
  beforeCreate() {
    const ProductId = this.$route.params.ProductId;
    this.$axios.get(`products/${ProductId}`)
      .then(({data}) => {
        this.productData = {...data};
      })
      .catch((err) => {
        console.log(err.response);
      });
  },
  methods: {
    editProduct() {
      const token = localStorage.getItem('token');
      this.$axios.put(`products/${this.ProductId}`, {...this.productData}, {headers: {token}})
      .then(({data}) => {
        this.$router.push({name: 'Products'});
      })
      .catch((err) => {
        console.log(err.response);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
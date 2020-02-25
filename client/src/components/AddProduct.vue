<template>
  <div class="edit-product">
    <img :src="productData.image_url" :alt="productData.name" class="img-thumbnail mb-4" />
    <form @submit.prevent="editProduct">
      <div class="form-group">
        <label for="edit-product-name">Product Name</label>
        <input type="text" class="form-control" id="edit-product-name" v-model="productData.name" />
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
      <button type="submit" class="btn btn-primary">Add Product</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
  data() {
    return {
      productData: {
        name: null,
        description: null,
        image_url: null,
        price: null,
        stock: null
      }
    };
  },
  methods: {
    editProduct() {
      const passed = [];
      const failed = [];
      for (const key in this.productData) {
        if (!this.productData[key]) {
          failed.push(key);
        } else {
          passed.push('passed');
        }
      }

      if (failed.length > 0) {
        this.$Swal.fire({
          icon: 'error',
          title: 'Validation Error!',
          html: `Product <b>${failed[0]}</b> cannot be empty or null!`
        });
      }

      if (passed.length == Object.keys(this.productData).length) {
        const token = localStorage.getItem('token');
        this.$axios
          .post('/products', { ...this.productData }, { headers: { token } })
          .then(({ data }) => {
            // this.$router.push({name: 'Products'});
          })
          .catch(err => {
            console.log(err.response);
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>

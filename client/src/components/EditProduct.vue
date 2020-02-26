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
        <div class="d-flex align-items-center">
          <h5 class="mr-2">$</h5>
          <input
            type="number"
            class="form-control"
            id="edit-product-price"
            min="0.01" step="0.01"
            v-model="productData.price"
          />
        </div>
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
      <div class="d-flex justify-content-between mt-5">
        <button type="submit" class="btn btn-primary">Edit Product</button>
        <h6 type="button" @click="deleteProduct" class="text-danger">Delete Product</h6>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditProduct',
  data() {
    return {
      productData: {},
      ProductId: this.$route.params.ProductId
    };
  },
  beforeCreate() {
    const { ProductId } = this.$route.params;
    this.$axios
      .get(`/products/${ProductId}`)
      .then(({ data }) => {
        this.productData = { ...data };
      })
      .catch(err => {
        console.log(err.response);
      });
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
          .put(`products/${this.ProductId}`, { ...this.productData }, { headers: { token } })
          .then(({ data }) => {
            // this.$router.push({name: 'Products'});
          })
          .catch(err => {
            console.log(err.response);
          });
      }
    },
    deleteProduct() {
      this.$Swal
        .fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        })
        .then(result => {
          if (result.value) {
            const token = localStorage.getItem('token');
            this.$axios
              .delete(`products/${this.ProductId}`, { headers: { token } })
              .then(({ data }) => {
                // this.$router.push({name: 'Products'});
              })
              .catch(err => {
                console.log(err.response);
              });
            this.$Swal.fire('Deleted!', 'Product has been deleted.', 'success');
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>

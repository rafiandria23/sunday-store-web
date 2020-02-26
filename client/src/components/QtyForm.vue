<template>
  <div class="qty-form">
    <form class="form-inline" @submit.prevent="changeAmount()">
      <div v-if="!qtyForm" class="form-group">
        <label class="mr-2">Qty:</label>
        <select v-model="cartAmount" @change="showQtyForm()" class="form-control">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10+</option>
        </select>
        <div class="text-primary delete-cart ml-2" type="button" @click.prevent="deleteCart()">
          Delete
        </div>
      </div>
      <div v-if="qtyForm" class="form-group">
        <label class="mr-2">Qty:</label>
        <input type="number" class="form-control qty-form" v-model="cartAmount" min="1" max="999" />
        <button class="btn-sm m-2 btn-primary" type="submit">Update</button>
        <div class="text-primary delete-cart" type="button" @click.prevent="deleteCart()">
          Delete
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "QtyForm",
  props: {
    cart: Object
  },
  data() {
    return {
      qtyForm: false,
      cartAmount: this.cart.amount
    };
  },
  mounted() {
    if (this.cartAmount >= 10) {
      this.qtyForm = true;
    } else {
      this.qtyForm = false;
    }
  },
  watch: {
    cartAmount(newAmount, oldAmount) {
      if (newAmount >= 10) {
        this.qtyForm = true;
        this.changeAmount();
      } else if (newAmount <= 0 || null) {
        this.cartAmount = 1;
        this.changeAmount();
      } else {
        this.qtyForm = false;
        this.changeAmount();
      }
    }
  },
  methods: {
    updateQty() {
      this.$axios
        .patch(
          `/carts/${this.cart.id}`,
          { amount: this.cartAmount },
          { headers: { token: localStorage.getItem("token") } }
        )
        .then(({ data }) => {
          // console.log(data.message);
        })
        .catch(err => {
          console.log(err.response);
        });
    },
    showQtyForm() {
      if (this.cartAmount >= 10) {
        this.qtyForm = true;
        this.updateQty();
      } else {
        this.updateQty();
      }
    },
    changeAmount() {
      this.updateQty();
    },
    deleteCart() {
      this.$axios
        .delete(`/carts/${this.cart.id}`, { headers: { token: localStorage.getItem("token") } })
        .then(({ data }) => {
          // console.log(data.message);
        })
        .catch(err => {
          console.log(err.response);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.qty-form {
  max-width: 80px !important;
}

.delete-cart {
  border-left: 1.5px solid #212529;
  padding-left: 8px;
}

.delete-cart:hover {
  text-decoration: underline;
}
</style>

<template>
  <div class="card" style="width: 14rem;">
    <img class="card-img-top" :src="transaction.productDetail.image_url" :alt="transaction.productDetail.name" />
    <div class="card-body">
      <h6 class="card-title">{{ transaction.productDetail.name }}</h6>
      <h6>Amount: {{ transaction.amount }}</h6>
      <small class="card-text">
        <strong>Paid at</strong>
        {{ new Date(time).toTimeString() }}
      </small>
      <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "TransactionCard",
  props: {
    transaction: Object,
    time: String
  }
};
</script>

<style></style>

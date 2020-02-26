<template>
  <div v-if="getTransactions().transactions.length !== 0">
    <div
      class="d-flex flex-column"
      v-for="(date, index) in getTransactions().dates"
      :key="index"
    >
      <h4>{{ new Date(date).toDateString() }}</h4>
      <div class="d-flex justify-content-between flex-wrap">
        <TransactionCard class="mt-2"
          v-for="(transaction, TransactionIdx) in getTransactions().transactions"
          :key="transaction.id"
          :transaction="transaction"
          :time="getTransactions().times[TransactionIdx]"
        ></TransactionCard>
      </div>
    </div>
  </div>
</template>

<script>
import TransactionCard from "./TransactionCard";

export default {
  name: "TransactionContainer",
  components: {
    TransactionCard
  },
  methods: {
    getTransactions() {
      const transactions = [];
      const dates = [];
      const times = [];
      this.$store.state.currentUser.Transactions.map(transaction => {
        this.$store.state.products.map(product => {
          if (transaction.ProductId === product.id) {
            transaction.productDetail = product;
            transactions.push(transaction);
          }
          dates.push(transaction.date.split("T")[0]);
          times.push(transaction.date);
        });
      });
      const finalDates = dates.filter((date, index) => {
        return dates.indexOf(date) === index;
      });
      const finalTimes = times.filter((time, index) => {
        return times.indexOf(time) === index;
      });
      return {
        transactions,
        dates: finalDates,
        times: finalTimes
      };
    }
  }
};
</script>

<style></style>

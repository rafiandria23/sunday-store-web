<template>
  <div class="dashboard" v-if="this.$store.state.currentUser">
    <div class="sidebar col-3">
      <div class="card" style="width: 18rem;">
        <img src="" class="card-img-top" alt="" />
        <div class="card-body">
          <h5 class="card-title">{{ this.getUserData().name }}</h5>
          <div class="card-text">
            <div>
              <small>Email</small>
              <p>{{ this.getUserData().email }}</p>
            </div>
          </div>
        </div>
        <ul class="list-group list-group-flush">
          <router-link v-if="checkRole()" class="list-group-item" :to="{ name: 'Products' }"
            >Product List</router-link
          >
          <div v-else>
          <router-link class="list-group-item" :to="{ name: 'Carts' }"
            >Cart List</router-link
          >
          <router-link class="list-group-item" :to="{ name: 'Transactions' }"
            >Transaction History</router-link
          >
          </div>
        </ul>
        <div class="card-body">
          <router-link
            :to="{ name: 'Edit Profile', params: { UserId: this.getUserData().id } }"
            class="card-link"
          >
            Edit Profile
          </router-link>
          <router-link v-if="checkRole()" :to="{ name: 'Add Product' }" class="card-link">
            Add Product
          </router-link>
        </div>
      </div>
    </div>
    <div class="content col-9">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  methods: {
    getUserData() {
      return {
        UserId: this.$store.state.currentUser.id,
        name: this.$store.state.currentUser.name,
        email: this.$store.state.currentUser.email,
        role: this.$store.state.currentUser.role
      };
    },
    checkRole() {
      return this.$store.state.isSuperAdmin;
    }
  }
};
</script>

<style lang="scss" scoped>
.dashboard {
  display: flex;
  justify-content: space-between;

  .sidebar {
    padding: 2em;
  }

  .content {
    padding: 3em;
  }

  .card-text div {
    display: flex;
    justify-content: space-evenly;
  }
}
</style>

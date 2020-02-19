<template>
  <div class="dashboard">
    <div class="sidebar col-3">
      <div
      class="card"
      style="width: 18rem;">
        <img
        src=""
        class="card-img-top"
        alt="">
        <div class="card-body">
          <h5 class="card-title">{{ this.userData.name }}</h5>
          <p class="card-text">
            Some quick example text to build
            on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
        <div class="card-body">
          <router-link
            :to="{ name: 'Edit Profile', params: { UserId: this.userData.UserId }}"
            class="card-link">
            Edit Profile
          </router-link>
          <router-link
            :to="{ name: 'Add Product' }"
            class="card-link">
            Add Product
          </router-link>
        </div>
      </div>
    </div>
    <div class="content col-9">
      <router-view/>
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action active">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">List group item heading</h5>
              <small>3 days ago</small>
            </div>
            <p class="mb-1">Donec id elit non mi porta
            gravida at eget metus. Maecenas sed diam
            eget risus varius blandit.</p>
            <small>Donec id elit non mi porta.</small>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">List group item heading</h5>
              <small class="text-muted">3 days ago</small>
            </div>
            <p class="mb-1">Donec id elit non mi porta gravida at
            eget metus. Maecenas sed diam eget risus varius blandit.</p>
            <small class="text-muted">Donec id elit non mi porta.</small>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">List group item heading</h5>
              <small class="text-muted">3 days ago</small>
            </div>
            <p class="mb-1">Donec id elit non mi porta gravida at
            eget metus. Maecenas sed diam eget risus varius blandit.</p>
            <small class="text-muted">Donec id elit non mi porta.</small>
          </a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      userData: {
        UserId: this.$store.userData.id,
        name: this.$store.userData.name,
        email: this.$store.userData.email,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
  .dashboard {
    display: flex;
    justify-content: space-between;

    .sidebar {
      background-color: blue;
      padding: 2em;
    }

    .content {
      background-color: black;
      padding: 3em;
    }
  }
</style>

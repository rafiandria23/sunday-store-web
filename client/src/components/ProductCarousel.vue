<template>
  <div v-if="products" class="d-flex justify-content-center mb-5">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li
          v-for="(product, index) in products"
          :key="product.id"
          data-target="#carouselExampleIndicators"
          :data-slide-to="index"
        ></li>
        <!-- <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> -->
      </ol>
      <div class="carousel-inner">
        <div
          v-for="(product, index) in products"
          :class="`carousel-item ${index === 0 ? 'active' : ''}`"
          :key="product.id"
        >
          <img :src="product.image_url" class="img-fluid d-block w-100" :alt="product.name" />
          <div class="carousel-caption d-none d-md-block">
            <!-- <h5>{{ product.name }}</h5> -->
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCarousel",
  props: {
    products: Array
  }
};
</script>

<style lang="scss" scoped>
.carousel {
  height: 360px;
  .carousel-item {
    img {
      height: 360px;
      object-fit: contain;
    }
  }
}
</style>

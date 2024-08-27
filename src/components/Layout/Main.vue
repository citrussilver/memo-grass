<template>
  <div class="bud-green">
    <div style="position: relative;">
      <Navbar />
      <div class="container is-max-desktop px-2 py-4">
        <RouterView />
      </div>
      <div class="grass-background">
        <img src="@/assets/images/grass_5_4crp.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from './Navbar.vue'
</script>

<style scoped>
.bud-green {
  background-color: rgba(122, 190, 77, 0.1);
}

.grass-background {
  position:fixed; bottom:0px; z-index: -1; opacity: 50%;
}
</style>
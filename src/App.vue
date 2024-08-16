<template>
  <div class="bud-green">
    <NavBar />
    <div class="container is-max-desktop px-2 py-4">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
/* imports */
import NavBar from './components/Layout/Navbar.vue';

</script>

<style>
@import 'bulma/css/bulma.min.css';

.bud-green {
  background-color: rgba(122, 190, 77, 0.1);
}
</style>

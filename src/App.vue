<template>
  <MainLayout />
</template>

<script setup>
/* imports */
import MainLayout from './components/Layout/Main.vue'
import { onMounted } from 'vue';
import { useStoreAuth } from './stores/storeAuth';

const storeAuth = useStoreAuth()

onMounted(() => {
  storeAuth.init()
})

</script>

<style>
@import 'bulma/css/bulma.min.css';
@import '@/assets/main.css';
</style>

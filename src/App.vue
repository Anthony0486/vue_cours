<script setup>
import Welcome from './components/Welcome.vue'
import Header from './views/Header.vue'
import Footer from './views/Footer.vue'
</script>

<template>
  <Header />
  <router-view />
  <Welcome />
  <Footer />
</template>

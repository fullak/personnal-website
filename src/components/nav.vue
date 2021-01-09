<template>
  <div class="container flex flex-wrap flex-col md:flex-row items-center navigation-barre mt-2 mb-6">
    <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center lg:items-center lg:justify-center mb-4 md:mb-0">
      <img src="../assets/img/logo.png" style="height: 40px; margin-top: 10px; margin-bottom: 10px;" alt="logo">
      <span class="name pl-2 text-sm text-white text-center">Tristan Brochard</span>
    </a>
    <nav class="flex flex-wrap items-center text-base">
      <router-link class="mr-5 text-primary hover:text-secondary cursor-pointer" to="/">Home</router-link>
      <router-link class="mr-5 text-primary hover:text-secondary cursor-pointer" to="/projects">Projets</router-link>
      <router-link class="text-primary hover:text-secondary cursor-pointer" to="/contact">Contact</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navigation-bar'
}
</script>

<style>
.navigation-barre {
  font-family: Azonix, sans-serif;
}
</style>
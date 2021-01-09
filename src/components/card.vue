<template>
  <div class="card group">
    <img class="card-img" :src="require(`@/assets/img/${imgLink}`)" alt="">
    <h2 class="card-title">{{ title }}</h2>
    <router-link class="card-button" :to="projectLink">Voir le projet</router-link>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: [
    "title",
    "projectLink",
    "imgLink",
  ],
}
</script>


<style>
@layer utilities {
  .card {
    @apply mr-5 mt-5 border-2 border-white hover:bg-lightGrey rounded-2xl flex flex-col;
  }
  .card-img {
    @apply rounded-xl w-80 h-40;
  }
  .card-title {
    @apply text-white text-center mt-6 group-hover:text-black;
  }
  .card-button {
    @apply text-white text-center mt-10 mb-10 border-2 border-white rounded-xl mx-6 py-1 group-hover:text-black group-hover:border-black hover:bg-primary;
  }
}
</style>
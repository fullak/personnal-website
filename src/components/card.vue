<template>
  <div class="card group">
    <img class="card-img" :src="require(`@/assets/img/${imgLink}`)" alt="">
    <h2 class="card-title">{{ title }}</h2>
    <div class="w-80 mx-auto">
      <p class="text-primary mb-6 text-center group-hover:text-secondary">{{ technologies }}</p>
    </div>
    <a class="card-button" :href="projectLink" target="_blank" v-show="showProjectButton">le site</a>
    <a class="card-button" :href="githubLink" target="_blank">github</a>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: [
    "title",
    "projectLink",
    "imgLink",
    "technologies",
    "githubLink",
    "showProjectButton",
  ],
  data () {
    return {
      displayButton: true,
    }
  }
}
</script>


<style>
@layer utilities {
  .card {
    @apply mr-5 mt-3 pb-2 border-2 border-white hover:bg-lightGrey rounded-2xl flex flex-col;
  }
  .card-img {
    @apply rounded-xl w-80 h-40;
  }
  .card-title {
    @apply text-white text-center mt-6 group-hover:text-black;
  }
  .card-button {
    @apply text-white text-center mb-2 border-2 border-white rounded-xl mx-6 py-1 group-hover:text-black group-hover:border-black hover:bg-primary;
  }
}
</style>
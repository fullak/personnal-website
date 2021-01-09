<template>
  <div class="container">
    <h1 class="primary-font text-white text-center text-4xl md:text-6xl md:ml-14 xl:ml-10">Projets</h1>

    <div class="container flex flex-row flex-wrap justify-center ml-2 md:ml-10 primary-font">

      <Card class="apparition element1" title="passion mouche" imgLink="passion.jpg" projectLink="/passion-mouche" />
      <Card class="apparition element2" title="qovery" imgLink="qovery-hero-header.jpg" projectLink="/qovery" />
      <Card class="apparition element3" title="groupomania" imgLink="groupomania-header.jpg" projectLink="/groupomania" />
      <Card class="apparition element4" title="sopekocko" imgLink="sopekocko.jpg" projectLink="/sopekocko" />
      <Card class="apparition element5" title="orinoco" imgLink="Orinoco-header.jpg" projectLink="/orinoco" />
      <Card class="apparition element6" title="la chouette agence" imgLink="Chouette-header.jpg" projectLink="/chouette-agence" />
      <Card class="apparition element7" title="oh my food" imgLink="food-head.jpg" projectLink="/ohmyfood" />
      <Card class="apparition element8" title="CV" imgLink="cv-head.jpg" projectLink="/cv" />

    </div>
  </div>
</template>

<script>
import Card from '../components/card.vue'

export default {
  name: 'Projects',
  components: {
    Card
  },
}
</script>

<style>
.primary-font {
  font-family: Azonix, sans-serif;
}

.apparition {
  animation-name: apparition;
  animation-duration: .8s;
  opacity: 0;
  animation-fill-mode: forwards;
}

@keyframes apparition {
  100% {
    opacity: 1;
  }
}

.element1 {
  animation-delay: .1s;
}

.element2 {
  animation-delay: .2s;
}

.element3 {
  animation-delay: .3s;
}

.element4 {
  animation-delay: .4s;
}

.element5 {
  animation-delay: .5s;
}

.element6 {
  animation-delay: .6s;
}

.element7 {
  animation-delay: .7s;
}

.element8 {
  animation-delay: .8s;
}
</style>
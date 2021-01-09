<template>
  <div class="container">
    <h1 class="primary-font text-white text-center text-4xl md:text-6xl md:ml-14 xl:ml-10">Projets</h1>

    <div class="container flex flex-row flex-wrap justify-center ml-2 md:ml-10 primary-font">

      <Card class="apparition element1" title="Portfolio" imgLink="portfolio.jpg" technologies="Vue.JS" githubLink="#" />
      <Card class="apparition element2" title="passion mouche" imgLink="passion.jpg" technologies="Vue.JS" showProjectButton="displayButton" projectLink="https://dev-passion-mouche.netlify.app/#/" githubLink="https://github.com/fullak/passion-mouche" />
      <Card class="apparition element3" title="qovery" imgLink="qovery-hero-header.jpg" technologies="Vue.JS" githubLink="https://github.com/fullak/qovery" />
      <Card class="apparition element4" title="groupomania" imgLink="groupomania-header.jpg" technologies="Vue.JS | NodeJS | MySQL" githubLink="https://github.com/fullak/groupomania" />
      <Card class="apparition element5" title="sopekocko" imgLink="sopekocko.jpg" technologies="NodeJS | MongoDB" githubLink="https://github.com/fullak/sopekocko" />
      <Card class="apparition element6" title="orinoco" imgLink="Orinoco-header.jpg" technologies="HTML5 | CSS3 | JS" githubLink="https://github.com/fullak/Orinoco" />
      <Card class="apparition element7" title="la chouette agence" imgLink="Chouette-header.jpg" technologies="SEO" githubLink="https://github.com/fullak/la_chouette_agence" />
      <Card class="apparition element8" title="CV" imgLink="cv-head.jpg" technologies="HTML5 | CSS3" githubLink="https://github.com/fullak/fullak.github.io" />

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
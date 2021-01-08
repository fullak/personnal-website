<template>
  <div class="container">
    <h1 class="primary-font text-white text-center text-4xl md:text-6xl md:ml-10">Projets</h1>

    <div class="container flex flex-row flex-wrap justify-center ml-4 md:ml-10">

      <router-link to="/passion-mouche" class="mr-5 mt-5 border-2 border-white rounded-2xl flex flex-col">
        <img src="../assets/img/passion.jpg" alt="" class="rounded-xl w-80 h-40">
        <h2 class="primary-font text-white text-center mt-6">Passion Mouche</h2>
        <button class="primary-font text-white mt-10 mb-10 border-2 border-white rounded-xl mx-6 py-1 hover:bg-primary hover:text-black"> Voir le projet </button>
      </router-link>

      <router-link to="/qovery" class="mr-5 mt-5 border-2 border-white rounded-2xl flex flex-col">
        <img src="../assets/img/qovery-hero-header.jpg" alt="" class="rounded-xl w-80 h-40">
        <h2 class="primary-font text-white text-center mt-6">Qovery</h2>
        <button class="primary-font text-white mt-10 mb-10 border-2 border-white rounded-xl mx-6 py-1 hover:bg-primary hover:text-black"> Voir le projet </button>
      </router-link>

      <router-link to="/groupomania" class="mr-5 mt-5 border-2 border-white rounded-2xl flex flex-col">
        <img src="../assets/img/groupomania-header.jpg" alt="" class="rounded-xl w-80 h-40">
        <h2 class="primary-font text-white text-center mt-6">Groupomania</h2>
        <button class="primary-font text-white mt-10 mb-10 border-2 border-white rounded-xl mx-6 py-1 hover:bg-primary hover:text-black"> Voir le projet </button>
      </router-link>

      <router-link to="/sopekocko" class="mr-5 mt-5 border-2 border-white rounded-2xl flex flex-col">
        <img src="../assets/img/sopekocko.jpg" alt="" class="rounded-xl w-80 h-40">
        <h2 class="primary-font text-white text-center mt-6">Sopekocko</h2>
        <button class="primary-font text-white mt-10 mb-10 border-2 border-white rounded-xl mx-6 py-1 hover:bg-primary hover:text-black"> Voir le projet </button>
      </router-link>

      <router-link to="/Orinoco" class="mr-5 mt-5 border-2 border-white rounded-2xl flex flex-col">
        <img src="../assets/img/orinoco-fullsite.jpg" alt="" class="rounded-xl w-80 h-40">
        <h2 class="primary-font text-white text-center mt-6">Orinoco</h2>
        <button class="primary-font text-white mt-10 mb-10 border-2 border-white rounded-xl mx-6 py-1 hover:bg-primary hover:text-black"> Voir le projet </button>
      </router-link>

      <router-link to="/chouette-agence" class="mr-5 mt-5 border-2 border-white rounded-2xl flex flex-col">
        <img src="../assets/img/Chouette-header.jpg" alt="" class="rounded-xl w-80 h-40">
        <h2 class="primary-font text-white text-center mt-6">La Chouette Agence</h2>
        <button class="primary-font text-white mt-10 mb-10 border-2 border-white rounded-xl mx-6 py-1 hover:bg-primary hover:text-black"> Voir le projet </button>
      </router-link>

      <router-link to="/ohmyfood" class="mr-5 mt-5 border-2 border-white rounded-2xl flex flex-col">
        <img src="../assets/img/food-head.jpg" alt="" class="rounded-xl w-80 h-40">
        <h2 class="primary-font text-white text-center mt-6">Oh My Food</h2>
        <button class="primary-font text-white mt-10 mb-10 border-2 border-white rounded-xl mx-6 py-1 hover:bg-primary hover:text-black"> Voir le projet </button>
      </router-link>

      <router-link to="/cv" class="mr-5 mt-5 border-2 border-white rounded-2xl flex flex-col">
        <img src="../assets/img/cv-head.jpg" alt="" class="rounded-xl w-80 h-40">
        <h2 class="primary-font text-white text-center mt-6">CV</h2>
        <button class="primary-font text-white mt-10 mb-10 border-2 border-white rounded-xl mx-6 py-1 hover:bg-primary hover:text-black"> Voir le projet </button>
      </router-link>
    </div>
  </div>
</template>

<style>
.primary-font {
  font-family: Azonix, sans-serif;
}
</style>
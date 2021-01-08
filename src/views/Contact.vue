<template>
  <div class="container mx-auto justify-center mt-12">
    <h1 class="about-title text-white text-center text-4xl md:text-6xl mb-10">Contact</h1>
    <div class="container">
      <div class="text-white text-8xl mt-8 mb-10">
        <img class="h-60 md:h-80 mx-auto" src="https://media.giphy.com/media/RhdoB7rPVAtJbmVmom/giphy.gif" alt="dm icon">
      </div>
    </div>

    <div class="contact-icons-container flex flex-row justify-center">
      <a href="https://twitter.com/Tristanbrchrd">
        <img class="contact-icon h-14 mr-2" src="../assets/img/icons/twitter.png" alt="twitter logo" />
      </a>
      <a href="https://linkedin.com/in/brochard-tristan">
        <img class="contact-icon h-14 mr-2" src="../assets/img/icons/linkedin.png" alt="linkedin logo" />
      </a>
      <a href="https://github.com/fullak">
        <img class="contact-icon h-14 mr-2" src="../assets/img/icons/github.png" alt="github icon" />
      </a>
      <a href="mailto:brochardtristan@icloud.com">
        <img class="contact-icon h-14" src="../assets/img/icons/mail.png" alt="mail icon" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact',
}
</script>

<style lang="scss">
.about-title {
  font-family: Azonix, sans-serif;
}
.arobase-glitch {
  font-family: "Al Tarikh", sans-serif;
}
</style>
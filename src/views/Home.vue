<template>
  <div class="home-container mx-auto mt-44 sm:mt-32 md:mt-48">
    <div class="title-container glitch title text-3xl lg:text-8xl md:text-6xl sm:text-5xl text-center" data-text="Développeur Front-End">
      Développeur Front-End
    </div>
    <div class="glow title">Développeur Front-End</div>

    <div class="container flex row-start-auto justify-center mt-6">
      <img class="icon icon1 mr-2 h-6 sm:h-8 md:h-12 xl:h-16" src="../assets/img/icons/html5.png" alt="html5 icon" />
      <img class="icon icon2 mr-2 h-6 sm:h-8 md:h-12 xl:h-16" src="../assets/img/icons/css-3.png" alt="css3 icon" />
      <img class="icon icon3 mr-2 h-6 sm:h-8 md:h-12 xl:h-16" src="../assets/img/icons/sass.png" alt="sass icon" />
      <img class="icon icon4 mr-2 h-6 sm:h-8 md:h-12 xl:h-16" src="../assets/img/icons/file_type_tailwind_icon_130128.png" alt="tailwind icon" />
      <img class="icon icon5 mr-2 h-6 sm:h-8 md:h-12 xl:h-16" src="../assets/img/icons/bootstrap_plain_wordmark_logo_icon_146620.png" alt="bootstrap icon" />
      <img class="icon icon6 mr-2 h-6 sm:h-8 md:h-12 xl:h-16" src="../assets/img/icons/js.png" alt="javascript icon" />
      <img class="icon icon7 mr-2 h-6 sm:h-8 md:h-12 xl:h-16" src="../assets/img/icons/vuejs_original_logo_icon_146304.png" alt="vuejs icon" />
      <img class="icon icon8 mr-2 h-6 sm:h-8 md:h-12 xl:h-16" src="../assets/img/icons/nodejs_plain_logo_icon_146409.png" alt="nodejs icon" />
      <img class="icon icon9 mr-2 h-6 sm:h-8 md:h-12 xl:h-16" src="../assets/img/icons/mysql_original_wordmark_logo_icon_146417.png" alt="mysql icon" />
    </div>

    <div class="button-container container mt-12 flex flex-col items-center">
      <router-link class="mb-4 pt-1 w-60 h-8 border border-solid text-white border-white rounded-xl cursor-pointer hover:bg-primary hover:text-black text-center" to="/projects">Mes projets</router-link>
      <router-link class="mb-4 pt-1 w-60 h-8 border border-solid text-white border-white rounded-xl cursor-pointer hover:bg-primary hover:text-black text-center" to="/contact">Contact</router-link>
    </div>

    <div class="social-icon-container container flex row-start-auto justify-center mt-6">
      <a href="https://twitter.com/Tristanbrchrd">
        <img class="h-8 mr-4" src="../assets/img/icons/twitter.png" alt="twitter logo"  />
      </a>
      <a href="https://linkedin.com/in/brochard-tristan">
        <img class="h-8 mr-4" src="../assets/img/icons/linkedin.png" alt="linkedin logo" />
      </a>
      <a href="https://www.instagram.com/frenchcodinglabs/">
        <img class="h-8 mr-4" src="../assets/img/icons/instagram.png" alt="instagram icon" />
      </a>
      <a href="https://github.com/fullak">
        <img class="h-8 mr-4" src="../assets/img/icons/github.png" alt="github icon" />
      </a>
    </div>
  </div>
</template>

<style lang="scss">
.home-container {
  font-family: Azonix, sans-serif;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 25%;
  left: 50%;
}

.glitch {
  color: white;
  position: relative;
  animation: glitch 5s 5s infinite;
}

.glitch::before {
  content: attr(data-text);
  position: absolute;
  left: -2px;
  text-shadow: -5px 0 magenta;
  background: black;
  overflow: hidden;
  top: 0;
  animation: noise-1 5s linear infinite alternate-reverse,
  glitch 5s 5.05s infinite;
}

.glitch::after {
  content: attr(data-text);
  position: absolute;
  left: 2px;
  text-shadow: -5px 0 lightgreen;
  background: black;
  overflow: hidden;
  top: 0;
  animation: noise-2 5s linear infinite alternate-reverse, glitch 5s 5s infinite;
}


@keyframes glitch {
  1% {
    transform: rotateX(1.5deg) skewX(-11.5deg);
  }
  1.5% {
    transform: rotateX(1.5deg) skewX(11.5deg);
  }
  2% {
    transform: rotateX(0deg) skewX(0deg);
  }
}

@keyframes noise-1 {
  $steps: 30;
  @for $i from 1 through $steps {
    #{percentage($i*(1/$steps))} {
      $top: random(100);
      $bottom: random(101 - $top);
      clip-path: inset(#{$top}px 0 #{$bottom}px 0);
    }
  }
}

@keyframes noise-2 {
  $steps: 30;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      $top: random(100);
      $bottom: random(101 - $top);
      clip-path: inset(#{$top}px 0 #{$bottom}px 0);
    }
  }
}

.glow {
  @extend .glitch;
  text-shadow: 0 0 1000px rgb(223, 191, 191);
  color: transparent;
  position: absolute;
  top: 0;
}


.icon,
.button-container,
.social-icon-container {
  animation-name: smooth-display;
  animation-duration: 1s;
  opacity: 0;
  animation-fill-mode: forwards;
}

@keyframes smooth-display {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}


.icon2 {
  animation-delay: .1s;
}

.icon3 {
  animation-delay: .2s;
}

.icon4 {
  animation-delay: .3s;
}

.icon5 {
  animation-delay: .4s;
}

.icon6 {
  animation-delay: .5s;
}

.icon7 {
  animation-delay: .6s;
}

.icon8 {
  animation-delay: .7s;
}

.icon9 {
  animation-delay: .8s;
}

.button-container {
  animation-delay: 1.2s;
}

.social-icon-container {
  animation-delay: 1.6s;
}
</style>
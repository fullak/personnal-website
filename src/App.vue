<template>
  <div>
    <Navigation />
    <Home />
  </div>
</template>

<script>
import Navigation from './components/nav.vue'
import Home from './views/Home.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    Home
  }
}
</script>
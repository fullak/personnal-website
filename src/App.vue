<template>
  <div>
    <Navigation />
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/nav.vue'

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>
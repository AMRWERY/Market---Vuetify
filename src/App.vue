<template>
  <NavBar />
  <router-view />
</template>

<script>
import NavBar from './ui/NavBar.vue';

export default {
  name: 'App',

  components: {
    NavBar,
  }
  }
</script>
<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  import Vue from 'vue'
  import Vuetify from 'vuetify'
  import 'vuetify/dist/vuetify.min.css'
  Vue.use(Vuetify)
  export default {
    name: 'app'
  }
</script>
<style>
#app {
  font-family: 'SeoulNamsanB', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}
</style>

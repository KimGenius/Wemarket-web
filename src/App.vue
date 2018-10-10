<template>
  <div id="app">
    <Login app-name="위마켓"/>
  </div>
</template>

<script>
import Vue from 'vue'
import Login from './views/Login/Login.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export default {
  name: 'app',
  components: {
    Login
  }
}
</script>

<style>
#app {
  font-family: 'NanumBarunGothicOTF', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

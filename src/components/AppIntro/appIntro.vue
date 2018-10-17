<template>
    <div class="app-intro" :style='style'>
        <img src="../../src/assets/logo.png" alt="logo" class="app-logo"/>
        <p class="app-text" v-html="appTitle"></p>
    </div>
</template>

<script>
  export default {
    name: "appIntro",
    props: {
      appTitle: String,
      backgroundColor: String
    },
    computed: {
      style () {
        return 'background-color: ' + this.backgroundColor
      }
    }
  }
</script>

<style scoped>
</style>

<template>
    <div class="main">
        <app-intro :app-name=appName />
        <div class="login-wrap">

        </div>
    </div>
</template>

<script>
  import AppIntro from "../components/appIntro";
  export default {
    name: 'Main',
    components: {AppIntro},
    props: {
      appName: String
    }
  }
</script>

<style scoped>
</style>

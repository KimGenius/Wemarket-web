<template>
    <div class="app-intro" :style='style'>
        <!--TODO: 로고가 색이 바껴야됨-->
        <img src="../../../src/assets/logo.png" alt="logo" class="app-logo"/>
        <!--TODO: 글자도 색이 바껴야됨-->
        <p class="app-text" v-html="appTitle"></p>
    </div>
</template>

<script>
  import './appIntro.scss'

  export default {
    name: "appIntro",
    props: {
      appTitle: String,
      backgroundColor: String
    },
    computed: {
      style() {
        return 'background-color: ' + this.backgroundColor
      }
    }
  }
</script>

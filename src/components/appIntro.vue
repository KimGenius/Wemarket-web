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
    .app-intro {
        position: relative;
        width: 100vw;
        height: 63.5vh;
        background-color: #ff9922;
    }

    .app-logo {
        position: absolute;
        margin-top: 1.8vh;
        left: 50%;
        transform: translateX(-50%);
    }

    .app-text {
        font-family: SeoulNamsanEB;
        font-size: 13.5vh;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1;
        letter-spacing: normal;
        text-align: left;
        color: #ffffff;
        padding-top: 7.6vh;
        padding-left: 4.4vw;
    }
</style>

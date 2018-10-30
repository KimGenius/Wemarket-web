<template>
    <div class="app-intro">
        <!--TODO: 로고가 색이 바껴야됨-->
        <Logo v-bind:app-color="appColor"></Logo>
        <!--TODO: 글자도 색이 바껴야됨-->
        <p class="app-text" :style="style" v-html="appTitle"></p>
    </div>
</template>

<script>
  import './appIntro.scss'
  import Logo from '../Logo'

  export default {
    name: "appIntro",
    components: {Logo},
    props: {
      appTitle: String,
      appColor: String
    },
    computed: {
      style() {
        return 'color: ' + this.appColor
      }
    }
  }
</script>

<template>
    <div class="app-intro" :style='style'>
        <!--TODO: 로고가 색이 바껴야됨-->
        <Logo></Logo>
        <!--TODO: 글자도 색이 바껴야됨-->
        <p class="app-text" v-html="appTitle"></p>
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
      backgroundColor: String
    },
    computed: {
      style() {
        return 'background-color: ' + this.backgroundColor
      }
    }
  }
</script>

<template>
    <div class="app-intro">
        <Logo :app-color="appColor"></Logo>
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

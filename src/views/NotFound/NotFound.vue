<template>
    <div class="not-found">
        <app-intro app-title='404<br>
없는<br>
페이지<br>
입니다'/>
    </div>
</template>

<script>
  import AppIntro from '../../components/AppIntro'

  export default {
    name: "NotFound",
    components: {AppIntro}
  }
</script>

<style scoped>
    .not-found {
        position: relative;
        width: 100vw;
        height: 100vh;
        background-color: #ff9922;
    }
</style>

<template>
    <div class="not-found">
        <app-intro app-title='서비스<br>
준비중<br>
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
        background-color: #f4f4f4;
    }
</style>

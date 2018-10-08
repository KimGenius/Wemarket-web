<template>
    <div class="app-intro">
        <p class="app-title">{{ appName }}</p>
        <p class="photo-copyright">Photo by Pixzolo Photography on Unsplash</p>
    </div>
</template>

<script>
  export default {
    name: "appIntro",
    props: {
      appName: String
    }
  }
</script>

<style scoped>
    .app-intro {
        position: relative;
        width: 100vw;
        height: 70.4vh;
        background-image: url("../assets/pixzolo-photography-699069-unsplash.png");
        -webkit-background-size: cover;
        background-size: cover;
    }

    .app-title {
        position: absolute;
        width: 100%;
        height: 6vh;
        vertical-align: middle;
        line-height: 6vh;
        font-size: 20px;
        font-weight: bold;
        margin-top: 1vh;
        margin-bottom: 0px;
        z-index: 1;
        color: #ffffff;
        text-align: center;
    }

    .photo-copyright {
        text-align: center;
        width: 100%;
        position: absolute;
        bottom: 0;
        color: #ffffff;
        opacity: .74;
    }
</style>

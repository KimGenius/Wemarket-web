<template>
    <router-link to="/waitjoin" class='login-join'>회원가입</router-link>
</template>

<script>
  export default {
    name: "waitjoin"
  }
</script>

<style scoped>
    .login-join {
        background-color: #ffffff;
        width: 100vw;
        margin-left: -4.4vw !important;
        height: 7.8vh;
        font-size: 13px;
        display: block;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        letter-spacing: normal;
        text-align: center;
        color: rgba(0, 0, 0, .6);
        cursor: pointer;
        vertical-align: middle;
        line-height: 7.8vh;
        position: absolute;
        bottom: 0;
    }

    .login-join:before {
        content: '';
        position: absolute;
        left: 0;
        border-top: 4.4vw solid #ff9922;
        border-right: 4.4vw solid transparent;
        width: 0;
    }
</style>

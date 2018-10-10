<template>
    <div class='main'>
        <app-intro app-name='위마켓' />
        <div class='wait-join-wrap'>
            <p class='wait-join-text'>해당 계정은 가입 승인 대기중입니다</p>
            <router-link to="/login" class='wait-join-logout'>다른 계정으로 로그인 해 볼까요? 로그아웃</router-link>
        </div>
    </div>
</template>

<script>
  import AppIntro from '../../components/appIntro';
  import './waitJoin.scss';

  export default {
    name: 'Login',
    components: {AppIntro},
    data: () => ({
    })
  }
</script>

<style scoped>
</style>

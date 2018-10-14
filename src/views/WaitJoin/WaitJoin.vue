<template>
    <div class='main'>
        <app-intro app-title='가입승인<br>
대기중<br>
계정<br>
입니다'
        background-color='#12a1fa'/>
        <div class='wait-join-wrap'>
            <p class='wait-join-text'>빠른 시일 내에 연락 드리겠습니다</p>
            <v-btn class='wait-join-logout'>로그아웃</v-btn>
            <JoinBtn background-color='#12a1fa'></JoinBtn>
        </div>
    </div>
</template>

<script>
  import AppIntro from '../../components/appIntro';
  import JoinBtn from '../../components/JoinBtn';
  import './waitJoin.scss';

  export default {
    name: 'Login',
    components: {AppIntro, JoinBtn},
    data: () => ({
    })
  }
</script>

<style scoped>
</style>

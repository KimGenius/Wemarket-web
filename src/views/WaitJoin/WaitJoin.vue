<template>
    <div class='main'>
        <app-intro app-title='가입승인<br>
대기중<br>
계정<br>
입니다'
                   :logo-color="color"
                   app-color='#12a1fa'/>
        <div class='wait-join-wrap'>
            <p class='wait-join-text'>빠른 시일 내에 연락 드리겠습니다</p>
            <v-btn class='wait-join-logout'>로그아웃</v-btn>
            <Join v-on:change-color="changeColor"></Join>
        </div>
    </div>
</template>

<script>
  import AppIntro from '../../components/AppIntro';
  import Join from '../../components/Join';
  import './waitJoin.scss';

  export default {
    name: 'Login',
    components: {AppIntro, Join},
    data: () => ({
      color: '#12a1fa'
    }),
    methods: {
      changeColor: function () {
        this.color = this.color === '#12a1fa' ? 'rgba(0, 0, 0, .6)' : '#12a1fa'
      }
    }
  }
</script>

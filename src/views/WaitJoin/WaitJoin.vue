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
            <v-btn class='wait-join-logout' @click="logout">로그아웃</v-btn>
        </div>
        <Join v-on:change-color="changeColor"></Join>
    </div>
</template>

<script>
  import AppIntro from '../../components/AppIntro';
  import Join from '../../components/Join';
  import './waitJoin.scss';
  import cookie from 'js-cookie'
  import config from '../../config'
  import axios from 'axios'

  export default {
    name: 'Login',
    components: {AppIntro, Join},
    data: () => ({
      color: '#12a1fa'
    }),
    methods: {
      changeColor() {
        this.color = this.color === '#12a1fa' ? 'rgba(0, 0, 0, .6)' : '#12a1fa'
      },
      logout() {
        cookie.remove('WMUD')
        this.$router.replace('/login')
      }
    },
    async created() {
      const cookie = config.getCookie()
      const {data: sellerData} = await axios.get(`${config.host}/seller/${cookie.idx}`)
      if (sellerData.status === 'JOIN') {
        this.$router.replace('/seller')
      } else if (sellerData.status !== 'PENDING') {
        this.$router.replace('/logins')
      }
    }
  }
</script>

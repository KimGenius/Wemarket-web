<template>
    <div class='main'>
        <app-intro app-title='We<br>Market<br>당신을<br>위한' app-color="#ffa945" :logo-color="color"/>
        <div class='login-wrap'>
            <v-form>
                <v-flex xs12 sm6 md3>
                    <v-text-field
                            :hideDetails=true
                            class='login-input'
                            label='아이디'
                            color='#ff9922'
                            v-model="loginData.id"
                            box
                    ></v-text-field>
                    <v-text-field
                            :hideDetails=true
                            class='login-input'
                            label='패스워드'
                            solo
                            v-model="loginData.pw"
                            type='password'
                    ></v-text-field>
                    <v-btn @click="submitLogin" class='login-input login-submit'>로그인</v-btn>
                </v-flex>
            </v-form>
        </div>
        <Join v-on:change-color="changeColor"></Join>
    </div>
</template>

<script>
  import AppIntro from '../../components/AppIntro'
  import Join from '../../components/Join'
  import './login.scss'
  import axios from 'axios'
  import jwt from 'jsonwebtoken'
  import cookie from 'js-cookie'
  import config from '../../config'

  export default {
    name: 'Login',
    components: {AppIntro, Join},
    data: () => ({
      loginData: {
        id: '',
        pw: ''
      },
      color: ''
    }),
    methods: {
      changeColor: function () {
        this.color = this.color === '' ? 'rgba(0, 0, 0, .6)' : ''
      },
      async submitLogin() {
        const {loginData} = this
        try {
          const {data} = await axios.post(`${config.host}/login`, {
            id: loginData.id,
            pw: loginData.pw
          })
          const token = jwt.sign(data, 'shhhhh')
          cookie.set('WMUD', token)
          alert('환영합니다')
          this.$router.replace('/seller')
        } catch (e) {
          if (e.message === 'Request failed with status code 404'){
            alert('존재하지 않는 계정입니다.')
          }
        }
      }
    }
  }
</script>

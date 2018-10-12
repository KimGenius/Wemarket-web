<template>
    <div class='main'>
        <app-intro app-title='We<br>Market<br>당신을<br>위한'/>
        <div class='login-wrap'>
            <v-form v-model='valid'>
                <v-flex xs12 sm6 md3>
                    <v-text-field
                            :hideDetails=true
                            class='login-input'
                            label='아이디'
                            box
                    ></v-text-field>
                    <v-text-field
                            :hideDetails=true
                            class='login-input'
                            label='패스워드'
                            solo
                    ></v-text-field>
                    <v-btn class='login-input login-submit'>로그인</v-btn>
                    <router-link to="/waitjoin" class='login-join'>회원가입</router-link>
                </v-flex>
            </v-form>
        </div>
    </div>
</template>

<script>
  import AppIntro from '../../components/appIntro'
  import './login.scss'

  export default {
    name: 'Login',
    components: {AppIntro},
    data: () => ({
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
    })
  }
</script>

<style scoped>
</style>

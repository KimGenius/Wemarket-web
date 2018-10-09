<template>
    <div class="main">
        <link rel="stylesheet" href="./login.scss">
        <app-intro :app-name=appName />
        <div class="login-wrap">
            <v-form v-model="valid">
                <v-flex xs12 sm6 md3>
                    <v-text-field
                            class="login-input"
                            label="Solo"
                            placeholder="아이디"
                            solo
                    ></v-text-field>
                    <v-text-field
                            class="login-input"
                            label="Solo"
                            placeholder="패스워드"
                            solo
                    ></v-text-field>
                    <v-btn class="login-input login-submit">로그인</v-btn>
                    <a class="login-join" href="#">아직 계정이 없으신가요? 회원가입</a>
                </v-flex>
            </v-form>
        </div>
    </div>
</template>

<script>
  import AppIntro from "../components/appIntro";
  import './login.scss';

  export default {
    name: 'Login',
    components: {AppIntro},
    props: {
      appName: String
    },
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

<template>
    <div class='join-hide' :style='hideStyle'>
        <div class='join-wrap' :style='wrapStyle'>
            <v-form>
                <p v-on:click='toggleJoin' :style='style' class='join-toggle-btn join-wrap-title'>회원가입</p>
                <v-flex xs12 sm6 md3>
                    <v-text-field
                            hide-details
                            class='join-input'
                            placeholder='아이디'
                            color='#ff9922'
                            solo
                            v-model='joinData.id'
                    ></v-text-field>
                    <v-text-field
                            hide-details
                            class='join-input'
                            placeholder='비밀번호'
                            color='#ff9922'
                            type='password'
                            v-model='joinData.pw'
                            solo
                    ></v-text-field>
                    <v-text-field
                            hide-details
                            class='join-input'
                            placeholder='비밀번호 확인'
                            color='#ff9922'
                            type='password'
                            v-model='joinData.pwCheck'
                            solo
                    ></v-text-field>
                </v-flex>
                <p class='join-toggle-btn join-input-title'>점포정보</p>
                <v-flex xs12 sm6 md3>
                    <v-text-field
                            hide-details
                            class='join-input'
                            placeholder='점포명'
                            color='#ff9922'
                            v-model='joinData.storeName'
                            solo
                    ></v-text-field>
                    <v-text-field
                            hide-details
                            class='join-input'
                            placeholder='업종'
                            v-model='joinData.storeType'
                            color='#ff9922'
                            solo
                    ></v-text-field>
                    <v-text-field
                            hide-details
                            class='join-input'
                            color='#ff9922'
                            v-model='joinData.storeDesc'
                            placeholder='판매 장소와 한줄 소개를 입력하세요'
                            solo
                    ></v-text-field>
                </v-flex>
                <p class='join-toggle-btn join-input-title'>사업자 정보</p>
                <v-flex xs12 sm6 md3>
                    <v-text-field
                            hide-details
                            class='join-input'
                            placeholder='사업자명'
                            color='#ff9922'
                            v-model='joinData.sellerName'
                            solo
                    ></v-text-field>
                    <v-text-field
                            hide-details
                            class='join-input'
                            placeholder='사업자등록번호'
                            v-model='joinData.sellerCode'
                            color='#ff9922'
                            solo
                    ></v-text-field>
                    <v-text-field
                            hide-details
                            class='join-input'
                            placeholder='전화번호'
                            v-model='joinData.phone'
                            color='#ff9922'
                            solo
                    ></v-text-field>
                    <v-text-field
                            hide-details
                            class='join-input'
                            placeholder='은행입력'
                            v-model='joinData.bank'
                            color='#ff9922'
                            solo
                    ></v-text-field>
                    <v-text-field
                            hide-details
                            class='join-input'
                            placeholder='계좌번호'
                            color='#ff9922'
                            v-model='joinData.accountNumber'
                            solo
                    ></v-text-field>
                </v-flex>
                <v-flex>
                    <v-btn class='join-input join-submit' @click='submitJoin'>회원가입</v-btn>
                </v-flex>
            </v-form>
        </div>
    </div>
</template>

<script>
  import axios from 'axios'
  import './join.scss'
  import jwt from 'jsonwebtoken'
  import cookie from 'js-cookie'
  import config from '../../config'

  export default {
    name: 'waitjoin',
    props: {
      backgroundColor: String
    },
    computed: {
      style() {
        return {
          '--background-color': this.backgroundColor || '#ff9922'
        }
      },
      hideStyle() {
        return {
          top: this.isJoin ? '6.2vh' : '92.2vh',
          height: this.isJoin ? '93.8vh' : '7.8vh'
        }
      },
      wrapStyle() {
        return {
          overflow: this.isJoin ? 'scroll' : 'hidden'
        }
      }
    },
    data: () => ({
      isJoin: false,
      joinData: {
        id: '',
        pw: '',
        pwCheck: '',
        storeName: '',
        storeDesc: '',
        storeType: '',
        sellerName: '',
        sellerCode: '',
        phone: '',
        bank: '',
        accountNumber: ''
      }
    }),
    methods: {
      toggleJoin: function () {
        this.isJoin = !this.isJoin
        this.$emit('change-color')
      },
      async submitJoin() {
        const {joinData} = this
        if (joinData.pw !== joinData.pwCheck) {
          alert('비밀번호를 확인해주세요')
        } else {
          try {
            await axios.post(`${config.host}/join`, {
              id: joinData.id,
              pw: joinData.pw,
              // pwCheck: joinData.pwCheck,
              storeName: joinData.storeName,
              storeDesc: joinData.storeDesc,
              storeType: joinData.storeType,
              sellerName: joinData.sellerName,
              sellerCode: joinData.sellerCode,
              phone: joinData.phone,
              bank: joinData.bank,
              accountNumber: joinData.accountNumber
            })
            const {data} = await axios.post(`${config.host}/login`, {
              id: joinData.id,
              pw: joinData.pw
            })
            const token = jwt.sign(data, 'shhhhh')
            cookie.set('WMUD', token)
            alert('회원가입 성공')
            this.$router.replace('/seller')
          } catch (e) {
            if (e.message === 'Request failed with status code 409') alert('이미 있는 계정')
            else alert(e.message)
          }
        }
      }
    }
  }
</script>

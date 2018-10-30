<template>
    <div class='join-hide' :style='hideStyle'>
        <div class="join-wrap" :style='wrapStyle'>
            <v-form>
                <p v-on:click='toggleJoin' :style='style' class='join-toggle-btn join-wrap-title'>회원가입</p>
                <v-flex xs12 sm6 md3>
                    <v-text-field
                            hide-details
                            class='join-input'
                            label='아이디'
                            color='#ff9922'
                            box
                    ></v-text-field>
                    <v-text-field
                            hide-details
                            class='join-input'
                            label='비밀번호'
                            color='#ff9922'
                            box
                            type='password'
                    ></v-text-field>
                    <v-text-field
                            hide-details
                            class='join-input'
                            label='비밀번호 확인'
                            color='#ff9922'
                            box
                            type='password'
                    ></v-text-field>
                </v-flex>
                <p class='join-toggle-btn join-input-title'>점포정보</p>
                <v-flex xs12 sm6 md3>
                    <v-text-field
                            hide-details
                            class='join-input'
                            label='점포명'
                            color='#ff9922'
                            box
                    ></v-text-field>
                    <v-text-field
                            hide-details
                            class='join-input'
                            label='업종'
                            color='#ff9922'
                            box
                    ></v-text-field>
                    <v-text-field
                            hide-details
                            class='join-input'
                            label='점포 설명'
                            color='#ff9922'
                            box
                    ></v-text-field>
                </v-flex>
                <p class='join-toggle-btn join-input-title'>사업자 정보</p>
                <v-flex xs12 sm6 md3>
                    <v-text-field
                            hide-details
                            class='join-input'
                            label='사업자명'
                            color='#ff9922'
                            box
                    ></v-text-field>
                    <v-text-field
                            hide-details
                            class='join-input'
                            label='사업자등록번호'
                            color='#ff9922'
                            box
                    ></v-text-field>
                    <v-text-field
                            hide-details
                            class='join-input'
                            label='전화번호'
                            color='#ff9922'
                            box
                    ></v-text-field>
                    <v-text-field
                            hide-details
                            class='join-input'
                            label='은행선택'
                            color='#ff9922'
                            box
                    ></v-text-field>
                    <v-text-field
                            hide-details
                            class='join-input'
                            label='계좌번호'
                            color='#ff9922'
                            box
                    ></v-text-field>
                </v-flex>
                <v-flex>
                    <v-btn class='join-input join-submit'>회원가입</v-btn>
                </v-flex>
            </v-form>
        </div>
    </div>
</template>

<script>
  import './join.scss'
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
      isJoin: false
    }),
    methods: {
      toggleJoin: function () {
        this.isJoin = !this.isJoin
        this.$emit('change-color')
      }
    }
  }
</script>

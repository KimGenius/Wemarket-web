<template>
    <div class="partners-notyet-wrap">
        <p>아직<br>
            WeMarket<br>
            파트너가<br>
            아니세요!</p>
        <p>WeMarket 파트너에 가입하면<br>
            수 많은 가게 운영 정보와 혜택을<br>
            이용하실 수 있습니다.<br><br>
            부담스런 개인창고 대신<br>
            가벼운 공용창고,<br>
            푸드트럭 행사 참여 정보 등<br>
            많은 정보를 누구보다도 먼저 만나보세요!
        </p>
        <p @click="dialog = true">파트너쉽 가입하기</p>
        <v-dialog
                v-model="dialog"
                max-width="290">
            <v-card>
                <!--<v-card-title class="headline">정말로 가입하시는거죠?</v-card-title>-->
                <v-card-text>
                    정말로 가입하시는거죠?
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                            color="rgba(0,0,0,.3)"
                            flat="flat"
                            @click="dialog = false"
                    >
                        돌아가기
                    </v-btn>

                    <v-btn
                            color="#ff9922"
                            flat="flat"
                            @click="submitPartner"
                    >
                        가입하기
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
  import './partnerNotyet.scss'
  import axios from 'axios'
  import jwt from 'jsonwebtoken'
  import cookie from 'js-cookie'
  import config from '../../config'

  export default {
    name: "partnerNotyet",
    data: () => ({
      dialog: false
    }),
    methods: {
      async submitPartner() {
        this.dialog = false
        const cookieToken = cookie.get('WMUD')
        const {idx} = jwt.decode(cookieToken)
        const {status, data} = await axios.put(`${config.host}/user/${idx}/level`, {
          level: 'PENDING'
        })
        if (status === 200) {
          const token = jwt.sign(data, 'shhhhh')
          cookie.set('WMUD', token)
          alert('신청되었습니다')
          location.reload()
        } else {
          alert('error')
        }
      }
    }
  }
</script>

<style scoped>

</style>

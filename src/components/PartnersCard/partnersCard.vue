<template>
    <div class="partners-card-wrap">
        <p>{{item.title}}</p>
        <p>{{item.endDate}} 마감</p>
        <p>{{item.content}}</p>
        <div>
            <p @click="submit" :style="isSubmitStyle">신청하기</p>
            <p :style="isNotSubmitStyle">신청됨</p>
        </div>
    </div>
</template>

<script>
  import './partnersCard.scss'
  import config from '../../config'
  import axios from 'axios'
  import {serverBus} from '../../main'
  import jwt from 'jsonwebtoken'
  import cookie from 'js-cookie'

  export default {
    name: "partnersCard",
    props: {
      item: Object
    },
    data: () => ({
      isSubmit: false,
      isPartners: false
    }),
    computed: {
      isSubmitStyle() {
        return {
          display: this.isSubmit ? 'none' : 'block'
        }
      },
      isNotSubmitStyle() {
        return {
          display: this.isSubmit ? 'block' : 'none'
        }
      }
    },
    beforeMount() {
      const cookieToken = cookie.get('WMUD')
      const {level} = jwt.decode(cookieToken)
      this.isPartners = level === 'PARTNERS'
      this.isPending = level === 'PENDING'
      if (this.item.udx) {
        this.item.udx.split(',').map(u => {
          if (u == config.getCookie().idx) {
            this.isSubmit = true
          }
        })
      }
    },
    methods: {
      async submit() {
        if (this.isPartners) {
          try {
            const {status} = await axios.put(`${config.host}/partners/${this.item.idx}`, {
              sdx: config.getCookie().idx
            })
            if (status === 200) {
              alert('등록되었습니다')
              location.reload()
            }
          } catch (e) {
            if (e.message === 'Request failed with status code 409') {
              alert('이미 등록되었습니다')
            }
          }
        } else if (this.isPending) {
          serverBus.$emit('partnersOnPending')
        } else {
          serverBus.$emit('partnersOnNotYet')
        }
      }
    }
  }
</script>

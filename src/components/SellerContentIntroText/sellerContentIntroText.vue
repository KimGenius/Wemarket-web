<template>
    <div class="seller-content-intro">
        <p>소개</p>
        <p @click="onEdit">{{editText}}</p>
    </div>
</template>

<script>
  import './sellerContentIntroText.scss'
  import {serverBus} from '../../main'
  import axios from 'axios'
  import jwt from 'jsonwebtoken'
  import cookie from 'js-cookie'
  import config from '../../config'

  export default {
    name: "SellerContentIntroText",
    data: () => ({
      editText: '수정'
    }),
    methods: {
      async onEdit() {
        if (this.editText === '수정') {
          this.editText = '완료'
        } else {
          const cookieToken = cookie.get('WMUD')
          const {idx} = jwt.decode(cookieToken)
          const phone = document.getElementById("storePhone").innerHTML
          const storeDesc = document.getElementById("storeDesc").value
          const {status, data} = await axios.put(`${config.host}/user/${idx}`, {
            phone,
            storeDesc
          })
          if (status === 200) {
            const token = jwt.sign(data, 'shhhhh')
            cookie.set('WMUD', token)
            alert('소개가 수정되었습니다')
            location.reload()
          } else {
            alert('error')
          }
          this.editText = '수정'
        }
        serverBus.$emit('sellerIntroEdit')
      }
    }
  }
</script>

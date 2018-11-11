<template>
    <div class="seller-content-intro-box-wrap">
        <p>{{phone}}</p>
        <p>{{storeDesc}}</p>
    </div>
</template>

<script>
  import './sellerContentIntroBox.scss'
  import jwt from 'jsonwebtoken'
  import cookie from 'js-cookie'
  export default {
    name: "sellerContentIntroBox",
    data: () => ({
      phone: '',
      storeDesc: ''
    }),
    created () {
      const cookieToken = cookie.get('WMUD')
      const {phone, storeDesc} = jwt.decode(cookieToken)
      this.phone = phone
      this.storeDesc = storeDesc
    }
  }
</script>

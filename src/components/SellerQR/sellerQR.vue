<template>
    <div class="seller-qr-wrap" :style="onQR">
        <img src="../../assets/QR_Code_.png" alt="qr">
        <p class="seller-qr-name">{{storeName}}</p>
        <p class="seller-qr-phone">{{phone}}</p>
        <p class="seller-qr-content">이제 위 QR코드를 스캔하여<br>
            상품을 주문할 수 있습니다</p>
        <p class="seller-qr-link">
            혹은 URL로 접속<br>
            <a :href="this.url">{{this.url}}</a>
        </p>
    </div>
</template>

<script>
  import './sellerQR.scss'
  import {serverBus} from '../../main';
  import jwt from 'jsonwebtoken'
  import cookie from 'js-cookie'

  export default {
    name: "sellerQR",
    computed: {
      onQR() {
        return {
          top: this.isSellerQR ? '7.9vh' : '100vh',
          display: this.isSellerQR ? 'block' : 'none'
        }
      }
    },
    data: () => ({
      isSellerQR: false
    }),
    created() {
      // Using the service bus
      const cookieToken = cookie.get('WMUD')
      const {idx, storeName, phone} = jwt.decode(cookieToken)
      this.storeName = storeName
      this.phone = phone
      this.idx = idx
      this.url = `http://www.wemarket.kr/customer?sellerId=${idx}`
      serverBus.$on('toggleSellerQR', () => {
        this.isSellerQR = !this.isSellerQR;
      });
    }
  }
</script>

<template>
    <div>
        <SellerHeader :is-left="isLeft" v-on:on-left="onLeft" v-on:on-right="onRight"></SellerHeader>
        <SellerContent :is-left="isLeft"></SellerContent>
        <Partners></Partners>
        <SellerQR></SellerQR>
    </div>
</template>

<script>
  import SellerHeader from '../../components/SellerHeader'
  import SellerContent from '../../components/SellerContent'
  import Partners from '../../components/Partners'
  import SellerQR from '../../components/SellerQR'
  import './seller.scss'

  export default {
    name: "Seller",
    components: {SellerHeader, SellerContent, Partners, SellerQR},
    data: () => ({
      isLeft: true
    }),
    methods: {
      onLeft: function () {
        this.isLeft = true
      },
      onRight: function () {
        this.isLeft = false
      }
    }
  }
</script>

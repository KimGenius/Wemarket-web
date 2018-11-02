<template>
    <div>
        <SellerHeader v-on:on-left="onLeft" v-on:on-right="onRight"></SellerHeader>
        <SellerContent :is-left="isLeft"></SellerContent>
    </div>
</template>

<script>
  import SellerHeader from '../../components/SellerHeader'
  import SellerContent from '../../components/SellerContent'
  import './seller.scss'

  export default {
    name: "Seller",
    components: {SellerHeader, SellerContent},
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

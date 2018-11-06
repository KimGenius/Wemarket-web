<template>
    <div class="seller-menu-list-wrap">
        <SellerMenu class="seller-menu-list-menu"/>
        <SellerMenu class="seller-menu-list-menu"/>
        <SellerMenu class="seller-menu-list-menu"/>
    </div>
</template>

<script>
  import './sellerMenuList.scss'
  import SellerMenu from '../SellerMenu'

  export default {
    name: "sellerMenuList",
    components: {SellerMenu}
  }
</script>

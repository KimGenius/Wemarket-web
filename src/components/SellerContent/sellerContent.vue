<template>
    <div class="seller-content-wrap">
        <div :style='focusContent' class="seller-content-fragment">
            <div class="seller-content-left">
                <SellerContentIntroText/>
                <SellerContentIntroBox/>
                <SellerContentMenuText/>
                <SellerMenuList/>
            </div>
            <div class="seller-content-right">
                <Orders></Orders>
            </div>
        </div>
    </div>
</template>

<script>
  import './sellerContent.scss'
  import SellerContentIntroText from '../SellerContentIntroText'
  import SellerContentIntroBox from '../SellerContentIntroBox'
  import SellerContentMenuText from '../SellerContentMenuText'
  import SellerMenuList from '../SellerMenuList'
  import Orders from '../Orders'

  export default {
    name: "sellerContent",
    components: {
      SellerContentIntroText,
      SellerContentIntroBox,
      SellerContentMenuText,
      SellerMenuList,
      Orders
    },
    computed: {
      focusContent() {
        return {
          'left': this.isLeft ? '0' : '-100vw'
        }
      }
    },
    props: {
      isLeft: Boolean
    }
  }
</script>

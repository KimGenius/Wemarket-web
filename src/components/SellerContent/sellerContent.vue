<template>
    <div class="seller-content-wrap">
        <div :style='focusContent' class="seller-content-fragment">
            <div class="seller-content-left">
                <SellerContentIntroText/>
                <SellerContentIntroBox/>
            </div>
            <div class="seller-content-right">Right</div>
        </div>
    </div>
</template>

<script>
  import './sellerContent.scss'
  import SellerContentIntroText from '../SellerContentIntroText'
  import SellerContentIntroBox from '../SellerContentIntroBox'

  export default {
    name: "sellerContent",
    components: {SellerContentIntroText, SellerContentIntroBox},
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

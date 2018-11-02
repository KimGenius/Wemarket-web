<template>
    <div class="seller-content-wrap">
        <div :style='focusContent' class="seller-content-fragment">
            <div class="seller-content-left">Left</div>
            <div class="seller-content-right">Right</div>
        </div>
    </div>
</template>

<script>
  import './sellerContent.scss'

  export default {
    name: "sellerContent",
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

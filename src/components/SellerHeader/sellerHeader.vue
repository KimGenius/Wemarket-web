<template>
    <div class="seller-header-wrap">
        <div class="seller-header-top">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <g id="logo" transform="translate(-14 -12)">
                    <path id="box" d="M0 0h32v32H0z" class="cls-1" transform="translate(14 12)"></path>
                    <g id="logo-2" data-name="logo" transform="translate(15 12.4)">
                        <g id="Group_6" data-name="Group 6" transform="rotate(-45 13.928 5.769)">
                            <path id="Subtraction_3" d="M3.4 16.317H0V0h3.4v16.317z" class="cls-2"
                                  data-name="Subtraction 3"></path>
                        </g>
                        <g id="Group_8" data-name="Group 8">
                            <g id="Group_5" data-name="Group 5" transform="rotate(-45 17.528 -2.922)">
                                <path id="Subtraction_2" d="M16.317 16.317H0V0h3.4v12.918h12.917v3.4z" class="cls-2"
                                      data-name="Subtraction 2"></path>
                            </g>
                            <g id="Group_7" data-name="Group 7" transform="rotate(-45 13.928 5.769)">
                                <path id="Subtraction_1"
                                      d="M16.317 16.317H9.923v-3.4h6.394v3.4zm-16.311 0H0V0h.005v16.317z"
                                      class="cls-2" data-name="Subtraction 1"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
            <p>위마켓</p>
            <img src="../../assets/qr.png"
                 srcset="../../assets/qr@2x.png 2x, ../../assets/qr@3x.png 3x"
                 class="qr"
                 alt="QR Code">
        </div>
        <div class="seller-header-bottom">
            <div v-on:click="onLeft" class="seller-header-bottom-left">
                <p>점포관리</p>
            </div>
            <div v-on:click="onRight" class="seller-header-bottom-right">
                <p>주문내역</p>
            </div>
        </div>
    </div>
</template>

<script>
  import './sellerHeader.scss'

  export default {
    name: "sellerHeader",
    data: () => ({
      leftStyle: {
        borderBottom: '5px solid #ff9922;'
      },
      rightStyle: {
        borderBottom: 'none'
      }
    }),
    methods: {
      onLeft: function () {
        this.leftStyle.borderBottom = '5px solid #ff9922;'
        this.rightStyle.borderBottom = 'none'
        this.$emit('on-left')
      },
      onRight: function () {
        this.leftStyle.borderBottom = 'none'
        this.rightStyle.borderBottom = '5px solid #ff9922;'
        this.$emit('on-right')
      }
    }
  }
</script>

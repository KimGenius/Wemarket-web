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
            <p>{{storeName}}</p>
            <div class="qr"
                 @click="toggleSellerQR"
                 :style="qrImg"></div>
        </div>
        <div class="seller-header-bottom">
            <div v-on:click="onLeft"
                 class="seller-header-bottom-left"
                 :style="leftStyle">
                <p>점포관리</p>
            </div>
            <div v-on:click="onRight"
                 class="seller-header-bottom-right"
                 :style="rightStyle">
                <p>주문내역</p>
            </div>
        </div>
    </div>
</template>

<script>
  import './sellerHeader.scss'
  import {serverBus} from '../../main';
  import jwt from 'jsonwebtoken'
  import cookie from 'js-cookie'

  export default {
    name: "sellerHeader",
    data: () => ({
      leftStyle: {
        borderBottom: '5px solid #ff9922'
      },
      rightStyle: {
        borderBottom: 'none'
      },
      isQRImg: true,
      storeName: ''
    }),
    created() {
      const cookieToken = cookie.get('WMUD')
      const {storeName} = jwt.decode(cookieToken)
      this.storeName = storeName
    },
    computed: {
      qrImg() {
        return {
          'background-image': this.isQRImg ?
            'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAABN9JREFUeAHtWj+LVDEQT+Q6FQQLBRu19mOIjXD4BcTSEwv/gXDVedgJ4lkIWqq1Ipbi19DytNTCQq4Q5CBOsjdvZ5I3+zJ5ebsr5MFeksn8y28zbzK5NaY9DYGGQEOgIdAQaAg0BBoCDYGGQEOgIbBsBKzWoHtx/qzZsE9A7oox9sywvPsJPJ/MoXtob3//gfzu1cV7xpkHxpqn9ub+M6TTVuKp5QO1JfWPSRMifcPuATDX88DxWjyIwB/kqFb3GMA5Zwy04iPwVPNBNNxN6AFy9monrek4c5mz2+OzMbZ8ls9FPNV86LPJaRt8mDGy5gRyQWgMhiiEiQv81p5GudHtEn3Q76DRq/u/FDSABr4vfYgNKMyfnkUevMDNURgegOyOlNHy9dblXN0OCviwV9hJWNp23eWN17Y6gIz9YhzuorCQv/D3/fgl1dWwshCzW/uX6i5lGm0r3EHTLKi21gbQAKL6EHPulzk69HWHwAEjYdrLkSfUWcbsAglezvAucv6P+Wi3vl0jbP3dSj70K+dU/Q6y5jNXkTlK5XzG8plr9lhrIeNv4jC0zv1hLU6munBmcVsgpwfo0N2Fr/stfHyVnvF4PuAPcoTdmXcw8pkLHkz3ABJ77GsYHsCOfcPItXxgSvsHkUP9TFNTaajm1HdT+0P163cQla7Vl0Kplv4RetYDICOE0oiF1RJVhxjPPsGNpIYKPD23hRJdWkyPLYk19eHlhQ/AvAmvN1hjWGbCIymj9JIdxLPPLBNFNZRwE+hvDwdvEal7oTabZzo2xQaeh/vgM6LPjPMn5ZnPiT09QCz7BL09NRTeAGKL9nGMLdKFNrUlMIZsGNVxCE6HUY+fkro5XX1QhBrqFoj7D3vScGCFKOONByD7CI4CdyAUTnVzzjyXbHU8mZ0xmVG/g2SnotCDby7GSM5WOwwcb8O6G7KpjBnZVobwnKUeQHE4hKsM+3Vuyvc02YrsJq4kc6SxJavsAlRmkWe0WUnSBHrivRZYaWjUsiX5INHH7qDtWVaKMohkTUf/zdnVGZCLF47GATQLK3++iDKI0ht4IYNEBIjZ41ow82HLZ6caqUNM2uqB3l1fLHS36MAWheF9sLALn5wzEjpTZLdkB0lhFWUx9Ctpiw5skZZcW1SsyK4eICms4ixGXeP9ogMbU5Fvi4oV2VWHGLVYqy+FLdVPQ4xmN8ozRV+/g6bwQl+jTeJFn9I1AQgzE7Z9rq6Gpq7FlvnjpTQzpudJKTxTWbi6LfjXtn4HTfHjJbluirIVvDJTjHKz6rKyWK0fUNGQEeqmOFv11Xf5WXU5WUybTSR+KTQobFJfkpXokp4cuj7EcrTm8UihkSEt1WUSPUOlwLI6gKTQEBzlZMx22OIsjrFFenmrzmLlprgkvS106QU7ZS7KPlTBmNBb3Q6iK0gv2OlsfvYRs2F56K0HQPDvhxkivZWPIvsI2dBgyGFL8V/cX1mISW6NqbNo2Er6tfT12EFiaAjL0fILanLI6wGQ6jLfL0sKpZwl63j0IVbpx0tRZun+1xbo8m0hZrSOny53sWxao1BZqa/fQQU/QgrGUznpoBjVX8z1oYy2QLa3jmPK+wZ6gGr9eEk6KMb1F/d6cUZbJNtXx3HdbdQQaAg0BBoCDYGGQEOgIdAQaAg0BBoCa4LAP7Im+aCM7XpZAAAAAElFTkSuQmCC)' :
            'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAzJJREFUeAHt2r9v00AUB/B3LmoRTHTrRJK/gwFVSPySOoDEBhIDQpWYmfsPMNOIgQEmpC6VSqmQKgb+DhImNpiQCFAf966c4yZ2fHae7yz16yF2/OPu3afvrmfHRFggAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEBASEAJlTNXjH7Zu05J8pxW03vq8fjX3AkCO/Tr3kWaJHu0cvJCPfl6LFDkXBHJ3B6BHRZHJR9MUbdNAw5sQwTKzRfxH+eAFN2hk5X3+tXVzfxxqW3xDMpwFK1lQWo6prX0rlQm5XCmKJomBuuGevrlc1avwIZoBhXicJCKNqUyqRDntA7zB9FHeji4JuCSFSEKREptG4xp5mTVmA0BpFKcrB51ySA9y74KbMgCrY8ektZHpXEtgVSNY2rluq+MHpXW3+CA/Bj0jlbpe3/fZNPN0nhqjkneOOujLfWAfpfW2+CAbAaZAGyAJlCvTGLMiiUmDocmDsSFeiOZTNMLkGLj2LbwR1uLbXxldzPjRkHX6AIOu4iPQbPYTZC6ghMEiCupg0Q/ewnPmey0YFbbfef/VgVZ5w5LrlvPIBesFxLRIWkzj+LpQNkSEIdDCAbElXki8anFS2AcDiIoEFfYGCkCThSgKdLgcGFX4hPdEgmHq29lHuTaVba28yRzd2/Gm+pnOBFxogFZuMvj1HS4P2WIXdkffAzihtcehyJmUXCg2jgulSIhBQVqjBMRKRiQFw5nCS8LH5WEm0XbUGxALX/44Zw+t7ahnKdbjTo47qH+ublZbYLjkrkrSK2NQcvgdAmplZm0BA4j2S5XNePmAZ2fTO7QBQcruRYHksJxjfRG2ujvtYEk2sWkcRwSr73GJNL79G10X+3Q3/y1y2zLZtCP/tvFc5jmP0F7ZRKpLdoYvFkGZPZaWaAk3TV36JPZSuz3mr+FFZVRicR1p+mw6Nqm+0S7GAdh37Iwb1uYZz3Tn6AFcPINLOxujKPTW2p7/Cl/7rLb4kAc0BkkYRzX4DNILeG4ulpZM5LeHbTybpALmJH0sP/RvlXidmINAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACXRX4B9Jc4dIRbV5iAAAAAElFTkSuQmCC)'
        }
      }
    },
    props: ['server'],
    methods: {
      onLeft: function () {
        this.leftStyle.borderBottom = '5px solid #ff9922'
        this.rightStyle.borderBottom = 'none'
        this.$emit('on-left')
      },
      onRight: function () {
        this.leftStyle.borderBottom = 'none'
        this.rightStyle.borderBottom = '5px solid #ff9922'
        this.$emit('on-right')
      },
      toggleSellerQR: function () {
        this.isQRImg = !this.isQRImg
        serverBus.$emit('toggleSellerQR')
      }
    }
  }
</script>

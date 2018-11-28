<template>
    <div class="customer-box-wrap" :style="wrapStyle">
        <p :style="isEmpty">메뉴를 선택해주세요</p>
        <div :style="isOrder" class="customer-box-order">
            <div class="customer-box-order-top">
                <img @click="changeWrapStyle" src="../../assets/down.png" alt="down">
                <p>{{this.menuPrice.toLocaleString()}}₩</p>
            </div>
            <v-text-field
                    :hideDetails=true
                    class='customer-input customer-phone'
                    label='전화번호'
                    solo
                    v-model="phone"
            ></v-text-field>
            <v-btn @click="orderKakao" class='customer-input order-kakao'>카카오페이 결제</v-btn>
            <v-btn @click="orderMoney" class='customer-input order-kakao order-money'>현금으로 결제</v-btn>
        </div>
    </div>
</template>

<script>
  import './customerBox.scss'
  import {serverBus} from '../../main'
  import axios from 'axios'
  import config from '../../config'
  import moment from 'moment-timezone'

  export default {
    name: "customerBox",
    data: () => ({
      menus: {},
      phone: '',
      menuPrice: 0,
      isEmptyValue: true,
      wrapStyleValue: true,
      storeName: ''
    }),
    methods: {
      changeWrapStyle() {
        if (!this.isEmptyValue) this.wrapStyleValue = !this.wrapStyleValue
      },
      orderKakao() {
        alert('준비중입니다.')
      },
      async orderMoney() {
        if (this.phone !== '') {
          const urlParams = new URLSearchParams(window.location.search)
          const sdx = urlParams.get('seller')
          let menuText = ''
          const {menus} = this
          Object.keys(menus).map(function (key) {
            menuText += `${key} ${menus[key].split('|')[1]}개\n`
          })
          try {
            const dateCreated = moment.tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss')
            await axios.post(`${config.host}/order`, {
              phone: this.phone,
              sdx,
              menuText,
              price: this.menuPrice,
              type: 'MONEY',
              dateCreated
            })
            try {
              const {data: sellerData, status: sellerStatus} = await axios.get(`${config.host}/seller/${sdx}`)
              if (sellerStatus === 200) {
                const {storeName} = sellerData
                this.storeName = storeName
              } else {
                alert('스토어 정보를 불러오지 못했습니다.')
              }
            } catch (e) {
              alert('스토어 정보를 불러오지 못했습니다.')
            }
            alert('주문되었습니다')
            this.$router.replace(`/money?storeName=${this.storeName}&phone=${this.phone}&dateCreated=${dateCreated}`)
          } catch (e) {
            alert('주문에 실패했습니다.')
          }
        } else {
          alert('전화번호를 입력해주세요!')
        }
      }
    },
    computed: {
      isEmpty() {
        return {
          display: this.isEmptyValue ? 'block' : 'none'
        }
      },
      isOrder() {
        return {
          display: !this.isEmptyValue ? 'block' : 'none'
        }
      },
      wrapStyle() {
        return {
          bottom: this.isEmptyValue || this.wrapStyleValue ? '-28.5vh' : '0'
        }
      }
    },
    async created() {
      serverBus.$on('changeCustomerMenu', (menuInfo) => {
        const {menuName, price, count} = menuInfo
        let {menus, menuPrice} = this
        menuPrice = 0
        if (count !== 0) menus[menuName] = price * count + '|' + count
        else delete menus[menuName]
        Object.keys(menus).map(function (key) {
          const price = menus[key]
          menuPrice += parseInt(price.split('|')[0])
        });
        this.menus = menus
        this.menuPrice = menuPrice
        this.isEmptyValue = Object.keys(menus).length === 0
      });
    }
  }
</script>

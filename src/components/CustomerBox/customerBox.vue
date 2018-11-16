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
      wrapStyleValue: true
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
          Object.keys(menus).map(function (key, index) {
            // console.log(menus[key])
            menuText += `${key} ${menus[key].split('|')[1]}개\n`
          })
          try {
            await axios.post(`${config.host}/order`, {
              phone: this.phone,
              sdx,
              menuText,
              price: this.menuPrice,
              type: 'MONEY',
              dateCreated: moment.tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss')
            })
            // console.log({
            //   phone: this.phone,
            //   sdx,
            //   menuText,
            //   price: this.menuPrice,
            //   type: 'MONEY',
            //   dateCreated: moment.tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss')
            // })
            alert('주문되었습니다')
            location.reload()
          } catch (e) {
            console.log(e)
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
        console.log('menuName: ', menuName)
        console.log('price: ', price)
        if (count !== 0) menus[menuName] = price * count + '|' + count
        else delete menus[menuName]
        console.log(menus)
        console.log(Object.keys(menus).length)
        Object.keys(menus).map(function (key, index) {
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

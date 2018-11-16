<template>
    <div class="customer-box-wrap">
        <p :style="isEmpty">장바구니</p>
        <div class="customer-box-order">
            <div class="customer-box-order-top">
                <img src="../../assets/down.png" alt="down">
                <p>30,000₩</p>
            </div>
            <v-text-field
                    :hideDetails=true
                    class='customer-input customer-phone'
                    label='전화번호'
                    solo
                    v-model="phone"
            ></v-text-field>
            <v-btn class='customer-input order-kakao'>카카오페이 결제</v-btn>
            <v-btn class='customer-input order-kakao order-money'>현금으로 결제</v-btn>
        </div>
    </div>
</template>

<script>
  import './customerBox.scss'
  import {serverBus} from '../../main'

  export default {
    name: "customerBox",
    data: () => ({
      menus: {}
      /*
      menus: {
        a: 10000 (총 가격),
        b: 10000 (총 가격),
        ...
      }
      */,
      phone: '',
      isEmptyValue: true
    }),
    computed: {
      isEmpty() {
        return {
          display: !this.isEmptyValue ? 'block' : 'none'
        }
      }
    },
    async created() {
      serverBus.$on('changeCustomerMenu', (menuInfo) => {
        const {menuName, price, count} = menuInfo
        console.log('menuName: ', menuName)
        console.log('price: ', price)
        if (count !== 0) this.menus[menuName] = price * count
        else delete this.menus[menuName]
        console.log(this.menus)
        console.log(Object.keys(this.menus).length)
        console.log()
        this.$forceUpdate()
        this.isEmptyValue = Object.keys(this.menus).length === 0
      });
    }
  }
</script>

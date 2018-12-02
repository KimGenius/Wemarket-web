<template>
    <div class="order-list-wrap">
        <OrderCard v-for="item in orderList" :key="item.idx" :item="item"></OrderCard>
    </div>
</template>

<script>
  import './orderList.scss'
  import OrderCard from '../OrderCard'
  import axios from 'axios'
  import config from '../../config'
  import jwt from 'jsonwebtoken'
  import cookie from 'js-cookie'
  import {serverBus} from '../../main'

  export default {
    name: "orders",
    components: {OrderCard},
    data: () => ({
      orderList: []
    }),
    async beforeMount() {
      const cookieToken = cookie.get('WMUD')
      const {idx} = jwt.decode(cookieToken)
      const {data} = await axios.get(`${config.host}/orders/${idx}`)
      this.orderList = data
    },
    async created() {
      serverBus.$on('getOrderList', async () => {
        const cookieToken = cookie.get('WMUD')
        const {idx} = jwt.decode(cookieToken)
        const {data} = await axios.get(`${config.host}/orders/${idx}`)
        this.orderList = data
      })
    }
  }
</script>

<template>
    <div class="order-list-wrap">
        <OrderCard></OrderCard>
        <OrderCard></OrderCard>
    </div>
</template>

<script>
  import './orderList.scss'
  import OrderCard from '../OrderCard'

  export default {
    name: "orders",
    components: {OrderCard}
  }
</script>

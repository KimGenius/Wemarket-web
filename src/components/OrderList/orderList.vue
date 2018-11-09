<template>
    <div>
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

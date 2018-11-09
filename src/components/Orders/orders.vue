<template>
    <div>
        <OrderCard></OrderCard>
    </div>
</template>

<script>
  import './orders.scss'
  import OrderCard from '../OrderCard'

  export default {
    name: "orders",
    components: {OrderCard}
  }
</script>

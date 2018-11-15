<template>
    <div class="customer-wrap">
        <CustomerHeader></CustomerHeader>
    </div>
</template>

<script>
  import './customer.scss'
  import CustomerHeader from '../../components/CustomerHeader'

  export default {
    name: "Customer",
    components: {CustomerHeader}
  }
</script>

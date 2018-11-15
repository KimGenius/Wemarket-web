<template>
    <div class="customer-wrap">
        <CustomerHeader></CustomerHeader>
        <CustomerContentIntroBox :phone="phone" :storeDesc="storeDesc"></CustomerContentIntroBox>
        <CustomerContentMenuText></CustomerContentMenuText>
        <CustomerMenuList></CustomerMenuList>
        <CustomerBox></CustomerBox>
    </div>
</template>

<script>
  import './customer.scss'
  import CustomerHeader from '../../components/CustomerHeader'
  import CustomerContentIntroBox from '../../components/CustomerContentIntroBox'
  import CustomerContentMenuText from '../../components/CustomerContentMenuText'
  import CustomerMenuList from '../../components/CustomerMenuList'
  import CustomerBox from '../../components/CustomerBox'
  import axios from 'axios'
  import config from '../../config'

  export default {
    name: "Customer",
    components: {CustomerHeader, CustomerMenuList, CustomerContentIntroBox, CustomerContentMenuText, CustomerBox},
    data: () => ({
      storeName: '',
      storeDesc: '',
      phone: ''
    }),
    async created() {
      const urlParams = new URLSearchParams(window.location.search)
      const sdx = urlParams.get('seller')
      const {data: sellerData, status: sellerStatus} = await axios.get(`${config.host}/seller/${sdx}`)
      if (sellerStatus === 200) {
        const {phone, storeName, storeDesc} = sellerData
        this.storeName = storeName
        this.storeDesc = storeDesc
        this.phone = phone
      } else {
        alert('정보를 불러오지 못했습니다.')
      }
    }
  }
</script>

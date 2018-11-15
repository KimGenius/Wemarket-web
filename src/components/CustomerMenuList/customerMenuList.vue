<template>
    <div ref="menuList" class="customer-menu-list-wrap" id="menuList">
        <SellerMenu v-for="item in menuList" :key="item.idx" :item="item" :style="onEditCard"
                    class="customer-menu-list-menu"/>
    </div>
</template>

<script>
  import './customerMenuList.scss'
  import SellerMenu from '../SellerMenu'
  import axios from 'axios'
  import config from '../../config'

  export default {
    name: "customerMenuList",
    components: {SellerMenu},
    computed: {
      onEditCard() {
        return {
          border: this.isAdd || this.isEdit ? '2px solid #fff' : '0px'
        }
      }
    },
    data: () => ({
      menuList: []
    }),
    methods: {
      async fetchData() {
        const {idx} = {idx: 38}
        const {data} = await axios.get(`${config.host}/menu/${idx}`)
        this.menuList = data
      }
    },
    async created() {
      this.fetchData()
    }
  }
</script>

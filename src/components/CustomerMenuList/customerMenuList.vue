<template>
    <div ref="menuList" class="customer-menu-list-wrap" id="menuList">
        <CustomerMenu v-for="item in menuList" :key="item.idx" :item="item" :style="onEditCard"
                    class="customer-menu-list-menu"/>
    </div>
</template>

<script>
  import './customerMenuList.scss'
  import CustomerMenu from '../CustomerMenu'
  import axios from 'axios'
  import config from '../../config'

  export default {
    name: "customerMenuList",
    components: {CustomerMenu},
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
        const urlParams = new URLSearchParams(window.location.search)
        const sdx = urlParams.get('seller')
        const {data} = await axios.get(`${config.host}/menu/${sdx}`)
        this.menuList = data
      }
    },
    async created() {
      this.fetchData()
    }
  }
</script>

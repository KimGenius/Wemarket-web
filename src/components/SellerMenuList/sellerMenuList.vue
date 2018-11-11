<template>
    <div class="seller-menu-list-wrap">
        <SellerMenu v-for="item in menuList" :key="item.idx" :item="item" :style="onEditCard" class="seller-menu-list-menu"/>
        <div :style="onEditWrap" class="editWrap"></div>
    </div>
</template>

<script>
  import './sellerMenuList.scss'
  import SellerMenu from '../SellerMenu'
  import {serverBus} from '../../main';
  import axios from 'axios'
  import jwt from 'jsonwebtoken'
  import cookie from 'js-cookie'

  export default {
    name: "sellerMenuList",
    components: {SellerMenu},
    computed: {
      onEditCard() {
        return {
          border: this.isEdit ? '2px solid #fff' : '0px'
        }
      },
      onEditWrap() {
        return {
          backgroundColor: this.isEdit ? 'rgba(0, 0, 0, .25)' : 'rgba(0, 0, 0, 0)',
          zIndex: this.isEdit ? '5' : '-1'
        }
      }
    },
    data: () => ({
      isEdit: false,
      menuList: []
    }),
    async created() {
      // Using the service bus
      serverBus.$on('sellerMenuEdit', () => {
        this.isEdit = !this.isEdit;
      });
      const cookieToken = cookie.get('WMUD')
      const {idx} = jwt.decode(cookieToken)
      const {data} = await axios.get(`http://localhost:3000/menu/${idx}`)
      this.menuList = data
    }
  }
</script>

<template>
    <div ref="menuList" class="seller-menu-list-wrap" id="menuList">
        <SellerMenu v-for="item in menuList" :key="item.idx" :item="item" :style="onEditCard"
                    class="seller-menu-list-menu"/>
        <div :style="onEditWrap" class="editWrap"></div>
    </div>
</template>

<script>
  import './sellerMenuList.scss'
  import SellerMenu from '../SellerMenu'
  import {serverBus} from '../../main'
  import axios from 'axios'
  import jwt from 'jsonwebtoken'
  import cookie from 'js-cookie'
  import Vue from 'vue'
  import config from '../../config'

  export default {
    name: "sellerMenuList",
    components: {SellerMenu},
    computed: {
      onEditCard() {
        return {
          border: this.isAdd || this.isEdit ? '2px solid #fff' : '0px'
        }
      },
      onEditWrap() {
        return {
          backgroundColor: this.isAdd || this.isEdit ? 'rgba(0, 0, 0, .25)' : 'rgba(0, 0, 0, 0)',
          zIndex: this.isAdd || this.isEdit ? '5' : '-1'
        }
      }
    },
    data: () => ({
      isEdit: false,
      isAdd: false,
      menuList: []
    }),
    methods: {
      async fetchData() {
        const cookieToken = cookie.get('WMUD')
        const {idx} = jwt.decode(cookieToken)
        const {data} = await axios.get(`${config.host}/menu/${idx}`)
        this.menuList = data
      }
    },
    async created() {
      // Using the service bus
      serverBus.$on('sellerMenuEdit', () => {
        this.isEdit = !this.isEdit
      });
      serverBus.$on('sellerMenuAdd', () => {
        if (!this.isAdd) {
          this.isAdd = true
          const ComponentClass = Vue.extend(SellerMenu)
          const instance = new ComponentClass({
            propsData: {
              item: {
                idx: 0,
                name: '이름을 입력하세요',
                price: 0
              },
              isPropsAdd: this.isAdd
            }
          })
          instance.$mount() // pass nothing
          this.$refs.menuList.appendChild(instance.$el)
        }
      })
      this.fetchData()
    }
  }
</script>

<template>
    <div class="seller-menu-list-wrap">
        <SellerMenu :style="onEditCard" class="seller-menu-list-menu"/>
        <SellerMenu :style="onEditCard" class="seller-menu-list-menu"/>
        <SellerMenu :style="onEditCard" class="seller-menu-list-menu"/>
        <div :style="onEditWrap" class="editWrap"></div>
    </div>
</template>

<script>
  import './sellerMenuList.scss'
  import SellerMenu from '../SellerMenu'
  import {serverBus} from '../../main';

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
      isEdit: false
    }),
    created() {
      // Using the service bus
      serverBus.$on('sellerMenuEdit', () => {
        this.isEdit = !this.isEdit;
      });
    }
  }
</script>

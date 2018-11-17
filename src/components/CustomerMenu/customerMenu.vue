<template>
    <div class="customer-menu-wrap">
        <img :src="this.item.image ? this.imagePath : this.image || '/img/photo.3d1097c9.png'" alt="photo"
             class="seller-menu-image">
        <p>{{this.item.name}}</p>
        <p>
            {{this.item.price.toLocaleString()}}₩</p>
        <div class="customer-menu-order">
            <div class="customer-menu-count">
                <img @click="countMenu('minus')" src="../../assets/baseline-minus-24-px.png" alt="minus">
                <p>{{this.menuCount}}</p>
                <img @click="countMenu('plus')" src="../../assets/baseline-add-24-px.png" alt="minus">
            </div>
        </div>
    </div>
</template>

<script>
  import './customerMenu.scss'
  import {serverBus} from '../../main'
  import config from '../../config'

  export default {
    name: "customerMenu",
    data: () => ({
      image: '',
      imagePath: `${config.host}/uploads/`,
      menuCount: 0
    }),
    props: {
      item: Object
    },
    methods: {
      countMenu: function (type) {
        if (type === 'plus') this.menuCount++
        else if (type === 'minus' && this.menuCount > 0) this.menuCount--
        serverBus.$emit('changeCustomerMenu', {
          menuName: this.item.name,
          price: this.item.price,
          count: this.menuCount
        })
      }
    },
    created() {
      this.imagePath += this.item.image
    }
  }
</script>

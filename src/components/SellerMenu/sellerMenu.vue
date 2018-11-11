<template>
    <div class="seller-menu-wrap">
        <img src="../../assets/delete.png"
             srcset="../../assets/delete@2x.png 2x,
             ../../assets/delete@3x.png 3x"
             class="seller-menu-delete"
             :style="onEdit"
             @click="submitDelete">
        <img src="../../assets/photo.png" alt="photo"
             srcset="../../assets/photo@2x.png 2x,
             ../../assets/photo@3x.png 3x"
             class="seller-menu-image">
        <p>큐브스테이크</p>
        <p>10,000₩</p>
    </div>
</template>

<script>
  import './sellerMenu.scss'
  import {serverBus} from '../../main';

  export default {
    name: "sellerMenu",
    data: () => ({
      isEdit: false
    }),
    computed: {
      onEdit() {
        return {
          display: this.isEdit ? 'block' : 'none'
        }
      }
    },
    methods: {
      submitDelete: function () {
        console.log('delete Menu')
      }
    },
    created() {
      // Using the service bus
      serverBus.$on('sellerMenuEdit', () => {
        this.isEdit = !this.isEdit;
      });
    }
  }
</script>

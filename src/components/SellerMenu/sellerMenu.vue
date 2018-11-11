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
        <p v-bind:contenteditable="isEdit" id="editor">{{menuName}}</p>
        <p>10,000₩</p>
    </div>
</template>

<script>
  import './sellerMenu.scss'
  import {serverBus} from '../../main';

  export default {
    name: "sellerMenu",
    data: () => ({
      isEdit: false,
      menuName: '큐브스테이크'
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
        console.log(this.menuName)
      }
    },
    created() {
      serverBus.$on('sellerMenuEdit', () => {
        this.isEdit = !this.isEdit;
      });
    },
    mounted() {
      document.getElementById("editor").addEventListener("input", function () {
        this.menuName = document.getElementById("editor").innerHTML
        console.log(this.menuName)
      }, false)
    }
  }
</script>

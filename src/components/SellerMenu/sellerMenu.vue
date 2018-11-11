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
        <!--<p v-bind:contenteditable="isPropsAdd || isEdit" v-bind:id="'menuName'+this.item.idx">{{this.item.name}}</p>-->
        <!--<p v-bind:contenteditable="isPropsAdd || isEdit" v-bind:id="'menuPrice'+this.item.idx">{{this.item.price.toLocaleString()}}₩</p>-->
        <p v-bind:id="'menuName'+this.item.idx">{{this.item.name}}</p>
        <p v-bind:id="'menuPrice'+this.item.idx">{{this.item.price.toLocaleString()}}₩</p>
    </div>
</template>

<script>
  import './sellerMenu.scss'
  import {serverBus} from '../../main';
  import axios from 'axios'
  import jwt from 'jsonwebtoken'
  import cookie from 'js-cookie'

  export default {
    name: "sellerMenu",
    data: () => ({
      isEdit: false,
    }),
    props: {
      item: Object,
      isPropsAdd: Boolean
    },
    computed: {
      onEdit() {
        return {
          display: this.isPropsAdd || this.isEdit ? 'block' : 'none'
        }
      }
    },
    methods: {
      submitDelete: async function () {
        try {
          const result = await axios.delete(`http://localhost:3000/menu/${this.item.idx}`)
          if (result.status === 200) {
            alert('메뉴가 제거되었습니다.')
            location.reload()
          }
        } catch (e) {
          if(e.message === 'Request failed with status code 404') {
            alert('없는 메뉴 입니다.')
          }
        }
      }
    },
    created() {
      serverBus.$on('sellerMenuEdit', () => {
        this.isEdit = !this.isEdit
      })
      serverBus.$on('sellerMenuAddComplete', async () => {
        if (this.isPropsAdd) {
          const cookieToken = cookie.get('WMUD')
          const {idx} = jwt.decode(cookieToken)
          const name = document.getElementById("menuName0").innerHTML
          console.log(name)
          const price = document.getElementById("menuPrice0").innerHTML.split('₩')[0]
          const result = await axios.post(`http://localhost:3000/menu/${idx}`, {
            name,
            price,
            image: ''
          })
          if (result.status === 200) {
            alert('메뉴가 등록되었습니다')
            location.reload()
          } else {
            alert('error')
          }
        }
      })
    },
    async mounted() {
      document.getElementById("menuName").addEventListener("input", function () {
        this.menuName = document.getElementById("menuName").innerHTML
        console.log(this.menuName)
      }, false)
      document.getElementById("menuPrice").addEventListener("input", function () {
        this.menuName = document.getElementById("menuPrice").innerHTML
        console.log(this.menuName)
      }, false)
    }
  }
</script>

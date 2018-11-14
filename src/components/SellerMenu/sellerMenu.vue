<template>
    <div class="seller-menu-wrap">
        <img src="../../assets/delete.png"
             srcset="../../assets/delete@2x.png 2x,
             ../../assets/delete@3x.png 3x"
             class="seller-menu-delete"
             :style="onEdit"
             @click="submitDelete">
        <img :src="this.item.image ? this.imagePath : this.image || '/img/photo.3d1097c9.png'" alt="photo"
             class="seller-menu-image">
        <input id="file" type="file" :style="onEdit" @change="processFile($event)" class="seller-menu-image-input">
        <!--<p v-bind:contenteditable="isPropsAdd || isEdit" v-bind:id="'menuName'+this.item.idx">{{this.item.name}}</p>-->
        <!--<p v-bind:contenteditable="isPropsAdd || isEdit" v-bind:id="'menuPrice'+this.item.idx">{{this.item.price.toLocaleString()}}₩</p>-->
        <p v-bind:contenteditable="isPropsAdd || isEdit" v-bind:id="'menuName'+this.item.idx">{{this.item.name}}</p>
        <p v-bind:contenteditable="isPropsAdd || isEdit" v-bind:id="'menuPrice'+this.item.idx">
            {{this.item.price.toLocaleString()}}₩</p>
    </div>
</template>

<script>
  import './sellerMenu.scss'
  import {serverBus} from '../../main';
  import axios from 'axios'
  import jwt from 'jsonwebtoken'
  import cookie from 'js-cookie'
  import config from '../../config'

  export default {
    name: "sellerMenu",
    data: () => ({
      isEdit: false,
      image: '',
      imageFile: {},
      imagePath: `${config.host}/uploads/`,
      uploadImage: false
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
          const result = await axios.delete(`${config.host}/menu/${this.item.idx}`)
          if (result.status === 200) {
            alert('메뉴가 제거되었습니다.')
            location.reload()
          }
        } catch (e) {
          if (e.message === 'Request failed with status code 404') {
            alert('없는 메뉴 입니다.')
          }
        }
      },
      processFile(event) {
        const input = event.target;
        if (input.files && input.files[0]) {
          const reader = new FileReader()
          reader.onload = (e) => {
            this.image = e.target.result
            this.imageFile = input.files[0]
            this.uploadImage = true
          }
          reader.readAsDataURL(input.files[0])
        }
      }
    },
    created() {
      console.log(this.item.image ? this.imagePath : this.image || '/img/photo.3d1097c9.png')
      this.imagePath += this.item.image
      serverBus.$on('sellerMenuEdit', () => {
        this.isEdit = !this.isEdit
      })
      serverBus.$on('sellerMenuAddComplete', async () => {
        if (this.isPropsAdd) {
          if (!this.uploadImage) {
            alert('이미지를 등록해주세요')
          }
          serverBus.$emit('sellerMenuAddCompleteNotyet')
          const cookieToken = cookie.get('WMUD')
          const {idx} = jwt.decode(cookieToken)
          const name = document.getElementById("menuName0").innerHTML
          const formData = new FormData()
          formData.append("image", this.imageFile)
          const price = document.getElementById("menuPrice0").innerHTML.split('₩')[0]
          const {data} = await axios.post(`${config.host}/menu/${idx}`,
            {
              name,
              price
            })
          const result = await axios.post(`${config.host}/menu/${idx}/image/${data.idx}`,
            formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            })
          if (result.status === 200) {
            alert('메뉴가 등록되었습니다')
            location.reload()
          } else {
            alert('error')
          }
        }
      })
    }
  }
</script>

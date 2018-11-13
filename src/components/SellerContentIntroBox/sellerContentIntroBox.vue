<template>
    <div class="seller-content-intro-box-wrap">
        <p v-bind:contenteditable="isIntroEdit" id="storePhone">{{phone}}</p>
        <textarea style="resize: none;" rows="3" :readonly="!isIntroEdit" v-bind:contenteditable="isIntroEdit" id="storeDesc">{{storeDesc}}</textarea>
        <div :style="onEditWrap" class="editWrap"></div>
    </div>
</template>

<script>
  import './sellerContentIntroBox.scss'
  import jwt from 'jsonwebtoken'
  import cookie from 'js-cookie'
  import {serverBus} from '../../main'

  export default {
    name: "sellerContentIntroBox",
    data: () => ({
      phone: '',
      storeDesc: '',
      isIntroEdit: false
    }),
    computed: {
      onEditWrap() {
        return {
          backgroundColor: this.isIntroEdit ? 'rgba(0, 0, 0, .25)' : 'rgba(0, 0, 0, 0)',
        }
      }
    },
    created () {
      const cookieToken = cookie.get('WMUD')
      const {phone, storeDesc} = jwt.decode(cookieToken)
      this.phone = phone
      this.storeDesc = storeDesc
      serverBus.$on('sellerIntroEdit', () => {
        this.isIntroEdit = !this.isIntroEdit
      })
    }
  }
</script>

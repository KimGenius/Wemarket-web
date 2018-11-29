<template>
    <div class="seller-content-intro-box-wrap">
        <p v-bind:contenteditable="isIntroEdit" id="storePhone">{{phone}}</p>
        <textarea maxlength="130" style="resize: none; width: 90%" rows="3" :readonly="!isIntroEdit" @keyup="checkRows"
                  id="storeDesc" v-model="storeDesc"></textarea>
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
      isIntroEdit: false,
      oldStoreDesc: ''
    }),
    computed: {
      onEditWrap() {
        return {
          backgroundColor: this.isIntroEdit ? 'rgba(0, 0, 0, .25)' : 'rgba(0, 0, 0, 0)',
        }
      }
    },
    methods: {
      checkRows() {
        const str = document.getElementById("storeDesc").value;
        const str_arr = str.split("\n");  // 줄바꿈 기준으로 나눔
        const row = str_arr.length;  // row = 줄 수
        if ((str_arr[0] && str_arr[0].length >= 26) || (str_arr[1] && str_arr[1].length >= 26) || (str_arr[2] && str_arr[2].length >= 26)) {
          alert("한 줄 최대 길이를 넘어설수 없습니다.")
          console.log(str_arr[0].substr(0, 24))
          let result = ''
          if (str_arr[0]) result += str_arr[0].substr(0, 24) + '\n'
          if (str_arr[1]) result += str_arr[1].substr(0, 24) + '\n'
          if (str_arr[2]) result += str_arr[2].substr(0, 24)
          document.getElementById("storeDesc").value = result
        } else {
          if (row > 3) {
            alert("3줄 이상 입력할 수 없습니다.")
            document.getElementById("storeDesc").value = str_arr[0] + '\n' + str_arr[1] + '\n' + str_arr[2]
          } else {
            this.oldStoreDesc = this.storeDesc
          }
        }
      }
    },
    created() {
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

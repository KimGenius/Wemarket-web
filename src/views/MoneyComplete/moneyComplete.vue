<template>
    <div class="money-complete-wrap">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320.977 244.702">
            <defs>
            </defs>
            <path id="large_chk" d="M105.415 198.651l-76.093-76.093L3.41 148.287l102 102L324.387 31.319 298.658 5.59z"
                  class="cls-1" transform="translate(-3.41 -5.59)"/>
        </svg>
        <p>주문이<br>완료되었습니다!</p>
        <p>{{storeName}}<br>
            {{dateCreated}}<br>
            {{phone}}</p>
        <p>상호 : 애드킹
            대표자 : 조성희<br>
            사업자등록번호 : 137-20-17849
            전화번호 : 010-3890-0047</p>
        <v-btn @click="clickLikeBtn" class="money-complete-like">즐겨찾는 매장 저장하기</v-btn>
    </div>
</template>

<script>
  import './moneyComplete.scss'

  export default {
    name: "moneyComplete",
    methods: {
      clickLikeBtn() {
        window.open('https://play.google.com/store/apps/details?id=wemarket.kr.wmark')
      }
    },
    data: () => ({
      dateCreated: '',
      phone: '',
      storeName: ''
    }),
    created() {
      const urlParams = new URLSearchParams(window.location.search)
      const phone = urlParams.get('phone')
      const dateCreated = urlParams.get('dateCreated')
      const storeName = urlParams.get('storeName')
      this.phone = phone
      this.dateCreated = dateCreated
      this.storeName = storeName
    }
  }
</script>

<style scoped>
    .cls-1 {
        fill: #fff
    }
</style>

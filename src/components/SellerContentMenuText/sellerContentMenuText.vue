<template>
    <div class="seller-content-menu">
        <p>메뉴</p>
        <p @click="onEditMode">{{editText}}</p>
        <p @click="onAddMode">{{addText}}</p>
    </div>
</template>

<script>
  import './sellerContentMenuText.scss'
  import {serverBus} from '../../main';

  export default {
    name: "SellerContentMenuText",
    data: () => ({
      editText: '수정',
      addText: '추가'
    }),
    methods: {
      onEditMode: function () {
        if (this.editText === '수정') {
          this.editText = '완료'
          this.addText = ''
        } else {
          this.editText = '수정'
          this.addText = '추가'
        }
        serverBus.$emit('sellerMenuEdit')
      },
      onAddMode: function () {
        if (this.addText === '추가') {
          this.editText = ''
          this.addText = '완료'
          serverBus.$emit('sellerMenuAdd')
        } else {
          this.editText = '수정'
          this.addText = '추가'
          serverBus.$emit('sellerMenuAddComplete')
        }
      }
    },
    created() {
      serverBus.$on('sellerMenuAddCompleteNotyet', () => {
        this.editText = ''
        this.addText = '완료'
      })
    }
  }
</script>

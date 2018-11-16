<template>
    <div class="order-card-wrap">
        <div class="order-card-type" :style="isMoney">
            <p>{{item.type === 'MONEY' ? '현금 결제' : '카카오페이'}}</p>
        </div>
        <div class="order-card-info">
            <p>
            <pre>{{this.menuName}}</pre>
            <br>
            <br>
            </p>
            <p class="order-card-info-date">{{this.dateCreated}}</p>
            <p class="order-card-info-price">{{this.item.price.toLocaleString()}}₩</p>
            <p class="order-card-info-finish">{{this.isComplete}}</p>
        </div>
    </div>
</template>

<script>
  import './orderCard.scss'
  import moment from 'moment-timezone'

  export default {
    name: "orderCard",
    props: {
      item: Object
    },
    data: () => ({
      menuName: '',
      isComplete: '완료하기'
    }),
    computed: {
      isMoney() {
        return {
          backgroundColor: this.item.type === 'MONEY' ? '#1db901' : '#ffe203'
        }
      }
    },
    beforeMount() {
      this.menuName = this.item.menuText.replace(/\/n/gi, "<br>")
      this.dateCreated = moment.tz(this.item.dateCreated, 'Asia/Seoul').format('YYYY-MM-DD HH:mm:ss')
      this.isComplete = this.item.status === 'PENDING' ? '완료하기' : '완료됨'
    }
  }
</script>

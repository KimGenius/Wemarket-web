<template>
    <div class="order-card-wrap">
        <div class="order-complete" :style="completeStyle">

        </div>
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
            <p @click="completeOrder" class="order-card-info-finish">{{this.isComplete}}</p>
        </div>
    </div>
</template>

<script>
  import './orderCard.scss'
  import moment from 'moment-timezone'
  import axios from 'axios'
  import config from '../../config'

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
      },
      completeStyle() {
        return {
          backgroundColor: this.item.status === 'COMPLETE' ? 'rgba(255, 255, 255, 0.4)' : 'transparent'
        }
      }
    },
    methods: {
      async completeOrder() {
        if (this.item.status == 'PENDING') {
          try {
            await axios.put(`${config.host}/orders/${this.item.idx}`, {
              status: 'COMPLETE'
            })
            alert('주문이 완료되었습니다')
            location.reload()
          } catch (e) {
            console.log(e)
            alert('주문 완료중 오류 발생')
          }
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

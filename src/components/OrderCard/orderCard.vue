<template>
    <div class="order-card-wrap">
        <div class="order-card-type">
            <p>카카오페이</p>
        </div>
        <div class="order-card-info">
            <p>
                큐브스테이크 2개<br>
                치즈큐브스테이크 1개
            </p>
            <p class="order-card-info-date">18.11.03 8:12</p>
            <p class="order-card-info-price">31,500₩</p>
            <p class="order-card-info-finish">완료하기</p>
        </div>
    </div>
</template>

<script>
  import './orderCard.scss'

  export default {
    name: "orderCard"
  }
</script>

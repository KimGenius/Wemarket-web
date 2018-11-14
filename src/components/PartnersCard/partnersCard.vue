<template>
    <div class="partners-card-wrap">
        <p>{{item.title}}</p>
        <p>{{item.endDate}}</p>
        <p>{{item.content}}</p>
        <div>
            <p>신청하기</p>
        </div>
    </div>
</template>

<script>
  import './partnersCard.scss'

  export default {
    name: "partnersCard",
    props: {
      item: Object
    }
  }
</script>

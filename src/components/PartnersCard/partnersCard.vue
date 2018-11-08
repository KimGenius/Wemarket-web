<template>
    <div class="partners-card-wrap">
        <p>{{title}}</p>
        <p>{{date}}</p>
        <p>{{content}}</p>
        <p>더보기</p>
    </div>
</template>

<script>
  import './partnersCard.scss'

  export default {
    name: "partnersCard",
    props: {
      date: String,
      title: String,
      content: String
    }
  }
</script>

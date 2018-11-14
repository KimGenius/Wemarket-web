<template>
    <div class="partners-card-wrap">
        <p>{{item.title}}</p>
        <p>{{item.endDate}} 마감</p>
        <p>{{item.content}}</p>
        <div>
            <p :style="isSubmitStyle">신청하기</p>
            <p :style="isNotSubmitStyle">신청됨</p>
        </div>
    </div>
</template>

<script>
  import './partnersCard.scss'
  import config from '../../config'

  export default {
    name: "partnersCard",
    props: {
      item: Object
    },
    data: () => ({
      isSubmit: false
    }),
    computed: {
      isSubmitStyle() {
        return {
          display: this.isSubmit ? 'block' : 'none'
        }
      },
      isNotSubmitStyle() {
        return {
          display: this.isSubmit ? 'none' : 'block'
        }
      }
    },
    beforeMount() {
      this.item.udx.split(',').map(u => {
        if (u == config.getCookie().idx) {
          this.isSubmit = true
        }
      })
    }
  }
</script>

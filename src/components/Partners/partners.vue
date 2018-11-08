<template>
    <div class="partners-wrap" :style="partnersStyle">
        <p @click="onPartners" class="partners-wrap-btn">파트너즈</p>
        <PartnersCard
                title="파트너 혜택의 제목입니다."
                content="이 곳에는 내용이 들어갑니다. 따로 요약되거나 하지 않고, 주어진 정보가 최대한 그대로 대입됩니다. 파트너들은 내용을 읽어보고,"
                date="2018.12.01 마감"
        />
    </div>
</template>

<script>
  import './partners.scss'
  import PartnersCard from '../PartnersCard'

  export default {
    name: "partners",
    components: {PartnersCard},
    data: () => ({
      isPartners: false
    }),
    computed: {
      partnersStyle() {
        return {
          top: this.isPartners ? '7.9vh' : '92.1vh'
        }
      }
    },
    methods: {
      onPartners: function () {
        this.isPartners = !this.isPartners
      }
    }
  }
</script>

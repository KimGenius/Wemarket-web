<template>
    <div class="partners-wrap" :style="partnersStyle">
        <p @click="onPartners" class="partners-wrap-btn">파트너즈</p>
    </div>
</template>

<script>
  import './partners.scss'

  export default {
    name: "partners",
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

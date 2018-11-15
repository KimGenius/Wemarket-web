<template>
    <div class="customer-content-intro-box-wrap">
        <p id="storePhone">{{phone}}</p>
        <textarea style="resize: none;" rows="3" :readonly="true" id="storeDesc" v-model="storeDesc"></textarea>
    </div>
</template>

<script>
  import './customerContentIntroBox.scss'

  export default {
    name: "customerContentIntroBox",
    props: {
      phone: String,
      storeDesc: String
    }
  }
</script>

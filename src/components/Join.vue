<template>
    <!--TODO: 가려지는 부분 hidden 처리 해야됨-->
    <div class='join-wrap' :style='wrapStyle'>
        <p v-on:click='toggleJoin' :style='style' class='join-toggle-btn'>회원가입</p>
    </div>
</template>

<script>
  export default {
    name: 'waitjoin',
    props: {
      backgroundColor: String
    },
    computed: {
      style() {
        return {
          '--background-color': this.backgroundColor || '#ff9922'
        }
      },
      wrapStyle() {
        return {
          top: this.isJoin ? '6.2vh' : '92.2vh'
        }
      }
    },
    data: () => ({
      isJoin: false
    }),
    methods: {
      toggleJoin: function () {
        this.isJoin = !this.isJoin
      }
    }
  }
</script>

<style scoped>
    .join-wrap {
        position: absolute;
        width: 100vw;
        height: 93.8vh;
        background-color: #ffffff;
        -webkit-transition: all .5s;
        -moz-transition: all .5s;
        -ms-transition: all .5s;
        -o-transition: all .5s;
        transition: all .5s;
    }

    .join-toggle-btn {
        background-color: #ffffff;
        width: 100vw;
        height: 7.8vh;
        font-size: 13px;
        display: block;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        letter-spacing: normal;
        text-align: center;
        color: rgba(0, 0, 0, .6);
        cursor: pointer;
        vertical-align: middle;
        line-height: 7.8vh;
        position: absolute;
        margin-bottom: 0;
        top: 0;
        cursor: pointer;
    }

    .join-toggle-btn:before {
        content: '';
        position: absolute;
        left: 0;
        border-top: 4.4vw solid var(--background-color);
        border-right: 4.4vw solid transparent;
        width: 0;
    }
</style>

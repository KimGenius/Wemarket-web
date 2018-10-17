<template>
    <div class='join-hide' :style='wrapStyle'>
        <div class="join-wrap">
            <v-form>
                <p v-on:click='toggleJoin' :style='style' class='join-toggle-btn'>회원가입</p>
                <v-flex xs12 sm6 md3>
                    <v-text-field
                            hide-details
                            class='join-input'
                            label='아이디'
                            color='#ff9922'
                            box
                    ></v-text-field>
                </v-flex>
            </v-form>
        </div>
    </div>
</template>

<script>
  import './join.scss'
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
          top: this.isJoin ? '6.2vh' : '92.2vh',
          height: this.isJoin ? '93.8vh' : '7.8vh'
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

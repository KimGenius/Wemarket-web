<template>
    <div class="partners-wrap" :style="partnersStyle">
        <p @click="onPartners" class="partners-wrap-btn">파트너즈</p>
        <PartnersCard
                title="파트너 혜택의 제목입니다."
                content="이 곳에는 내용이 들어갑니다. 따로 요약되거나 하지 않고, 주어진 정보가 최대한 그대로 대입됩니다. 파트너들은 내용을 읽어보고,"
                date="2018.12.01 마감"
                :style="isPartnersStyle"
                v-for="item in partnerList"
                :key="item.idx"
                :item="item"
        />
        <PartnersPending :style="isPartnerPendingStyle"></PartnersPending>
        <PartnerNotyet :style="isPartnerNotyetStyle"/>
    </div>
</template>

<script>
  import './partners.scss'
  import PartnersCard from '../PartnersCard'
  import PartnersPending from '../PartnersPending'
  import PartnerNotyet from '../PartnerNotyet'
  import jwt from 'jsonwebtoken'
  import cookie from 'js-cookie'
  import axios from 'axios'
  import config from '../../config'

  export default {
    name: "partners",
    components: {PartnersCard, PartnersPending, PartnerNotyet},
    data: () => ({
      isPartners: false,
      sellerLevel: '',
      partnerList: []
    }),
    computed: {
      partnersStyle() {
        return {
          bottom: this.isPartners ? '-0vh' : '-84.3vh',
          overflow: this.isPartners ? 'scroll' : 'hidden'
        }
      },
      isPartnersStyle() {
        return {
          display: this.sellerLevel === 'PARTNERS' ? 'block' : 'none'
        }
      },
      isPartnerNotyetStyle() {
        return {
          display: this.sellerLevel === 'SELLER' ? 'block' : 'none'
        }
      },
      isPartnerPendingStyle() {
        return {
          display: this.sellerLevel === 'PENDING' ? 'block' : 'none'
        }
      }
    },
    methods: {
      onPartners: function () {
        this.isPartners = !this.isPartners
      }
    },
    async created() {
      const cookieToken = cookie.get('WMUD')
      const {level} = jwt.decode(cookieToken)
      this.sellerLevel = level

      const {data, status} = await axios.get(`${config.host}/partners`)
      if (status !== 200) alert('파트너스 글 목록 불러오기에 실패했습니다.')
      else this.partnerList = data
    }
  }
</script>

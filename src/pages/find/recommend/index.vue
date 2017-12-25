<template>
  <div class="recommend-page">
    <div class="my-swiper-wrap">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide><img src="/static/banner1.png" alt="banner"></swiper-slide>
        <swiper-slide><img src="/static/banner1.png" alt="banner"></swiper-slide>
        <swiper-slide><img src="/static/banner1.png" alt="banner"></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

    <song-list></song-list>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import songList from './songlist'

export default {
  name: 'carrousel',
  data () {
    return {
      swiperOption: {
        speed: 800,
        loop: true,
        autoplay: {
          delay: 5000
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  components: {
    swiper,
    swiperSlide,
    songList
  }
}
</script>

<style lang="less" scoped>
@import '../../lib.less';

.my-swiper-wrap {
  overflow: hidden;
  width: 540px;
  height: 200px;
  margin: 20px auto;
}
</style>

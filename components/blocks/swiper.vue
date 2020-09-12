<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide
      v-for="banner in banners"
      :key="banner.id"
      class="swiper-slide"
    >
      <img :src="banner" />
    </swiper-slide>
    <!-- <div class="swiper-pagination"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div> -->
  </swiper>
</template>

<script>
export default {
  name: 'Carrousel',
  data() {
    return {
      banners: [
        '/images/background.jpg',
        '/images/background.jpg',
        '/images/background.jpg',
      ],
      swiperOptions: {
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        animating: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
  },
  mounted() {
    console.log('Current Swiper instance object', this.swiper)
    //   this.swiper.slideTo(3, 1000, false)
  },
}
</script>

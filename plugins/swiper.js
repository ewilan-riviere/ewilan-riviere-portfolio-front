import Vue from 'vue'
// import VueAwesomeSwiper from 'vue-awesome-swiper'

import {
  Swiper as SwiperClass,
  Pagination,
  Mousewheel,
  Autoplay,
} from 'swiper/core'

import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
// If you use Swiper 6.0.0 or higher
import 'swiper/swiper-bundle.css'

// Swiper modules
SwiperClass.use([Pagination, Mousewheel, Autoplay])

Vue.use(getAwesomeSwiper(SwiperClass))

// Vue.use(VueAwesomeSwiper /* { default options with global component } */)

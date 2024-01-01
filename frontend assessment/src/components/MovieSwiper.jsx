import React from 'react';
import './movieswiper.css';

// import Swiper from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import {Autoplay, EffectCoverFlow} from 'swiper/modules';


function MovieSwiper() {
  return (
    <Swiper
     effect={'overflow'}
     grabCursor={true}
     centeredSlides={true}
     autoplay={{
        delay: 2500,
        disableOnInteraction: false,
     }}
     coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
     }}
     loop={true}
     modules={{Autoplay, EffectCoverFlow}}
     className='movieSwiper'
    
    >
        <SwiperSlide>
            <img src="" alt="preview Image" />
        </SwiperSlide>
    </Swiper>
  )
}

export default MovieSwiper
import React from 'react'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/effect-fade';
import 'swiper/css/thumbs';

import "./CSS Styles/Single-Car-page.css"
import "./CSS Styles/Single-Car-page-media.css"
import { Swiper, SwiperSlide } from "swiper/react"

import  { useRef, useState } from 'react';
import { Navigation, Thumbs, FreeMode, EffectFade} from 'swiper/modules';

import min14 from '../pics/14-min-731x485.jpg'
import p1 from '../pics/1P.png'
import p2 from '../pics/2P.png'
import p3 from '../pics/3P.png'

export default function Many_sliders() {

    const [thumbsSwiper, setThumbsSwiper] = React.useState<any>(null);

    return <>
        <Swiper
            spaceBetween={10}
            onSwiper={setThumbsSwiper}
            effect='fade'
            modules={[EffectFade]}
            className="Vertical1"
        >
            <SwiperSlide><img src={min14.src}></img></SwiperSlide>
            <SwiperSlide><img src={p1.src}></img></SwiperSlide>
            <SwiperSlide><img src={p2.src}></img></SwiperSlide>
            <SwiperSlide><img src={p3.src}></img></SwiperSlide>
            <SwiperSlide><img src={p3.src}></img></SwiperSlide>
            <SwiperSlide><img src={p3.src}></img></SwiperSlide>
        </Swiper>
        <Swiper
            spaceBetween={33}
            direction="vertical"
            navigation={true}
            modules={[Navigation, Thumbs, FreeMode]}
            className="Vertical2"
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            slidesPerView={5}
            loop={true}
            freeMode={true}
        >
            <SwiperSlide><img style={{ height: '85px', width: '150px' }} src={min14.src}></img></SwiperSlide>
            <SwiperSlide><img style={{ height: '85px', width: '150px' }} src={p1.src}></img></SwiperSlide>
            <SwiperSlide><img style={{ height: '85px', width: '150px' }} src={p2.src}></img></SwiperSlide>
            <SwiperSlide><img style={{ height: '85px', width: '150px' }} src={p3.src}></img></SwiperSlide>
            <SwiperSlide><img style={{ height: '85px', width: '150px' }} src={p3.src}></img></SwiperSlide>
            <SwiperSlide><img style={{ height: '85px', width: '150px' }} src={p3.src}></img></SwiperSlide>
        </Swiper>
        <Swiper
            spaceBetween={30}
            navigation={true}
            modules={[Navigation, Thumbs, FreeMode]}
            slidesPerView={4}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            loop={true}
            freeMode={true}
            className="Vertical3"
        >
            <SwiperSlide><img style={{ height: '100%', width: '100%' }} src={min14.src}></img></SwiperSlide>
            <SwiperSlide><img style={{ height: '100%', width: '100%' }} src={p1.src}></img></SwiperSlide>
            <SwiperSlide><img style={{ height: '100%', width: '100%' }} src={p2.src}></img></SwiperSlide>
            <SwiperSlide><img style={{ height: '100%', width: '100%' }} src={p3.src}></img></SwiperSlide>
            <SwiperSlide><img style={{ height: '100%', width: '100%' }} src={p3.src}></img></SwiperSlide>
            <SwiperSlide><img style={{ height: '100%', width: '100%' }} src={p3.src}></img></SwiperSlide>
        </Swiper>
    </>
}
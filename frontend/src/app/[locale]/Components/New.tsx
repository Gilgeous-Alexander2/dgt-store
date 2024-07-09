import React from "react"
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';
import { Newt } from "../types";
import '../Main page/CSS Styles/News.css'

export default function New(props: Newt) {
    return (
        <>
            <div className="news-block">
                <img src={props.img}></img>
                <div className='news-block-content'>
                    <div className='title'>{props.text?.t1}</div>
                    <Swiper
                        direction={'vertical'}
                        slidesPerView={'auto'}
                        className="PidorSwiper"
                        freeMode={true}
                        scrollbar={true}
                        mousewheel={true}
                        modules={[FreeMode, Scrollbar, Mousewheel]}
                        style={{
                            "--swiper-scrollbar-drag-bg-color": "rgba(255, 0, 0)",
                            "--swiper-scrollbar-size": "4px"
                        } as React.CSSProperties}
                    >
                        <SwiperSlide style={{ height: 'auto' }}>
                            <p>{props.text.t2}</p>
                        </SwiperSlide>
                        <SwiperSlide style={{ height: 'auto' }}>
                            <p>{props.text.t3}</p>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </>

    )

}
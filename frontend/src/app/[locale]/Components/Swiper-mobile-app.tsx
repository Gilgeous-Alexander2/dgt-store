import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"

import { Navigation,Thumbs} from 'swiper/modules';



import { useTranslations } from 'next-intl';


import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

import './CSS Styles/mobapp.css'


import p1 from '../pics/1P.png'
import p2 from '../pics/2P.png'
import p3 from '../pics/3P.png'



export default function Swiper_mobile_app() {

    const [thumbsSwiper, setThumbsSwiper] = React.useState<any>(null);
    const  t  = useTranslations();

    return <>
        <Swiper navigation={true}
        style={{display:'grid'}}
            modules={[Navigation,Thumbs]}
            thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
            spaceBetween={50}
            loop={true}
            className="mobileapp-slider"
            >
            <SwiperSlide >
                <div className="slide-item">
                    <div className="slide-content">
                        <div className="title">{t('Car_page.Swiper.title2')}</div>
                        <div className="description">
                            <p>{t('Car_page.Swiper.s1')}</p>
                        </div>
                    </div>
                    <div className="slide-picture">
                        <img src={p1.src}></img>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide-item">
                    <div className="slide-content">
                        <div className="title">{t('Car_page.Swiper.title2')}</div>
                        <div className="description">
                            <p>{t('Car_page.Swiper.s2')}</p>
                        </div>
                    </div>
                    <div className="slide-picture">
                        <img src={p2.src}></img>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide-item">
                    <div className="slide-content">
                        <div className="title">{t('Car_page.Swiper.title2')}</div>
                        <div className="description">
                            <p>{t('Car_page.Swiper.s3')}</p>
                        </div>
                    </div>
                    <div className="slide-picture">
                        <img src={p3.src}></img>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </>
}
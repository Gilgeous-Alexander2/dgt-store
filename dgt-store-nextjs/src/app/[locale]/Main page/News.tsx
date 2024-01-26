import './CSS Styles/News.css'
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';
import React from 'react';
import { useTranslations } from 'next-intl';
import news1 from '../pics/1H7L7SYyOZA.jpg'
import news2 from '../pics/c5-FumdutkY-600x1068.jpg'




let pageWidth = document.documentElement.clientWidth


export default function News() {

    const t = useTranslations();



    return <>

        <div id="news" className="news">
            <h2>{t('Main_page.News')}</h2>
            <div className="slide-container">
                <div className="slick-track">
                    <Swiper
                        className='sample-slider'
                        style={{
                            height: 'auto',
                            "--swiper-pagination-bullet-horizontal-gap": "6px",
                        } as React.CSSProperties}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        spaceBetween={0}
                        modules={[Pagination]}
                    >
                        <SwiperSlide>
                            <div className="news-block">
                                <img src={news1.src}></img>
                                <div className='news-block-content'>
                                    <div className='title'>Drift Expo</div>
                                    <Swiper
                                        direction={'vertical'}
                                        slidesPerView={'auto'}
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
                                            <p>26-27 октября в КВЦ «Сокольники» в павильоне 4, соберутся самые яркие представители дрифт культуры нашей страны. Главная цель выставки – собрать вместе всех единомышленников, профессионалов, любителей и поклонников дрифта. Каждый пришедший обязательно найдёт что-нибудь интересное для себя.<br />
                                                В зоне STREET LEGAL будут представлены дрифт-проекты, предназначенные для участия в любительских соревнованиях, как зимних, так и летних.</p>
                                        </SwiperSlide>
                                        <SwiperSlide style={{ height: 'auto' }}>
                                            <p>26-27 октября в КВЦ «Сокольники» в павильоне 4, соберутся самые яркие представители дрифт культуры нашей страны. Главная цель выставки – собрать вместе всех единомышленников, профессионалов, любителей и поклонников дрифта. Каждый пришедший обязательно найдёт что-нибудь интересное для себя.</p>
                                        </SwiperSlide>

                                    </Swiper>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news-block">
                                <img src={news2.src}></img>
                                <div className='news-block-content'>
                                    <div className='title'>АВТОМОБИЛЬНЫЙ ФЕСТИВАЛЬ READY TO RACE</div>
                                    <Swiper
                                        direction={'vertical'}
                                        slidesPerView={'auto'}
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
                                            <p>26-27 октября в КВЦ «Сокольники» в павильоне 4, соберутся самые яркие представители дрифт культуры нашей страны. Главная цель выставки – собрать вместе всех единомышленников, профессионалов, любителей и поклонников дрифта. Каждый пришедший обязательно найдёт что-нибудь интересное для себя.<br />
                                                В зоне STREET LEGAL будут представлены дрифт-проекты, предназначенные для участия в любительских соревнованиях, как зимних, так и летних.</p>
                                        </SwiperSlide>
                                        <SwiperSlide style={{ height: 'auto' }}>
                                            <p>26-27 октября в КВЦ «Сокольники» в павильоне 4, соберутся самые яркие представители дрифт культуры нашей страны. Главная цель выставки – собрать вместе всех единомышленников, профессионалов, любителей и поклонников дрифта. Каждый пришедший обязательно найдёт что-нибудь интересное для себя.</p>
                                        </SwiperSlide>

                                    </Swiper>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                
            </div>
            <a>{t('Main_page.Read_more')}<div className="block-arrow">
                <svg height="16" width="16" viewBox="0 0 512 512"><path fill="#ffffff" d="M334.5 414c8.8 3.8 19 2 26-4.6l144-136c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22l0 72L32 192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l288 0 0 72c0 9.6 5.7 18.2 14.5 22z" /></svg>
            </div>
            </a>
        </div >
    </>
}
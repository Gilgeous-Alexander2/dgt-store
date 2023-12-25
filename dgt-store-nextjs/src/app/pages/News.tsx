
import '../CSS Styles/News.css'


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';


export default function News() {

    const pagination = {
        clickable: true
    }

    return <>

        <div id="news" className="news">
            <h2>Наши новости</h2>
            <div className="slide-container">

                <div className="slick-track" style={{ opacity: 1, width: '1028px', transform: 'translate3d(0px, 0px, 0px);', display: 'flex' }}>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        style={{ height: '100%' }}
                        pagination={pagination}
                        modules={[Pagination]}
                    >
                        <SwiperSlide >
                            <div className="news-block">
                                <img src="	http://dgt-store.com/wp-content/uploads/2019/09/1H7L7SYyOZA.jpg"></img>
                                <div className='news-block-content'>
                                    <div className='title'>Drift Expo</div>
                                    <Swiper
                                        direction={'vertical'}
                                        slidesPerView={'auto'}
                                        freeMode={true}
                                        scrollbar={true}
                                        mousewheel={true}
                                        modules={[FreeMode, Scrollbar, Mousewheel]}
                                    >
                                        <SwiperSlide style={{ height: 'auto' }}>
                                            <p>26-27 октября в КВЦ «Сокольники» в павильоне 4, соберутся самые яркие представители дрифт культуры нашей страны. Главная цель выставки – собрать вместе всех единомышленников, профессионалов, любителей и поклонников дрифта. Каждый пришедший обязательно найдёт что-нибудь интересное для себя.<br />
                                                В зоне STREET LEGAL будут представлены дрифт-проекты, предназначенные для участия в любительских соревнованиях, как зимних, так и летних.</p>
                                        </SwiperSlide>
                                        <SwiperSlide style={{ height: 'auto' }}>
                                            <p>26-27 октября в КВЦ «Сокольники» в павильоне 4, соберутся самые яркие представители дрифт культуры нашей страны. Главная цель выставки – собрать вместе всех единомышленников, профессионалов, любителей и поклонников дрифта. Каждый пришедший обязательно найдёт что-нибудь интересное для себя.</p>
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
                                <img src="	http://dgt-store.com/wp-content/uploads/2019/09/c5-FumdutkY-600x1068.jpg"></img>
                                <div className='news-block-content'>
                                    <div className='title'>АВТОМОБИЛЬНЫЙ ФЕСТИВАЛЬ READY TO RACE</div>
                                    <Swiper
                                        direction={'vertical'}
                                        slidesPerView={'auto'}
                                        freeMode={true}
                                        scrollbar={true}
                                        mousewheel={true}
                                        modules={[FreeMode, Scrollbar, Mousewheel]}

                                    >
                                        <SwiperSlide style={{ height: 'auto' }}>
                                            <p>26-27 октября в КВЦ «Сокольники» в павильоне 4, соберутся самые яркие представители дрифт культуры нашей страны. Главная цель выставки – собрать вместе всех единомышленников, профессионалов, любителей и поклонников дрифта. Каждый пришедший обязательно найдёт что-нибудь интересное для себя.<br />
                                                В зоне STREET LEGAL будут представлены дрифт-проекты, предназначенные для участия в любительских соревнованиях, как зимних, так и летних.</p>
                                        </SwiperSlide>
                                        <SwiperSlide style={{ height: 'auto' }}>
                                            <p>26-27 октября в КВЦ «Сокольники» в павильоне 4, соберутся самые яркие представители дрифт культуры нашей страны. Главная цель выставки – собрать вместе всех единомышленников, профессионалов, любителей и поклонников дрифта. Каждый пришедший обязательно найдёт что-нибудь интересное для себя.</p>
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
            <a>Подробнее<div className="block-arrow" /></a>
        </div >
    </>
}
'use client'
import Footer from "../../../Components/Footer"
import Header from "../../../Components/Header"
import "./Single-Car-page.css"
import "../../../App.css"
import React from 'react'
import Form from "@/app/Components/Form"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Navigation, Thumbs } from 'swiper/modules';
import { useTranslation } from "react-i18next"



export default function Single_Car_page({ params }: {
    params: { cars: string, car: string, Catalog: string }
}) {

    const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
    const {t} = useTranslation();

    return <>
        <Header></Header>
        <main className="main">
            <section className="single-page">
                <div className="single-page-head">
                    <div className="single-page-head-bg">
                        <img src="http://dgt-store.com/wp-content/uploads/2019/08/single-bg.png"></img>
                    </div>
                    <nav className="breadcrumbs page-contacts__breadcrumbs">
                        <div className="wrapper">
                            <ul className="breadcrumbs">
                                <li>
                                    <a>
                                        <span>Главная</span>
                                    </a>
                                </li>
                                <li className="not-active">
                                    <a>{params.Catalog}</a>
                                </li>
                                <li className="not-active">
                                    <a>{params.cars}</a>
                                </li>
                                <li className="not-active">
                                    <a>{params.car}</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="single-page-body">
                    <div className="container">
                        <h2>{params.car}</h2>
                        <div className="single-page-item">
                            <div className="left-block">
                                <Swiper
                                    spaceBetween={10}
                                    direction="vertical"
                                    thumbs={{ swiper: thumbsSwiper }}
                                    className="Vertical1"

                                >
                                    <SwiperSlide><img src="http://dgt-store.com/wp-content/uploads/2019/09/14-min-731x485.jpg"></img></SwiperSlide>
                                    <SwiperSlide><img src="http://dgt-store.com/wp-content/uploads/2019/09/14-min-731x485.jpg"></img></SwiperSlide>
                                    <SwiperSlide><img src="http://dgt-store.com/wp-content/uploads/2019/09/14-min-731x485.jpg"></img></SwiperSlide>
                                    <SwiperSlide><img src="http://dgt-store.com/wp-content/uploads/2019/09/14-min-731x485.jpg"></img></SwiperSlide>

                                </Swiper>
                                    <Swiper
                                        spaceBetween={33}
                                        direction="vertical"
                                        navigation={true}
                                        modules={[Navigation, Thumbs]}
                                        className="Vertical2"
                                        slidesPerView={5}
                                        loop={true}
                                    >
                                        <SwiperSlide><img style={{ height: '85px',width:'150px'}} src="http://dgt-store.com/wp-content/uploads/2019/09/14-min-731x485.jpg"></img></SwiperSlide>
                                        <SwiperSlide><img style={{ height: '85px',width:'150px'}} src="http://dgt-store.com/wp-content/uploads/2019/09/14-min-731x485.jpg"></img></SwiperSlide>
                                        <SwiperSlide><img style={{ height: '85px',width:'150px'}} src="http://dgt-store.com/wp-content/uploads/2019/09/14-min-731x485.jpg"></img></SwiperSlide>
                                        <SwiperSlide><img style={{ height: '85px',width:'150px'}} src="http://dgt-store.com/wp-content/uploads/2019/09/14-min-731x485.jpg"></img></SwiperSlide>
                                        <SwiperSlide><img style={{ height: '85px',width:'150px'}} src="http://dgt-store.com/wp-content/uploads/2019/09/14-min-731x485.jpg"></img></SwiperSlide>
                                        <SwiperSlide><img style={{ height: '85px',width:'150px'}} src="http://dgt-store.com/wp-content/uploads/2019/09/14-min-731x485.jpg"></img></SwiperSlide>
                                        <SwiperSlide><img style={{ height: '85px',width:'150px'}} src="http://dgt-store.com/wp-content/uploads/2019/09/14-min-731x485.jpg"></img></SwiperSlide>
                                    </Swiper>
                            </div>
                            <div className="right-block">
                                <table className="single-page-table">

                                    <tbody>
                                        <tr>
                                            <td>{t('Car_page.Brand')}</td>
                                            <td>{params.cars + ' ' + params.car}</td>
                                        </tr>
                                        <tr>
                                            <td>{t('Car_page.Year')}</td>
                                            <td>2009-2012  </td>
                                        </tr>
                                        <tr>
                                            <td>{t('Car_page.Engine')}</td>
                                            <td>3.2/3.0T </td>
                                        </tr>
                                        <tr>
                                            <td>{t('Car_page.Material')}</td>
                                            <td>Нержавеющая сталь SUS 304</td>
                                        </tr>
                                        <tr>
                                            <td>{t('Car_page.Price')}</td>
                                            <td>По запросу*</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <h3>Описание продукта</h3>
                        <div className="long-text">
                            <p><strong>Преимущества :</strong></p>
                            <div style={{ fontSize: "14px", marginBottom: "24px" }}>
                                <ul>
                                    <li style={{ marginBottom: "10px" }}>1. Выхлопная система DGT облегчает вес автомобиля.</li>
                                    <li style={{ marginBottom: "10px" }}>2. Значительно улучшается звук во всех режимах эксплуатации.</li>
                                    <li style={{ marginBottom: "10px" }}>3. Дает прибавку в мощности до 5-10 лошадиных сил.</li>
                                    <li>4. Установка настолько проста, что это сделает даже ваша бабушка.</li>
                                </ul>
                            </div>
                            <p><strong>В комплект входит:</strong></p>
                            <div style={{ fontSize: "14px" }}>
                                <ul>
                                    <li style={{ marginBottom: "10px" }}>1. Основная трасса* и axle-back с заслонками для регулировки уровня громкости выхлопной системы, а также насадками*.</li>
                                    <li style={{ marginBottom: "10px" }}>2. Трассы изготавливаются из нержавеющей стали, покрытой высокотемпературной краской и, опционально, из титана.</li>
                                    <li style={{ marginBottom: "10px" }}>3. Блок управления с двумя пультами и OBD адаптером* для управления с телефона (iOS), используя мобильное приложение.</li>
                                    <li>4. Также мы можем предложить Вам спортивные катализаторы нашего производства.<br />
                                        *в зависимости от модификации и модели автомобиля комплекты могут отличаться.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-page-bottom">
                    <div className="container">
                        <div className="app">
                            <h3>Управляй выхлопной системой DGT со своего смартфона</h3>
                            <div className="app-bg-dots">
                                <div className="app-bg">
                                    <Swiper navigation={true}
                                        modules={[Navigation]}
                                        spaceBetween={50}
                                        className="mobileapp-slider"
                                        loop={true}>
                                        <SwiperSlide style={{ height: '300px' }}>
                                            <div className="slide-item">
                                                <div className="slide-content">
                                                    <div className="title">DGT - мобильное приложение</div>
                                                    <div className="description">
                                                        <p>Приложение позволяет контролировать звук выхлопной системы.</p>
                                                    </div>
                                                </div>
                                                <div className="slide-picture">
                                                    <img src="http://dgt-store.com/wp-content/uploads/2019/10/1P.png"></img>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="slide-item">
                                                <div className="slide-content">
                                                    <div className="title">DGT - мобильное приложение</div>
                                                    <div className="description">
                                                        <p>Выхлопную систему можно легко переключить на бесшумный режим с закрытой заслонкой. Включение открытой заслонки запускает режим с глубоким резонансным звуком.</p>
                                                    </div>
                                                </div>
                                                <div className="slide-picture">
                                                    <img src="http://dgt-store.com/wp-content/uploads/2019/10/2P.png"></img>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="slide-item">
                                                <div className="slide-content">
                                                    <div className="title">DGT - мобильное приложение</div>
                                                    <div className="description">
                                                        <p>Заслонку можно открыть под углом 35 градусов. Доступен автоматический и ручной режим, в котором можно настроить обороты двигателя для открытия заслонки.</p>
                                                    </div>
                                                </div>
                                                <div className="slide-picture">
                                                    <img src="http://dgt-store.com/wp-content/uploads/2019/10/3P.png"></img>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                        <Form></Form>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </main>
    </>
}
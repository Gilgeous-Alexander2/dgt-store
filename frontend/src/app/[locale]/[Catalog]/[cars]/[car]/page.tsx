'use client'
import React from 'react'


import { Swiper, SwiperSlide } from "swiper/react"

import '../../../Components/CSS Styles/Media_requests.css'

import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/effect-fade';

import Form from "../../../Components/Form"

import { useRef, useState } from 'react';
import { Navigation, Thumbs, FreeMode, EffectFade } from 'swiper/modules';
import { useTranslations } from 'next-intl';

import Footer from "../../../Components/Footer"
import Header from "../../../Components/Header"
import Link from 'next/link'
import singlebg from '../../../pics/single-bg.png'
import min14 from '../../../pics/14-min-731x485.jpg'
import p1 from '../../../pics/1P.png'
import p2 from '../../../pics/2P.png'
import p3 from '../../../pics/3P.png'
import Swiper_mobile_app from '../../../Components/Swiper-mobile-app'

import "../../../App.css"
import "../../../Components/CSS Styles/Single-Car-page.css"
import "../../../Components/CSS Styles/Single-Car-page-media.css"


export default function Single_Car_page({ params }: {
    params: { cars: string, car: string, Catalog: string }
}) {

    const [thumbsSwiper, setThumbsSwiper] = React.useState<any>(null);
    const t = useTranslations();


    return <>

        <Header></Header>
        <main className="main">
            <section className="single-page">
                <div className="single-page-head">
                    <div className="single-page-head-bg">
                        <img src={singlebg.src}></img>
                    </div>
                    <nav className={`breadcrumbs page-contacts__breadcrumbs`}>
                        <div className="wrapper">
                            <ul className="breadcrumbs">
                                <li>
                                    <Link href='/'>{t('Main_page.header.Main')}</Link>
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
                <div className={`single-page-body`}>
                    <div className="container">
                        <h2>{params.car}</h2>
                        <div className="single-page-item">
                            <div className="left-block">
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
                                    <SwiperSlide><img src={p2.src}></img></SwiperSlide>
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
                                    <SwiperSlide><img style={{ height: '85px', width: '150px' }} src={p2.src}></img></SwiperSlide>
                                </Swiper>
                                <div className="Vertical32">
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
                                </div>
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
                            <div style={{ fontSize: '14px' }}>
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
                            <h3>{t('Car_page.Swiper.title')}</h3>
                            <div className="app-bg-dots">
                                <div className="app-bg">
                                    <Swiper_mobile_app></Swiper_mobile_app>
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
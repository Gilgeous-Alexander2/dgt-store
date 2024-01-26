'use client'
import Footer from "../Components/Footer"
import "../Components/CSS Styles/Media_requests.css"
import React from "react"
import './CSS Styles/Contact_us.css'
import './CSS Styles/Media_requests.css'
import "../App.css"
import Header from "../Components/Header"
import Form from "../Components/Form"
import { useTranslations } from 'next-intl';
import contactsmain from '../pics/bg-page-contacts-main.png'
import img2 from '../pics/Image_2.png'


export default function Contact_us() {

    const t = useTranslations();

    return <>
        <Header></Header>
        <main className="main">
            <section className="page-contacts">
                <div className="page-contacts__head">
                    <div className="img-wrapper">
                        <img src={contactsmain.src}></img>
                        <nav className="breadcrumbs page-contacts__breadcrumbs">
                            <div className="wrapper">
                                <ul className="breadcrumbs">
                                    <li>
                                        <a>
                                            <span>Главная</span>
                                        </a>
                                    </li>
                                    <li className="not-active">
                                        <a>Контакты</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="page-contacts-body">
                    <div className="container">
                        <div className="top">
                            <div className="page-contacts-map">https://goo.gl/maps/HxQ4SPT6rQn4YZp16</div>
                            <div className="address">
                                <div className="bg-top"></div>
                                <div className="bg-bottom"></div>
                                <div className="address-content">
                                    <div className="title">DGT - Exhaust System</div>
                                    <div className="office">
                                        <div className="office-left">{t('Contact_us.Contact_card.office.title')}</div>
                                        <div className="office-right">{t('Contact_us.Contact_card.office.content')}</div>
                                    </div>
                                    <div className="number-phone">
                                        <div className="number-phone-left">{t('Contact_us.Contact_card.number.title')}</div>
                                        <div className="number-phone-right">{t('Contact_us.Contact_card.number.content')}</div>
                                    </div>
                                    <div className="mail">
                                        <div className="mail-left">{t('Contact_us.Contact_card.mail.title')}</div>
                                        <div className="mail-right">{t('Contact_us.Contact_card.mail.content')}</div>
                                    </div>
                                    <div className="schedule">
                                        <div className="schedule-title">{t('Contact_us.Contact_card.schedule.title')}</div>
                                        <div className="schedule-item">
                                            {t('Contact_us.Contact_card.schedule.content')}
                                        </div>
                                        <div className="schedule-item">
                                            {t('Contact_us.Contact_card.schedule_item.content')}
                                        </div>
                                    </div>
                                    <div >
                                        <div className="social-block-title">{t('Contact_us.Contact_card.follow_us')}</div>
                                        <ul className="socials" style={{ display: 'flex' }}>
                                            <li><a className="socials a" style={{ backgroundImage: "url('http://dgt-store.com/wp-content/uploads/2019/08/icon-instagram.svg')" }}>vk</a></li>
                                            <li><a className="socials a" style={{ backgroundImage: "url('http://dgt-store.com/wp-content/uploads/2019/08/icon-facebook.svg')" }}>vk</a></li>
                                            <li><a className="socials a" style={{ backgroundImage: "url('http://dgt-store.com/wp-content/uploads/2019/08/icon-youtube.svg')" }}>vk</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Form></Form>
                    </div>
                    <div className="right-image">
                        <img src={img2.src}></img>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </main>
    </>
}
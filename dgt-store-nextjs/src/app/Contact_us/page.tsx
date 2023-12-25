'use client'
import Footer from "../pages/Footer"
import React from "react"
import "./Contact_us.css"
import Link from 'next/link'
import "../App.css"
import Header from "../pages/Header"


export default function Contact_us() {


    return <>
        <Header></Header>
        <main className="main">
            <section className="page-contacts">
                <div className="page-contacts__head">
                    <div className="img-wrapper">
                        <img src="http://dgt-store.com/wp-content/uploads/2019/08/bg-page-contacts-main.png"></img>
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
                                        <div className="office-left">Наш офис:</div>
                                        <div className="office-right">Москва, Киевская улица, 14с4</div>
                                    </div>
                                    <div className="number-phone">
                                        <div className="number-phone-left">Номер телефона:</div>
                                        <div className="number-phone-right">+7(499) 380-71-11</div>
                                    </div>
                                    <div className="mail">
                                        <div className="mail-left">E-Mail:</div>
                                        <div className="mail-right">Info@dgt-store.ru</div>
                                    </div>
                                    <div className="schedule">
                                        <div className="schedule-title">График работы</div>
                                        <div className="schedule-item">
                                            <span>Вт.-Вс.</span>
                                            с 10:00 до 21:00
                                        </div>
                                        <div className="schedule-item">
                                            <span>Пн.</span>
                                            Выходной
                                        </div>
                                    </div>
                                    <div >
                                        <div className="social-block-title">Следи за нами:</div>
                                        <ul className="socials" style={{ display: 'flex' }}>
                                            <li><a className="socials a" style={{ backgroundImage: "url('http://dgt-store.com/wp-content/uploads/2019/08/icon-instagram.svg')" }}>vk</a></li>
                                            <li><a className="socials a" style={{ backgroundImage: "url('http://dgt-store.com/wp-content/uploads/2019/08/icon-facebook.svg')" }}>vk</a></li>
                                            <li><a className="socials a" style={{ backgroundImage: "url('http://dgt-store.com/wp-content/uploads/2019/08/icon-youtube.svg')" }}>vk</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </main>
    </>
}
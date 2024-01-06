import Header from "./Header"
import Footer from "./Footer"

import "../Components/CSS Styles/Media_requests.css"
import "../App.css"
import React from 'react'
import "./CSS Styles/Many-Cars-page.css"
import "./CSS Styles/Many_Cars_page_Media.css"
import Link from "next/link"
import { CarModel } from "../types"
import { useTranslation } from "react-i18next"

type CarPageLayout = {
    cards?: CarModel[]
    path: string[]
    rootpath?: string[]
}


export const CarPageLayout = (props: CarPageLayout) => {

    const {t} = useTranslation();

    return <>
        <Header></Header>
        <main className="main">
            <section className="page-single-catalog">
                <div className="page-single-catalog__head">
                    <div className="img-wrapper">
                        <img src="http://dgt-store.com/wp-content/uploads/2019/08/main_image_catalog.png" ></img>
                    </div>
                    <nav className="breadcrumbs page-contacts__breadcrumbs">
                        <div className="wrapper">
                            <ul className="breadcrumbs">
                                <li>
                                    <a>
                                        <span>Главная</span>
                                    </a>
                                </li>
                                { props.rootpath? 
                                    <li className="not-active">
                                        <a>{props.rootpath}</a>
                                    </li>
                                    : null
                                }
                                <li className="not-active">
                                    <a>{props.path}</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="page-single-catalog__body">
                    <div className="container">
                        <h2>{props.path}</h2>
                        <div className="catalog">

                            {props.cards?.map((card, cardid) =>
                                <div className="car-block" key={cardid}>
                                    <div className="pictures detail1">
                                        <img src="http://dgt-store.com/wp-content/uploads/2019/09/2016-audi-a3-wallpaper-hd-57804-1597078-612x406.jpg"></img>
                                    </div>

                                    <div className="car-block-content">
                                        <div className="title">{card.name}</div>
                                        <div className="exhaust">
                                            <span>{t('Auto_card.Engine')}</span>
                                            <span>1.4/1.8T/2.0T </span>
                                        </div>
                                        <div className="year">
                                            <span>{t('Auto_card.Year')}</span>
                                            <span>{card.year}</span>
                                        </div>
                                        <Link href={`${props.path}/${card.name}`}>{t('Auto_card.Go_over')}</Link>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </main>
    </>
}
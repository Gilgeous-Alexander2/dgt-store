'use client'
import Footer from "./Footer"
import Videos from "./Videos"
import React from "react"
import Main_page_head from "./Main-page-head"
import GoogleMap from "./DealersMap"
import Advantages from "./Advantages"
import News from "./News"
import About_us from "./About_us"



export default function Body() {
    const dealers: boolean = false;
    const questions: boolean = true

    return <>
        <main className="main">
            <section className="main-page">
                <Main_page_head></Main_page_head>
                <div className="main-page-body">
                    <About_us></About_us>
                    <GoogleMap ></GoogleMap>
                    <Videos ></Videos>
                    <Advantages></Advantages>
                    <News></News>
                    <GoogleMap ></GoogleMap>
                </div>
            </section>
            <Footer></Footer>
        </main>
    </>
}
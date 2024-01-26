'use client'
import './CSS Styles/Videos.css'
import React from "react"
import Video from '../Components/VideoStyle';
import { useTranslations } from 'next-intl';
import m from '../pics/m.jpg'
import m5 from '../pics/m5-3-копия.jpg'
import p911 from '../pics/911-2.jpg'
import cayenee from '../pics/cayenee-копия.jpg'
import p from '../pics/p.jpg'
import m52018 from '../pics/m5-2018-копия.jpg'



export default function Dealers() {

    const  t  = useTranslations();

    return <>

        <div id="videos" className="container aos-init aos-animate" data-aos="fade-up">
            <div className="videos">
                <h2>{t('Main_page.Video')}</h2>
                <div className="video-item">
                    <div className="video-left aos-init aos-animate">
                        <Video classname="big-video youtube" img={m.src} video="https://www.youtube.com/embed/qvYMN4leJuY?rel=0&showinfo=0&autoplay=1"></Video>
                        <div className="video-left-item">
                            <Video classname="small-video youtube" img={m5.src} video="https://www.youtube.com/embed/rQR2A0AfaEY?rel=0&showinfo=0&autoplay=1"></Video>
                            <Video classname="small-video youtube" img={p911.src} video="https://www.youtube.com/embed/Wm41L-pW6sU?rel=0&showinfo=0&autoplay=1"></Video>
                        </div>
                    </div>


                    <div >
                        <div className="video-left-item">
                            <Video classname="small-video youtube" img={cayenee.src} video="https://www.youtube.com/embed/R36_SiufRno?rel=0&showinfo=0&autoplay=1"></Video>
                            <Video classname="small-video youtube" img={p.src} video="https://www.youtube.com/embed/z3ia8RSARTw?rel=0&showinfo=0&autoplay=1"></Video>
                        </div>
                        <Video classname="big-video2 youtube"  img={m52018.src} video="https://www.youtube.com/embed/Nt6WxYE_GNI?rel=0&showinfo=0&autoplay=1"></Video>
                    </div>
                </div>
            </div>
        </div>
    </>
}
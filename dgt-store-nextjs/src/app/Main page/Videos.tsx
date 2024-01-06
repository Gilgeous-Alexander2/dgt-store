'use client'
import './CSS Styles/Videos.css'
import React, { useTransition } from "react"
import Video from '../Components/VideoStyle';
import { useTranslation } from 'react-i18next';

export default function Dealers() {

    const { t } = useTranslation();

    return <>

        <div id="videos" className="container aos-init aos-animate" data-aos="fade-up">
            <div className="videos">
                <h2>{t('Main_page.Video')}</h2>
                <div className="video-item">
                    <div className="video-left aos-init aos-animate">
                        <Video classname="big-video youtube" img="http://dgt-store.com/wp-content/uploads/2020/01/m.jpg" video="https://www.youtube.com/embed/qvYMN4leJuY?rel=0&showinfo=0&autoplay=1"></Video>

                        <div className="video-left-item">
                            <Video classname="small-video youtube" img="http://dgt-store.com/wp-content/uploads/2020/01/m5-3-копия.jpg" video="https://www.youtube.com/embed/qvYMN4leJuY?rel=0&showinfo=0&autoplay=1"></Video>
                            <Video classname="small-video youtube" img="http://dgt-store.com/wp-content/uploads/2020/01/911-2.jpg" video="https://www.youtube.com/embed/qvYMN4leJuY?rel=0&showinfo=0&autoplay=1"></Video>
                        </div>
                    </div>


                    <div >
                        <div className="video-left-item">
                            <Video classname="small-video youtube" img="http://dgt-store.com/wp-content/uploads/2020/01/cayenee-копия.jpg" video="https://www.youtube.com/embed/qvYMN4leJuY?rel=0&showinfo=0&autoplay=1"></Video>
                            <Video classname="small-video youtube" img="http://dgt-store.com/wp-content/uploads/2020/01/p.jpg" video="https://www.youtube.com/embed/qvYMN4leJuY?rel=0&showinfo=0&autoplay=1"></Video>
                        </div>
                        <Video classname="big-video2 youtube"  img="http://dgt-store.com/wp-content/uploads/2020/01/m5-2018-копия.jpg" video="https://www.youtube.com/embed/qvYMN4leJuY?rel=0&showinfo=0&autoplay=1"></Video>
                    </div>
                </div>
            </div>
        </div>
    </>
}
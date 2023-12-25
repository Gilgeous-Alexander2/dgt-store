'use client'
import '../CSS Styles/Videos.css'
import React from "react"


export default function Dealers() {
    const [sost, setSost] = React.useState(true);
    return <>

        <div id="videos" className="container aos-init aos-animate" data-aos="fade-up">
            <div className="videos">
                <h2>Видеоматериалы</h2>
                <div className="video-item">
                    <div className="video-left aos-init aos-animate">
                        <div className="big-video youtube" onClick={() => { setSost(false) }}>

                            {sost ? <><div className="play-button">
                                <i className="far fa-play-circle"></i>
                            </div>
                                <img src="http://dgt-store.com/wp-content/uploads/2020/01/m.jpg"></img></> :
                                <iframe src="https://www.youtube.com/embed/qvYMN4leJuY?rel=0&showinfo=0&autoplay=1"></iframe>}
                        </div>
                        <div className="video-left-item">
                            <div className="small-video youtube">
                                <img src="http://dgt-store.com/wp-content/uploads/2020/01/m5-3-копия.jpg"></img>
                            </div>
                            <div className="small-video youtube" style={{ marginRight: '0px' }}>
                                <img src="http://dgt-store.com/wp-content/uploads/2020/01/911-2.jpg"></img>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className="video-left-item">
                            <div className="small-video youtube">
                                <img src="http://dgt-store.com/wp-content/uploads/2020/01/cayenee-копия.jpg"></img>
                            </div>
                            <div className="small-video youtube" style={{ marginRight: '0px' }}>
                                <img src="http://dgt-store.com/wp-content/uploads/2020/01/p.jpg"></img>
                            </div>
                        </div>
                        <div className="big-video2 youtube">
                            <img src="http://dgt-store.com/wp-content/uploads/2020/01/m5-2018-копия.jpg"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
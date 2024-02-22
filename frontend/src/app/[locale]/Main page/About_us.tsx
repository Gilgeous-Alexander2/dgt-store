import React from "react"
import './CSS Styles/About_us.css'
import { useTranslations } from 'next-intl';
import Aboutcar from '../pics/about-car.png'

export default function About_us() {
    const [sost, setSost] = React.useState(false);

    const t = useTranslations();

    return <>
        <div id="about" className="container aos-init aos-animate" data-aos="fade-up">
            <div className="about">
                <div className="about-item">
                    <div className="title1">{t('Main_page.About_us.about.title')}</div>
                    {sost ? <><p>{t('Main_page.About_us.about.content.1')}<br />
                        {t('Main_page.About_us.about.content.2')}<br />
                        {t('Main_page.About_us.about.content.3')}</p>
                        <div className="other-text show">
                            <p><strong>{t('Main_page.About_us.about.title')}</strong></p>
                            <p style={{ paddingLeft: '40px' }}>{t('Main_page.About_us.about.content2.1')}<br />
                                {t('Main_page.About_us.about.content2.2')}</p>
                            <p><strong>{t('Main_page.About_us.how_to_control.title')}</strong></p>
                            <p style={{ paddingLeft: '40px' }}>{t('Main_page.About_us.how_to_control.content')}</p>
                            <p><strong>{t('Main_page.About_us.how_to_order.title')}</strong></p>
                            <p style={{ paddingLeft: '40px' }}>{t('Main_page.About_us.how_to_order.content')}</p>
                            <p><strong>{t('Main_page.About_us.installation.title')}</strong></p>
                            <p style={{ paddingLeft: '40px' }}>{t('Main_page.About_us.installation.content.1')}<br />
                                {t('Main_page.About_us.installation.content.2')}</p>
                            <p><strong>{t('Main_page.About_us.guarantees.title')}</strong></p>
                            <p style={{ paddingLeft: '40px' }}>{t('Main_page.About_us.guarantees.content.1')}<br />
                                {t('Main_page.About_us.guarantees.content.2')}</p>
                        </div>
                    </>
                        :
                        <p>{t('Main_page.About_us.about.content.1')}<br />
                            {t('Main_page.About_us.about.content.2')}<br />
                            {t('Main_page.About_us.about.content.3')}</p>
                    }
                    <a onClick={() => { setSost(!sost) }}>{t('Main_page.Read_more')}<div className="block-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#ffffff" d="M334.5 414c8.8 3.8 19 2 26-4.6l144-136c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22l0 72L32 192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l288 0 0 72c0 9.6 5.7 18.2 14.5 22z" /></svg>
                    </div></a>
                </div>
                <img src={Aboutcar.src} className="about-car"></img>
            </div>
        </div>
    </>
}
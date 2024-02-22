import { useTranslations } from 'next-intl';
import './CSS Styles/Advantages.css'
import smoke from '../pics/smoke.png'
import smallp from '../pics/small-picture.png'
import bigp from '../pics/big-picture.png'
import quality from '../pics/quality.png'
import price from '../pics/price.png'
import people from '../pics/people.png'
import drive from '../pics/screwdriver.png'
import geo from '../pics/geo.png'
import car from '../pics/car.png'

export default function Advantages() {

    const t = useTranslations();

    return <>
        <div className="advantage" >
            <div className="container">
                <h2>{t('Main_page.Advantages.title')}</h2>
                <div className="advantage-content">
                    <div className="advantage-block">
                        <div className="icons"><img src={quality.src}></img></div>
                        <div className="title">{t('Main_page.Advantages.1')}</div>
                        <div className="description"></div>
                    </div>
                    <div className="advantage-block bg dots aos-init aos-animate">
                        <div className="icons"><img src={price.src}></img></div>
                        <div className="title">{t('Main_page.Advantages.2')}</div>
                        <div className="description"></div>
                    </div>
                    <div className="advantage-block">
                        <div className="icons"><img src={people.src}></img></div>
                        <div className="title">{t('Main_page.Advantages.3')}</div>
                        <div className="description"></div>
                    </div>
                    <div className="advantage-block bg dots aos-init aos-animate">
                        <div className="icons"><img src={drive.src}></img></div>
                        <div className="title">{t('Main_page.Advantages.4')}</div>
                        <div className="description"></div>
                    </div>
                    <div className="advantage-block">
                        <div className="icons"><img src={geo.src}></img></div>
                        <div className="title">{t('Main_page.Advantages.5')}</div>
                        <div className="description"></div>
                    </div>
                    <div className="advantage-block bg dots aos-init aos-animate">
                        <div className="icons"><img src={car.src}></img></div>
                        <div className="title">{t('Main_page.Advantages.6')}</div>
                        <div className="description"></div>
                    </div>
                </div>
            </div>
            <img className="small-picture" src={smallp.src}></img>
            <img className="big-picture" src={bigp.src}></img>
        </div>
    </>
}
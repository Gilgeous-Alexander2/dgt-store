import { useTranslations } from 'next-intl';
import './CSS Styles/Main-page-head.css'
import Mainimage from '../pics/main_image.png'


export default function Main_page_head(){

    const t = useTranslations();

    return<>
    <div className="main-page-head">
        <img src={Mainimage.src}></img>
        <div className="head-title">
            <h1>{t('Main_page.Main_page_head.title')}</h1>
            <div className="subtitle">{t('Main_page.Main_page_head.undertitle')}</div>
        </div>
    </div>
    </>
}
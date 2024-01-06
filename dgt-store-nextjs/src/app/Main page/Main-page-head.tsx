import { useTranslation } from 'react-i18next'
import './CSS Styles/Main-page-head.css'


export default function Main_page_head(){

    const {t} = useTranslation();

    return<>
    <div className="main-page-head">
        <img src="http://dgt-store.com/wp-content/uploads/2019/08/main_image.png"></img>
        <div className="head-title">
            <h1>{t('Main_page.Main_page_head.title')}</h1>
            <div className="subtitle">{t('Main_page.Main_page_head.undertitle')}</div>
        </div>
    </div>
    </>
}
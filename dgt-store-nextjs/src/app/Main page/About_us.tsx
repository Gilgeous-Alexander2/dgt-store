import React from "react"
import './CSS Styles/About_us.css'
import { useTranslation } from "react-i18next";

export default function About_us() {
    const [sost, setSost] = React.useState(false);

    const { t } = useTranslation();
    

    return <>
        <div id="about" className="container aos-init aos-animate" data-aos="fade-up">
            <div className="about">
                <div className="about-item">
                    <div className="title1">{t('Main_page.About_us.about')}</div>
                    {sost ? <><p>{t('Main_page.About_us.about_content.title.1')}<br />
                        {t('Main_page.About_us.about_content.title.2')}<br />
                        {t('Main_page.About_us.about_content.title.3')}</p>
                        <div className="other-text show">
                            <p><strong>{t('Main_page.About_us.about')}</strong></p>
                            <p style={{paddingLeft: '40px'}}>Словенский бренд DGT — идеальная замена штатной выхлопной системы.<br/>
                                Продукция производится в Тайвани. На фабрике изготовителя осуществляется сканирование штатной системы. Так создаётся 3D модель, точно воспроизводящая оригинал. По полученному макету конструируется новая выхлопная система, идеально заменяющая штатную.</p>
                            <p><strong>Как управлять?</strong></p>
                            <p style={{paddingLeft: '40px'}}>Управлять выхлопной системой DGT можно с мобильного приложения и с пульта. Доступно три режима, один из которых открывает заслонку под углом 35 градусов. Работает функция ручной настройки оборотов двигателя.</p>
                            <p><strong>Как заказать?</strong></p>
                            <p style={{paddingLeft: '40px'}}>Умные, экологичные, надежные выхлопные системы DGT можно заказать на официальном сайте, по телефону или в офисе продаж.<br/>
                                Заказ оформляется по предоплате: 50% от стоимости.<br/>
                                    Доставка до двух недель.</p>
                                <p><strong>Установка выхлопной системы:</strong></p>
                                <p style={{paddingLeft: '40px'}}>Установим в день получения заказа.<br/>
                                    Установка осуществляется в штатные места. А значит, прежнюю конструкцию, при желании, можно вернуть обратно, без вреда для автомобиля.</p>
                                <p><strong>Гарантии:</strong></p>
                                <p style={{paddingLeft: '40px'}}>Гарантия на выхлопную систему 2 годa<br/>
                                    Продукция соответствует российским и европейским&nbsp; экологическим нормам и стандартам качества.</p>
                            </div>
                            </>
                            :
                            <p>Ночь, пустые улицы, звенящая тишина и твой автомобиль.<br />
                                Что выберешь ты — громкий качественный звук или бесшумную езду?<br />
                                С выхлопными системами DGT ты почувствуешь себя королем дороги. Ты сам создаешь звук своего настроения.</p>
                    }
                            <a onClick={() => { setSost(!sost) }}>{t('Main_page.Read_more')}<div className="block-arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#ffffff" d="M334.5 414c8.8 3.8 19 2 26-4.6l144-136c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22l0 72L32 192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l288 0 0 72c0 9.6 5.7 18.2 14.5 22z" /></svg>
                            </div></a>
                        </div>
                        <img src="http://dgt-store.com/wp-content/uploads/2019/08/about-car.png" className="about-car"></img>
                    </div>
                </div>
            </>
}
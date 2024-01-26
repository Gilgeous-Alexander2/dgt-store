'use client'
import { Link } from '@/navigation';
import './CSS Styles/Header.css'
import './CSS Styles/Media_requests.css'
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';
import React from 'react';
import { auto } from '../types';
import logo from '../pics/logo.svg'

import { useTranslations } from 'next-intl';




export default function Header() {


  const t = useTranslations();


  //const { t, i18n } = useTranslation();
  // const changeLanguage = (lang: any) => {
  //   i18n.changeLanguage(lang);
  // }

  const count = 3;


  return <>


    

      <header className="header" >
        <div className="container">

          {/* <p style={{color:'white'}}>{t('title', { name: 'John' })}</p>
        <p style={{color:'white'}}>{t('description.part1')}</p>
        <p style={{color:'white'}}>{t('description.part2')}</p> 
        <Trans i18nKey="userMessagesUnread" style={{color:'white'}} count={count}>
          You have {{ count }} unread message.
        </Trans>*/}
          <div className="header-container">
            <div className="header-logo">
              <a><img src={logo.src}></img></a>
            </div>
            <nav className="header-nav">
              <ul className="header-nav-list">
                <li><Link href="/#about" >{t('Main_page.header.about_us')}</Link></li>
                <li className="has-sub-menu">
                  <a >{t('Main_page.header.Catalog')}</a>
                  <ul className="sub-menu">
                    {
                      auto.map((item: any, itemid: number) => (
                        <li key={itemid} className="has-sub-menu">
                          <Link href={`/${item.name}`} >
                            <img src={item.img} ></img>
                            {item.name}
                          </Link>

                          <div className="sub-menu-wrapper">
                            <ul className="sub-menu">
                              <Swiper
                                className='header-slider'
                                style={{
                                  "--swiper-scrollbar-drag-bg-color": "rgba(255, 0, 0)",
                                } as React.CSSProperties}

                                direction={'vertical'}
                                slidesPerView={'auto'}
                                freeMode={true}
                                scrollbar={true}
                                mousewheel={true}
                                modules={[FreeMode, Scrollbar, Mousewheel]}
                              >
                                {item.models.map((model: any, modelid: number) =>
                                  <SwiperSlide style={{ height: 'auto', width: '95%' }}>
                                    <li key={modelid}>
                                      <Link href={`/${item.name}/${model.name}` }>{model.name}</Link>
                                    </li>
                                  </SwiperSlide>
                                )}

                              </Swiper>
                            </ul>
                          </div>
                        </li>
                      ))}

                  </ul>
                </li>
                <li><Link href="/#news">{t('Main_page.header.News')}</Link></li>
                <li><Link href="/#videos">{t('Main_page.header.Video')}</Link></li>
                <li><Link href="/#dealers">{t('Main_page.header.Dealers')}</Link></li>
                <li><Link href="/Contact_us">{t('Main_page.header.Contacts')}</Link></li>
              </ul>
            </nav>
            <div className="header-right">
              <div className="header-lang">
                <div className="header-lang_current">{t('Main_page.lng')}</div>
                <div className="header-lang__dropdown">
                  <ul>
                    <li>
                      <a /*onClick={() => changeLanguaget('ru')}*/>RU</a>
                    </li>
                    <li>
                      <a /*onClick={() => changeLanguaget('en')}*/>EN</a>
                    </li>
                  </ul>
                </div>
              </div>
              <ul className="header-socials socials">
                <li><a className="socials a" style={{ backgroundImage: "url('http://dgt-store.com/wp-content/uploads/2019/08/icon-instagram.svg')" }}>vk</a></li>
                <li><a className="socials a" style={{ backgroundImage: "url('http://dgt-store.com/wp-content/uploads/2019/08/icon-facebook.svg')" }}>vk</a></li>
                <li><a className="socials a" style={{ backgroundImage: "url('http://dgt-store.com/wp-content/uploads/2019/08/icon-youtube.svg')" }}>vk</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mobile-menu">
          <ul className="mobile-menu-list">
            <li><Link href="/#about" >{t('Main_page.header.about_us')}</Link></li>
            <li><Link href="/#news">{t('Main_page.header.News')}</Link></li>
            <li><Link href="/#videos">{t('Main_page.header.Video')}</Link></li>
            <li><Link href="/#dealers">{t('Main_page.header.Dealers')}</Link></li>
            <li><Link href="/Contact_us">{t('Main_page.header.Contacts')}</Link></li>
          </ul>
        </div>
      </header>

  </>
}
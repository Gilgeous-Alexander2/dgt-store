'use client'

import React from 'react';

import 'swiper/css'
import '@/app/[locale]/Components/CSS Styles/Media_requests.css'
import { Link } from '@/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';

import '@/app/[locale]/Components/CSS Styles/Header.css'

import { auto } from '../types';
import logo from '../pics/logo.svg'
import { useRouter, usePathname } from '@/navigation';
import { useTranslations } from 'next-intl';





export default function Header() {


  const t = useTranslations();

  const router = useRouter();
  const pathname = usePathname();

  //const { t, i18n } = useTranslation();
  // const changeLanguage = (lang: any) => {
  //   i18n.changeLanguage(lang);
  // }

  const count = 3;

  const [sost, setSost] = React.useState(false)
  const [sost2, setSost2] = React.useState(false)
  const [sost3, setSost3] = React.useState(false)



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
            <a href="/"><img src={logo.src}></img></a>
          </div>
          <nav className="header-nav">
            <ul className="header-nav-list">
              <li><Link href="/#about" >{t('Main_page.header.about_us')}</Link></li>
              <li className="has-sub-menu">
                <a >{t('Main_page.header.Catalog')}</a>
                <ul className="sub-menu">
                  {
                    auto.map((item: any, itemid: number) => (
                      <li className="has-sub-menu">
                        <Link href={`/${item.name}`} >
                          <img src={item.img} ></img>
                          {item.name}
                        </Link>

                        <div className={`sub-menu-wrapper`}>
                          <ul className="sub-menu">
                            <Swiper
                          key={itemid}
                              style={{
                                "--swiper-scrollbar-drag-bg-color": "rgba(255, 0, 0)",
                                "maxHeight": "190px"
                              } as React.CSSProperties}

                              direction={'vertical'}
                              slidesPerView={'auto'}
                              freeMode={true}
                              scrollbar={true}
                              mousewheel={true}
                              modules={[ FreeMode, Mousewheel,Scrollbar]}
                              
                            >
                              {item.models.map((model: any, modelid: number) =>
                                <SwiperSlide style={{ height: 'auto', width: '95%' }}>
                                  <li key={modelid}>
                                    <Link href={`/${item.name}/${model.name}`}>{model.name}</Link>
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
                    <a onClick={() => router.push(pathname, { locale: "ru" })}>RU</a>
                  </li>
                  <li>
                    <a onClick={() => router.push(pathname, { locale: "en" })}>ENG</a>
                  </li>
                </ul>
              </div>
            </div>
            <ul className="header-socials socials">
              <li><a className="socials a" style={{ backgroundImage: "url('http://dgt-store.com/wp-content/uploads/2019/08/icon-instagram.svg')" }}>vk</a></li>
              <li><a className="socials a" style={{ backgroundImage: "url('http://dgt-store.com/wp-content/uploads/2019/08/icon-facebook.svg')" }}>vk</a></li>
              <li><a className="socials a" style={{ backgroundImage: "url('http://dgt-store.com/wp-content/uploads/2019/08/icon-youtube.svg')" }}>vk</a></li>
            </ul>
            <div className="mobile-button">
              <svg fill="#ffffff" viewBox="-5.5 0 32 32" onClick={() => { setSost(true) }} version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>menu</title> <path d="M1.375 9.156h18.063c0.781 0 1.375-0.594 1.375-1.375 0-0.75-0.594-1.344-1.375-1.344h-18.063c-0.781 0-1.375 0.594-1.375 1.344 0 0.781 0.594 1.375 1.375 1.375zM1.375 14.625h18.063c0.781 0 1.375-0.594 1.375-1.375 0-0.75-0.594-1.344-1.375-1.344h-18.063c-0.781 0-1.375 0.594-1.375 1.344 0 0.781 0.594 1.375 1.375 1.375zM1.375 20.094h18.063c0.781 0 1.375-0.594 1.375-1.344 0-0.781-0.594-1.375-1.375-1.375h-18.063c-0.781 0-1.375 0.594-1.375 1.375 0 0.75 0.594 1.344 1.375 1.344zM1.375 25.563h18.063c0.781 0 1.375-0.594 1.375-1.344 0-0.781-0.594-1.375-1.375-1.375h-18.063c-0.781 0-1.375 0.594-1.375 1.375 0 0.75 0.594 1.344 1.375 1.344z"></path> </g></svg>            </div>
          </div>
        </div>
      </div>
      {sost ?
        <div className="mobile-menu">
          <div className="close">
            <svg viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => { setSost(false) }} stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 21.32L21 3.32001" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M3 3.32001L21 21.32" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
          </div>
          <div className="mobile-menu-item">
            <ul className="mobile-menu-list">
              <li><Link href="/#about" >{t('Main_page.header.about_us')}</Link></li>
              <li className="has-sub-menu">
                <a onClick={() => { setSost2(true) }}>{t('Main_page.header.Catalog')}</a>
                {sost2 ?
                  <ul className="sub-menu sub-menu-main">
                    <div className="close">
                      <svg viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => { setSost2(false) }} stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 21.32L21 3.32001" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M3 3.32001L21 21.32" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    </div>
                    {
                      auto.map((item: any, itemid: number) => (
                        <li key={itemid} className="has-sub-menu">
                          <Link href={`/${item.name}`} >
                            <img src={item.img} ></img>
                            {item.name}
                          </Link>

                          <div className="sub-menu-wrapper">
                            {sost3?
                              <ul className="sub-menu">
                                <Swiper
                                  style={{
                                    "--swiper-scrollbar-drag-bg-color": "rgba(255, 0, 0)",
                                    "maxHeight": "190px"
                                  } as React.CSSProperties}
                                  direction={'vertical'}
                                  slidesPerView={'auto'}
                                  freeMode={true}
                                  mousewheel={true}
                                  modules={[FreeMode, Mousewheel]}
                                >
                                  {item.models.map((model: any, modelid: number) =>
                                    <SwiperSlide style={{ height: 'auto', width: '95%' }}>
                                      <li key={modelid}>
                                        <Link href={`/${item.name}/${model.name}`}>{model.name}</Link>
                                      </li>
                                    </SwiperSlide>
                                  )}

                                </Swiper>
                              </ul>
                              : null
                            }
                          </div>
                          <span className="drop-arrow" onClick={() => { setSost3(!sost3) }}></span>
                        </li>
                      ))}

                  </ul>
                  : null}
              </li>
              <li><Link href="/#news">{t('Main_page.header.News')}</Link></li>
              <li><Link href="/#videos">{t('Main_page.header.Video')}</Link></li>
              <li><Link href="/#dealers">{t('Main_page.header.Dealers')}</Link></li>
              <li><Link href="/Contact_us">{t('Main_page.header.Contacts')}</Link></li>
            </ul>
            <ul className="header-socials socials">
              <li><a className="socials a" style={{ backgroundImage: "url('http://dgt-store.com/wp-content/uploads/2019/08/icon-instagram.svg')" }}>vk</a></li>
              <li><a className="socials a" style={{ backgroundImage: "url('http://dgt-store.com/wp-content/uploads/2019/08/icon-facebook.svg')" }}>vk</a></li>
              <li><a className="socials a" style={{ backgroundImage: "url('http://dgt-store.com/wp-content/uploads/2019/08/icon-youtube.svg')" }}>vk</a></li>
            </ul>
          </div>
        </div>
        : null
      }
    </header>

  </>
}
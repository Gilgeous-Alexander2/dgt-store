import './CSS Styles/Footer.css'
import './CSS Styles/Media_requests.css'
import { Link } from '@/navigation';
import { useRouter, usePathname } from '@/navigation';
import React from 'react';

import { useTranslation, Trans } from 'react-i18next';

import logo from '../pics/logo.svg'

import { useTranslations } from 'next-intl';


export default function Footer() {

    const t = useTranslations();

    const router = useRouter();
    const pathname = usePathname();


    return <>
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-container">
                    <ul className="footer-socials socials">
                        <li><a className="socials a" style={{ backgroundImage: "url('https://img.icons8.com/?size=25&id=F4ZPUh2Mk5tk&format=png&color=FFFFFF')" }}>vk</a></li>
                        <li><a className="socials a" style={{ backgroundImage: "url('https://img.icons8.com/?size=25&id=RhYNENh5cxlS&format=png&color=FFFFFF')" }}>vk</a></li>
                        <li><a className="socials a" style={{ backgroundImage: "url('https://img.icons8.com/?size=25&id=16733&format=png&color=FFFFFF')" }}>vk</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-container">
                    <div className="footer-bottom-content">
                        <div className="footer-logo">
                            <a href="/">
                                <img src={logo.src}></img>
                            </a>
                        </div>
                        <nav className="footer-nav">
                            <ul className="footer-nav-list">
                                <li><Link href="/#about">{t('Main_page.header.about_us')}</Link></li>
                                <li><Link href="/#news">{t('Main_page.header.News')}</Link></li>
                                <li><Link href="/#videos">{t('Main_page.header.Video')}</Link></li>
                                <li><Link href="/#dealers">{t('Main_page.header.Dealers')}</Link></li>
                                <li><Link href="/Contact_us">{t('Main_page.header.Contacts')}</Link></li>
                            </ul>
                            <div className="footer-lang">
                                <div className="footer-lang_current">{t('Main_page.lng')}</div>
                                <div className="footer-lang__dropdown">
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
                        </nav>
                        <div className={`footer-contacts`}>
                            <a href="tel:+7 (499) 380-71-11">+7 (499) 380 71 11</a>
                            <a href="mailto:Info@dgt-store.ru">Info@dgt-store.ru</a>
                        </div>

                    </div>
                    <div className="footer-copy">DGT EXHAUST SYSTEM 2020. © All rights reserved.</div>
                </div>
            </div>
        </footer>
    </>
}
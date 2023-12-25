import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link'
import '../CSS Styles/Header.css'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';
import { Slider } from '@mui/material';


export default function Header() {

  return <>
    <header className="header">
      <div className="container">
        <div className="header-container">
          <div className="header-logo">
            <a><img src="http://dgt-store.com/wp-content/uploads/2019/08/logo.svg"></img></a>
          </div>
          <nav className="header-nav">
            <ul className="header-nav-list">
              <li><Link href="/#about" >О нас</Link></li>
              <li className="has-sub-menu">
                <a >Каталог</a>
                <ul className="sub-menu">
                  <li className="has-sub-menu">
                    <a>
                      <img src="http://dgt-store.com/wp-content/uploads/2019/08/icon-menu-13.png"></img>
                      Alfa-Romero
                    </a>
                    <div className="sub-menu-wrapper">
                      <Swiper
                        direction={'vertical'}
                        slidesPerView={'auto'}
                        freeMode={true}
                        scrollbar={true}
                        mousewheel={true}
                        modules={[FreeMode, Scrollbar, Mousewheel]}
                      >
                        <SwiperSlide>
                          <li>Guilla</li>
                        </SwiperSlide>

                      </Swiper>
                    </div>
                  </li>
                </ul>
              </li>
              <li><Link href="/#news">Новости</Link></li>
              <li><Link href="/#videos">Видео</Link></li>
              <li><Link href="/#dealers">Дилеры</Link></li>
              <li><Link href="/Contact_us">Контакты</Link></li>
            </ul>
          </nav>
          <div className="header-right">
            <div className="header-lang">
              <div className="header-lang_current">ru</div>
            </div>
            <ul className="header-socials socials">
              <li><a className="socials a" style={{ backgroundImage: "url('http://dgt-store.com/wp-content/uploads/2019/08/icon-instagram.svg')" }}>vk</a></li>
              <li><a className="socials a" style={{ backgroundImage: "url('http://dgt-store.com/wp-content/uploads/2019/08/icon-facebook.svg')" }}>vk</a></li>
              <li><a className="socials a" style={{ backgroundImage: "url('http://dgt-store.com/wp-content/uploads/2019/08/icon-youtube.svg')" }}>vk</a></li>

            </ul>
          </div>
        </div>
      </div>
    </header>
  </>
}
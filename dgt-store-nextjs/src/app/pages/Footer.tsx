import '../CSS Styles/Footer.css'

export default function Footer(){
    return<>
    <footer className="footer">
                <div className="footer-top">
                    <div className="footer-container">
                        <ul className="footer-socials socials">
                            <li><a className="socials a" style={{ backgroundImage: "url('http://dgt-store.com/wp-content/uploads/2019/08/icon-instagram.svg')" }}>vk</a></li>
                            <li><a className="socials a" style={{ backgroundImage: "url('http://dgt-store.com/wp-content/uploads/2019/08/icon-facebook.svg')" }}>vk</a></li>
                            <li><a className="socials a" style={{ backgroundImage: "url('http://dgt-store.com/wp-content/uploads/2019/08/icon-youtube.svg')" }}>vk</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-container">
                        <div className="footer-bottom-content">
                            <div className="footer-logo">
                                <a href="http://dgt-store.com"></a>
                                <img src="http://dgt-store.com/wp-content/uploads/2019/08/logo.svg"></img>
                            </div>
                            <nav className="footer-nav">
                                <ul className="footer-nav-list">
                                    <li><a>О нас</a></li>
                                    <li><a>Новости</a></li>
                                    <li><a>Видео</a></li>
                                    <li><a>Дилеры</a></li>
                                    <li><a>Контакты</a></li>
                                </ul>
                                <div className="footer-lang">
                                    <div className="footer-lang-current">ru</div>
                                </div>
                            </nav>
                            <div className="footer-contacts">
                                <a href="tel:+7 (499) 380-71-11">7 (499) 380 71 11</a>
                                <a href="mailto:Info@dgt-store.ru">Info@dgt-store.ru</a>
                            </div>
                            
                        </div>
                        <div className="footer-copy">DGT EXHAUST SYSTEM 2020. © All rights reserved.</div>
                    </div>
                </div>
            </footer>
    </>
}
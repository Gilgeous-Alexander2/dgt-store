import Footer from "../pages/Footer"
import "../CSS Styles/Many-Cars-page.css"


export default function Many_Cars_page() {
    return <>
        <main className="main">
            <section className="page-single-catalog">
                <div className="page-single-catalog__head">
                    <div className="img-wrapper">
                        <img src="http://dgt-store.com/wp-content/uploads/2019/08/main_image_catalog.png" ></img>
                    </div>
                    <nav className="breadcrumbs page-contacts__breadcrumbs">
                        <div className="wrapper">
                            <ul className="breadcrumbs">
                                <li>
                                    <a>
                                        <span>Главная</span>
                                    </a>
                                </li>
                                <li className="not-active">
                                    <a>Audi</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="page-single-catalog__body">
                    <div className="container">
                        <h2>Audi</h2>
                        <div className="catalog">
                            <div className="car-block">
                                <div className="pictures detail1">
                                    <img src="http://dgt-store.com/wp-content/uploads/2019/09/2016-audi-a3-wallpaper-hd-57804-1597078-612x406.jpg"></img>
                                </div>
                                <div className="car-block-content">
                                    <div className="title">A3</div>
                                    <div className="exhaust">
                                        <span>Двигатель/кузов:</span>
                                        <span>1.4/1.8T/2.0T </span>
                                    </div>
                                    <div className="year">
                                        <span>Год:</span>
                                        <span>2015</span>
                                    </div>
                                    <a >Перейти</a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </main>
    </>
}
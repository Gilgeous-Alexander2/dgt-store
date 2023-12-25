import '../CSS Styles/Advantages.css'

export default function Advantages() {
    return <>
        <div className="advantage" style={{ backgroundImage: "url('http://dgt-store.com/wp-content/uploads/2019/08/smoke.png')" }}>
            <div className="container">
                <h2>Преимущества</h2>
                <div className="advantage-content">
                    <div className="advantage-block">
                        <div className="icons"><img src="http://dgt-store.com/wp-content/uploads/2019/08/quality.png"></img></div>
                        <div className="title">Гарантия качества</div>
                        <div className="description"></div>
                    </div>
                    <div className="advantage-block bg dots aos-init aos-animate">
                        <div className="icons"><img src="http://dgt-store.com/wp-content/uploads/2019/08/price.png"></img></div>
                        <div className="title">Доступные цены</div>
                        <div className="description"></div>
                    </div>
                    <div className="advantage-block">
                        <div className="icons"><img src="http://dgt-store.com/wp-content/uploads/2019/08/people.png"></img></div>
                        <div className="title">Квалифицированные специалисты</div>
                        <div className="description"></div>
                    </div>
                    <div className="advantage-block bg dots aos-init aos-animate">
                        <div className="icons"><img src="http://dgt-store.com/wp-content/uploads/2019/08/screwdriver.png"></img></div>
                        <div className="title">Отличный сервис</div>
                        <div className="description"></div>
                    </div>
                    <div className="advantage-block">
                        <div className="icons"><img src="http://dgt-store.com/wp-content/uploads/2019/08/geo.png"></img></div>
                        <div className="title">Удобное местоположение</div>
                        <div className="description"></div>
                    </div>
                    <div className="advantage-block bg dots aos-init aos-animate">
                        <div className="icons"><img src="http://dgt-store.com/wp-content/uploads/2019/08/car.png"></img></div>
                        <div className="title">3 уровня звука</div>
                        <div className="description"></div>
                    </div>
                </div>
            </div>
            <img className="small-picture" src="http://dgt-store.com/wp-content/uploads/2019/08/small-picture.png"></img>
            <img className="big-picture" src="http://dgt-store.com/wp-content/uploads/2019/08/big-picture.png"></img>
        </div>
    </>
}
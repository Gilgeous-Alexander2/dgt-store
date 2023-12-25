

export default function Header(){
    return<>
    <header className="header">
      <div className="container">
        <div className="header-container">
          <div className="header-logo">
            <a><img src="http://dgt-store.com/wp-content/uploads/2019/08/logo.svg"></img></a>
          </div>
          <nav className="header-nav">
            <ul className="header-nav-list">
              <li><a>О нас</a></li>
              <li><a>О нас</a></li>
              <li><a>О нас</a></li>
              <li><a>О нас</a></li>
              <li><a>О нас</a></li>
              <li><a>О нас</a></li>
            </ul>
          </nav>
          <div className="header-right">
            <div className="header-lang">
              <div className="header-lang_current">ru</div>
            </div>
            <ul className="header-socials socials">
              <li><a className="socials a" style={{backgroundImage: "url('http://dgt-store.com/wp-content/uploads/2019/08/icon-instagram.svg')"}}>vk</a></li>
              <li><a className="socials a" style={{backgroundImage: "url('http://dgt-store.com/wp-content/uploads/2019/08/icon-facebook.svg')"}}>vk</a></li>
              <li><a className="socials a" style={{backgroundImage: "url('http://dgt-store.com/wp-content/uploads/2019/08/icon-youtube.svg')"}}>vk</a></li>

            </ul>
          </div>
        </div>
      </div>
    </header>
    </>
}
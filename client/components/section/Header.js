import Link from "next/link";
const Header = ({ genres }) => {
  return (
    <header className="header header-horizontal header-view-pannel" id="scroll-top">
      <div className="container">
        <nav className="navbar">
          <Link href="/"><a className="navbar-brand" >
            <span className="logo-element">
              <span className="logo-tape">
                <span
                  className="svg-content svg-fill-theme"
                  data-svg="./images/svg/logo-part.svg"
                />
              </span>
              <span className="logo-text text-uppercase">
                <span>M</span>emico
              </span>
            </span>
          </a></Link>
          <button className="navbar-toggler" type="button">
            <span className="th-dots-active-close th-dots th-bars">
              <span />
              <span />
              <span />
            </span>
          </button>
          <div className="navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item nav-item-arrow-down nav-hover-show-sub">
                <a className="nav-link" href="#">
                  Genres
                </a>
                <div className="nav-arrow">
                  <i className="fas fa-chevron-down" />
                </div>
                <ul className="collapse nav">
                  {genres.map((genre) => {
                    return (<li className="nav-item">
                      <Link href={genre.link}><a className="nav-link" >
                        {genre.name}
                      </a></Link>
                    </li>)
                  })}
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;
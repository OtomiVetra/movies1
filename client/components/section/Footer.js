import Link from "next/link";
const Footer = ({ genres }) => {
  return (
    <footer className="section-text-white footer footer-links bg-darken">
      <div className="footer-body container">
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <a className="footer-logo" href="/html/">
              <span className="logo-element">
                <span className="logo-tape">
                  <span
                    className="svg-content svg-fill-theme"
                    data-svg="./images/svg/logo-part.svg"
                  />
                </span>
              </span>
            </a>
          </div>
          <div className="col-sm-6 col-lg-3">
            <h5 className="footer-title text-uppercase">Genres</h5>
            <ul className="list-unstyled list-wide footer-content">
              {genres.map((genre) => {
                return (<li>
                  <Link href={genre.link}><a className="content-link" >
                    {genre.name}
                  </a></Link>
                </li>)
              })}
            </ul>
          </div>
          <div className="col-sm-6 col-lg-3">
          </div>
          <div className="col-sm-6 col-lg-3">
          </div>
        </div>
      </div>
      <div className="footer-copy">
        <div className="container">
          Copyright {new Date().getFullYear()} © AmigosThemes. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer;
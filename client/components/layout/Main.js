import Header from "../section/Header";
import Footer from "../section/Footer";
import Link from "next/link";


const MainLayout = ({ children, title = "Movies list" }) => {
  const genres = [{
    name: "Action",
    link: "/?genre=Action"
  },
  {
    name: "Drama",
    link: "/?genre=Drama"
  },
  {
    name: "Comedy",
    link: "/?genre=Comedy"
  },
  {
    name: "History",
    link: "/?genre=History"
  }]
  return (
    <>
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>Memico - Cinema Bootstrap HTML5 Template</title>
      {/* Bootstrap */}
      <link href="/html/bootstrap/css/bootstrap.css" rel="stylesheet" type="text/css" />
      {/* Animate.css */}
      <link href="/html/animate.css/animate.css" rel="stylesheet" type="text/css" />
      {/* Font Awesome iconic font */}
      <link
        href="/html/fontawesome/css/fontawesome-all.css"
        rel="stylesheet"
        type="text/css"
      />
      {/* Magnific Popup */}
      <link
        href="/html/magnific-popup/magnific-popup.css"
        rel="stylesheet"
        type="text/css"
      />
      {/* Slick carousel */}
      <link href="/html/slick/slick.css" rel="stylesheet" type="text/css" />
      {/* Fonts */}
      <link
        href="https://fonts.googleapis.com/css?family=Oswald:300,400,500,700"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
        rel="stylesheet"
        type="text/css"
      />
      {/* Theme styles */}
      <link href="/html/css/dot-icons.css" rel="stylesheet" type="text/css" />
      <link href="/html/css/theme.css" rel="stylesheet" type="text/css" />
      <Header genres={genres} />
      <section className="after-head d-flex section-text-white position-relative">
        <div
          className="d-background"
          data-image-src="http://via.placeholder.com/1920x1080"
          data-parallax="scroll"
        />
        <div className="d-background bg-black-80" />
        <div className="top-block top-inner container">
          <div className="top-block-content">
            <h1 className="section-title">{title}</h1>
            <div className="page-breadcrumbs">
              <Link href="/"><a className="content-link" href="#">
                Home
              </a></Link>
              <span className="text-theme mx-2">
                <i className="fas fa-chevron-right" />
              </span>
              <span>Movies</span>
            </div>
          </div>
        </div>
      </section>
      {children}
      <a className="scroll-top" href="#scroll-top">
        {/* стрелка вверх для промота */}
        <i className="fas fa-angle-up" aria-hidden="true" />
      </a>
      <Footer genres={genres} />
      {/* jQuery library */}
      {/* Bootstrap */}
      {/* Paralax.js */}
      {/* Waypoints */}
      {/* Slick carousel */}
      {/* Magnific Popup */}
      {/* Inits product scripts */}
    </>
  )
}

export default MainLayout;
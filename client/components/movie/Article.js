const MovieArticle = ({ movie }) => {
  const { title, poster } = movie;
  return (
    <article className="movie-line-entity">
      <div className="entity-poster" data-role="hover-wrap">
        <div className="embed-responsive embed-responsive-poster">
          <img
            className="embed-responsive-item"
            src={poster}
            alt
          />
        </div>
      </div>
      <div className="entity-content">
        <h4 className="entity-title">
          <a className="content-link" href="movie-info-sidebar-right.html">
            {title}
          </a>
        </h4>
        <div className="entity-category">
          <a className="content-link" href="movies-blocks.html">
            fantasy
          </a>
          ,
          <a className="content-link" href="movies-blocks.html">
            historical
          </a>
        </div>
        <div className="entity-info">
          <div className="info-lines">
            <div className="info info-short">
              <span className="text-theme info-icon">
                <i className="fas fa-calendar-alt" />
              </span>
              <span className="info-text">29 mar 2018</span>
            </div>
            <div className="info info-short">
              <span className="text-theme info-icon">
                <i className="fas fa-clock" />
              </span>
              <span className="info-text">110</span>
              <span className="info-rest">&nbsp;min</span>
            </div>
          </div>
        </div>
        <p className="text-short entity-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          consectetur ultrices justo a pellentesque. Praesent venenatis dolor
          nec tempus lacinia. Donec ac condimentum dolor. Nullam sit amet nisl
          hendrerit, pharetra nulla convallis, malesuada diam. Donec ornare
          nisl eu lectus rhoncus, at malesuada metus rutrum. Aliquam a nisl
          vulputate, sodales ipsum aliquam, tempus purus. Suspendisse
          convallis, lectus nec vehicula sollicitudin, lorem sapien rhoncus
          dolor, vel lacinia urna velit ullamcorper nisi. Phasellus
          pellentesque, magna nec gravida feugiat, est magna suscipit ligula,
          vel porttitor nunc enim at nibh. Sed varius sit amet leo vitae
          consequat.
        </p>
      </div>
      <div className="entity-extra">
        <div className="text-uppercase entity-extra-title">Comming soon</div>
        <div />
      </div>
    </article>
  )
}

export default MovieArticle;
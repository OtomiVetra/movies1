import Link from "next/link";
const MovieArticle = ({ movie }) => {
  const { title, poster, genres, plot, year, runtime, _id } = movie;
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
          <Link href={`/movies/${_id}`}><a className="content-link" >
            {title}
          </a>
          </Link>
        </h4>
        <div className="entity-category">
          {genres.map((genre, i) => {
            return (
              <Link href={`/?genre=${genre}`} key={i}><a className="content-link">
                {genre}{i === genres.length - 1 ? "" : ", "}
                {/* длинна массива -1 */}
              </a></Link>
            )
          })}
        </div>
        <div className="entity-info">
          <div className="info-lines">
            <div className="info info-short">
              <span className="text-theme info-icon">
                <i className="fas fa-calendar-alt" />
              </span>
              <span className="info-text">{year}</span>
            </div>
            <div className="info info-short">
              <span className="text-theme info-icon">
                <i className="fas fa-clock" />
              </span>
              <span className="info-text">{runtime}</span>
              <span className="info-rest">&nbsp;min</span>
            </div>
          </div>
        </div>
        <p className="text-short entity-text">
          {plot}
        </p>
      </div>
    </article>
  )
}

export default MovieArticle;
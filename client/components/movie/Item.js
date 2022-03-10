import Link from "next/link";

const MovieItem = ({ movie }) => {
  const { title, poster, genres, plot, year, runtime, _id, imdb, directors, cast, countries, languages = [] } = movie;
  return (
    <div className="movie-info-entity">
      <div className="entity-poster" data-role="hover-wrap">
        <div className="embed-responsive embed-responsive-poster">
          <img
            className="embed-responsive-item"
            src={poster}
            alt=""
          />
        </div>
      </div>
      <div className="entity-content">
        <h2 className="entity-title">{title}</h2>
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
                <i className="fas fa-star" />
              </span>
              <span className="info-text">{imdb.rating}</span>
              <span className="info-rest">/10</span>
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
        <ul className="entity-list">
          <li>
            <span className="entity-list-title">Release:</span>{year}
          </li>
          <li>
            <span className="entity-list-title">Directed:</span>
            {directors.map((director, i) => {
              return (
                <Link href={`/?director=${director}`} key={i}><a className="content-link">
                  {director}{i === directors.length - 1 ? "" : ", "}
                  {/* длинна массива -1 */}
                </a></Link>
              )
            })}
          </li>
          <li>
            <span className="entity-list-title">Starring:</span>
            {cast.map((actor, i) => {
              return (
                <Link href={`/?actor=${actor}`} key={i}><a className="content-link">
                  {actor}{i === cast.length - 1 ? "" : ", "}
                  {/* длинна массива -1 */}
                </a></Link>
              )
            })}
          </li>
          <li>
            <span className="entity-list-title">Production company:</span>
            <a className="content-link" href="#">
              Re-Production Bro.
            </a>
            ,
            <a className="content-link" href="#">
              Pentakid
            </a>
          </li>
          <li>
            <span className="entity-list-title">Country:</span>
            {countries.map((country, i) => {
              return (
                <Link href={`/?country=${country}`} key={i}><a className="content-link">
                  {country}{i === countries.length - 1 ? "" : ", "}
                  {/* длинна массива -1 */}
                </a></Link>
              )
            })}
          </li>
          <li>
            <span className="entity-list-title">Language:</span>english
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MovieItem;
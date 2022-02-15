import Link from "next/link";
const Synopsis = ({ movie }) => {
  const { plot, fullplot, genres } = movie;
  return (
    <div className="section-line">
      <div className="section-head">
        <h2 className="section-title text-uppercase">Synopsis</h2>
      </div>
      <div className="section-description">
        <p className="lead">
          {fullplot || plot}
        </p>
      </div>
      <div className="section-bottom">
        <div className="row">
          <div className="mr-auto col-auto">
          </div>
          <div className="col-auto">
            <div className="entity-links">
              <div className="entity-list-title">Tags:</div>
              {genres.map((genre, i) => {
                return (
                  <Link href={`/?genre=${genre}`} key={i}><a className="content-link">
                    {genre}{i === genres.length - 1 ? "" : ", "}
                    {/* длинна массива -1 */}
                  </a></Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Synopsis;
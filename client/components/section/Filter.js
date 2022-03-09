import { useRouter } from "next/router"

const FilterSection = () => {
  const genres = ["News", "Western", "Horror", "Musical", "Fantasy", "War", "Thriller", "Crime", "Sci-Fi", "Drama", "Music", "Action", "Mystery", "Romance", "Comedy", "Biography", "History", "Sport", "Family", "Short", "Animation", "Adventure", "Documentary"]
  const years = [];
  for (let i = 2015; i >= 1915; i -= 1) {
    years.push(i)
  }
  const router = useRouter();
  return (
    <div className="section-pannel">
      <div className="grid row">
        <div className="col-md-10">
          <form autoComplete="off">
            <div className="row form-grid">
              <div className="col-sm-6 col-lg-3">
                <div className="input-view-flat input-group">
                  <select className="form-control" name="genre" onChange={(e) => {
                    router.push(`/?genre=${e.target.value}`)
                  }}>
                    {genres.map((genre) => {
                      return (<option key={genre}>{genre}</option>)
                    })}
                  </select>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div
                  className="input-view-flat date input-group"
                >
                  <select className="form-control" name="years" onChange={(e) => {
                    router.push(`/?year=${e.target.value}`)
                  }}>
                    {years.map((year) => {
                      return (<option key={year}>{year}</option>)
                    })}
                  </select>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="input-view-flat input-group">
                  <select className="form-control" name="sortBy">
                    <option selected="true">sort by</option>
                    <option>name</option>
                    <option>release year</option>
                    <option>rating</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default FilterSection;
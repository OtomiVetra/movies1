import MainLayout from "../../components/layout/Main";
import MovieComments from "../../components/movie/Comments";
import MovieItem from "../../components/movie/item";
import Synopsis from "../../components/movie/Synopsis";
import { useRouter } from "next/router";
const API_URL = "http://localhost:3001";

import { useEffect, useState } from "react";
const MoviePage = () => {
  const [movie, setMovie] = useState(null);
  const [comments, setComments] = useState([]);
  const router = useRouter();
  const { movie_id } = router.query;
  useEffect(() => {
    if (!movie_id) { return }
    fetch(`${API_URL}/movies/${movie_id}`)
      .then(res => res.json())
      .then(data => {
        setMovie(data.item);
        setComments(data.comments)
      })
  }, [movie_id])
  return (
    <MainLayout title={movie?.title}>
      <div className="container">
        <div className="sidebar-container">
          <div className="content">
            <section className="section-long">
              <div className="section-line">
                {!!movie && <MovieItem movie={movie} />}
              </div>
              {!!movie && <Synopsis movie={movie} />}
              {!!comments.length && <MovieComments comments={comments} />}
            </section>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default MoviePage;
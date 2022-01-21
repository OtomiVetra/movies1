import MainLayout from "../components/layout/Main";
import MovieArticle from "../components/movie/Article";
import Pagination from "../components/nav/Pagination";
import FilterSection from "../components/section/Filter";
import { useEffect, useState } from "react";
const API_URL = "http://localhost:3001";
const IndexPage = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    fetch(`${API_URL}/movies`)
      .then(res => res.json())
      .then(data => {
        setMovies(data.items);
      })
  }, [])
  return (
    <MainLayout>
      <section className="section-long">
        <div className="container">
          <FilterSection />
          {movies.map((movie) => {
            return <MovieArticle key={movie._id} movie={movie} />
          })}
          <Pagination />
        </div>
      </section>
    </MainLayout>

  )
}

export default IndexPage;
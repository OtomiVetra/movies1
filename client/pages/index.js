import MainLayout from "../components/layout/Main";
import MovieArticle from "../components/movie/Article";
import Pagination from "../components/nav/Pagination";
import FilterSection from "../components/section/Filter";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const API_URL = "http://localhost:3001";
const IndexPage = () => {
  const router = useRouter();
  const [movies, setMovies] = useState([])
  useEffect(() => {
    if (!router.isReady) return
    let URL = `${API_URL}/movies`
    if (router.query.genre) { URL += `?genre=${router.query.genre}` }
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        setMovies(data.items);
      })
  }, [router.isReady, router?.query?.genre])
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
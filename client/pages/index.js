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
    let URL = `${API_URL}/movies?`
    if (router.query.genre) { URL += `genre=${router.query.genre}` }
    if (router.query.year) { URL += `year=${router.query.year}` }
    if (router.query.director) { URL += `director=${router.query.director}` }

    fetch(URL)
      .then(res => res.json())
      .then(data => {
        setMovies(data.items);
      })
  }, [router.isReady, router?.query])
  return (
    <MainLayout>
      <section className="section-long">
        <div className="container">
          <FilterSection genres={genres} />
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
import MoviesList from "../organisms/MoviesList"
import { useEffect, useState } from "react";
import { getUpcomingMovies } from "../../services/movies";
import { Movie, MoviesResults } from "../../types";

const defaultMoviesResults = {
  list: [],
  page: 1,
  totalPages: 1
}

export default function Home() {
  const [ moviesResults, setMoviesResults ] = useState<MoviesResults>(defaultMoviesResults)

  async function getAndSetMovies(page = 1) {
    const { list, totalPages, page: responsePage } = await getUpcomingMovies(page) 
    setMoviesResults({
      list,
      totalPages,
      page: responsePage
    })
  }
  
  useEffect(() => {
    getAndSetMovies()
  }, [])

  return (
    <MoviesList 
      moviesResults={moviesResults} 
      getAndSetMovies={getAndSetMovies}
    />
  )
} 
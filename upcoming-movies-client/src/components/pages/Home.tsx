import MoviesList from "../organisms/MoviesList"
import { useEffect, useState } from "react";
import { getUpcomingMovies, findMovies } from "../../services/movies";
import { MoviesResults } from "../../types";

const defaultMoviesResults = {
  list: [],
  page: 1,
  totalPages: 1
}

type HomeProps = {
  query: string
}

export default function Home({ query }: HomeProps ) {
  const [ moviesResults, setMoviesResults ] = useState<MoviesResults>(defaultMoviesResults)

  async function getAndSetUpcomingMovies(page = 1) {
    const { list, totalPages, page: responsePage } = await getUpcomingMovies(page) 
    setMoviesResults({ list, totalPages, page: responsePage })
  }

  async function findAndSetMovies(query: string, page = 1) {
    const { list, totalPages, page: responsePage } = await findMovies(query, page) 
    setMoviesResults({ list, totalPages, page: responsePage })
  }

  async function getAndSetMovies( page = 1) {
    if (!query) {
      getAndSetUpcomingMovies(page)
      return
    }

    findAndSetMovies(query, page)
  }
  
  useEffect(() => {
    getAndSetMovies()
  }, [query])

  return (
    <MoviesList 
      moviesResults={moviesResults} 
      getAndSetMovies={getAndSetMovies}
    />
  )
} 
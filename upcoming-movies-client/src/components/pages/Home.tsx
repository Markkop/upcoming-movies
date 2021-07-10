import MoviesList from "../organisms/MoviesList"
import { useEffect, useState } from "react";
import { getMovies } from "../../services/movies";
import { Movie } from "../../types";

export default function Home() {
  const [ movies, setMovies ] = useState<Movie[]>([])

  async function getAndSetMovies() {
    const movies = await getMovies()
    setMovies(movies)
  }
  
  useEffect(() => {
    getAndSetMovies()
  }, [])

  return (
    <MoviesList movies={movies} />
  )
} 
import { Movie } from "../../types"
import MovieCard from '../molecules/MovieCard'

type MoviesListProps = {
  movies: Movie[]
}

export default function MoviesList({ movies }: MoviesListProps) {
  return <>
    {movies.map(movie => <MovieCard movie={movie} />)}
  </>
}
import { Movie } from "../types"
import { TMBDMovie } from '../../../upcoming-movies-server/src/types'

function mapMovies(movie: TMBDMovie): Movie {
  return {
    originalTitle: movie.original_title
  }
}

export async function getMovies(): Promise<Movie[]> {
  try {
    const response = await fetch('/movies/list')
    const json = await response.json()
    const movies = json.data.list
    return movies.map(mapMovies)
  } catch (error) {
    console.log(error)
    return []
  }
}
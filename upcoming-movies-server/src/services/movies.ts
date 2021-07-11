import apiClient from './apiClient'
import { Movie, TMBDMovie, TMBDMoviesRequest } from '../types'
import GenresService from './genres'

function mapGenreIdToName(genreId: number): string {
  return GenresService.getGenreById(genreId).name
}

function mapMovie(movie: TMBDMovie): Movie {
  return {
    id: movie.id,
    originalTitle: movie.original_title,
    releaseDate: movie.release_date,
    posterPath: `http://image.tmdb.org/t/p/w500${movie.poster_path}`,
    genres: movie.genre_ids.map(mapGenreIdToName),
    overview: movie.overview
  }
}

async function getUpcoming(): Promise<Movie[]> {
  const response = await apiClient.tmdb.get('/movie/upcoming')
  const data = response.data as TMBDMoviesRequest
  const movies = data.results
  return movies.map(mapMovie)
}

export default {
  getUpcoming
}
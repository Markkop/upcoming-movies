import apiClient from './apiClient'
import { Movie, MyApiMoviesResponse, TMBDMovie, TMBDMoviesResponse } from '../types'
import GenresService from './genres'

function mapGenreIdToName(genreId: number): string {
  return GenresService.getGenreById(genreId).name
}

function mapMovie(movie: TMBDMovie): Movie {
  return {
    id: movie.id,
    title: movie.title,
    releaseDate: movie.release_date,
    posterPath: `http://image.tmdb.org/t/p/w500${movie.poster_path}`,
    genres: movie.genre_ids.map(mapGenreIdToName),
    overview: movie.overview
  }
}

async function getUpcoming(requestPage = 1): Promise<MyApiMoviesResponse> {
  const options = {
    params: {
      page: requestPage
    }
  }
  const response = await apiClient.tmdb.get('/movie/upcoming', options)
  const { results, total_pages: totalPages, page } = response.data as TMBDMoviesResponse
  const list = results.map(mapMovie)
  return { list, totalPages, page }
}

export default {
  getUpcoming
}
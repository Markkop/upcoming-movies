import axios from 'axios'
import { Movie, UpcomingMoviesRequest } from '../types'

async function getUpcoming(): Promise<Movie[]> {
  const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_APIKEY}`
  const response = await axios.get(url)
  const data = response.data as UpcomingMoviesRequest
  return data.results
}

export default {
  getUpcoming
}
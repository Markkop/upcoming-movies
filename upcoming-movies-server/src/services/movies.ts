import axios from 'axios'
import { TMBDMovie, TMBDMoviesRequest } from '../types'

async function getUpcoming(): Promise<TMBDMovie[]> {
  const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_APIKEY}`
  const response = await axios.get(url)
  const data = response.data as TMBDMoviesRequest
  return data.results
}

export default {
  getUpcoming
}
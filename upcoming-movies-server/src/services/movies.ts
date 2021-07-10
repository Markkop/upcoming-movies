import axios from 'axios'

async function getUpcoming() {
  const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_APIKEY}`
  const response = await axios.get(url)
  return response.data.results
}

export default {
  getUpcoming
}
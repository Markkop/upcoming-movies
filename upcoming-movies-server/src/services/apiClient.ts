import axios from "axios";

const TMDB_APIKEY = process.env.TMDB_APIKEY
if (!TMDB_APIKEY) {
  console.log('process.env.TMDB_APIKEY not found, did you set it up in .env?')
}

export default {
  tmdb: axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
      api_key: TMDB_APIKEY
    }
  })
}
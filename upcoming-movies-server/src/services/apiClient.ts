import axios from "axios";

export default {
  tmdb: axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
      api_key: process.env.TMDB_APIKEY
    }
  })
}
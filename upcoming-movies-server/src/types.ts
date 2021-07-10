export type TMBDMovie = {
  poster_path: string|null
  adult: boolean
  overview: string
  release_date: string
  genre_ids: number[]
  id: number
  original_title: string
  original_language: string
  title: string
  backdrop_path: string|null
  popularity: number
  vote_count: number
  video: boolean
  vote_average: number
}

export type Movie = {
  originalTitle: string
  releaseDate: string
  genres: string[]
  posterPath: string
  id: number
}

export type TMBDMoviesRequest = {
  page: number
  results: TMBDMovie[]
  dates: {
    maximum: string
    minimum: string
  }
  total_pages: number
  total_results: number
}

export type TMBDGenre = {
  id: number,
  name: string
}
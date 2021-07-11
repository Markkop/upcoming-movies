export type TMBDMovie = {
  poster_path: string|null
  adult: boolean
  overview: string
  release_date: string
  genre_ids: number[]
  id: number
  original_language: string
  title: string
  backdrop_path: string|null
  popularity: number
  vote_count: number
  video: boolean
  vote_average: number
}

export type Movie = {
  title: string
  releaseDate: string
  genres: string[]
  posterPath: string
  id: number,
  overview: string
}

export type MyApiMoviesResponse = {
  list: Movie[],
  totalPages: number,
  page: number
}

export type TMBDMoviesResponse = {
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
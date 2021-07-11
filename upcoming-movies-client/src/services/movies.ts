import { MoviesResults, MyApiMoviesResponse } from "../types"
export async function getUpcomingMovies(requestPage = 1): Promise<MoviesResults> {
  try {
    const response = await fetch(`/movies/upcoming?page=${requestPage}`)
    const json = await response.json()
    const { list, totalPages, page } = json.data
    return { list, totalPages, page }
  } catch (error) {
    console.log(error)
    return { list: [], totalPages: 1, page: 1 }
  }
}

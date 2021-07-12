import { MoviesResults } from "../types"

export async function getUpcomingMovies(requestPage = 1): Promise<MoviesResults> {
  try {
    const response = await fetch(`/movies/upcoming?page=${requestPage}`)
    if (!response.ok) throw new Error(response.statusText)
    const json = await response.json()
    const { list, totalPages, page } = json.data
    return { list, totalPages, page }
  } catch (error) {
    throw new Error(error)
  }
}

export async function findMovies(query: string, requestPage = 1): Promise<MoviesResults> {
  try {
    const response = await fetch(`/movies/search?query=${query}&page=${requestPage}`)
    if (!response.ok) throw new Error(response.statusText)
    const json = await response.json()
    const { list, totalPages, page } = json.data
    return { list, totalPages, page }
  } catch (error) {
    throw new Error(error)
  }
}

import { Movie } from "../types"
export async function getMovies(): Promise<Movie[]> {
  try {
    const response = await fetch('/movies/list')
    const json = await response.json()
    const movies = json.data.list
    return movies
  } catch (error) {
    console.log(error)
    return []
  }
}

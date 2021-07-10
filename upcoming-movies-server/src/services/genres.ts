import { TMBDGenre } from '../types'
import apiClient from './apiClient'

class GenresService {
  private genres = [] as TMBDGenre[]

  constructor() {
    this.getAndSetGenres()
  }

  private async getAndSetGenres() {
    const genres = await this.getGenres()
    this.setGenres(genres)
  }

  private async getGenres(): Promise<TMBDGenre[]> {
    const response = await apiClient.tmdb.get('/genre/movie/list')
    const data = response.data.genres as TMBDGenre[]
    return data
  }

  private async setGenres(genres: TMBDGenre[]) {
    this.genres = genres
  }

  public getGenreById(genreId: number) {
    return this.genres.find(({ id }) => genreId === id)
  }
}

export default new GenresService()
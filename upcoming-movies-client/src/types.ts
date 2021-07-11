import { Dispatch, SetStateAction } from 'react';
import { Movie as APIMovie } from '../../upcoming-movies-server/src/types'
import { MyApiMoviesResponse as APIMoviesResponse } from '../../upcoming-movies-server/src/types'

export type Movie = APIMovie
export type MyApiMoviesResponse = APIMoviesResponse

export type MovieModalContextState = {
  modalMovie: Movie|undefined;
  isModalOpen: boolean;
  setModalMovie: Dispatch<SetStateAction<Movie|undefined>>
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
};

export type MoviesResults = {
  list: Movie[],
  page: number,
  totalPages: number
}

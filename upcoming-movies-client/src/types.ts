import { Dispatch, SetStateAction } from 'react';
import { Movie as APIMovie } from '../../upcoming-movies-server/src/types'

export type Movie = APIMovie

export type MovieModalContextState = {
  modalMovie: Movie|undefined;
  isModalOpen: boolean;
  setModalMovie: Dispatch<SetStateAction<Movie|undefined>>
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
};

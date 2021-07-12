import { createContext, useState, ReactNode } from "react";
import { MovieModalContextState, Movie } from "../../types";

const contextDefaultValues: MovieModalContextState = {
  modalMovie: undefined,
  isModalOpen: false,
  setModalMovie: () => {},
  setIsModalOpen: () => {}
};

export const MovieModalContext = createContext<MovieModalContextState>(
  contextDefaultValues
);

type MovieModalProviderProps = {
  children: ReactNode
}

export default function MovieModalProvider({ children }: MovieModalProviderProps) {
  const [modalMovie, setModalMovie] = useState<Movie|undefined>(contextDefaultValues.modalMovie);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(contextDefaultValues.isModalOpen);

  return (
    <MovieModalContext.Provider
      value={{
        modalMovie,
        isModalOpen,
        setModalMovie,
        setIsModalOpen
      }}
    >
      {children}
    </MovieModalContext.Provider>
  );
};


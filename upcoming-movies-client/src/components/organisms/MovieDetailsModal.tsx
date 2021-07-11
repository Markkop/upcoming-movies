import { Modal } from '@material-ui/core';
import { useContext } from 'react';
import MovieDetails from '../molecules/MovieDetails'
import { MovieModalContext } from "../providers/MovieModalProvider";

export default function MovieDetailsModal() {
  const { modalMovie, isModalOpen, setIsModalOpen } = useContext(MovieModalContext);

  function handleCloseModal() {
    setIsModalOpen(false)
  }

  return (
    <Modal
      open={isModalOpen}
      onClose={handleCloseModal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <MovieDetails movie={modalMovie}/>
    </Modal>
  );
}

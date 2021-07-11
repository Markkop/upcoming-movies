import { MovieModalContext } from "../providers/MovieModalProvider";
import { makeStyles } from '@material-ui/core/styles';
import { Fade, Modal } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import MovieDetails from '../molecules/MovieDetails'
import { useContext } from 'react';

const useStyles = makeStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  })

export default function MovieDetailsModal() {
  const classes = useStyles();
  const { modalMovie, isModalOpen, setIsModalOpen } = useContext(MovieModalContext);

  function handleCloseModal() {
    setIsModalOpen(false)
  }

  if (!modalMovie) {
    return <></>
  }

  return (
    <Modal
      open={isModalOpen}
      onClose={handleCloseModal}
      className={classes.modal}
      aria-labelledby="movie-modal-title"
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isModalOpen}>
        <MovieDetails movie={modalMovie}/>
      </Fade>
    </Modal>
  );
}

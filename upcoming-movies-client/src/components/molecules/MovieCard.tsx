import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Movie } from "../../types";
import { CardMedia, Modal } from '@material-ui/core';
import { formatDate } from '../../utils/formatter'
import { useContext, useState } from 'react';
import MovieDetails from './MovieDetails'
import MovieDetailsModal from '../organisms/MovieDetailsModal';
import TodosProvider, { MovieModalContext } from "../providers/MovieModalProvider";


type MovieCardProps = {
  movie: Movie
};

const useStyles = makeStyles({
  root: {
    flexDirection: 'column',
    display: 'flex',
    margin: '15px 15px',
    flexGrow: 1,
    cursor: 'pointer'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export default function MovieCard({ movie }: MovieCardProps) {
  const { setModalMovie, setIsModalOpen } = useContext(MovieModalContext);
  const classes = useStyles();

  function handleCardClick() {
    setModalMovie(movie)
    setIsModalOpen(true)
  }

  return (
    <Card className={classes.root} component="a" onClick={handleCardClick}>
      <CardMedia
        className={classes.media}
        image={movie.posterPath}
        title={movie.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="h1">
          {movie.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {formatDate(movie.releaseDate)}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {movie.genres.join(', ')}
        </Typography>
      </CardContent>
    </Card>
  );
}

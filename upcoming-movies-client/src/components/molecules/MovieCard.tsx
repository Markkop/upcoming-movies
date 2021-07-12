import { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia, Card, CardContent, Typography } from '@material-ui/core';
import { MovieModalContext } from "../providers/MovieModalProvider";
import { formatDate } from '../../utils/formatter'
import { Movie } from "../../types";

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

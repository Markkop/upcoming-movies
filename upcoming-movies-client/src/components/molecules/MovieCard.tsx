import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Movie } from "../../types";
import { CardMedia } from '@material-ui/core';

type MovieCardProps = {
  movie: Movie
};

const useStyles = makeStyles({
  root: {
    flexDirection: 'column',
    display: 'flex',
    margin: '15px 15px',
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

export default function MovieCard({ movie }: MovieCardProps) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={`http://image.tmdb.org/t/p/w500${movie.posterPath}`}
          title={movie.originalTitle}
        />
      <CardContent>
        <Typography className={classes.pos} color="textSecondary">
          {movie.originalTitle}
        </Typography>
        <Typography variant="body2" component="p">
          {movie.genres.join(', ')}
        </Typography>
      </CardContent>
    </Card>
  );
}

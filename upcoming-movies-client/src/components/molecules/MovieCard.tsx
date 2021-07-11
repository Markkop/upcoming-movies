import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Movie } from "../../types";
import { CardHeader, CardMedia } from '@material-ui/core';

type MovieCardProps = {
  movie: Movie
};

function formatDate(dateString: string) {
  const date = new Date(dateString) 
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

const useStyles = makeStyles({
  root: {
    flexDirection: 'column',
    display: 'flex',
    margin: '15px 15px',
    flexGrow: 1
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
        <Typography gutterBottom variant="h6" component="h1">
          {movie.originalTitle}
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

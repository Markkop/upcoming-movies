import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Movie } from "../../types";
import { formatDate } from '../../utils/formatter';


type MovieDetailsProps = {
  movie: Movie
};

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: '15px 25px',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'center',
      width: '50%'
    },
  },
  mainContainer: {
    borderRadius: '3px',
    height: '90vh',
    overflowY: 'scroll',
    flexDirection: 'row-reverse',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      flexWrap: 'nowrap',
      overflowY: 'hidden',
    },
  },
  imageContainer: {
    height: 'inherit',
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
    },
  },
  img: {
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
      width: '100%'
    },
  },
  textsContainer: {
    margin:'auto 5px'
  }
}));

export default function MovieDetails({ movie }: MovieDetailsProps) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container className={classes.mainContainer}>
        <Grid item className={classes.imageContainer}>
          <img className={classes.img} alt={movie.title} src={movie.posterPath} />
        </Grid>
        <Grid item container className={classes.textsContainer}>
          <Grid item>
            <Typography gutterBottom variant="h6" id="movie-modal-title">
              {movie.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {movie.genres.join(', ')}
            </Typography>
            <Typography variant="body2" gutterBottom >
              {movie.overview}
            </Typography>
            <Typography variant="subtitle2">
              {`Release on ${formatDate(movie.releaseDate)}`}
          </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

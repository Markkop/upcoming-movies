import { Grid, makeStyles } from "@material-ui/core";
import { Movie } from "../../types"
import MovieCard from '../molecules/MovieCard'

type MoviesListProps = {
  movies: Movie[]
}

const useStyles = makeStyles({
  grid: {
    spacing: 3,
    alignItems: 'stretch'
  },
  gridItem: {
    display: 'flex'
  }
});

export default function MoviesList({ movies }: MoviesListProps) {
  const classes = useStyles();
  return <Grid container className={classes.grid}>
    {movies.map(movie => 
      <Grid item xs={12} sm={6} md={3} className={classes.gridItem} key={movie.id}>
        <MovieCard movie={movie} />
      </Grid>
    )}
  </Grid>
}
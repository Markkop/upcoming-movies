import InfiniteScroll from 'react-infinite-scroll-component'
import { Grid, makeStyles } from "@material-ui/core";
import { useState, useEffect } from "react";
import { ResultsText, Loading } from "../atoms";
import { MovieCard } from '../molecules'
import { Movie, MoviesResults } from "../../types"

type MoviesListProps = {
  moviesResults: MoviesResults,
  getAndSetMovies: (page: number) => Promise<void>,
  error?: Error
}

const useStyles = makeStyles({
  grid: {
    spacing: 3,
    alignItems: 'stretch'
  },
  gridItem: {
    display: 'flex',
    transition: 'all .3s',
  }
});

export default function MoviesList({ moviesResults, getAndSetMovies, error }: MoviesListProps) {
  const [movies, setMovies] = useState<Movie[]>([])
  const classes = useStyles();

  useEffect(() => {
    if (moviesResults.page === 1) {
      setMovies(moviesResults.list)
      return 
    }

    setMovies(prevMovies => [...prevMovies, ...moviesResults.list])
  }, [moviesResults])

  function onReachBottom() {
    getAndSetMovies(moviesResults.page + 1)
  }

  const hasMorePages = moviesResults.page < moviesResults.totalPages
  return <InfiniteScroll
      dataLength={movies.length}
      next={onReachBottom}
      hasMore={hasMorePages}
      loader={<Loading/>}
      endMessage={<ResultsText resultsQuantity={movies.length} error={error}/>}
    >
      <Grid container className={classes.grid} id="grid">
      {movies.map(movie => 
        <Grid item xs={12} sm={6} md={3} className={classes.gridItem} key={movie.id}>
          <MovieCard movie={movie} />
        </Grid>
      )}
      </Grid>
    </InfiniteScroll>
}
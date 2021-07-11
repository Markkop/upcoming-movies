import { Grid, Grow, makeStyles } from "@material-ui/core";
import { useState } from "react";
import { useEffect } from "react";
import InfiniteScroll from 'react-infinite-scroll-component'
import { Movie, MoviesResults } from "../../types"
import Loading from "../atoms/Loading";
import SeenAll from "../atoms/SeenAll";
import MovieCard from '../molecules/MovieCard'

type MoviesListProps = {
  moviesResults: MoviesResults,
  getAndSetMovies: (page: number) => Promise<void>
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

export default function MoviesList({ moviesResults, getAndSetMovies }: MoviesListProps) {
  const [movies, setMovies] = useState<Movie[]>([])
  const classes = useStyles();

  useEffect(() => {
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
      endMessage={<SeenAll/>}
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
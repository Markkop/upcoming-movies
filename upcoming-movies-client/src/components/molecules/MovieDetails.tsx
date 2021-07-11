import { makeStyles } from '@material-ui/core/styles';
import { Movie } from "../../types";
import { Paper } from '@material-ui/core';

type MovieDetailsProps = {
  movie?: Movie
};

const useStyles = makeStyles({
  root: {
    flexDirection: 'column',
    display: 'flex',
    margin: '15px 15px',
    flexGrow: 1
  }
});

export default function MovieDetails({ movie }: MovieDetailsProps) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      {movie?.originalTitle}
    </Paper>
  );
}

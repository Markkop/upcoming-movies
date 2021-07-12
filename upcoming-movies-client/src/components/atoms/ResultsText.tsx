import { Typography, Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px'
  }
});

type SeenAllProps = {
  resultsQuantity: number,
  error?: Error
}

export default function ResultsText({ resultsQuantity, error }: SeenAllProps) {
  const classes = useStyles();

  const hasSingleResult = resultsQuantity === 1
  const singleResultText = "You've seen the single result!"
  const multipleResultsText = `You've seen all the ${resultsQuantity} results!`
  const noResultsText = 'No results were found :('
  const resultsText = resultsQuantity ? (hasSingleResult ? singleResultText :  multipleResultsText) : noResultsText

  return <Box className={classes.root}>
    <Typography>
      {error ? error.message : resultsText}
    </Typography>
  </Box>
  
}
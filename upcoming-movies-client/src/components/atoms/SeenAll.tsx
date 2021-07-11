import { Typography, Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px'
  }
});

export default function SeenAll() {
  const classes = useStyles();

  return <Box className={classes.root}>
    <Typography>
      You've seen all the results!
    </Typography>
  </Box>
  
}
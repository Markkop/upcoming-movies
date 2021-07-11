import Home from "./components/pages/Home";
import Header from "./components/organisms/Header";
import { makeStyles } from "@material-ui/core";
import MovieModalProvider from "./components/providers/MovieModalProvider";
import MovieDetailsModal from "./components/organisms/MovieDetailsModal";

const useStyles = makeStyles({
  background: {
    backgroundColor: '#eee'
  }
});

export default function App() {
  const classes = useStyles();
  return <div id="app" className={classes.background} >
    <MovieModalProvider>
      <Header />
      <Home />
      <MovieDetailsModal/>
    </MovieModalProvider>
  </div>
}
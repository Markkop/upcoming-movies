import Home from "./components/pages/Home";
import Header from "./components/organisms/Header";
import { makeStyles } from "@material-ui/core";
import MovieModalProvider from "./components/providers/MovieModalProvider";
import MovieDetailsModal from "./components/organisms/MovieDetailsModal";
import { useState } from "react";

const useStyles = makeStyles({
  background: {
    backgroundColor: '#eee'
  }
});

export default function App() {
  const [query, setQuery] = useState('')

  const classes = useStyles();
  return <div id="app" className={classes.background} >
    <Header setQuery={setQuery} />
    <MovieModalProvider>
      <Home query={query} />
      <MovieDetailsModal/>
    </MovieModalProvider>
  </div>
}
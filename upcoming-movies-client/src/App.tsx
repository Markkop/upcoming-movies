import Home from "./components/pages/Home";
import Header from "./components/organisms/Header";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  background: {
    backgroundColor: '#eee'
  }
});

export default function App() {
  const classes = useStyles();
  return <div id="app" className={classes.background} >
    <Header />
    <Home />
  </div>
}
import { useEffect, useState } from "react";

async function getMovies() {
  const response = await fetch('http://localhost:8080/movies/list')
  const json = await response.json()
  return json.data.list
}

export default function App( ) {
  const [ movies, setMovies ] = useState([])

  async function getAndSetMovies() {
    const movies = await getMovies()
    setMovies(movies)
  }
  
  useEffect(() => {
    getAndSetMovies()
  }, [])

  return <p>{ JSON.stringify(movies.map((movie: any) => movie.original_title), null, 2) }</p>;
}
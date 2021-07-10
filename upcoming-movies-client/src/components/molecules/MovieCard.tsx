import { Movie } from "../../types";

type MovieCardProps = {
  movie: Movie
};

export default function MovieCard({ movie }: MovieCardProps) {
  return <h1>{ movie.originalTitle }</h1>
}
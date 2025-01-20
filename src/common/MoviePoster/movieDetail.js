import { MoviePoster } from "./index";
import { MoviePosterData } from "./data";

export const MovieDetail = () => {
  const { title, rating, votes, image } = MoviePosterData;

  return (
    <MoviePoster title={title} src={image} rating={rating} votes={votes} />
  );
};

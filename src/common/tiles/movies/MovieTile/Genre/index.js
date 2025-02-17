import { useSelector } from "react-redux";
import { Container, GenreItem } from "./styled";
import { selectGenres } from "../../../../../features/movies/genresSlice";

export const Genre = ({ genreIds, genresError }) => {
  const genresList = useSelector(selectGenres);

  if (genresError || !Array.isArray(genresList) || !Array.isArray(genreIds)) {
    return <p>N/A</p>;
  }
  const movieGenres = genresList.filter((genre) => genreIds.includes(genre.id));

  if (movieGenres.length === 0) {
    return <p>N/A</p>;
  }

  return (
    <Container>
      {movieGenres.map((genre) => (
        <GenreItem key={genre.id}>{genre.name}</GenreItem>
      ))}
    </Container>
  );
};
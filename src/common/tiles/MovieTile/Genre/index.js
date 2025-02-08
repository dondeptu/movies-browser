import { useSelector } from "react-redux";
import { Container, GenreItem } from "./styled";
import { selectGenres } from "../../../../features/Movies/genresSlice";

export const Genre = ({ genreIds }) => {
  const genresList = useSelector(selectGenres);

  if (!Array.isArray(genresList) || !Array.isArray(genreIds)) {
    return null;
  }
  const movieGenres = genresList.filter((genre) => genreIds.includes(genre.id));

  return (
    <Container>
      {movieGenres.map((genre) => (
        <GenreItem key={genre.id}>{genre.name}</GenreItem>
      ))}
    </Container>
  );
};
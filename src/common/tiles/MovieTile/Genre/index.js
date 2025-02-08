import { useSelector } from "react-redux";
import { Container, GenreItem } from "./styled";
import { selectGenres } from "../../../../features/Movies/genresSlice";

export const Genre = ({ genreIds, genresError }) => {
  const genresList = useSelector(selectGenres);

  if (genresError || !Array.isArray(genresList) || !Array.isArray(genreIds)) {
    return <p> No genres available</p>;
  }
  const movieGenres = genresList.filter((genre) => genreIds.includes(genre.id));

  if (movieGenres.length === 0) {
    return <p> No genres available</p>;
  }

  return (
    <Container>
      {movieGenres.map((genre) => (
        <GenreItem key={genre.id}>{genre.name}</GenreItem>
      ))}
    </Container>
  );
};
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Section } from "../../../common/Section";
import { Wrapper } from "../../../Wrapper";
import { Content } from "./styled";
import { MovieTile } from "../../../common/MovieTile";
import { selectMovies, selectError } from "../movieSlice";
import { startFetch } from "../movieSlice";

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const movieCount = movies.results.length;
  const totalPages = movies.total_pages;
  const error = useSelector(selectError);

useEffect(() => {
    dispatch(startFetch());
  }, [dispatch]);

  if (error) {
    return <p>Error fetching movies: {error}</p>;
  }

  console.log("Movies state:", movies);

  return (
    <Wrapper>
      <Section
        sectionHeader={`Popular movies (${movieCount} movies from ${totalPages} pages)`}
        body={
          <Content>
            {movieCount > 0 ? (
              movies.results.map((movie) => (
                <MovieTile key={movie.id} movie={movie} />
              ))
            ) : (
              <p>No movies available</p>
            )}
          </Content>
        }
      />
    </Wrapper>
  );
}

export default MovieList;

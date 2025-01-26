import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { MainContent } from "../../../common/MainContent";
import { Wrapper } from "../../../Wrapper";
import { Content } from "./styled";
import { MovieTile } from "../../../common/MovieTile";
import { selectMovies, selectError } from "../movieSlice";
import { startFetch } from "../movieSlice";

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const movieCount = movies?.results?.length || 0;
  const totalPages = 500;
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(startFetch());
  }, [dispatch]);

  useEffect(() => {
    console.log(
      `Popular movies (${movieCount} movies from ${totalPages} pages)`
    );
  }, [movieCount, totalPages]);

  if (error) {
    return <p>Error fetching movies: {error}</p>;
  }
console.log(movies);

  return (
    <Wrapper>
      <MainContent
        mainHeader="Popular movies"
        body={
          <Content>
            {movieCount > 0 ? (
              movies.results.map(({ id, poster_path, title, release_date, vote_average, vote_count }) => (
                <MovieTile
                  key={id}
                  id={id}
                  poster_path={poster_path}
                  title={title}
                  release_date={release_date}
                  vote_average={vote_average}
                  vote_count={vote_count}
                />
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

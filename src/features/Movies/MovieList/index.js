import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { MainContent } from "../../../common/MainContent";
import { Wrapper } from "../../../Wrapper";
import { Content } from "./styled";
import { MovieTile } from "../../../common/tiles/MovieTile";
import { selectMovies, selectMoviesState } from "../movieSlice";
import { startFetch } from "../movieSlice";
import { resetPage } from "../../../common/Pagination/paginationSlice";
import { Loading } from "../../../common/Loading";
import { Error } from "../../../common/Error";

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const movieCount = movies?.results?.length || 0;
  const { loading, error } = useSelector(selectMoviesState);

  useEffect(() => {
    dispatch(startFetch());
    dispatch(resetPage());
  }, [dispatch]);

  return (
    <Wrapper>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : movieCount > 0 ? (
        <MainContent
          mainHeader="Popular movies"
          body={
            <Content>
              {movies.results.map(
                ({
                  id,
                  poster_path,
                  title,
                  release_date,
                  genre_ids,
                  vote_average,
                  vote_count,
                }) => (
                  <MovieTile
                    key={id}
                    id={id}
                    posterPath={poster_path}
                    title={title}
                    releaseDate={release_date}
                    genreIds={genre_ids}
                    voteAverage={vote_average}
                    voteCount={vote_count}
                  />
                )
              )}
            </Content>
          }
        />
      ) : (
        <p>No movies available</p>
      )}
    </Wrapper>
  );
}

export default MovieList;

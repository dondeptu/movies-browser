import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { MainContent } from "../../../common/MainContent";
import { Wrapper } from "../../../Wrapper";
import { Content } from "./styled";
import { MovieTile } from "../../../common/tiles/MovieTile";
import { selectMovies, selectError, fetchSearchResults } from "../movieSlice";
import { startFetch } from "../movieSlice";
import { resetPage } from "../../../common/Pagination/paginationSlice";
import { useQueryParameter } from "../../../common/Navigation/Search/queryParameters";
import searchQueryParamName from "../../../common/Navigation/Search/searchQueryParamName";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const movieCount = movies?.results?.length || 0;
  const error = useSelector(selectError);

  const searchQuery = useQueryParameter(searchQueryParamName) || "";
  const page = Number(new URLSearchParams(useLocation.search).get("page")) || 1;

  useEffect(() => {
    if (searchQuery) {
      dispatch(
        fetchSearchResults({ searchQuery, page })
      );
    } else {
      dispatch(startFetch());
      dispatch(resetPage());
    }
  }, [dispatch, page, searchQuery]);

  if (error) {
    return <p>Error fetching movies: {error}</p>;
  }

  return (
    <Wrapper>
      <MainContent
        mainHeader="Popular movies"
        body={
          <Content>
            {movieCount > 0 ? (
              movies.results.map(({ id, poster_path, title, release_date, genre_ids, vote_average, vote_count }) => (
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

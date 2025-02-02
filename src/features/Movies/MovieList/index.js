import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { MainContent } from "../../../common/MainContent";
import { Wrapper } from "../../../Wrapper";
import { Content } from "./styled";
import { MovieTile } from "../../../common/tiles/MovieTile";

import { selectMovies, selectMoviesState, fetchSearchResults, fetchPopularMovies } from "../movieSlice";
import { resetPage } from "../../../common/Pagination/paginationSlice";
import { Loading } from "../../../common/Loading";
import { Error } from "../../../common/Error";
import { useQueryParameter } from "../../../common/Navigation/Search/queryParameters";
import searchQueryParamName from "../../../common/Navigation/Search/searchQueryParamName";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const movieCount = movies?.results?.length || 0;
  const { loading, error } = useSelector(selectMoviesState);

  const searchQuery = useQueryParameter(searchQueryParamName) || "";
  const page = Number(new URLSearchParams(useLocation.search).get("page")) || 1;

  useEffect(() => {
    if (searchQuery) {
      dispatch(
        fetchSearchResults({
          page,
          searchQuery,
          searchType: "movie"
        })
      );
    } else {
      dispatch(fetchPopularMovies());
      dispatch(resetPage());
    }
  }, [dispatch, page, searchQuery]);

  return (
    <Wrapper>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : movieCount > 0 ? (
        <MainContent
          mainHeader={searchQuery ? `Search results for ${searchQuery} (${movieCount})` : "Popular movies"}
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
        <MainContent
          mainHeader={searchQuery ? `Sorry, there are no results for "${searchQuery}"` : "No movies available movies"}
          body={"Image to do"}
        />
      )}
    </Wrapper>
  );
}

export default MovieList;

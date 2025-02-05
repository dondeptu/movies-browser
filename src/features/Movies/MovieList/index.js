import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { MainContent } from "../../../common/MainContent";
import { Wrapper } from "../../../Wrapper";
import { Content } from "./styled";
import { MovieTile } from "../../../common/tiles/MovieTile";
import {
  selectMovies,
  selectMoviesState,
  fetchSearchResults,
  fetchPopularMovies,
  selectTotalPages,
  selectTotalResults
} from "../movieSlice";
import { Loading } from "../../../common/Loading";
import { Error } from "../../../common/Error";
import { useQueryParameter } from "../../../common/Navigation/Search/queryParameters";
import { Pagination } from "../../../common/Pagination";
import { NoResults } from "../../../common/NoResults";
import { pageQueryParamName, searchQueryParamName } from "../../../common/Navigation/Search/QueryParamName";

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const movieCount = movies?.results?.length || 0;
  const { loading, error } = useSelector(selectMoviesState);
  const searchQuery = (useQueryParameter(searchQueryParamName) || "").toLowerCase();
  const page = Number(useQueryParameter(pageQueryParamName)) || 1;

  const totalPages = useSelector(selectTotalPages);
  const totalResults = useSelector(selectTotalResults);

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
      dispatch(fetchPopularMovies(page));
    }
  }, [dispatch, page, searchQuery]);

  return (
    <Wrapper>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : movieCount > 0 ? (
        <>
          <MainContent
            mainHeader={searchQuery ? `Search results for "${searchQuery}" (${totalResults})` : "Popular movies"}
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
          <Pagination
            page={page}
            totalPages={totalPages}
          />
        </>
      ) : (
        <MainContent
          mainHeader={searchQuery ? `Sorry, there are no results for "${searchQuery}"` : "No movies available"}
          body={<NoResults />}
        />
      )}
    </Wrapper>
  );
}

export default MovieList;

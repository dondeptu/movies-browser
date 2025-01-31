import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { fetchPopularMovies } from "./MovieList/fetchData";
import {
  startFetch,
  fetchMovieSuccess,
  fetchMovieError,
  fetchMovies,
  setMovieDetails,
  fetchMovieDetails,
  fetchSearchResults,
} from "./movieSlice";
import { selectCurrentPage } from "../../common/Pagination/paginationSlice";
import { getMovieDetails } from "./MoviePage/getData";
import { getGenres } from "./getGenres";
import { setGenres } from "./genresSlice";
import { getSearchResults } from "./MovieList/getSearchResultsData";

function* fetchMoviesData() {
  try {
    yield delay(800);
    const page = yield select(selectCurrentPage);
    const { results } = yield call(fetchPopularMovies, page);
    const { genres } = yield call(getGenres);
    yield put(
      fetchMovies({ results, total_pages: 500, total_results: results.length })
    );
    yield put(setGenres(genres));
    yield delay(800);
    yield put(fetchMovieSuccess());
  } catch (error) {
    yield delay(800);
    yield put(fetchMovieError(`Error fetching movies: ${error.message}`));
  }
}

function* fetchMovieDetailsHandler({ payload: movieId }) {
  try {
    yield put(startFetch());
    yield delay(800);
    const movieDetails = yield call(getMovieDetails, movieId);
    yield put(setMovieDetails(movieDetails));
    yield put(fetchMovieSuccess());
  } catch (error) {
    yield delay(800);
    yield put(
      fetchMovieError(`Error fetching movie details: ${error.message}`)
    );
  }
}

function* fetchSearchResultsHandler({ payload: { page, searchQuery, searchType } }) {
  try {
    const { results } = yield call(getSearchResults, page, searchQuery, searchType);
    const { genres } = yield call(getGenres);

    delay(500);
    yield put(fetchMovies({ results, total_pages: 500, total_results: results.length }));
    yield put(setGenres(genres));

    yield put(fetchMovieSuccess());
  } catch (error) {
    console.error("Error fetching search results or genres:", error);
    yield put(fetchMovieError(`Error fetching movie details: ${error.message}`))
  }
}

export function* movieSaga() {
  yield takeLatest(startFetch, fetchMoviesData);
  yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
  yield takeLatest(fetchSearchResults.type, fetchSearchResultsHandler);
}

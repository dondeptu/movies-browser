import { call, debounce, delay, put, takeLatest } from "redux-saga/effects";
import { getPopularMovies } from "./MovieList/getData";
import {
  startFetch,
  setMovieSuccess,
  setMovieError,
  setMovies,
  setMovieDetails,
  fetchMovieDetails,
  fetchSearchResults,
  fetchPopularMovies,
} from "./moviesSlice";
import { setCreditsStart, setCredits, setCreditsError } from "../creditsSlice";
import { getCredits } from "./MoviePage/getCredits";
import { getMovieDetails } from "./MoviePage/getData";
import { getGenres } from "./getGenres";
import { setGenres, setGenresError } from "./genresSlice";
import { getSearchResults } from "../getSearchResultsData";

function* fetchPopularMoviesHandler({ payload: page }) {
  try {
    yield put(startFetch());
    const { results, total_results } = yield call(getPopularMovies, page);
    yield put(setMovies({ page, results, total_pages: 500, total_results }));

    try {
      const { genres } = yield call(getGenres);
      yield put(setGenres(genres));
    } catch (error) {
      yield put(
        setGenresError(`Error fetching movie genres: ${error.message}`)
      );
    }

    yield delay(500);
    yield put(setMovieSuccess());
  } catch (error) {
    yield delay(800);
    yield put(setMovieError(`Error fetching popular movies: ${error.message}`));
  }
}

function* fetchMovieDetailsHandler({ payload: movieId }) {
  try {
    yield put(startFetch());
    const movieDetails = yield call(getMovieDetails, movieId);

    yield put(setMovieDetails(movieDetails));

    try {
      const { genres } = yield call(getGenres);
      yield put(setGenres(genres));
    } catch (error) {
      yield put(
        setGenresError(`Error fetching movie genres: ${error.message}`)
      );
    }

    yield put(setCreditsStart());
    try {
      const creditsData = yield call(getCredits, movieId);
      yield put(setCredits(creditsData));
    } catch (error) {
      yield put(
        setCreditsError(`Error fetching movie credits: ${error.message}`)
      );
    }

    yield delay(500);
    yield put(setMovieSuccess());
  } catch (error) {
    yield delay(800);
    yield put(setMovieError(`Error fetching movie details: ${error.message}`));
  }
}

function* fetchSearchResultsHandler({
  payload: { page, searchQuery, searchType },
}) {
  try {
    const { results, total_pages, total_results } = yield call(
      getSearchResults,
      page,
      searchQuery,
      searchType
    );
    yield put(setMovies({ page, results, total_pages, total_results }));

    try {
      const { genres } = yield call(getGenres);
      yield put(setGenres(genres));
    } catch (error) {
      yield put(
        setGenresError(`Error fetching movie genres: ${error.message}`)
      );
    }

    yield delay(800);
    yield put(setMovieSuccess());
  } catch (error) {
    console.error("Error fetching movie search results or genres:", error);
    yield put(
      setMovieError(`Error fetching movie search results: ${error.message}`)
    );
  }
}

export function* moviesSaga() {
  yield takeLatest(fetchPopularMovies.type, fetchPopularMoviesHandler);
  yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
  yield debounce(500, fetchSearchResults.type, fetchSearchResultsHandler);
}

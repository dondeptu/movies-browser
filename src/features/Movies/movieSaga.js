import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { fetchPopularMovies } from "./MovieList/fetchData";
import {
  startFetch,
  fetchMovieSuccess,
  fetchMovieError,
  fetchMovies,
  setMovieDetails,
  fetchMovieDetails,
} from "./movieSlice";
import { selectCurrentPage } from "../../common/Pagination/paginationSlice";
import { getMovieDetails } from "./MoviePage/getData";

function* fetchMoviesData() {
  try {
    const page = yield select(selectCurrentPage);
    const { results } = yield call(fetchPopularMovies, page);
    yield put(
      fetchMovies({ results, total_pages: 500, total_results: results.length })
    );
    yield delay(1000);
    yield put(fetchMovieSuccess());
  } catch (error) {
    yield put(fetchMovieError(`Error fetching movies: ${error.message}`));
  }
}

function* fetchMovieDetailsHandler({ payload: movieId }) {
  try {
    yield put(setMovieDetails(null));
    yield put(startFetch());
    const movieDetails = yield call(getMovieDetails, movieId);
    yield delay(1000);
    yield put(setMovieDetails(movieDetails));
    yield put(fetchMovieSuccess());
  } catch (error) {
    yield put(fetchMovieError(`Error fetching movie details: ${error.message}`))
  }
}

export function* movieSaga() {
  yield takeLatest(startFetch, fetchMoviesData);
  yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
}

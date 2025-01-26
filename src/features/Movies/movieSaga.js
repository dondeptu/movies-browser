import { call, delay, put, takeEvery, select } from "redux-saga/effects";
import { fetchPopularMovies } from "./MovieList/fetchData";
import {
  startFetch,
  fetchMovieSuccess,
  fetchMovieError,
  fetchMovies,
} from "./movieSlice";
import { selectCurrentPage } from "../../common/Pagination/paginationSlice";

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

export function* movieSaga() {
  yield takeEvery(startFetch, fetchMoviesData);
}

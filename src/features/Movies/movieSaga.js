import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { fetchPopularMovies } from "./MovieList/fetchData";
import {
  startFetch,
  fetchMovieSuccess,
  fetchMovieError,
  fetchMovies,
  setMovieDetails,
  fetchMovieDetails,
  fetchCast,
  fetchCrew,
} from "./movieSlice";
import { getCast } from "./MoviePage/getCast";
import { getCrew } from "./MoviePage/getCrew";
import { selectCurrentPage } from "../../common/Pagination/paginationSlice";
import { getMovieDetails } from "./MoviePage/getData";
import { getGenres } from "./getGenres";
import { setGenres } from "./genresSlice";

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
    yield delay(1000);
    const cast = yield call(getCast, movieId);
    const crew = yield call(getCrew, movieId);
    yield put(fetchCast(cast));
    yield put(fetchCrew(crew));
    yield put(fetchMovieSuccess());
  } catch (error) {
    yield delay(800);
    yield put(
      fetchMovieError(`Error fetching movie details: ${error.message}`)
    );
  }
}

export function* movieSaga() {
  yield takeLatest(startFetch, fetchMoviesData);
  yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
}

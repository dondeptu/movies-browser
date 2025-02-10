import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getPopularPeople } from "./PeopleList/getPeopleData";
import {
  startFetch,
  setPeople,
  setPeopleSuccess,
  setPeopleError,
  fetchPopularPeople,
  setPeopleDetails,
  fetchPeopleDetails,
  fetchSearchPeopleResults,
} from "../People/peopleSlice";
import { getPeopleDetails } from "./PeoplePage/getPeopleDetails";
import { getSearchResults } from "../getSearchResultsData";
import { setCast, setCastError, setCastStart, setCrew, setCrewError, setCrewStart } from "../Movies/MoviePage/creditsSlice";
import { setGenres, setGenresError } from "../Movies/genresSlice";
import { getGenres } from "../Movies/getGenres";
import { getMovieCredits } from "./PeoplePage/getMovieCredits";

function* fetchPopularPeopleHandler({ payload: page }) {
  try {
    yield put(startFetch());
    const { results, total_results } = yield call(getPopularPeople, page);
    yield put(setPeople({ page, results, total_pages: 500, total_results }));

    yield delay(500);
    yield put(setPeopleSuccess());
  } catch (error) {
    yield delay(800);
    yield put(setPeopleError(`Error fetching people: ${error.message}`));
  }
}

function* fetchPeopleDetailsHandler({ payload: peopleId }) {
  try {
    yield put(startFetch());
    const peopleDetails = yield call(getPeopleDetails, peopleId);
    yield put(setPeopleDetails(peopleDetails));

    try {
      const { genres } = yield call(getGenres);
      yield put(setGenres(genres));
    } catch (error) {
      yield put(setGenresError(`Error fetching genres: ${error.message}`));
    }

    yield put(setCastStart());
    try {
      const cast = yield call(getMovieCredits, peopleId);
      yield put(setCast(cast));
    } catch (error) {
      yield put(setCastError(`Error fetching cast: ${error.message}`));
    }

    yield put(setCrewStart());
    try {
      const crew = yield call(getMovieCredits, peopleId);
      yield put(setCrew(crew));
    } catch (error) {
      yield put(setCrewError(`Error fetching crew: ${error.message}`));
    }

    yield delay(500);
    yield put(setPeopleSuccess());
  } catch (error) {
    yield delay(800);
    yield put(
      setPeopleError(`Error fetching people details: ${error.message}`)
    );
  }
}

function* fetchSearchPeopleResultsHandler({
  payload: { page, searchQuery, searchType },
}) {
  try {
    yield put(startFetch());
    const { results, total_pages, total_results } = yield call(
      getSearchResults,
      page,
      searchQuery,
      searchType
    );
    yield put(setPeople({ page, results, total_pages, total_results }));

    yield delay(800);
    yield put(setPeopleSuccess());
  } catch (error) {
    console.error("Error fetching people search results: ", error);
    yield put(
      setPeopleError(`Error fetching people search results: ${error.message}`)
    );
  }
}

export function* peopleSaga() {
  yield takeLatest(fetchPopularPeople.type, fetchPopularPeopleHandler);
  yield takeLatest(fetchPeopleDetails.type, fetchPeopleDetailsHandler);
  yield takeLatest(
    fetchSearchPeopleResults.type,
    fetchSearchPeopleResultsHandler
  );
}

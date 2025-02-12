import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getPopularPeople } from "./PeopleList/getPeopleData";
import {
  startFetch,
  setPeople,
  setPeopleSuccess,
  setPeopleError,
  fetchPopularPeople,
  setPersonDetails,
  fetchPersonDetails,
  fetchSearchPeopleResults,
} from "./peopleSlice";
import { getPersonDetails } from "./PersonPage/getPersonDetails";
import { getSearchResults } from "../getSearchResultsData";
import {
  setCast,
  setCastError,
  setCastStart,
  setCrew,
  setCrewError,
  setCrewStart,
} from "../creditsSlice";
import { setGenres, setGenresError } from "../movies/genresSlice";
import { getGenres } from "../movies/getGenres";
import { getPersonCredits } from "./PersonPage/getPersonCredits";

function* fetchPopularPeopleHandler({ payload: page }) {
  try {
    yield put(startFetch());
    const { results, total_results } = yield call(getPopularPeople, page);
    yield put(setPeople({ page, results, total_pages: 500, total_results }));

    yield delay(500);
    yield put(setPeopleSuccess());
  } catch (error) {
    yield delay(800);
    yield put(setPeopleError(`Error fetching popular people: ${error.message}`));
  }
}

function* fetchPersonDetailsHandler({ payload: personId }) {
  try {
    yield put(startFetch());
    const personDetails = yield call(getPersonDetails, personId);
    yield put(setPersonDetails(personDetails));

    try {
      const { genres } = yield call(getGenres);
      yield put(setGenres(genres));
    } catch (error) {
      yield put(setGenresError(`Error fetching movie genres: ${error.message}`));
    }

    yield put(setCastStart());
    try {
      const cast = yield call(getPersonCredits, personId);
      yield put(setCast(cast));
    } catch (error) {
      yield put(setCastError(`Error fetching movie cast: ${error.message}`));
    }

    yield put(setCrewStart());
    try {
      const crew = yield call(getPersonCredits, personId);
      yield put(setCrew(crew));
    } catch (error) {
      yield put(setCrewError(`Error fetching movie crew: ${error.message}`));
    }

    yield delay(500);
    yield put(setPeopleSuccess());
  } catch (error) {
    yield delay(800);
    yield put(
      setPeopleError(`Error fetching person details: ${error.message}`)
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
  yield takeLatest(fetchPersonDetails.type, fetchPersonDetailsHandler);
  yield takeLatest(
    fetchSearchPeopleResults.type,
    fetchSearchPeopleResultsHandler
  );
}

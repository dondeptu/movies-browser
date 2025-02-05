import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getPopularPeople } from "./getData";
import {
  startFetch,
  setPeople,
  setPeopleSuccess,
  setPeopleError,
  fetchPopularPeople,
  setPeopleDetails,
  fetchPeopleDetails,
  fetchSearchPeopleResults
} from "../People/peopleSlice";
import { getPeopleDetails } from "./PeoplePage/getPeopleData";
import { getSearchResults } from "../getSearchResultsData";

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

    yield delay(500);
    yield put(setPeopleSuccess());
  } catch (error) {
    yield delay(800);
    yield put(
      setPeopleError(`Error fetching people details: ${error.message}`)
    );
  }
}

function* fetchSearchPeopleResultsHandler({ payload: { page, searchQuery, searchType } }) {
  try {
    yield put(startFetch());
    const { results, total_pages, total_results } = yield call(getSearchResults, page, searchQuery, searchType);
    yield put(setPeople({ page, results, total_pages, total_results }));

    yield delay(800);
    yield put(setPeopleSuccess());
  } catch (error) {
    console.error("Error fetching people search results: ", error);
    yield put(setPeopleError(`Error fetching people search results: ${error.message}`))
  }
}

export function* peopleSaga() {
  yield takeLatest(fetchPopularPeople.type, fetchPopularPeopleHandler);
  yield takeLatest(fetchPeopleDetails.type, fetchPeopleDetailsHandler);
  yield takeLatest(fetchSearchPeopleResults.type, fetchSearchPeopleResultsHandler);
}

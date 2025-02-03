import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getPopularPeople } from "./getData";
import {
  startFetch,
  setPeople,
  setPeopleSuccess,
  setPeopleError,
  fetchPopularPeople,
  setPeopleDetails,
  fetchPeopleDetails
} from "../People/peopleSlice";
import { getPeopleDetails } from "./PeoplePage/getPeopleData";

function* fetchPopularPeopleHandler({ payload: page }) {
  try {
    yield put(startFetch());
    const { results, total_pages, total_results } = yield call(getPopularPeople, page);
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

export function* peopleSaga() {
  yield takeLatest(fetchPopularPeople.type, fetchPopularPeopleHandler);
  yield takeLatest(fetchPeopleDetails.type, fetchPeopleDetailsHandler);
}

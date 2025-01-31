import { call, delay, put, takeLatest, select } from "redux-saga/effects";
import { fetchPopularPeople } from "./PeopleList/fetchPeopleData";
import {
  startFetch,
  fetchPeople,
  fetchPeopleError,
  fetchPeopleSuccess,
  fetchPeopleDetails,
  setPeopleDetails,
} from "./peopleSlice";
import { selectCurrentPage } from "../../common/Pagination/paginationSlice";
import { getPeopleDetails } from "./PeoplePage/getPeopleData";

function* fetchPeopleData() {
  try {
    yield delay(800);
    const page = yield select(selectCurrentPage);
    const { results } = yield call(fetchPopularPeople, page);
    yield put(
      fetchPeople({ results, total_pages: 500, total_results: results.length })
    );
    yield delay(800);
    yield put(fetchPeopleSuccess());
  } catch (error) {
    yield delay(800);
    yield put(fetchPeopleError(`Error fetching people: ${error.message}`));
  }
}

function* fetchPeopleDetailsHandler({ payload: peopleId }) {
  try {
    yield put(startFetch());
    yield delay(800);
    const peopleDetails = yield call(getPeopleDetails, peopleId);
    yield put(setPeopleDetails(peopleDetails));
    yield put(fetchPeopleSuccess());
  } catch (error) {
    yield delay(800);
    yield put(
      fetchPeopleError(`Error fetching people details: ${error.message}`)
    );
  }
}

export function* peopleSaga() {
  yield takeLatest(startFetch, fetchPeopleData);
  yield takeLatest(fetchPeopleDetails.type, fetchPeopleDetailsHandler);
}

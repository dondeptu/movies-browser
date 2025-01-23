import { call, delay, put, takeEvery, select } from "redux-saga/effects";
import { fetchPopularPeople } from "./fetchPeopleData";
import {
  startFetch,
  fetchPeople,
  fetchPeopleError,
  fetchPeopleSuccess,
} from "./peopleSlice";
import { selectCurrentPage } from "../../common/Pagination/paginationSlice";

function* fetchPeopleData() {
  try {
    const page = yield select(selectCurrentPage);
    const { results, total_pages, total_results } = yield call(
      fetchPopularPeople,
      page
    );
    yield put(fetchPeople({ results, total_pages, total_results }));
    yield delay(1000);
    yield put(fetchPeopleSuccess());
  } catch (error) {
    yield put(fetchPeopleError(`Error fetching people: ${error.message}`));
  }
}

export function* peopleSaga() {
  yield takeEvery(startFetch, fetchPeopleData);
}

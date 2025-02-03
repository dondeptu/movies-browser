import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getPopularPeople } from "./getData";
import { startFetch, setPeople, setPeopleSuccess, setPeopleError, fetchPopularPeople } from "../People/peopleSlice";

function* fetchPopularPeopleHandler({ payload: page }) {
  try {
    yield put(startFetch());
    const { results, total_pages, total_results } = yield call(getPopularPeople, page);
    yield put(setPeople({ page, results, total_pages: 500, total_results }));

    yield delay(500);
    yield put(setPeopleSuccess());
  } catch (error) {
    yield put(setPeopleError(`Error fetching people: ${error.message}`));
  }
}

export function* peopleSaga() {
  yield takeLatest(fetchPopularPeople.type, fetchPopularPeopleHandler);
}

import { all } from "redux-saga/effects";
import { movieSaga } from "./features/Movies/movieSaga";
import { peopleSaga } from "./features/People/peopleSaga";

export default function* saga() {
  yield all([
    movieSaga(),
    peopleSaga()
  ]);
}

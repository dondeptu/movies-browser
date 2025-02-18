import { all } from "redux-saga/effects";
import { movieSaga } from "./features/movies/movieSaga";
import { peopleSaga } from "./features/people/peopleSaga";

export default function* saga() {
  yield all([
    movieSaga(),
    peopleSaga()
  ]);
}

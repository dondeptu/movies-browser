import { all } from "redux-saga/effects";
import { moviesSaga } from "./features/movies/moviesSaga";
import { peopleSaga } from "./features/people/peopleSaga";

export default function* saga() {
  yield all([
    moviesSaga(),
    peopleSaga()
  ]);
}

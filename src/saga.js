import { all } from "redux-saga/effects";
import { movieSaga } from "./features/Movies/movieSaga";

export default function* saga() {
  yield all([movieSaga()]);
}

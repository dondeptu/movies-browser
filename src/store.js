import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "./common/Pagination/paginationSlice";
import movieSlice from "./features/Movies/movieSlice";
import peopleSlice from "./features/People/peopleSlice";
import createSagaMiddleware from "redux-saga";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    pagination: paginationReducer,
    movies: movieSlice,
    people: peopleSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(saga);

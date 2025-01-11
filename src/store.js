import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "./components/Pagination/paginationSlice";

export const store = configureStore({
  reducer: {
    pagination: paginationReducer,
  },
});

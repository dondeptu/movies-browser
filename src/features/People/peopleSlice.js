import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: {
      results: [],
      total_results: 0,
      total_pages: 0,
    },
    loading: false,
    error: null,
  },
  reducers: {
    startFetch: (state) => {
      state.loading = true;
    },
    fetchPeople: (state, { payload: popularPeople }) => {
      state.people.results = popularPeople.results;
      state.people.total_pages = 500;
      state.people.total_results = popularPeople.total_results;
      state.loading = false;
    },
    fetchPeopleSuccess: (state) => {
      state.loading = false;
    },
    fetchPeopleError: (state, { payload: errorMessage }) => {
      state.loading = false;
      state.error = errorMessage;
    },
  },
});

export const selectPeopleState = (state) => state.people;
export const selectPeople = (state) => selectPeopleState(state).people;
export const selectLoading = (state) => selectPeopleState(state).loading;
export const selectError = (state) => selectPeopleState(state).error;

export const { startFetch, fetchPeople, fetchPeopleSuccess, fetchPeopleError } =
  peopleSlice.actions;

export default peopleSlice.reducer;

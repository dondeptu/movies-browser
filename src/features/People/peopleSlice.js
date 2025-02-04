import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: {
      page: 1,
      results: [],
      total_results: 0,
    },
    peopleDetails: null,
    loading: false,
    error: null,
  },
  reducers: {
    startFetch: (state) => {
      state.loading = true;
      state.peopleDetails = null;
    },
    setPeople: (state, { payload: popularPeople }) => {
      state.people.page = popularPeople.page;
      state.people.results = popularPeople.results;
      state.people.total_pages = popularPeople.total_pages;
      state.people.total_results = popularPeople.total_results;
    },
    setPeopleSuccess: (state) => {
      state.loading = false;
    },
    setPeopleError: (state, { payload: errorMessage }) => {
      state.loading = false;
      state.error = errorMessage;
    },
    setPeopleDetails: (state, { payload: peopleDetails }) => {
      state.peopleDetails = peopleDetails;
    },
    fetchPopularPeople: () => { },
    fetchPeopleDetails: () => { },
    fetchSearchPeopleResults: () => { },
  },
});

export const selectPeopleState = (state) => state.people;

export const selectPeople = (state) => selectPeopleState(state).people;
export const selectTotalPages = (state) => selectPeople(state).total_pages;
export const selectTotalResults = (state) => selectPeople(state).total_results;

export const selectPeopleDetails = (state) => selectPeopleState(state).peopleDetails;

export const {
  startFetch,
  setPeople,
  setPeopleSuccess,
  setPeopleError,
  fetchPopularPeople,
  setPeopleDetails,
  fetchPeopleDetails,
  fetchSearchPeopleResults
} = peopleSlice.actions;

export default peopleSlice.reducer;

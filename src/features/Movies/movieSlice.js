import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: {
      results: [],
      total_results: 0,
    },
    loading: false,
    error: null,
    id: "",
  },
  reducers: {
    startFetch: (state) => {
      state.loading = true;
    },
    setId: (state, { payload: id }) => {
      state.id = id;
      state.loading = true;
    },
    fetchMovies: (state, { payload: popularMovies }) => {
      state.movies.results = popularMovies.results;
      state.movies.total_pages = 500;
      state.movies.total_results = popularMovies.total_results;
      state.loading = false;
    },
    fetchMovieSuccess: (state) => {
      state.loading = false;
    },

    fetchMovieError: (state, { payload: errorMessage }) => {
      state.loading = false;
      state.error = errorMessage;
    },
  },
});

export const selectMoviesState = (state) => state.movies;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectLoading = (state) => selectMoviesState(state).loading;
export const selectError = (state) => selectMoviesState(state).error;

export const { fetchMovies, startFetch, fetchMovieSuccess, fetchMovieError } =
  movieSlice.actions;

export default movieSlice.reducer;

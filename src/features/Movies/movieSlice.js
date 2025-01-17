import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: {
      results: [],
      total_pages: 0,
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
      console.log("Updating state with popularMovies:", popularMovies);
      state.movies.results = popularMovies.results;
      state.movies.total_pages = popularMovies.total_pages;
      state.movies.total_results = popularMovies.total_results;
      state.loading = false;
      state.totalPages = popularMovies.total_pages;
    },
    fetchMovieSuccess: (state) => {
      state.loading = false;
    },

    fetchMovieError: (state, { payload: errorMessage }) => {
      state.loading = false;
      state.error = errorMessage;
    },
    setTotalPages: (state, { payload }) => {
      state.movies.total_pages = payload;
    },
  },
});

export const selectMoviesState = (state) => state.movies;
export const selectMovies = (state) => state.movies.movies;
export const selectLoading = (state) => state.movies.loading;
export const selectError = (state) => state.movies.error;

export const {
  fetchMovies,
  setTotalPages,
  startFetch,
  fetchMovieSuccess,
  fetchMovieError,
} = movieSlice.actions;

export default movieSlice.reducer;

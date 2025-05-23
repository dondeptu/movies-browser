import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: {
      page: 1,
      results: [],
      total_pages: 0,
      total_results: 0,
    },
    movieDetails: null,
    loading: true,
    error: null,
  },
  reducers: {
    startFetch: (state) => {
      state.loading = true;
      state.movieDetails = null;
    },
    setMovies: (state, { payload: popularMovies }) => {
      state.movies.page = popularMovies.page;
      state.movies.results = popularMovies.results;
      state.movies.total_pages = popularMovies.total_pages;
      state.movies.total_results = popularMovies.total_results;
    },
    setMovieSuccess: (state) => {
      state.loading = false;
    },

    setMovieError: (state, { payload: errorMessage }) => {
      state.loading = false;
      state.error = errorMessage;
    },
    setMovieDetails: (state, { payload: movieDetails }) => {
      state.movieDetails = movieDetails;
    },
    fetchPopularMovies: () => { },
    fetchMovieDetails: () => { },
    fetchSearchResults: (state) => {
      state.loading = true;
    },
  },
});

export const selectMoviesState = (state) => state.movies;

export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectMovieDetails = (state) =>
  selectMoviesState(state).movieDetails;
export const selectTotalPages = (state) => selectMovies(state).total_pages;
export const selectTotalResults = (state) => selectMovies(state).total_results;

export const {
  setMovies,
  startFetch,
  setMovieSuccess,
  setMovieError,
  setMovieDetails,
  fetchPopularMovies,
  fetchMovieDetails,
  fetchSearchResults,
} = moviesSlice.actions;

export default moviesSlice.reducer;

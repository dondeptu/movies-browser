import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: {
      results: [],
      total_results: 0,
    },
    movieDetails: {},
    loading: false,
    error: null,
  },
  reducers: {
    startFetch: (state) => {
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
    setMovieDetails: (state, { payload: movieDetails }) => {
      state.movieDetails = movieDetails;
    },
    fetchMovieDetails: () => { },
  },
});

export const selectMoviesState = (state) => state.movies;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectLoading = (state) => selectMoviesState(state).loading;
export const selectError = (state) => selectMoviesState(state).error;
export const selectMovieDetails = (state) => selectMoviesState(state).movieDetails;

export const { fetchMovies, startFetch, fetchMovieSuccess, fetchMovieError, setMovieDetails, fetchMovieDetails } =
  movieSlice.actions;

export default movieSlice.reducer;

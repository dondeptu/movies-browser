import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: {
      results: [],
      total_results: 0,
    },
    movieDetails: null,
    cast: [],
    crew: [],
    loading: false,
    error: null,
  },
  reducers: {
    startFetch: (state) => {
      state.loading = true;
      state.movieDetails = null;
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
    fetchMovieDetails: () => {},
    setCast: (state, { payload }) => {
      const { cast } = payload;
      state.cast = cast;
    },

    setCrew: (state, { payload }) => {
      const { crew } = payload;
      state.crew = crew;
    },
  },
});

export const selectMoviesState = (state) => state.movies;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectLoading = (state) => selectMoviesState(state).loading;
export const selectError = (state) => selectMoviesState(state).error;
export const selectMovieDetails = (state) =>
  selectMoviesState(state).movieDetails;
export const selectCast = (state) => selectMoviesState(state).cast;
export const selectCrew = (state) => selectMoviesState(state).crew;

export const {
  fetchMovies,
  startFetch,
  fetchMovieSuccess,
  fetchMovieError,
  setMovieDetails,
  fetchMovieDetails,
  setCast,
  setCrew,
} = movieSlice.actions;

export default movieSlice.reducer;

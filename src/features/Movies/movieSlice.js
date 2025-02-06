import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: {
      page: 1,
      results: [],
      total_pages: 0,
      total_results: 0,
    },
    movieDetails: null,
    cast: [],
    crew: [],
    loading: true,
    error: null,
    castLoading: false,
    crewLoading: false,
    castError: null,
    crewError: null,
  },
  reducers: {
    startFetch: (state) => {
      state.loading = true;
      state.movieDetails = null;
      state.castError = null;
      state.crewError = null;
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
    setCastStart: (state) => {
      state.castLoading = true;
      state.castError = null;
    },
    setCast: (state, { payload }) => {
      state.castLoading = false;
      const { cast } = payload;
      state.cast = cast;
    },
    setCastError: (state, { payload: error }) => {
      state.castLoading = false;
      state.castError = error;
    },
    setCrewStart: (state) => {
      state.crewLoading = true;
      state.crewError = null;
    },
    setCrew: (state, { payload }) => {
      state.crewLoading = false;
      const { crew } = payload;
      state.crew = crew;
    },
    setCrewError: (state, { payload: error }) => {
      state.crewLoading = false;
      state.crewError = error;
    },
    fetchPopularMovies: () => {},
    fetchMovieDetails: () => {},
    fetchSearchResults: () => {},
  },
});

export const selectMoviesState = (state) => state.movies;

export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectMovieDetails = (state) =>
  selectMoviesState(state).movieDetails;
export const selectTotalPages = (state) => selectMovies(state).total_pages;
export const selectTotalResults = (state) => selectMovies(state).total_results;

export const selectCast = (state) => selectMoviesState(state).cast;
export const selectCrew = (state) => selectMoviesState(state).crew;
export const selectCastLoading = (state) =>
  selectMoviesState(state).castLoading;
export const selectCrewLoading = (state) =>
  selectMoviesState(state).crewLoading;
export const selectCastError = (state) => selectMoviesState(state).castError;
export const selectCrewError = (state) => selectMoviesState(state).crewError;

export const {
  setMovies,
  startFetch,
  setMovieSuccess,
  setMovieError,
  setMovieDetails,
  fetchPopularMovies,
  fetchMovieDetails,
  fetchSearchResults,
  setCastStart,
  setCrewStart,
  setCast,
  setCrew,
  setCastError,
  setCrewError,
} = movieSlice.actions;

export default movieSlice.reducer;

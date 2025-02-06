import { createSlice } from "@reduxjs/toolkit";

const genresSlice = createSlice({
  name: "genres",
  initialState: {
    genres: [],
    error: null,
  },
  reducers: {
    setGenres: (state, { payload: genres }) => {
      state.genres = genres;
      state.error = null;
    },

    setGenresError: (state, { payload: error }) => {
      state.error = error;
    },
  },
});

export const selectGenres = (state) => state.genres.genres;
export const selectGenresError = (state) => state.genres.error;

export const { setGenres, setGenresError } = genresSlice.actions;

export default genresSlice.reducer;

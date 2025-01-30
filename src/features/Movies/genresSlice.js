import { createSlice } from "@reduxjs/toolkit";

const genresSlice = createSlice({
  name: "genres",
  initialState: {
    genres: [],
  },
  reducers: {
    setGenres: (state, { payload: genres }) => {
      state.genres = genres;
    },
  },
});

export const selectGenres = (state) => state.genres.genres;

export const { setGenres } = genresSlice.actions;

export default genresSlice.reducer;

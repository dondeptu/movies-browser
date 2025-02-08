import { createSlice } from "@reduxjs/toolkit";

const creditsSlice = createSlice({
  name: "credits",
  initialState: {
    cast: [],
    crew: [],
    castLoading: false,
    crewLoading: false,
    castError: null,
    crewError: null,
  },

  reducers: {
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
  },
});

export const selectCreditsState = (state) => state.credits;
export const selectCast = (state) => selectCreditsState(state).cast;
export const selectCrew = (state) => selectCreditsState(state).crew;
export const selectCastLoading = (state) =>
  selectCreditsState(state).castLoading;
export const selectCrewLoading = (state) =>
  selectCreditsState(state).crewLoading;
export const selectCastError = (state) => selectCreditsState(state).castError;
export const selectCrewError = (state) => selectCreditsState(state).crewError;

export const {
  setCastStart,
  setCrewStart,
  setCast,
  setCrew,
  setCastError,
  setCrewError,
} = creditsSlice.actions;

export default creditsSlice.reducer;

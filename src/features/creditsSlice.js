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
    setCreditsStart: (state) => {
      state.castLoading = true;
      state.crewLoading = true;
      state.castError = null;
      state.crewError = null;
    },
    setCredits: (state, { payload }) => {
      state.castLoading = false;
      state.crewLoading = false;
      state.cast = payload.cast;
      state.crew = payload.crew;
    },
    setCreditsError: (state, { payload: error }) => {
      state.castLoading = false;
      state.crewLoading = false;
      state.castError = error;
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

export const { setCreditsStart, setCredits, setCreditsError } =
  creditsSlice.actions;

export default creditsSlice.reducer;

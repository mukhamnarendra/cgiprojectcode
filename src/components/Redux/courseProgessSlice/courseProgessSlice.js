// src/features/courseProgress/courseProgressSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  progresses: [],
  selectedProgress: null,
  loading: false,
  error: null,
};

const courseProgressSlice = createSlice({
  name: "courseProgress",
  initialState,
  reducers: {
    setProgresses: (state, action) => {
      state.progresses = action.payload;
      state.loading = false;
    },
    setSelectedProgress: (state, action) => {
      state.selectedProgress = action.payload;
    },
    addProgress: (state, action) => {
      state.progresses.push(action.payload);
    },
    updateProgress: (state, action) => {
      const index = state.progresses.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) state.progresses[index] = action.payload;
    },
    removeProgress: (state, action) => {
      state.progresses = state.progresses.filter((p) => p.id !== action.payload);
    },
    setProgressLoading: (state) => {
      state.loading = true;
    },
    setProgressError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  setProgresses,
  setSelectedProgress,
  addProgress,
  updateProgress,
  removeProgress,
  setProgressLoading,
  setProgressError,
} = courseProgressSlice.actions;

export default courseProgressSlice.reducer;

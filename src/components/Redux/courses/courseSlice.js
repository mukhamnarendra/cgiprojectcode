// src/features/course/courseSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
  loading: false,
  error: null,
  selectedCourse: null,
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
      state.loading = false;
    },
    setSelectedCourse: (state, action) => {
      state.selectedCourse = action.payload;
    },
    addCourse: (state, action) => {
      state.courses.push(action.payload);
    },
    updateCourse: (state, action) => {
      const index = state.courses.findIndex((c) => c.id === action.payload.id);
      if (index !== -1) state.courses[index] = action.payload;
    },
    removeCourse: (state, action) => {
      state.courses = state.courses.filter((c) => c.id !== action.payload);
    },
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  setCourses,
  setSelectedCourse,
  addCourse,
  updateCourse,
  removeCourse,
  setLoading,
  setError,
} = courseSlice.actions;

export default courseSlice.reducer;

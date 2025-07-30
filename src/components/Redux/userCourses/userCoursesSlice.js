// src/components/Redux/userCourses/userCoursesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userCourses: [],
  loading: false,
  error: null,
};

const userCoursesSlice = createSlice({
  name: "userCourses",
  initialState,
  reducers: {
    setUserCourses(state, action) {
      state.userCourses = action.payload;
    },
    addUserCourse(state, action) {
      state.userCourses.push(action.payload);
    },
    removeUserCourse(state, action) {
      state.userCourses = state.userCourses.filter(
        (course) => course.id !== action.payload
      );
    },
    updateUserCourse(state, action) {
      const index = state.userCourses.findIndex(
        (course) => course.id === action.payload.id
      );
      if (index !== -1) {
        state.userCourses[index] = action.payload;
      }
    },
    // ✅ New: Handles both add and update
    addOrUpdateUserCourse(state, action) {
      const index = state.userCourses.findIndex(
        (course) => course.id === action.payload.id
      );
      if (index !== -1) {
        state.userCourses[index] = action.payload; // Update
      } else {
        state.userCourses.push(action.payload); // Add
      }
    },
    setCoursesLoading(state) {
      state.loading = true;
      state.error = null;
    },
    setCoursesError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    setCoursesLoadingFalse(state) {
      state.loading = false;
    },
    logout(state) {
      state.userCourses = [];
      localStorage.removeItem("userCourses");
    },
  },
});

export const {
  setUserCourses,
  addUserCourse,
  removeUserCourse,
  updateUserCourse,
  addOrUpdateUserCourse, // Export this
  setCoursesLoading,
  setCoursesError,
  setCoursesLoadingFalse,
} = userCoursesSlice.actions;

export default userCoursesSlice.reducer;

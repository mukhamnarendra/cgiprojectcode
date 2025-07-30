// src/features/course/courseActions.js
import {
  setCourses,
  setLoading,
  setError,
  addCourse,
  updateCourse,
  removeCourse,
  setSelectedCourse,
} from "./courseSlice";

import {
  fetchCoursesAPI,
  fetchCourseByIdAPI,
  createCourseAPI,
  updateCourseAPI,
  deleteCourseAPI,
} from "./courseAPI";

// GET all
export const fetchCourses = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const data = await fetchCoursesAPI();
    dispatch(setCourses(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

// GET by ID
export const fetchCourseById = (id) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const data = await fetchCourseByIdAPI(id);
    dispatch(setSelectedCourse(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

// CREATE
export const createCourse = (courseData) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const data = await createCourseAPI(courseData);
    dispatch(addCourse(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

// UPDATE
export const editCourse = (id, courseData) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const data = await updateCourseAPI(id, courseData);
    dispatch(updateCourse(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

// DELETE
export const deleteCourse = (id) => async (dispatch) => {
  dispatch(setLoading());
  try {
    await deleteCourseAPI(id);
    dispatch(removeCourse(id));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

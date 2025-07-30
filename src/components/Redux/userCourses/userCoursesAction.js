// src/components/Redux/userCourses/userCoursesActions.js
import {
  setUserCourses,
  addUserCourse,
  removeUserCourse,
  updateUserCourse as updateUserCourseAction,
  setCoursesLoading,
  setCoursesError,
  setCoursesLoadingFalse,
  addOrUpdateUserCourse,
} from "./userCoursesSlice";

import {
  fetchUserCourses,
  enrollCourse,
  deleteUserCourse,
  updateUserCourse,
} from "./userCoursesAPI";

// Load all courses by user ID
export const loadUserCourses = (userId) => async (dispatch) => {
  dispatch(setCoursesLoading());
  try {
    const data = await fetchUserCourses(userId);
    dispatch(setUserCourses(data));
  } catch (error) {
    dispatch(setCoursesError(error.message));
  } finally {
    dispatch(setCoursesLoadingFalse());
  }
};

// Enroll in a course
export const addCourseEnrollment = (courseData) => async (dispatch) => {
  dispatch(setCoursesLoading());
  try {
    const data = await enrollCourse(courseData);
    dispatch(addUserCourse(data));
  } catch (error) {
    dispatch(setCoursesError(error.message));
  } finally {
    dispatch(setCoursesLoadingFalse());
  }
};

// Delete a course enrollment
export const deleteEnrollment = (id) => async (dispatch) => {
  dispatch(setCoursesLoading());
  try {
    await deleteUserCourse(id);
    dispatch(removeUserCourse(id));
  } catch (error) {
    dispatch(setCoursesError(error.message));
  } finally {
    dispatch(setCoursesLoadingFalse());
  }
};

// Update a course enrollment
export const updateCourseEnrollment = (id, updatedData) => async (dispatch) => {
  dispatch(setCoursesLoading());
  try {
    const data = await updateUserCourse(id, updatedData);
    dispatch(addOrUpdateUserCourse({ ...updatedData, id }));
  } catch (error) {
    dispatch(setCoursesError(error.message));
  } finally {
    dispatch(setCoursesLoadingFalse());
  }
};


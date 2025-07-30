// src/features/courseProgress/courseProgressActions.js
import {
  setProgresses,
  setSelectedProgress,
  addProgress,
  updateProgress,
  removeProgress,
  setProgressLoading,
  setProgressError,
} from "./courseProgessSlice";

import {
  fetchProgressesAPI,
  fetchProgressByIdAPI,
  createProgressAPI,
  updateProgressAPI,
  deleteProgressAPI,
} from "./courseProgessAPI";

// GET all progresses
export const fetchProgresses = () => async (dispatch) => {
  dispatch(setProgressLoading());
  try {
    const data = await fetchProgressesAPI();
    dispatch(setProgresses(data));
  } catch (error) {
    dispatch(setProgressError(error.message));
  }
};

// GET progress by ID
export const fetchProgressById = (id) => async (dispatch) => {
  dispatch(setProgressLoading());
  try {
    const data = await fetchProgressByIdAPI(id);
    dispatch(setSelectedProgress(data));
  } catch (error) {
    dispatch(setProgressError(error.message));
  }
};

// CREATE progress
export const createProgress = (progressData) => async (dispatch) => {
  dispatch(setProgressLoading());
  try {
    const data = await createProgressAPI(progressData);
    dispatch(addProgress(data));
  } catch (error) {
    dispatch(setProgressError(error.message));
  }
};

// UPDATE progress
export const editProgress = (id, progressData) => async (dispatch) => {
  dispatch(setProgressLoading());
  try {
    const data = await updateProgressAPI(id, progressData);
    dispatch(updateProgress(data));
  } catch (error) {
    dispatch(setProgressError(error.message));
  }
};

// DELETE progress
export const deleteProgress = (id) => async (dispatch) => {
  dispatch(setProgressLoading());
  try {
    await deleteProgressAPI(id);
    dispatch(removeProgress(id));
  } catch (error) {
    dispatch(setProgressError(error.message));
  }
};

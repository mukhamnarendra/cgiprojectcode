// src/components/Redux/user/userActions.js
import {
  setUser,
  setUsers,
  addUser,
  updateUserInState,
  removeUser,
  setLoading,
  setLoadingFalse,
  setError,
} from './userSlice';

import {
  loginUser,
  registerUser,
  fetchUserData,
  createUser,
  updateUser,
  deleteUser,
} from './userAPI';

export const login = (credentials) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const data = await loginUser(credentials);
    localStorage.setItem('userInfo', JSON.stringify(data));
    dispatch(setUser(data));
  } catch (error) {
    dispatch(setError(error.response?.data?.message || error.message));
  } finally {
    dispatch(setLoadingFalse());
  }
};

export const register = (userData) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const data = await registerUser(userData);
    localStorage.setItem('userInfo', JSON.stringify(data));
    dispatch(setUser(data));
  } catch (error) {
    dispatch(setError(error.response?.data?.message || error.message));
  } finally {
    dispatch(setLoadingFalse());
  }
};

export const fetchAllUsers = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const data = await fetchUserData();
    dispatch(setUsers(data));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoadingFalse());
  }
};

export const createNewUser = (userData) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const data = await createUser(userData);
    dispatch(addUser(data));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoadingFalse());
  }
};

export const updateUserById = (id, userData) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const data = await updateUser(id, userData);
    dispatch(updateUserInState(data));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoadingFalse());
  }
};

export const deleteUserById = (id) => async (dispatch) => {
  dispatch(setLoading());
  try {
    await deleteUser(id);
    dispatch(removeUser(id));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoadingFalse());
  }
};

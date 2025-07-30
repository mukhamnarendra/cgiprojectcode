// src/components/Redux/user/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
  users: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.userInfo = action.payload;
      state.error = null;
    },
    setUsers(state, action) {
      state.users = action.payload;
    },
    addUser(state, action) {
      state.users.push(action.payload);
    },
    updateUserInState(state, action) {
      const index = state.users.findIndex(u => u.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
    removeUser(state, action) {
      state.users = state.users.filter(u => u.id !== action.payload);
    },
    logout(state) {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
    setLoading(state) {
      state.loading = true;
      state.error = null;
    },
    setError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    setLoadingFalse(state) {
      state.loading = false;
    },
  },
});

export const {
  setUser,
  setUsers,
  addUser,
  updateUserInState,
  removeUser,
  logout,
  setLoading,
  setLoadingFalse,
  setError,
} = userSlice.actions;

export default userSlice.reducer;

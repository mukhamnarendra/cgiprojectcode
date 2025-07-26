// src/components/Redux/user/userSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// ✅ Define fetchUser thunk
export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await fetch(`http://${process.env.REACT_APP_IP_ADDRESS}/api/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      localStorage.setItem('userInfo', JSON.stringify(data));
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

// ✅ Initial state
const initialState = {
  userInfo: null,
  loading: false,
  error: null,
};

// ✅ Create slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout(state) {
      state.userInfo = null;
      localStorage.removeItem('userInfo');
    },
    userRedux:(state,action)=>{
    console.log(action.payload)
    state.userInfo=action.payload
  }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
  
});

export const { logout, userRedux } = userSlice.actions;
export default userSlice.reducer;

// src/features/payment/paymentSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  payments: [],
  filteredPayments: [],
  loading: false,
  error: null,
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setPayments: (state, action) => {
      state.payments = action.payload;
      state.loading = false;
      state.error = null;
    },
     setFilteredPayments: (state, action) => {
      state.filteredPayments = action.payload;
    },
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setPayments,
  setFilteredPayments,
  setLoading,
  setError,
} = paymentSlice.actions;

export default paymentSlice.reducer;

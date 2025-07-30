// src/features/certificate/certificateSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  certificates: [],
  selectedCertificate: null,
  loading: false,
  error: null,
};

const certificateSlice = createSlice({
  name: "certificate",
  initialState,
  reducers: {
    setCertificates: (state, action) => {
      state.certificates = action.payload;
      state.loading = false;
    },
    setSelectedCertificate: (state, action) => {
      state.selectedCertificate = action.payload;
    },
    addCertificate: (state, action) => {
      state.certificates.push(action.payload);
    },
    updateCertificate: (state, action) => {
      const index = state.certificates.findIndex((c) => c.id === action.payload.id);
      if (index !== -1) state.certificates[index] = action.payload;
    },
    removeCertificate: (state, action) => {
      state.certificates = state.certificates.filter((c) => c.id !== action.payload);
    },
    setCertificateLoading: (state) => {
      state.loading = true;
    },
    setCertificateError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  setCertificates,
  setSelectedCertificate,
  addCertificate,
  updateCertificate,
  removeCertificate,
  setCertificateLoading,
  setCertificateError,
} = certificateSlice.actions;

export default certificateSlice.reducer;

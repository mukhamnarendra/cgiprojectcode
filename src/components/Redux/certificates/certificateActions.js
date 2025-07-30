// src/features/certificate/certificateActions.js
import {
  setCertificates,
  setSelectedCertificate,
  addCertificate,
  updateCertificate,
  removeCertificate,
  setCertificateLoading,
  setCertificateError,
} from "./certificateSlice";

import {
  fetchCertificatesAPI,
  fetchCertificateByIdAPI,
  createCertificateAPI,
  updateCertificateAPI,
  deleteCertificateAPI,
} from "./certificateAPI";

export const fetchCertificates = () => async (dispatch) => {
  dispatch(setCertificateLoading());
  try {
    const data = await fetchCertificatesAPI();
    dispatch(setCertificates(data));
  } catch (err) {
    dispatch(setCertificateError(err.message));
  }
};

export const fetchCertificateById = (id) => async (dispatch) => {
  dispatch(setCertificateLoading());
  try {
    const data = await fetchCertificateByIdAPI(id);
    dispatch(setSelectedCertificate(data));
  } catch (err) {
    dispatch(setCertificateError(err.message));
  }
};

export const createCertificate = (data) => async (dispatch) => {
  dispatch(setCertificateLoading());
  try {
    const res = await createCertificateAPI(data);
    dispatch(addCertificate(res));
  } catch (err) {
    dispatch(setCertificateError(err.message));
  }
};

export const editCertificate = (id, data) => async (dispatch) => {
  dispatch(setCertificateLoading());
  try {
    const res = await updateCertificateAPI(id, data);
    dispatch(updateCertificate(res));
  } catch (err) {
    dispatch(setCertificateError(err.message));
  }
};

export const deleteCertificate = (id) => async (dispatch) => {
  dispatch(setCertificateLoading());
  try {
    await deleteCertificateAPI(id);
    dispatch(removeCertificate(id));
  } catch (err) {
    dispatch(setCertificateError(err.message));
  }
};

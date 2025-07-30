// src/features/certificate/certificateAPI.js
import axios from "axios";

const API_URL = `http://${process.env.REACT_APP_IP_ADDRESS}/api/certificates`;

export const fetchCertificatesAPI = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const fetchCertificateByIdAPI = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};

export const createCertificateAPI = async (data) => {
  const res = await axios.post(API_URL, data);
  return res.data;
};

export const updateCertificateAPI = async (id, data) => {
  const res = await axios.put(`${API_URL}/${id}`, data);
  return res.data;
};

export const deleteCertificateAPI = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};

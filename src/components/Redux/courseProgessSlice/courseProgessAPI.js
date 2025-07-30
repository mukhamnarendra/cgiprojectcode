// src/features/courseProgress/courseProgressAPI.js
import axios from "axios";

const API_URL = `http://${process.env.REACT_APP_IP_ADDRESS}/api/progress`;

// GET all progresses
export const fetchProgressesAPI = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// GET progress by ID
export const fetchProgressByIdAPI = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// CREATE progress
export const createProgressAPI = async (progressData) => {
  const response = await axios.post(API_URL, progressData);
  return response.data;
};

// UPDATE progress
export const updateProgressAPI = async (id, progressData) => {
  const response = await axios.put(`${API_URL}/${id}`, progressData);
  return response.data;
};

// DELETE progress
export const deleteProgressAPI = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

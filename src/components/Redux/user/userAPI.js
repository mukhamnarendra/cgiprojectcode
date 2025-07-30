import axios from "axios";

const BASE_URL = `http://${process.env.REACT_APP_IP_ADDRESS}/api/users`;


export const fetchUserData = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const loginUser = async (credentials) => {
  const response = await axios.post(`${BASE_URL}/login`, credentials);
  return response.data;
};

export const registerUser = async (userData) => {
  const response = await axios.post(`${BASE_URL}/register`, userData);
  return response.data;
};

export const createUser = async (userData) => {
  const response = await axios.post(BASE_URL, userData);
  return response.data;
};

export const updateUser = async (id, updatedData) => {
  const response = await axios.put(`${BASE_URL}/${id}`, updatedData);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};

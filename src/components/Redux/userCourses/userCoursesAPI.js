// src/components/Redux/userCourses/userCoursesAPI.js
import axios from "axios";

const BASE_URL = `http://${process.env.REACT_APP_IP_ADDRESS}/api/user-courses`;

export const fetchUserCourses = async (userId) => {
  const response = await axios.get(`${BASE_URL}/${userId}`);
  return response.data;
};

export const enrollCourse = async (enrollmentData) => {
  const response = await axios.post(BASE_URL, enrollmentData);
  return response.data;
};

export const deleteUserCourse = async (id) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};

export const updateUserCourse = async (id, updatedData) => {
  const response = await axios.put(`${BASE_URL}/${id}`, updatedData);
  return response.data;
}

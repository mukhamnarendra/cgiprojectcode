// src/features/course/courseAPI.js
import axios from "axios";

const API_URL = `http://${process.env.REACT_APP_IP_ADDRESS}/api/courses`;

// GET all courses
export const fetchCoursesAPI = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// GET course by ID
export const fetchCourseByIdAPI = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// CREATE a course
export const createCourseAPI = async (courseData) => {
  const response = await axios.post(API_URL, courseData);
  return response.data;
};

// UPDATE a course
export const updateCourseAPI = async (id, courseData) => {
  const response = await axios.put(`${API_URL}/${id}`, courseData);
  return response.data;
};

// DELETE a course
export const deleteCourseAPI = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loadUserCourses } from "./Redux/userCourses/userCoursesAction";

const MyCoursePage = () => {
  const { courseId } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const [course, setCourse] = useState(location.state?.course || null);

useEffect(() => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  if (user?.user?.id) {
    dispatch(loadUserCourses(user.user.id));
  }
}, []);

  if (!course) {
    return (
      <div className="container py-5">
        <h3 className="text-center">Loading course details...</h3>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">🎓 Welcome to Your Course</h2>

      <div className="card p-4">
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <p><strong>Duration:</strong> {course.duration}</p>
        <hr />
        <h4>📺 Course Materials:</h4>
        <ul>
          <li><a href="#">Demo Class Video</a></li>
          <li><a href="#">Recorded Session 1</a></li>
          <li><a href="#">Download PDF Notes</a></li>
        </ul>
      </div>
    </div>
  );
};

export default MyCoursePage;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUserCourses } from "./Redux/userCourses/userCoursesAction";
import {
  Spinner,
  Container,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import {
  FaBookOpen,
  FaRupeeSign,
  FaIdBadge,
  FaCalendarAlt,
} from "react-icons/fa";
import MyCoursePage from "./MyCoursePage";

const MyCoursesDashboard = () => {
  const dispatch = useDispatch();
  const { userCourses, loading, error } = useSelector(
    (state) => state.userCourses
  );

  const user = JSON.parse(localStorage.getItem("userInfo"));
  const userId = user?.user?.id;

  useEffect(() => {
    if (userId) {
      dispatch(loadUserCourses(userId));
    }
  }, [dispatch, userId]);

  if (loading)
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="primary" />
      </div>
    );

  if (error)
    return <p className="text-danger text-center mt-4">Error: {error}</p>;

  return (
    <Container className="mt-5">
      <h2 className="text-center fw-bold mb-4">🎓 My Enrolled Courses</h2>

      {userCourses.length === 0 ? (
        <p className="text-center">You have not enrolled in any courses yet.</p>
      ) : (
        <Row className="g-4">
          {userCourses.map((course) => (
            <Col key={course.id} xs={12} sm={6} lg={4}>
              <Card className="h-100 shadow border-0">
                <Card.Body>
                  <Card.Title className="text-primary d-flex align-items-center mb-3">
                    <FaBookOpen className="me-2" />
                    Course #{course.course_id}
                  </Card.Title>

                  <Card.Text className="mb-2">
                    <FaRupeeSign className="me-2 text-success" />
                    <strong>Price:</strong> ₹{course.course_price}
                  </Card.Text>

                  <Card.Text className="mb-2">
                    <FaIdBadge className="me-2 text-warning" />
                    <strong>Enrollment ID:</strong> {course.enrollment_id}
                  </Card.Text>

                  <Card.Text className="mb-0">
                    <FaCalendarAlt className="me-2 text-info" />
                    <strong>Enrolled On:</strong>{" "}
                    {new Date(course.created_at).toLocaleString()}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
      
    </Container>
    
  );
};

export default MyCoursesDashboard;

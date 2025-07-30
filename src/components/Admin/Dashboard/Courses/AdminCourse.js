import React, { useEffect } from "react";
import { Table, Button, Card, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCourses,
  deleteCourse,
} from "../../../Redux/courses/courseAction";
import { useNavigate } from "react-router-dom";

const AdminCourses = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const courses = useSelector((state) => state.course.courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const handleEditClick = (id) => {
    navigate(`/admin/courses/edit/${id}`);
  };

  const handleDeleteClick = (id) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      dispatch(deleteCourse(id));
    }
  };

  const handleAddClick = () => {
    navigate("/admin/courses/add");
  };

  return (
    <Card className="p-4">
      <Row className="mb-3">
        <Col>
          <h3>Course List</h3>
        </Col>
        <Col className="text-end">
          <Button variant="success" onClick={handleAddClick}>
            + Add Course
          </Button>
        </Col>
      </Row>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Domain</th>
            <th>Duration</th>
            <th>price(MPR)</th>
            <th>selling price</th>
            <th>Description</th>
            <th>Actions</th>
            <th>image</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(courses) && courses.length > 0 ? (
            courses.map((course) => (
              <tr key={course.id}>
                <td>{course.id}</td>
                <td>{course.title}</td>
                <td>{course.duration}</td>
                <td>{course.price}</td>
                <td>{course.selling_price}</td>
                <td>{course.description}</td>
                <td>{course.created_at}</td>
                <td>
                  <img
                    src={course.image}
                    alt={course.title}
                    style={{
                      width: "80px",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </td>

                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    className="me-2"
                    onClick={() => handleEditClick(course.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDeleteClick(course.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center text-danger">
                No courses found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Card>
  );
};

export default AdminCourses;

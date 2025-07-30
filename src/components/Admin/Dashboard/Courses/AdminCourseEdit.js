import React, { useEffect, useState } from "react";
import { Form, Button, Card, Row, Col, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editCourse, fetchCourseById } from "../../../Redux/courses/courseAction";

const AdminCourseEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [isUpdating, setIsUpdating] = useState(false);


  const { selectedCourse, loading, error } = useSelector((state) => state.course);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: "",
    price: "",
    selling_price: "",
    is_premium: false,
    image: "",
  });

  useEffect(() => {
    dispatch(fetchCourseById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (selectedCourse) {
      setFormData({
        title: selectedCourse.title || "",
        description: selectedCourse.description || "",
        duration: selectedCourse.duration || "",
        price: selectedCourse.price || "",
        selling_price: selectedCourse.selling_price || "",
        is_premium: selectedCourse.is_premium || false,
        image: selectedCourse.image || "",
      });
    }
  }, [selectedCourse]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsUpdating(true);
  await dispatch(editCourse(id, formData));
  setIsUpdating(false);
  navigate("/admin/courses");
};


  return (
    <Card className="p-4">
      <h3>Edit Course</h3>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Duration</Form.Label>
              <Form.Control
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Selling Price</Form.Label>
              <Form.Control
                type="number"
                name="selling_price"
                value={formData.selling_price}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={12}>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                rows={3}
                value={formData.description}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3 mt-4">
              <Form.Check
                type="checkbox"
                name="is_premium"
                label="Is Premium?"
                checked={formData.is_premium}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        {error && <p className="text-danger">{error}</p>}

       <Button type="submit" variant="primary" disabled={isUpdating}>
  {isUpdating ? <Spinner animation="border" size="sm" /> : "Update Course"}
</Button>

      </Form>
    </Card>
  );
};

export default AdminCourseEdit;

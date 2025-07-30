import React, { useState } from "react";
import { Form, Button, Card, Row, Col, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCourse, createCourse } from "../../../Redux/courses/courseAction";
import { useNavigate } from "react-router-dom";

const AdminCourseAdd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: "",
    price: "",
    selling_price: "",
    is_premium: false,
    image: null,
  });

  const loading = useSelector((state) => state.course.loading);
  const error = useSelector((state) => state.course.error);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, image: files[0] });
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createCourse(formData));
    navigate("/admin/courses");
  };

  return (
    <Card className="p-4">
      <h3>Add New Course</h3>
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
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
              <Form.Label>Price (MRP)</Form.Label>
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
                rows={3}
                name="description"
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
    placeholder="https://example.com/image.jpg"
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

        <Button type="submit" variant="success" disabled={loading}>
          {loading ? <Spinner animation="border" size="sm" /> : "Add Course"}
        </Button>
      </Form>
    </Card>
  );
};

export default AdminCourseAdd;

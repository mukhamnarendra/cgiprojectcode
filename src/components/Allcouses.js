import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Container, Spinner, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Allcourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const primaryColor = 'orange';

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`http://${process.env.REACT_APP_IP_ADDRESS}/api/courses/`);
        setCourses(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const styles = {
    container: {
      padding: '40px 0',
      textAlign: 'center',
    },
    card: {
      transition: 'transform 0.3s ease',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      border: 'none',
      textAlign: 'left',
      marginBottom: '30px',
    },
    cardHover: {
      transform: 'scale(1.05)',
    },
    image: {
      height: '200px',
      objectFit: 'cover',
      borderRadius: '5px 5px 0 0',
    },
    field: {
      fontSize: '14px',
      margin: '5px 0',
    },
    button: {
      width: '100%',
      marginTop: '15px',
      backgroundColor: primaryColor,
      borderColor: primaryColor,
      color: 'white',
    },
  };

  return (
    <Container style={styles.container}>
      <div className="course-header text-start mb-4">
        <h1>All Courses</h1>
        <div style={{ width: '80px', height: '4px', backgroundColor: 'red' }} />
      </div>

      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : courses.length > 0 ? (
        <Row>
          {courses.map((course) => (
            <Col key={course.id} xs={12} md={6} lg={4}>
              <Card
                style={{
                  ...styles.card,
                  ...(hoveredCard === course.id ? styles.cardHover : {}),
                }}
                onMouseEnter={() => setHoveredCard(course.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card.Img
                  variant="top"
                  src={course.image || 'https://via.placeholder.com/400x200'}
                  alt={course.title}
                  style={styles.image}
                />
                <Card.Body>
                  <div style={styles.field}><strong>Title:</strong> {course.title}</div>
                  <div style={styles.field}><strong>Description:</strong> {course.description}</div>
                  <div style={styles.field}><strong>Duration:</strong> {course.duration}</div>
                  <div style={styles.field}><strong>Price:</strong> ₹{course.price}</div>
                  <div style={styles.field}><strong>Selling Price:</strong> ₹{course.selling_price}</div>
                  <div style={styles.field}><strong>Premium:</strong> {course.is_premium ? 'Yes' : 'No'}</div>
                  <div style={styles.field}><strong>Created At:</strong> {course.created_at}</div>
                  <Button
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => navigate('/paymentpage', { state: { course } })}
                    style={{
                      ...styles.button,
                      backgroundColor: isHovered ? '#0056b3' : primaryColor,
                      borderColor: isHovered ? '#0056b3' : primaryColor,
                    }}
                  >
                    Buy Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <div style={{ color: 'red' }}>No courses available</div>
      )}
    </Container>
  );
};

export default Allcourses;

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BgImage from '../assets/bg4.png'; // Ensure correct image path
import { Link } from 'react-router-dom';

const CarouselSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5vh 2vw',
      }}
    >
      <Container fluid>
        <Row className="justify-content-md-end justify-content-center">
          <Col
            xs={12}
            md={10}
            lg={6}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.88)',
              padding: '30px 25px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              maxWidth: '100%',
            }}
          >
            <span
              style={{
                backgroundColor: '#e6f4ea',
                color: '#0C7B1B',
                padding: '6px 18px',
                borderRadius: '20px',
                fontWeight: 'bold',
                marginBottom: '18px',
                display: 'inline-block',
                fontSize: '13px',
              }}
            >
              FREE TRIAL 30 DAYS
            </span>

            <h1
              style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#07003b',
                marginBottom: '15px',
              }}
            >
              Code Genius Innovation
            </h1>

            <p
              style={{
                fontSize: '1rem',
                marginBottom: '25px',
                color: '#333',
                lineHeight: '1.6',
              }}
            >
              High-quality programming courses and internships at affordable prices —
              accessible to everyone, especially those in need.
            </p>

            <div className="d-flex flex-wrap gap-2">
              <Button
              as={Link}
              to='loginpage'
                style={{
                  backgroundColor: '#00abd8',
                  border: 'none',
                  borderRadius: '30px',
                  padding: '10px 25px',
                  fontWeight: 'bold',
                }}
              >
                LOGIN
              </Button>
              <Button
              as={Link}
              to="registerpage"
                style={{
                  backgroundColor: '#07003b',
                  border: 'none',
                  borderRadius: '30px',
                  padding: '10px 25px',
                  fontWeight: 'bold',
                }}
              >
                REGISTER
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CarouselSection;

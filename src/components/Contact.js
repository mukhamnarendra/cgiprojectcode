import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff', padding: '40px 0' }}>
      <Container fluid>
        <Row className="g-0 shadow">
          {/* Left Form Section */}
          <Col md={4} className="bg-white p-4">
            <h3 className="mb-4 text-center fw-bold">Contact Us</h3>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your Name" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter a valid email address" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Message" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="I accept the Terms of Service" />
              </Form.Group>

              <Button
                variant="warning"
                type="submit"
                className="w-100 text-white fw-bold"
                style={{ backgroundColor: 'rgb(0, 16, 247)', border: 'none' }}
              >
                SUBMIT
              </Button>
            </Form>
          </Col>

          {/* Middle Info Section */}
          <Col md={4} className="bg-dark text-white p-4">
            <div className="mb-4">
              <h6 className="text-warning">CALL US</h6>
              <p className="mb-1">1 (234) 567-891</p>
              <p>1 (234) 987-654</p>
            </div>

            <div className="mb-4">
              <h6 className="text-warning">LOCATION</h6>
              <p>121 Rock Street, 21 Avenue,<br />New York, NY 92103-9000</p>
            </div>

            <div>
              <h6 className="text-warning">OUR TOP SERVICES</h6>
              <ul className="list-unstyled mb-0">
                <li>Local transfers</li>
                <li>Airport Transfers</li>
                <li>Excursions and Tours</li>
              </ul>
            </div>
          </Col>

          {/* Right Map Section */}
          <Col md={4}>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24172.895054643016!2d-74.006015!3d40.712776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQyJzQ2LjAiTiA3NMKwMDAnMDYuMCJX!5e0!3m2!1sen!2sin!4v1615566714444!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '100%' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;

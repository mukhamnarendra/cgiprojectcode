import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaAngleRight,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: ' #07003b', color: '#fff', paddingTop: '50px' }}>
      <Container>
        <Row className="text-center text-md-start">
          {/* Address */}
          <Col md={3} sm={6} className="mb-4">
            <h3 className="fw-bold mb-3">Address</h3>
            <p><FaMapMarkerAlt className="me-2" /> Location</p>
            <p><FaPhoneAlt className="me-2" /> Call 6303154605 , 9390190256</p>
            <p><FaEnvelope className="me-2" /> Codegenius14@gmail.com</p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-white fs-5"><FaFacebookF /></a>
              <a href="#" className="text-white fs-5"><FaTwitter /></a>
              <a href="#" className="text-white fs-5"><FaLinkedinIn /></a>
              <a href="#" className="text-white fs-5"><FaInstagram /></a>
            </div>
          </Col>

          {/* Links */}
          <Col md={3} sm={6} className="mb-4">
            <h3 className="fw-bold mb-3">Links</h3>
            {['Home', 'About', 'Services', 'Pricing', 'Contact Us', 'Privacy Policy'].map((link, idx) => (
              <p key={idx}>
                <FaAngleRight className="me-2" style={{ color: '#de4e19', fontSize: '1.2rem' }} />
                <span   >
                  {link}
                </span>
              </p>
            ))}
          </Col>

          {/* Info */}
          <Col md={3} sm={12} className="mb-4">
            <h3 className="fw-bold mb-3">Info</h3>
            <p style={{ lineHeight: '1.6' }}>
              CodeGenius Innovations is on a mission to provide high-quality online programming courses at affordable prices. As a TEAM, we're committed to making education accessible, especially for financially challenged students.
            </p>
          </Col>

          {/* Subscribe */}
          <Col md={3} sm={12} className="mb-4">
            <h3 className="fw-bold mb-3">Subscribe</h3>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-white custom-placeholder"
                style={{
                  borderRadius: 0,
                  border: 'none',
                  borderBottom: '1px solid #fff',
                  color: '#fff',
                }}
              />
            </Form.Group>
            <Button
              className="subscribe-button"
              style={{
                backgroundColor: '#de4e19',
                border: 'none',
                width: '100%',
                fontWeight: 'bold',
                transition: 'transform 0.3s ease',
              }}
            >
              Subscribe
            </Button>
          </Col>
        </Row>

        {/* Footer bottom line */}
        <hr style={{ borderTop: '1px solid #ccc' }} />
        <p className="text-center mb-0 py-2">
          © 2025 All Rights Reserved By CGI
        </p>
      </Container>

      {/* Inline Styles */}
      <style type="text/css">
        {`
          .subscribe-button:hover {
            transform: scale(1.05);
            background-color: #d32f2f;
          }

          .custom-placeholder::placeholder {
            color: #ffffff;
            opacity: 0.8;
          }

          input::placeholder {
            color: #ffffff;
            opacity: 0.8;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;

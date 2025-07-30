// src/pages/RegisterPage.js

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaLock, FaPhone } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from './Redux/user/userAction';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phonenumber: '',
    password: '',
    confirmpassword: '',
    domain: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    if (userInfo) {
      alert('Registration successful!');
      navigate('/loginpage');
    }
  }, [userInfo, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const { name, email, phonenumber, password, confirmpassword, domain } = formData;

    if (password !== confirmpassword) {
      alert('Passwords do not match');
      return;
    }

    const trimmedData = {
      name: name.trim(),
      email: email.trim(),
      phonenumber: phonenumber.trim(),
      password: password.trim(),
      confirmpassword: confirmpassword.trim(),
      domain: domain.trim(),
    };

    dispatch(register(trimmedData));
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #a18cd1, #3fada8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col md={5} className="text-white text-center">
            <h2 className="fw-bold">I HAVE ALREADY ACCOUNT</h2>
            <Button
              variant="light"
              className="rounded-pill px-4"
              style={{ fontWeight: '500' }}
              onClick={() => navigate('/loginpage')}
            >
              LOGIN
            </Button>
          </Col>

          <Col
            md={6}
            className="bg-white p-5 shadow"
            style={{
              borderRadius: '20px 0px 0px 20px',
              minWidth: '360px',
              maxWidth: '500px',
            }}
          >
            <h3 className="text-center mb-4 fw-bold">Registration</h3>

            {error && <p className="text-danger text-center mb-3">{error}</p>}

            <Form onSubmit={handleRegister}>
              <InputGroup className="mb-3">
                <InputGroup.Text className="bg-white border-0">
                  <FaUser color="#a18cd1" />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="border-bottom rounded-0 border-0"
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text className="bg-white border-0">
                  <FaEnvelope color="#a18cd1" />
                </InputGroup.Text>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="border-bottom rounded-0 border-0"
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text className="bg-white border-0">
                  <FaPhone color="#a18cd1" />
                </InputGroup.Text>
                <Form.Control
                  type="tel"
                  name="phonenumber"
                  value={formData.phonenumber}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="border-bottom rounded-0 border-0"
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text className="bg-white border-0">
                  <FaLock color="#a18cd1" />
                </InputGroup.Text>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                  className="border-bottom rounded-0 border-0"
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text className="bg-white border-0">
                  <FaLock color="#a18cd1" />
                </InputGroup.Text>
                <Form.Control
                  type="password"
                  name="confirmpassword"
                  value={formData.confirmpassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  required
                  className="border-bottom rounded-0 border-0"
                />
              </InputGroup>

              <InputGroup className="mb-4">
                <InputGroup.Text className="bg-white border-0">
                  <FaUser color="#a18cd1" />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  name="domain"
                  value={formData.domain}
                  onChange={handleChange}
                  placeholder="Domain"
                  required
                  className="border-bottom rounded-0 border-0"
                />
              </InputGroup>

              <div className="text-end">
                <Button
                  type="submit"
                  disabled={loading}
                  style={{
                    backgroundColor: '#7d94c1',
                    border: 'none',
                    borderRadius: '20px',
                    padding: '8px 25px',
                  }}
                >
                  {loading ? 'Registering...' : 'Register'}
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterPage;

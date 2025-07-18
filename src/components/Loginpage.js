// src/pages/LoginPage.js

import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Alert, Snackbar } from '@mui/material';

const LoginPage = () => {
  const [hovered, setHovered] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo && window.location.pathname === '/') {
      navigate('/home'); // or your default home page
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    setOpenSnackbar(false);

    if (!email || !password) {
      setErrorMsg('Please enter email and password.');
      setOpenSnackbar(true);
      return;
    }

    try {
      const res = await fetch(`http://${process.env.REACT_APP_IP_ADDRESS}/api/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log("Response status:", res.status);
      console.log("Login response data:", data);

      if (res.ok) {
        localStorage.setItem('userInfo', JSON.stringify(data));
        setSuccessMsg('Login successful!');
        setOpenSnackbar(true);
        console.log("Navigating to Allcouses");
        navigate('/allcourses'); // ✅ Navigation happens here
      } else {
        setErrorMsg(data.message || 'Invalid credentials');
        setOpenSnackbar(true);
      }
    } catch (error) {
      setErrorMsg('Login failed. Try again later.');
      setOpenSnackbar(true);
    }
  };

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #1f1c2c, #928dab)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container fluid>
        <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <Col xs={10} sm={8} md={6} lg={4} xl={3}>
            <div
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: hovered
                  ? '0 12px 48px rgba(0, 0, 0, 0.3)'
                  : '0 8px 32px rgba(31, 38, 135, 0.37)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                color: '#fff',
                transform: hovered ? 'translateY(-8px) scale(1.02)' : 'none',
                transition: 'all 0.4s ease',
              }}
            >
              <h2 style={{ color: '#f1c40f', textAlign: 'center', marginBottom: '30px' }}>Login</h2>

              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <Form.Label style={{ color: '#fff' }}>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mb-4">
                  <Form.Label style={{ color: '#fff' }}>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button
                  variant="warning"
                  type="submit"
                  className="w-100 fw-bold"
                  style={{ borderRadius: '30px', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}
                >
                  Login
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Snackbar Alert */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        {errorMsg ? (
          <Alert severity="error" onClose={() => setOpenSnackbar(false)}>
            {errorMsg}
          </Alert>
        ) : (
          <Alert severity="success" onClose={() => setOpenSnackbar(false)}>
            {successMsg}
          </Alert>
        )}
      </Snackbar>
    </div>
  );
};

export default LoginPage;

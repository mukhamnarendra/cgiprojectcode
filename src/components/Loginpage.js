import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./Redux/user/userAction";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hovered, setHovered] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setOpenSnackbar(true);
      return;
    }

    try {
      await dispatch(login({ email, password }));
      navigate("/allcourses");
    } catch (err) {
      setOpenSnackbar(true);
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #1f1c2c, #928dab)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container fluid>
        <Row
          className="justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <Col xs={10} sm={8} md={6} lg={4} xl={3}>
            <div
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "20px",
                padding: "40px",
                boxShadow: hovered
                  ? "0 12px 48px rgba(0, 0, 0, 0.3)"
                  : "0 8px 32px rgba(31, 38, 135, 0.37)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                color: "#fff",
                transform: hovered ? "translateY(-8px) scale(1.02)" : "none",
                transition: "all 0.4s ease",
              }}
            >
              <h2
                style={{
                  color: "#f1c40f",
                  textAlign: "center",
                  marginBottom: "30px",
                }}
              >
                Login
              </h2>

              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <Form.Label style={{ color: "#fff" }}>
                    Email address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mb-4">
                  <Form.Label style={{ color: "#fff" }}>Password</Form.Label>
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
                  style={{
                    borderRadius: "30px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                  }}
                >
                  {loading ? "Logging in..." : "Login"}
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        {error ? (
          <Alert severity="error" onClose={() => setOpenSnackbar(false)}>
            {error}
          </Alert>
        ) : (
          <Alert severity="warning" onClose={() => setOpenSnackbar(false)}>
            Please fill both fields.
          </Alert>
        )}
      </Snackbar>
    </div>
  );
};

export default LoginPage;

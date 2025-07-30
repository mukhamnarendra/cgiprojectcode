import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const CustomNavbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    setIsLoggedIn(!!userInfo);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    setIsLoggedIn(false);
    navigate('/loginpage');
  };

  return (
    <Navbar
      expand="lg"
      variant="dark"
      sticky="top"
      style={{
        background: 'linear-gradient(to right, #010037, #030c59)',
        padding: '15px 0',
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
      }}
    >
      <Container fluid>
        <Navbar.Brand
          as={Link}
          to="/"
          style={{
            fontWeight: 'bold',
            fontSize: '1.8rem',
            letterSpacing: '1px',
            color: '#f1c40f',
          }}
        >
          CGI
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center">
            {['HOME', 'ABOUT', 'SERVICES', 'COURSES', 'CONTACT US'].map((item, index) => (
              <Nav.Link
                key={index}
                as={Link}
                to={`/${item.replace(' ', '').toLowerCase()}`}
                className="mx-2 text-white"
                style={{
                  fontWeight: '500',
                  transition: 'color 0.3s ease',
                }}
              >
                {item}
              </Nav.Link>
            ))}

            {/* Show only when logged in */}
            {isLoggedIn && (
              <>
                <Nav.Link
                  as={Link}
                  to="/mycourses"
                  className="mx-2 text-white fw-bold"
                >
                  MY COURSES
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/certificates"
                  className="mx-2 text-white fw-bold"
                >
                  CERTIFICATES
                </Nav.Link>
              </>
            )}

            {isLoggedIn ? (
              <Button
                onClick={handleLogout}
                variant="danger"
                className="ms-3 fw-bold px-4"
                style={{
                  borderRadius: '30px',
                  color: '#fff',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                }}
              >
                LOGOUT
              </Button>
            ) : (
              <Button
                as={Link}
                to="/loginpage"
                variant="warning"
                className="ms-3 fw-bold px-4"
                style={{
                  borderRadius: '30px',
                  color: '#000',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                }}
              >
                LOGIN
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;

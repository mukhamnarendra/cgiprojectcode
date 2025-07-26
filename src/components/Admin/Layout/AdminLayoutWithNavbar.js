import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, Button, Offcanvas } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import AdminSidebar from '../Sidebar/AdminSidebar';

const AdminLayoutWithNavbar = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleShow = () => setShowSidebar(true);
  const handleClose = () => setShowSidebar(false);

  return (
    <Container fluid>
      <Row className="flex-nowrap">
        {/* Sidebar for large screens */}
        <Col
          xs={12}
          md={2}
          lg={2}
          className="bg-dark p-0 vh-100 d-none d-md-block"
          style={{ maxWidth: '200px' }}
        >
          <AdminSidebar />
        </Col>

        {/* Right Side */}
        <Col xs={12} md={10} lg={10} className="p-0">
          {/* Top Navbar */}
          <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
            <Button variant="dark" className="d-md-none me-2" onClick={handleShow}>
              <FaBars />
            </Button>
            <Navbar.Brand className="mx-auto fw-bold d-none d-md-block">
              Admin Dashboard
            </Navbar.Brand>
            <Nav className="ms-auto">
              <span className="text-white me-3">user@gmail.com</span>
            </Nav>
          </Navbar>

          {/* Mobile Header */}
          <div className="d-block d-md-none text-center bg-dark text-white py-2 fw-bold">
            Admin Dashboard
          </div>

          {/* Offcanvas Sidebar for Mobile */}
          <Offcanvas
            show={showSidebar}
            onHide={handleClose}
            className="bg-dark text-white"
            style={{ width: '250px' }}
          >
            <Offcanvas.Header closeButton closeVariant="white" />
            <Offcanvas.Body>
              <AdminSidebar onLinkClick={handleClose} />
            </Offcanvas.Body>
          </Offcanvas>

          {/* Main Content Area */}
          <div
            style={{
              padding: '20px',
              backgroundColor: '#f4f4f4',
              minHeight: 'calc(100vh - 60px)',
              paddingInline: '10px'
            }}
          >
            {children}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminLayoutWithNavbar;

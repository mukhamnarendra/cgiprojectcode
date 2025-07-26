// src/components/Admin/AdminLayout.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AdminSidebar from '../Sidebar/AdminSidebar';

const AdminLayout = ({ children }) => {
  return (
    <Container fluid>
      <Row>
        <Col md={2} className="p-0">
          <AdminSidebar />
        </Col>
        <Col md={10} className="p-4">
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default AdminLayout;

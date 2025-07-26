// src/components/Sidebar/AdminSidebar.js
import React from 'react';
import {
  FaUsers,
  FaMoneyBillAlt,
  FaCertificate,
  FaSignOutAlt,
  FaBookOpen
} from 'react-icons/fa';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <div style={{ backgroundColor: '#1e1e2f', height: '100%', color: 'white', padding: '20px' }}>
      <h4 className="text-white mb-4">Dashboard</h4>
      <Nav className="flex-column">
        <Nav.Link as={Link} to='/admin/users'className="text-white"><FaUsers className="me-2" /> Users</Nav.Link>
        <Nav.Link  className="text-white"><FaMoneyBillAlt className="me-2" /> Payments</Nav.Link>
        <Nav.Link className="text-white"><FaCertificate className="me-2" /> Certificates</Nav.Link>
        <Nav.Link className="text-white"><FaBookOpen className="me-2" /> Courses</Nav.Link>
        <Nav.Link  className="text-white"><FaSignOutAlt className="me-2" /> Logout</Nav.Link>
      </Nav>
    </div>
  );
};

export default AdminSidebar;

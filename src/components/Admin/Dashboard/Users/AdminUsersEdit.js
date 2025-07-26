// src/components/Admin/Dashboard/Users/AdminUsersEdit.js
import React, { useEffect, useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const dummyUsers = [
  { id: 1, name: 'Alice Johnson', email: 'alice@gmail.com', role: 'Admin' },
  { id: 2, name: 'Bob Smith', email: 'bob@gmail.com', role: 'Student' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@gmail.com', role: 'Instructor' },
];

const AdminUsersEdit = ({ userId, onBack }) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    role: ''
  });

  useEffect(() => {
    const user = dummyUsers.find(u => u.id === userId);
    if (user) {
      setUserData(user);
    }
  }, [userId]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated user data:', userData);
    alert('User updated successfully!');
    onBack(); // Return to table
  };

  return (
    <Card className="p-4">
      <h3 className="mb-4">Edit User (ID: {userId})</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="userName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="userEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="userRole">
          <Form.Label>Role</Form.Label>
          <Form.Select
            name="role"
            value={userData.role}
            onChange={handleChange}
            required
          >
            <option value="">Select role</option>
            <option value="Admin">Admin</option>
            <option value="Student">Student</option>
            <option value="Instructor">Instructor</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit" className="me-2">
          Update User
        </Button>
        <Button variant="secondary" onClick={onBack}>
          Cancel
        </Button>
      </Form>
    </Card>
  );
};

export default AdminUsersEdit;

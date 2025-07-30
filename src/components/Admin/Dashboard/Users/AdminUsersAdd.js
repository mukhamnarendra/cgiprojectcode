import React, { useState } from 'react';
import { Form, Button, Card, InputGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { register } from '../../../Redux/user/userAction';
  import { useSelector } from "react-redux";

  
const AdminUsersAdd = ({ onBack, refreshUsers }) => {
  const dispatch = useDispatch();

// Inside your component:
const users = useSelector((state) => state.user.users || []);
const allDomains = [...new Set(users.map((u) => u.domain).filter(Boolean))]; // Remove duplicates and falsy

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phonenumber: '',
    password: '',
    confirmpassword: '',
    domain: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userData.password !== userData.confirmpassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      await dispatch(register(userData)); // Redux action
      alert("User added successfully!");
      refreshUsers();
      onBack();
    } catch (err) {
      alert("Failed to add user.");
    }
  };

  return (
    <Card className="p-4">
      <h3 className="mb-4">Add New User</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            name="phonenumber"
            value={userData.phonenumber}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <InputGroup>
            <Form.Control
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={userData.password}
              onChange={handleChange}
              required
            />
            <Button
              variant="outline-secondary"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </Button>
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <InputGroup>
            <Form.Control
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmpassword"
              value={userData.confirmpassword}
              onChange={handleChange}
              required
            />
            <Button
              variant="outline-secondary"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </Button>
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3">
  <Form.Label>Domain</Form.Label>
  <Form.Select
    name="domain"
    value={userData.domain}
    onChange={handleChange}
    required
  >
    <option value="">Select Domain</option>
    {allDomains.map((domain, idx) => (
      <option key={idx} value={domain}>
        {domain}
      </option>
    ))}
  </Form.Select>
</Form.Group>


        <Button type="submit" variant="success" className="me-2">
          Add User
        </Button>
        <Button variant="secondary" onClick={onBack}>
          Cancel
        </Button>
      </Form>
    </Card>
  );
};

export default AdminUsersAdd;

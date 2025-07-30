import React, { useEffect, useState } from 'react';
import { Form, Button, Card, InputGroup } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { updateUserById } from '../../../Redux/user/userAction';

const AdminUsersEdit = ({ userId, onBack, refreshUsers }) => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.user.users);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phonenumber: '',
    password: '',
    confirmpassword: '',
    domain: '',
   
  });
  console.log(userId, users);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    const user = users.find((u) => u.id === userId);
    if (user) {
      setUserData({ ...user, confirmpassword: user.password }); // for demo only
    }
  }, [userId, users]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserById(userId,userData));
    alert('User updated successfully!');
    refreshUsers(); 
    onBack();
  };

  return (
    <Card className="p-4">
      <h3 className="mb-4">Edit User (ID: {userId})</h3>
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

        {/* Password */}
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

        {/* Confirm Password */}
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
          <Form.Control
            type="text"
            name="domain"
            value={userData.domain}
            onChange={handleChange}
            required
          />
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

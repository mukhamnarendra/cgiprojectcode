// src/components/Admin/Dashboard/Users/AdminUsers.js
import React, { useState } from 'react';
import { Table, Button, Card } from 'react-bootstrap';
import AdminUsersEdit from './AdminUsersEdit';
import { useSelector } from 'react-redux';

const AdminUsers = () => {
  const [editingUserId, setEditingUserId] = useState(null);
  const users = useSelector((state) => state.user.userInfo); // Array of users
  console.log(users);

  const handleEditClick = (userId) => {
    setEditingUserId(userId);
  };

  const handleDeleteClick = (userId) => {
    alert("Delete API integration needed for user ID: " + userId);
  };

  const handleBackToList = () => {
    setEditingUserId(null);
  };

  const handleUpdateUser = (updatedUser) => {
    alert("Update functionality needs to be implemented.");
    handleBackToList();
  };

  return (
    <Card className="p-4">
      {!editingUserId ? (
        <>
          <h3 className="mb-4">User List</h3>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>UserID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Domain</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(users) && users.length > 0 ? (
                users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.userid}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.domain}</td>
                    <td>{user.phonenumber}</td>
                    <td>
                      <Button
                        variant="warning"
                        size="sm"
                        className="me-2"
                        onClick={() => handleEditClick(user.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDeleteClick(user.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center text-danger">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </>
      ) : (
        <AdminUsersEdit
          userId={editingUserId}
          onBack={handleBackToList}
          onUpdate={handleUpdateUser}
          users={users}
        />
      )}
    </Card>
  );
};

export default AdminUsers;

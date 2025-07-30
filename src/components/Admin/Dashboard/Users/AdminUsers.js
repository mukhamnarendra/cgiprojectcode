import React, { useState, useEffect } from "react";
import { Table, Button, Card } from "react-bootstrap";
import AdminUsersEdit from "./AdminUsersEdit";
import AdminUsersAdd from "./AdminUsersAdd"; // 👈 Import this
import { useSelector, useDispatch } from "react-redux";
import { deleteUserById, fetchAllUsers } from "../../../Redux/user/userAction";

const AdminUsers = () => {
  const [editingUserId, setEditingUserId] = useState(null);
  const [isAddingUser, setIsAddingUser] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  const fetchUsers = () => {
    dispatch(fetchAllUsers());
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleEditClick = (userId) => {
    setEditingUserId(userId);
    setIsAddingUser(false);
  };

  const handleDeleteClick = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUserById(userId));
    }
  };

  const handleBackToList = () => {
    setEditingUserId(null);
    setIsAddingUser(false);
  };

  return (
    <Card className="p-4">
      {!editingUserId && !isAddingUser ? (
        <>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3>User List</h3>
            <Button variant="primary" onClick={() => setIsAddingUser(true)}>
              + Add User
            </Button>
          </div>
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
      ) : isAddingUser ? (
        <AdminUsersAdd onBack={handleBackToList} refreshUsers={fetchUsers} />
      ) : (
        <AdminUsersEdit
          userId={editingUserId}
          onBack={handleBackToList}
          refreshUsers={fetchUsers}
        />
      )}
    </Card>
  );
};

export default AdminUsers;
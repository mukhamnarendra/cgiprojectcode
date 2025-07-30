import React, { useEffect, useState } from "react";
import { Table, Button, Card, Form, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { getAllPayments } from "../../../Redux/payment/paymentAction";
import { setFilteredPayments } from "../../../Redux/payment/paymentSlice";

const AdminPayments = () => {
  const dispatch = useDispatch();
  const payments = useSelector((state) => state.payment.payments);
  const users = useSelector((state) => state.user.users); // fix from userInfo to users
  const courses = useSelector((state) => state.course.courses);
console.log(courses, users, payments);
  const [filters, setFilters] = useState({
    user: "",
    course: "",
    date: "",
  });

  useEffect(() => {
    dispatch(getAllPayments());
    // also make sure users and courses are loaded before rendering
  }, [dispatch]);

  const getUserName = (user_id) => {
    const user = users.find((u) => u.id === user_id);
    return user ? user.name : "Unknown User";
  };

  const getCourseName = (course_id) => {
    const course = courses.find((c) => c.id === course_id);
    return course ? course.title || course.name : "Unknown Course";
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);

    const filtered = payments.filter((payment) => {
      const userName = getUserName(payment.user_id).toLowerCase();
      const courseName = getCourseName(payment.course_id).toLowerCase();

      const userMatch = userName.includes(updatedFilters.user.toLowerCase());
      const courseMatch = courseName.includes(updatedFilters.course.toLowerCase());
      const dateMatch = updatedFilters.date
        ? payment.created_at?.startsWith(updatedFilters.date)
        : true;

      return userMatch && courseMatch && dateMatch;
    });

    dispatch(setFilteredPayments(filtered));
  };

  const filteredPayments = useSelector((state) => state.payment.filteredPayments);

  return (
    <Card className="p-4">
      <h3 className="mb-4">All Transactions</h3>

      <Row className="mb-3">
        <Col md={4}>
          <Form.Control
            type="text"
            placeholder="Filter by user"
            name="user"
            value={filters.user}
            onChange={handleFilterChange}
          />
        </Col>
        <Col md={4}>
          <Form.Control
            type="text"
            placeholder="Filter by course"
            name="course"
            value={filters.course}
            onChange={handleFilterChange}
          />
        </Col>
        <Col md={4}>
          <Form.Control
            type="date"
            name="date"
            value={filters.date}
            onChange={handleFilterChange}
          />
        </Col>
      </Row>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>User</th>
            <th>Course</th>
            <th>Amount</th>
            <th>Method</th>
            <th>Status</th>
            <th>Transaction ID</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredPayments.length > 0 ? (
            filteredPayments.map((payment, index) => (
              <tr key={payment.id}>
                <td>{index + 1}</td>
                <td>{getUserName(payment.user_id)}</td>
                <td>{getCourseName(payment.course_id)}</td>
                <td>₹{payment.amount}</td>
                <td>{payment.payment_method}</td>
                <td>{payment.payment_status}</td>
                <td>{payment.transaction_id}</td>
                <td>{payment.created_at?.slice(0, 10)}</td>
                <td>
                  <Button
                    variant="info"
                    size="sm"
                    onClick={() => alert(JSON.stringify(payment, null, 2))}
                  >
                    View
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" className="text-center text-danger">No transactions found.</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Card>
  );
};

export default AdminPayments;

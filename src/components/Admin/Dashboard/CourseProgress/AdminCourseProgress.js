// src/pages/admin/AdminCourseProgress.js
import React, { useEffect } from "react";
import { Table, Card, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProgresses } from "../../../Redux/courseProgessSlice/courseProgressActions";

const AdminCourseProgress = () => {
  const dispatch = useDispatch();
  const { progresses, loading, error } = useSelector((state) => state.courseProgress);

  useEffect(() => {
    dispatch(fetchProgresses());
  }, [dispatch]);

  return (
    <Card className="mt-4">
      <Card.Header>Course Progress</Card.Header>
      <Card.Body>
        {loading ? (
          <Spinner animation="border" />
        ) : error ? (
          <p className="text-danger">{error}</p>
        ) : (
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Id</th>
                <th>User ID</th>
                <th>Course ID</th>
                <th>Progress %</th>
                <th>Last Updated</th>
              </tr>
            </thead>
            <tbody>
              {progresses.map((progress, index) => (
                <tr key={progress.id}>
                  <td>{index + 1}</td>
                  <td>{progress.user_id}</td>
                  <td>{progress.course_id}</td>
                  <td>{progress.percentage}%</td>
                  <td>{new Date(progress.updated_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Card.Body>
    </Card>
  );
};

export default AdminCourseProgress;

// src/pages/admin/AdminCertificate.js
import React, { useEffect } from "react";
import { Table, Card, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCertificates } from "../../../Redux/certificates/certificateActions";

const AdminCertificate = () => {
  const dispatch = useDispatch();
  const { certificates, loading, error } = useSelector((state) => state.certificate);

  useEffect(() => {
    dispatch(fetchCertificates());
  }, [dispatch]);

  return (
    <Card className="mt-4">
      <Card.Header>Certificates</Card.Header>
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
                <th>Certificate URL</th>
                <th>Issued At</th>
              </tr>
            </thead>
            <tbody>
              {certificates.map((certificate, index) => (
                <tr key={certificate.id}>
                  <td>{index + 1}</td>
                  <td>{certificate.user_id}</td>
                  <td>{certificate.course_id}</td>
                  <td>
                    <a href={certificate.certificate_url} target="_blank" rel="noopener noreferrer">
                      View
                    </a>
                  </td>
                  <td>{new Date(certificate.issued_at).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Card.Body>
    </Card>
  );
};

export default AdminCertificate;

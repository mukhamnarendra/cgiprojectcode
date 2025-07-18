import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import * as THREE from 'three';

const Certificates = () => {
  const [certificateId, setCertificateId] = useState('');
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    const NET = window.VANTA.NET; // ✅ Use from CDN
    if (!vantaEffect && NET) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x28a745,
          backgroundColor: 0xf9f9f9,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const handleDownload = () => {
    if (certificateId.trim() === '') return;
    window.location.href = `https://codegeniusinnovations.in/certificates/${certificateId}.pdf`;
  };

  return (
    <div ref={vantaRef} style={{ minHeight: '100vh', width: '100%' }}>
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: '100vh' }}
      >
        <Card
          style={{
            padding: '30px',
            width: '100%',
            maxWidth: '400px',
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.95)',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
            borderRadius: '10px',
          }}
        >
          <h5 style={{ fontWeight: 'bold', color: 'black' }}>Certificate of Completion</h5>
          <p style={{ marginTop: '10px', marginBottom: '20px' }}>
            Enter your certificate ID to download:
          </p>
          <Row className="g-2">
            <Col xs={7}>
              <Form.Control
                type="text"
                placeholder="Certificate ID"
                value={certificateId}
                onChange={(e) => setCertificateId(e.target.value)}
                style={{ height: '45px' }}
              />
            </Col>
            <Col xs={5}>
              <Button
                variant="success"
                onClick={handleDownload}
                style={{
                  width: '100%',
                  height: '45px',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  borderRadius: '5px',
                }}
              >
                Download
              </Button>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default Certificates;

import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaBook, FaBriefcase, FaLaptopCode, FaGlobe } from 'react-icons/fa';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isDomainHovered, setIsDomainHovered] = useState(false);

  const primaryColor = '#F96A28';
  const backgroundGradient = 'linear-gradient(to right, #00abd8,rgb(39, 36, 212), )';
  const linkHover = '#d35400';

  const services = [
    {
      icon: FaBook,
      title: 'Online Courses',
      description: 'Access a wide variety of online courses at your convenience.',
    },
    {
      icon: FaBriefcase,
      title: 'Internships',
      description: 'Explore hands-on internship programs to build your skills.',
    },
    {
      icon: FaLaptopCode,
      title: 'Web Development',
      description: 'Get powerful web development services for your business.',
    },
    {
      icon: FaGlobe,
      title: 'Domain Name',
      description: 'Get unique, memorable domain names for your projects.',
      isSingle: true,
    },
  ];
  const techData = [
  {
    title: 'HTML5',
    img: 'https://cdn-icons-png.flaticon.com/512/732/732212.png',
  },
  {
    title: 'CSS3',
    img: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
  },
  {
    title: 'JavaScript',
    img: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
  },
  {
    title: 'SASS',
    img: 'https://cdn-icons-png.flaticon.com/512/5968/5968358.png',
  },
  {
    title: 'JQuery',
    img: 'https://cdn-icons-png.flaticon.com/512/919/919836.png',
  },
  {
    title: 'React.Js',
    img: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png',
  },
];


  return (
    <div style={{ background: backgroundGradient, padding: '60px 0' }}>
      <Container className="text-center text-white">
        <h2 className="mb-5 fw-bold" style={{ color: primaryColor }}>
          Our Services
        </h2>
        <Row>
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isHovered = service.isSingle ? isDomainHovered : hoveredIndex === idx;

            return (
              <Col key={idx} md={6} lg={3} className="mb-4">
                <Card
                  className="h-100 p-4"
                  onMouseEnter={() =>
                    service.isSingle ? setIsDomainHovered(true) : setHoveredIndex(idx)
                  }
                  onMouseLeave={() =>
                    service.isSingle ? setIsDomainHovered(false) : setHoveredIndex(null)
                  }
                  style={{
                    border: 'none',
                    transition: 'all 0.3s ease',
                    transform: isHovered ? 'translateY(-8px) scale(1.03)' : 'scale(1)',
                    boxShadow: isHovered
                      ? '0 12px 24px rgba(16, 6, 107, 0.25)'
                      : '0 6px 14px rgba(7, 42, 124, 0.15)',
                    zIndex: isHovered ? 10 : 1,
                    borderRadius: '16px',
                    backgroundColor: '#fff',
                    color: '#333',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: primaryColor,
                      borderRadius: '50%',
                      width: '80px',
                      height: '80px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px auto',
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    <Icon
                      size={36}
                      style={{
                        color: 'white',
                        transition: 'color 0.3s ease',
                      }}
                    />
                  </div>
                  <h5 className="fw-bold text-center" style={{ color: primaryColor }}>
                    {service.title}
                  </h5>
                  <p style={{ fontSize: '0.95rem', textAlign: 'center' }}>
                    {service.description}
                  </p>
                  <div className="text-center">
                    <a
                      href="#"
                      style={{
                        color: primaryColor,
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        transition: 'color 0.3s ease',
                      }}
                      onMouseOver={(e) => (e.target.style.color = linkHover)}
                      onMouseOut={(e) => (e.target.style.color = primaryColor)}
                    >
                      More Details &rarr;
                    </a>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
        <div className="py-5" style={{ background: 'linear-gradient(to right, #9face6, #74ebd5)' }}>
  <Container>
    <Row className="g-4">
      {techData.map((tech, idx) => (
        <Col key={idx} md={4}>
          <Card className="text-center shadow-sm tech-card">
            <Card.Img
              variant="top"
              src={tech.img}
              style={{ width: '80px', height: '80px', objectFit: 'contain', margin: '20px auto 0' }}
            />
            <Card.Body>
              <Card.Title>{tech.title}</Card.Title>
              <Card.Text>
                Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Sunt, Soluta.
              </Card.Text>
              <Button variant="dark">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
</div>

    </div>
  );
};

export default Services;

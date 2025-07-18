// Courses.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaCode } from 'react-icons/fa';
import { SiCss3, SiHtml5, SiJavascript } from 'react-icons/si';

const Courses = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const headingColor = ' #28a745';
 const cardStyle = {
    borderRadius: '20px',
    boxShadow: '0px 4px 15px rgba(0,0,0,0.1)',
    width: '230px',
    height: '380px',
    margin: '20px auto',
    overflow: 'hidden',
    border: 'none',
  };

  const headerStyle = (color1, color2) => ({
    height: '130px',
    background: `linear-gradient(135deg, ${color1}, ${color2})`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: '100px',
  });

  const iconStyle = {
    fontSize: '50px',
    color: '#fff',
  };

  const titleStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '18px',
    marginTop: '20px',
  };

  const textStyle = {
    textAlign: 'center',
    fontSize: '13px',
    color: '#555',
    padding: '0 15px',
    marginTop: '10px',
  };

  const buttonStyle = (bg) => ({
    backgroundColor: bg,
    border: 'none',
    borderRadius: '15px',
    fontSize: '12px',
    padding: '5px 15px',
    marginTop: '15px',
    color: '#fff',
    fontWeight: 'bold',
  });
  // const cardStyle = {
  //   borderRadius: '20px',
  //   boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  //   overflow: 'hidden',
  //   paddingBottom: '20px',
  //   width: '250px',
  //   height: '370px',
  //   margin: '20px auto',
  // };

  const iconContainerStyle = (bgColor) => ({
    background: bgColor,
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
    height: '140px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });

  // const iconStyle = {
  //   fontSize: '60px',
  //   color: 'white',
  // };

  // const buttonStyle = (color) => ({
  //   border: 'none',
  //   borderRadius: '20px',
  //   padding: '5px 20px',
  //   color: 'white',
  //   backgroundColor: color,
  //   fontWeight: 'bold',
  //   marginTop: '15px',
  // });

  const courses = [
    {
      title: 'Python',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      desc: 'Unleash your creativity and become a coding virtuoso with Python – the language of innovation and endless possibilities.',
    },
    {
      title: 'Front-End',
      img: 'https://cdn-icons-png.flaticon.com/512/5968/5968267.png',
      desc: 'Step into front-end development and create web experiences that are not just modern but pioneers of the future.',
    },
    {
      title: 'Java',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      desc: 'Unlock endless possibilities with Java – your gateway to building powerful, cross-platform applications.',
    },
  ];

  return (
    <>
      {/* Heading Section */}
<Container className="my-5">
  <Row className="justify-content-start">
    <Col xs={12} md={8}>
      <div
        style={{
          borderLeft: '5px solid red',
          paddingLeft: '20px',
          marginRight: '15px',
          textAlign: 'left',
        }}
      >
        <h2 style={{ color: '#28a745', fontWeight: 'bold' }}>Our Courses</h2>
        <p style={{ fontSize: '16px', color: '#333' }}>
          Explore our diverse range of technology courses designed to boost your skills and career.
        </p>
      </div>
    </Col>
  </Row>
</Container>



      {/* Icon Cards Section */}
      <Container fluid style={{ background: 'linear-gradient(to right, #f5f7f9, #d9dadc)', padding: '50px 0' }}>
      <Row className="justify-content-center">
        {/* CODE Card */}
        <Col xs="12" sm="6" md="3">
          <Card style={cardStyle}>
            <div style={headerStyle('#f12711', '#f5af19')}>
              <FaCode style={iconStyle} />
            </div>
            <div style={titleStyle}>TITLE</div>
            <div style={textStyle}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            <div style={{ textAlign: 'center' }}>
              <Button style={buttonStyle('#f12711')}>CODE</Button>
            </div>
          </Card>
        </Col>

        {/* CSS3 Card */}
        <Col xs="12" sm="6" md="3">
          <Card style={cardStyle}>
            <div style={headerStyle('#a100ff', '#ec38bc')}>
              <SiCss3 style={iconStyle} />
            </div>
            <div style={titleStyle}>TITLE</div>
            <div style={textStyle}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            <div style={{ textAlign: 'center' }}>
              <Button style={buttonStyle('#a100ff')}>CSS3</Button>
            </div>
          </Card>
        </Col>

        {/* HTML5 Card */}
        <Col xs="12" sm="6" md="3">
          <Card style={cardStyle}>
            <div style={headerStyle('#396afc', '#2948ff')}>
              <SiHtml5 style={iconStyle} />
            </div>
            <div style={titleStyle}>TITLE</div>
            <div style={textStyle}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            <div style={{ textAlign: 'center' }}>
              <Button style={buttonStyle('#396afc')}>HTML5</Button>
            </div>
          </Card>
        </Col>

        {/* JS Card */}
        <Col xs="12" sm="6" md="3">
          <Card style={cardStyle}>
            <div style={headerStyle('#00c851', '#33b5e5')}>
              <SiJavascript style={iconStyle} />
            </div>
            <div style={titleStyle}>TITLE</div>
            <div style={textStyle}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            <div style={{ textAlign: 'center' }}>
              <Button style={buttonStyle('#00c851')}>JS</Button>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>

      {/* Hover Cards Section */}
      <Container className="my-5">
        <Row className="justify-content-center">
          {courses.map((course, idx) => (
            <Col md={4} sm={12} className="mb-4" key={idx}>
              <Card
                style={{
                  border: 'none',
                  borderRadius: '20px',
                  padding: '25px',
                  transition: 'all 0.4s ease',
                  boxShadow: hoveredIndex === idx
                    ? '0 8px 30px rgba(0, 0, 0, 0.25)'
                    : '0 4px 12px rgba(0, 0, 0, 0.1)',
                  background: hoveredIndex === idx
                    ? 'linear-gradient(to bottom right, #f3f4f6, #e5e7eb)'
                    : '#ffffff',
                  textAlign: 'center',
                  height: '100%',
                  cursor: 'pointer',
                }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Card.Body>
                  <div style={{ marginBottom: '20px' }}>
                    <img
                      src={course.img}
                      alt={course.title}
                      style={{ width: '60px', height: '60px' }}
                    />
                  </div>
                  <Card.Title style={{ fontSize: '26px', fontWeight: 'bold' }}>
                    {course.title}
                  </Card.Title>

                  <div
                    style={{
                      overflow: 'hidden',
                      transition: 'max-height 0.4s ease',
                      maxHeight: hoveredIndex === idx ? '500px' : '0',
                    }}
                  >
                    <Card.Text style={{ fontSize: '14px', color: '#333', marginTop: '15px' }}>
                      {course.desc}
                    </Card.Text>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '25px' }}>
                      <Button style={{ borderRadius: '20px', padding: '6px 16px', backgroundColor: '#28a745', border: 'none' }}>
                        See Detail
                      </Button>
                      <Button style={{ borderRadius: '20px', padding: '6px 16px', backgroundColor: '#28a745', border: 'none' }}>
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Courses;

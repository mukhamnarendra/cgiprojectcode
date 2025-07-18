// About.js
import React from 'react';
import assets from "../assets/code.jpg" // Ensure this path is correct

const About = () => {
  return (
    <section
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '50px',
        backgroundColor: '#ffffff', // Set background to white
        flexWrap: 'wrap',
      }}
    >
      <div
        style={{
          flex: '1',
          paddingRight: '30px',
          minWidth: '300px',
        }}
      >
        <h2
          style={{
            fontSize: '2.5em',
            color: '#333',
            marginBottom: '20px',
          }}
        >
          About Us
        </h2>
        <p
          style={{
            fontSize: '1.1em',
            lineHeight: '1.6',
            color: '#555',
            marginBottom: '30px',
          }}
        >
          At CodeGeniusInnovations, we're on a mission to provide high-quality
          online programming courses and Internships at affordable prices. As
          the TEAM, we committed to making education accessible, especially
          for those facing financial challenges. Our vision is to empower
          individuals from all backgrounds, unlocking their full potential.
          Join Us in breaking down barriers to education and building a
          brighter future together. Codegenius Innovations for affordable,
          top-notch programming education.
        </p>
        <button
          style={{
            backgroundColor: '#ff6347',
            color: 'white',
            padding: '15px 30px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1em',
          }}
        >
          Read More
        </button>
      </div>

      <div
        style={{
          flex: '1',
          textAlign: 'right',
          minWidth: '300px',
        }}
      >
        <img
  src={assets} // ✅ use curly braces and the correct variable name
  alt="Illustration"
  style={{
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '10px',
  }}
/>

      </div>
    </section>
  );
};

export default About;

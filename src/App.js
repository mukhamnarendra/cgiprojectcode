import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/Navbor';
import CarouselSection from './components/CarouselSection';
import Footer from './components/Footer';

// Dummy Pages

import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Certifates from './components/Certifates';
import Loginpage from './components/Loginpage';
import Registerpage from './components/Registerpage';
import Allcouses from './components/Allcouses';
import Paymenypage from './components/Paymenypage';





const App = () => {
  return (
    <Router>
      <CustomNavbar />
       <CarouselSection/>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/certificates" element={<Certifates />} />
        <Route path="/loginpage" element={<Loginpage />} />
            <Route path="/registerpage" element={<Registerpage />} />
            <Route path="/allcourses" element={<Allcouses />} />
            <Route path="/paymentpage" element={<Paymenypage />} />
      </Routes>
      <Footer />
    </Router>
   
  );
};

export default App;

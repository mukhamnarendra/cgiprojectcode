// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import axios from 'axios';

// Public components
import CustomNavbar from './components/Navbor';
import CarouselSection from './components/CarouselSection';
import Footer from './components/Footer';
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

// Admin components
import AdminUsers from './components/Admin/Dashboard/Users/AdminUsers';
import AdminLayoutWithNavbar from './components/Admin/Layout/AdminLayoutWithNavbar';
import AdminUsersEdit from './components/Admin/Dashboard/Users/AdminUsersEdit';
import { useDispatch } from 'react-redux';
import { userRedux } from './components/Redux/user/userSlice';

const LayoutWrapper = () => {
  const location = useLocation();
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const dispatch=useDispatch()

  // Detect admin route
  const isAdminRoute =
    location.pathname.startsWith('/dashboard') || location.pathname.startsWith('/admin/');

  // Fetch user data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.1.10:8083/api/users');
        console.log(response)
        setUserData(response.data);
        dispatch(userRedux(response.data))

      } catch (error) {
        setFetchError('Failed to load user data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);console.log(userData)


  return (
    <>
      {!isAdminRoute && <CustomNavbar />}
      {!isAdminRoute && <CarouselSection />}

      <Routes>
        {/* Redirect root to /home */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* Public routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/certificates" element={<Certifates />} />
        <Route path="/loginpage" element={<Loginpage />} />
        <Route path="/registerpage" element={<Registerpage />} />
        <Route path="/allcourses" element={<Allcouses />} />
        <Route path="/paymentpage" element={<Paymenypage />} />

        {/* Admin Routes */}
        <Route
          path="/admin/users"
          element={
            <AdminLayoutWithNavbar>
              <AdminUsers users={userData} loading={loading} error={fetchError} />
            </AdminLayoutWithNavbar>
          }
        />
        <Route
          path="users/edit/:id"
          element={
            <AdminLayoutWithNavbar>
              <AdminUsersEdit />
            </AdminLayoutWithNavbar>
          }
        />
      </Routes>

      {!isAdminRoute && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <LayoutWrapper />
    </Router>
  );
};

export default App;

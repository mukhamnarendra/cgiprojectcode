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
import AdminPayments from './components/Admin/Dashboard/Payments/AdminPayment';
import AdminCourse from './components/Admin/Dashboard/Courses/AdminCourse';
import AdminCourseAdd from './components/Admin/Dashboard/Courses/AdminCourseAdd';
import AdminCourseEdit from './components/Admin/Dashboard/Courses/AdminCourseEdit';
import AdminCertificate from './components/Admin/Dashboard/Certificates/AdminCertificates';
import AdminCourseProgress from './components/Admin/Dashboard/CourseProgress/AdminCourseProgress';
import AdminUsersAdd from './components/Admin/Dashboard/Users/AdminUsersAdd';
import AdminCourses from './components/Admin/Dashboard/Courses/AdminCourse';
import MyCoursePage from './components/MyCoursePage';
import MyCoursesDashboard from './components/MyCoursesDashboard';

const LayoutWrapper = () => {
  const location = useLocation();

  const isAdminRoute =
    location.pathname.startsWith("/dashboard") || location.pathname.startsWith("/admin");

  // Exclude carousel & footer on these specific public routes
  const noLayoutRoutes = [
    
    "/paymentpage",
    "/certificates",
  ];

  const isExcludedRoute = noLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!isAdminRoute && !isExcludedRoute && <CustomNavbar />}
      {!isAdminRoute && !isExcludedRoute && <CarouselSection />}

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
        <Route path="/mycourses" element={<MyCoursesDashboard />} />
        <Route path="/mycourse/:courseId" element={<MyCoursePage />} />

        {/* Admin Routes */}
        <Route
          path="/admin/users"
          element={
            <AdminLayoutWithNavbar>
              <AdminUsers />
            </AdminLayoutWithNavbar>
          }
        />
        <Route
          path="/users/edit/:id"
          element={
            <AdminLayoutWithNavbar>
              <AdminUsersEdit />
            </AdminLayoutWithNavbar>
          }
        />
        <Route
          path="/admin/payments"
          element={
            <AdminLayoutWithNavbar>
              <AdminPayments />
            </AdminLayoutWithNavbar>
          }
        />
        <Route
          path="/admin/courses"
          element={
            <AdminLayoutWithNavbar>
              <AdminCourse />
            </AdminLayoutWithNavbar>
          }
        />
        <Route
          path="/admin/courses/add"
          element={
            <AdminLayoutWithNavbar>
              <AdminCourseAdd />
            </AdminLayoutWithNavbar>
          }
        />
        <Route
          path="/admin/courses/edit/:id"
          element={
            <AdminLayoutWithNavbar>
              <AdminCourseEdit />
            </AdminLayoutWithNavbar>
          }
        />
        <Route
          path="/admin/users/add"
          element={
            <AdminLayoutWithNavbar>
              <AdminUsersAdd />
            </AdminLayoutWithNavbar>
          }
        />
        <Route
          path="/admin/course-progress"
          element={
            <AdminLayoutWithNavbar>
              <AdminCourseProgress />
            </AdminLayoutWithNavbar>
          }
        />
        <Route
          path="/admin/certificates"
          element={
            <AdminLayoutWithNavbar>
              <AdminCertificate />
            </AdminLayoutWithNavbar>
          }
        />
      </Routes>

      {!isAdminRoute && !isExcludedRoute && <Footer />}
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

import React, { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";
import BgImage from '../assets/paymentbgimg.png'; // Ensure correct image path

import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { createPayment } from "./Redux/payment/paymentAction";
import { addCourseEnrollment } from "./Redux/userCourses/userCoursesAction";
import { FaCreditCard, FaUser, FaBook, FaRupeeSign } from "react-icons/fa";
  import { Row, Col, Card } from "react-bootstrap";


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const course = location.state?.course;
  const dispatch = useDispatch();

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const user_id = userInfo?.user?.id;
  const amount = course?.selling_price || 0;

  useEffect(() => {
    if (!course || !user_id) {
      setSnackbar({
        open: true,
        message: "❌ Missing course or user info",
        severity: "error",
      });
      navigate("/allcourses");
    } else {
      loadRazorpayScript().then((loaded) => {
        if (!loaded) {
          setSnackbar({
            open: true,
            message: "❌ Failed to load Razorpay SDK",
            severity: "error",
          });
        }
      });
    }
  }, [course]);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) return resolve(true);
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const sendPaymentToServer = async (response) => {
    const payload = {
      user_id,
      amount: Number(amount).toFixed(2),
      payment_status: "Completed",
      payment_method: "Razorpay",
      transaction_id: "TXN" + new Date().getTime(),
      razorpay_payment_id: response.razorpay_payment_id,
      razorpay_signature: response.razorpay_signature,
      course_id: course.id,
    };

    try {
      await dispatch(createPayment(payload));

      await dispatch(
        addCourseEnrollment({
          user_id,
          course_id: course.id,
          course_price: Number(amount).toFixed(2),
        })
      );

      setSnackbar({
        open: true,
        message: "✅ Payment successful and recorded!",
        severity: "success",
      });

      setTimeout(() => {
        navigate(`/mycourse/${course.id}`, {
          state: { course },
        });
      }, 1500);
    } catch (error) {
      console.error("❌ Error saving payment:", error);
      setSnackbar({
        open: true,
        message: "❌ Failed to save payment to server",
        severity: "error",
      });
    }
  };

  const openRazorpay = () => {
    const options = {
      key: "rzp_test_GRRNoJBdPElkDv",
      amount: amount * 100,
      currency: "INR",
      name: "My Store",
      description: `Payment for ${course.title}`,
      handler: sendPaymentToServer,
      prefill: {
        name: userInfo?.user?.name,
        email: userInfo?.user?.email,
        contact: userInfo?.user?.phone,
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handleCloseSnackbar = () => setSnackbar({ ...snackbar, open: false });

  return (
 <div
      className="py-5 px-3"
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
    <div
  className="container bg-white p-4 rounded-4 shadow"
  style={{
    maxWidth: "1000px",     // limits overall width
    margin: "0 auto",       // centers it
    padding: "2rem",        // balanced padding
  }}
>
  <h2
    className="text-center mb-4"
    style={{ fontWeight: "700", color: "#4B0082", fontSize: "2.2rem" }}
  >
    <FaCreditCard className="mb-1 me-2" /> Secure Checkout
  </h2>

  <div className="row">
    {/* Course & Info */}
    <div className="col-md-8 mb-4">
      <div className="card p-3 shadow-sm border-0 rounded-4">
        <Row>
          <Col md={6}>
            <h5 className="text-dark fw-bold mb-2">{course?.title}</h5>
            <p className="text-muted" style={{ fontSize: "0.9rem" }}>
              {course?.description}
            </p>
            {course?.image && (
              <div className="mb-2">
                <img
                  src={course.image}
                  alt={course.title}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "0.5rem",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
            )}
            <div>
              <h6 className="text-success mb-0">
                Price: <FaRupeeSign className="me-1" /> {course?.selling_price}
              </h6>
            </div>
          </Col>

          <Col md={6}>
            <Card className="p-3 shadow-sm border-0 bg-light h-100 rounded-3">
              <h6 className="text-secondary fw-semibold mb-2">
                <FaBook className="me-2" /> Course Info
              </h6>
              <ul className="list-unstyled small">
                <li><strong>ID:</strong> {course?.id}</li>
                <li><strong>Duration:</strong> {course?.duration}</li>
                <li><strong>Original Price:</strong> ₹{course?.price}</li>
                <li><strong>Premium:</strong> {course?.is_premium ? "Yes" : "No"}</li>
              </ul>
            </Card>
          </Col>
        </Row>
      </div>
    </div>

    {/* Right Column */}
    <div className="col-md-4">
      {/* User Info */}
      <div className="card p-3 shadow-sm border-0 mb-3 rounded-4">
        <h6 className="text-secondary fw-semibold mb-2">
          <FaUser className="me-2" /> User Info
        </h6>
        <ul className="list-unstyled small mb-0">
          <li><strong>Name:</strong> {userInfo?.user?.name}</li>
          <li><strong>Email:</strong> {userInfo?.user?.email}</li>
          <li><strong>Phone:</strong> {userInfo?.user?.phone}</li>
          <li><strong>User ID:</strong> {user_id}</li>
        </ul>
      </div>

      {/* Billing */}
      <div className="card p-3 shadow-sm border-0 mb-3 bg-light rounded-4">
        <h6 className="text-secondary fw-semibold mb-2">🧾 Billing Summary</h6>
        <div className="d-flex justify-content-between mb-1 small">
          <span>Price</span>
          <strong>₹{course?.selling_price}</strong>
        </div>
        <div className="d-flex justify-content-between mb-1 small">
          <span>Discount</span>
          <strong>₹0</strong>
        </div>
        <hr />
        <div className="d-flex justify-content-between small">
          <span><strong>Total</strong></span>
          <strong className="text-success">₹{course?.selling_price}</strong>
        </div>
      </div>

      {/* Pay Button */}
      <button
        className="btn btn-success btn-md w-100 shadow-sm rounded-3"
        onClick={openRazorpay}
        style={{ fontWeight: "600", letterSpacing: "0.5px" }}
      >
        🔐 Pay ₹{course?.selling_price} Securely
      </button>
    </div>
  </div>
</div>

    </div>
  );

};

export default PaymentPage;

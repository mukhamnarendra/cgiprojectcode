import React, { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const course = location.state?.course;

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const amount = course?.selling_price || 0;

  useEffect(() => {
    if (!course) {
      setSnackbar({
        open: true,
        message: "❌ No course selected",
        severity: "error",
      });
      navigate("/allcourses"); // redirect if accessed directly
    } else {
      loadRazorpayScript().then((loaded) => {
        if (loaded) openRazorpay();
        else {
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
    try {
      const payload = {
        user_id: 90001, // dynamically set in real projects
        amount: amount,
        payment_status: "Success",
        payment_method: "Razorpay",
        transaction_id: "TXN" + new Date().getTime(),
        razorpay_order_id: response.razorpay_order_id || "auto_order_id",
        razorpay_payment_id: response.razorpay_payment_id,
        razorpay_signature: response.razorpay_signature || "auto_signature",
      };

      const res = await axios.post(`http://${process.env.REACT_APP_IP_ADDRESS}/api/payments`, payload);
      console.log("✅ Payment saved:", res.data);
      navigate("/allcourses");
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
      key: "rzp_test_GRRNoJBdPElkDv", // Replace with your key
      amount: amount * 100,
      currency: "INR",
      name: "My Store",
      description: `Payment for ${course.title}`,
      handler: function (response) {
        setSnackbar({
          open: true,
          message: `✅ Payment Successful! ID: ${response.razorpay_payment_id}`,
          severity: "success",
        });
        sendPaymentToServer(response);
      },
      prefill: {
        name: "Loki",
        email: "loki@gmail.com",
        contact: "8374307933",
      },
      theme: {
        color: "#6C2BD9",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <div style={{ backgroundColor: "#a889dfff", minHeight: "100vh", paddingTop: "50px" }}>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: "100%" }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default PaymentPage;

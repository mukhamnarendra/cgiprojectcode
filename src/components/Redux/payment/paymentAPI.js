// src/features/payment/paymentAPI.js
import axios from "axios";

const BASE_URL = `http://${process.env.REACT_APP_IP_ADDRESS}/api/payments`; // adjust IP if needed

export const fetchPayments = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const savePayment = async (paymentData) => {
  const response = await axios.post(BASE_URL, paymentData);
  return response.data;
};

export const updatePaymentStatus = async (paymentId, status) => {
  const response = await axios.patch(`${BASE_URL}/${paymentId}`, { status });
  return response.data;
};

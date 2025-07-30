// src/features/payment/paymentActions.js
import {
  setPayments,
  setFilteredPayments,
  setLoading,
  setError,
} from "./paymentSlice";
import {
  fetchPayments,
  savePayment,
} from "./paymentAPI";

export const getAllPayments = (userId = null) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const data = await fetchPayments();
    dispatch(setPayments(data));
     if (userId) {
      const filtered = data.filter((payment) => payment.user_id == userId);
      dispatch(setFilteredPayments(filtered));
    } else {
      dispatch(setFilteredPayments(data));
    }
  } catch (error) {
    dispatch(setError(error.response?.data?.message || error.message));
  }
};

export const createPayment = (paymentData) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await savePayment(paymentData);
    dispatch(getAllPayments()); // Refresh list if needed
    return response; // Return to use in component
  } catch (error) {
    dispatch(setError(error.response?.data?.message || error.message));
    throw error; // Throw to handle in component
  }
};

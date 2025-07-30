
import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./user/userSlice"
import courseSliceReducer from "./courses/courseSlice"
import paymentSliceReducer from "./payment/paymentSlice"
import certificateSliceReducer from "./certificates/certificateSlice"
import courseProgressSliceReducer from "./courseProgessSlice/courseProgessSlice"
import userCoursesSliceReducer from "./userCourses/userCoursesSlice"


export const store = configureStore({
  reducer: {
    user:userSliceReducer,
    course:courseSliceReducer,
    payment: paymentSliceReducer,
    certificate: certificateSliceReducer,
    courseProgress: courseProgressSliceReducer,
    userCourses: userCoursesSliceReducer,
  }
});

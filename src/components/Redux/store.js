
import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./user/userSlice"
import courseSliceReducer from "./courses/courseSlice"


export const store = configureStore({
  reducer: {
    user:userSliceReducer,
    course:courseSliceReducer
  
    
  }
});

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import courseReducer from "../features/courses/courseSlice";
import messageReducer from "../features/message/messageSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    course: courseReducer,
    message: messageReducer,
    user: userReducer,
  },
});

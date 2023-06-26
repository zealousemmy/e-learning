import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import courseReducer from "../features/courses/courseSlice";
import messageReducer from "../features/message/messageSlice";
import userReducer from "../features/user/userSlice";
import bookmarkReducer from "../features/bookmark/bookmarkSlice";
import AssignmentReducer from "../features/assignment/assignmentSlice";
import StudentAssignmentReducer from "../features/studentAssignement/studentAssignmentSlice";
import BotReducer from "../features/bot/botSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    course: courseReducer,
    message: messageReducer,
    user: userReducer,
    bookmark: bookmarkReducer,
    assignment: AssignmentReducer,
    student_assignment: StudentAssignmentReducer,
    bot: BotReducer,
  },
});

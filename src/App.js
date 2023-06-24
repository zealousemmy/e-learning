import {
  NavLink,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./components/pages";
import Login from "./components/pages/login";
import SignUp from "./components/pages/signup";
import { HomePage } from "./components/sidebar/Home";
import SideComp from "./components/sidebar/Index";
import SideBar from "./components/sidebar/sidebar";
import TopProfileCard from "./components/topProfileCard";
import Dashboard from "./dashboard/Index";
import IndexPage from "./dashboard/pages";
import Bookmark from "./dashboard/pages/bookmark";
import Courses from "./dashboard/pages/courses";
import Message from "./dashboard/pages/message";
import Profile from "./dashboard/pages/profile";
import "react-toastify/dist/ReactToastify.css";
import Setting from "./dashboard/pages/setting";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetUser } from "./features/user/userSlice";
import CreateLecturer from "./dashboard/pages/create-lecturer";
import Logout from "./dashboard/pages/logout";
import ModalComponent from "./components/modal/modalComponent";
import AddCourse from "./components/addCourse/addCourse";
import CheckcourseAndAssignment from "./dashboard/pages/checkcourseAndAssignment";
import AddAssignment from "./components/AddAssignment/addAssignment";
import AddStudentAssignment from "./components/AddStudentAssignment/addStudentAssignment";

// import io from "socket.io-client";
// import SidebarComp from "components/sidebar/SidebarComp";

// const socket = io.connect("http://localhost:5001");

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { tokenDetail } = useSelector((state) => state?.auth);
  const { checkmodal, checkAssignment, studentAssignmentchecker } = useSelector(
    (state) => state.course
  );

  useEffect(() => {
    if (tokenDetail) {
      dispatch(GetUser());
    }
  }, [tokenDetail]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route exact index element={<IndexPage />} />
          <Route path="profile" exact element={<Profile />} />
          <Route path="course" exact element={<Courses />} />
          <Route path="book-mark" exact element={<Bookmark />} />
          <Route path="messages" exact element={<Message />} />
          <Route path="settings" exact element={<Setting />} />
          <Route path="create-lecturer" exact element={<CreateLecturer />} />
          <Route
            path="courseAndassginment/:course"
            exact
            element={<CheckcourseAndAssignment />}
          />
          <Route path="logout" exact element={<Logout />} />
        </Route>
      </Routes>

      <ModalComponent open={checkmodal}>
        <AddCourse />
      </ModalComponent>

      <ModalComponent open={checkAssignment}>
        <AddAssignment />
      </ModalComponent>

      <ModalComponent open={studentAssignmentchecker}>
        <AddStudentAssignment />
      </ModalComponent>
      <ToastContainer />
    </>
  );
}

export default App;

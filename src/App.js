import { NavLink, Route, Routes } from "react-router-dom";
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
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GetUser } from "./features/user/userSlice";
// import io from "socket.io-client";
// import SidebarComp from "components/sidebar/SidebarComp";

// const socket = io.connect("http://localhost:5001");

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetUser());
  }, []);

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
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;

import { NavLink, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/sidebar/Home";
import SideComp from "./components/sidebar/Index";
import SideBar from "./components/sidebar/sidebar";
import TopProfileCard from "./components/topProfileCard";
import Dashboard from "./dashboard/Index";
import IndexPage from "./dashboard/pages";
import Bookmark from "./dashboard/pages/bookmark";
import Courses from "./dashboard/pages/courses";
import Profile from "./dashboard/pages/profile";

// import SidebarComp from "components/sidebar/SidebarComp";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route exact index element={<IndexPage />} />
        <Route path="profile" exact element={<Profile />} />
        <Route path="course" exact element={<Courses />} />
        <Route path="book-mark" exact element={<Bookmark />} />
      </Route>
    </Routes>
  );
}

export default App;

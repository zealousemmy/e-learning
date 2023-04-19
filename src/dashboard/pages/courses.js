import React, { useEffect } from "react";
import StudentCourses from "../../components/courses";
import TopProfileCard from "../../components/topProfileCard";
import { myCourses } from "../../features/courses/courseSlice";
import { useDispatch } from "react-redux";

const Courses = () => {
  const disptach = useDispatch();
  useEffect(() => {
    disptach(
      myCourses({
        level: "100",
        department: "computer science",
        faculty: "ict",
      })
    );
  }, []);

  return (
    <div className="container-fluid">
      <TopProfileCard />
      <h1>Courses</h1>
      <StudentCourses />
    </div>
  );
};

export default Courses;

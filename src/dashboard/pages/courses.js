import React from "react";
import StudentCourses from "../../components/courses";
import TopProfileCard from "../../components/topProfileCard";

const Courses = () => {
  return (
    <div className="container-fluid">
      <TopProfileCard />
      <h1>Courses</h1>
      <StudentCourses />
    </div>
  );
};

export default Courses;

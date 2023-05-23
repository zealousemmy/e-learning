import React, { useEffect, useState } from "react";
import StudentCourses from "../../components/courses";
import TopProfileCard from "../../components/topProfileCard";
import {
  GetCourseBookMarkACourse,
  LecturalCourses,
  myCourses,
} from "../../features/courses/courseSlice";
import { useDispatch, useSelector } from "react-redux";
import SpinnerMain from "../../components/Spinner/Spinner1";

const Courses = () => {
  const disptach = useDispatch();
  const { userDetails } = useSelector((state) => state.user);
  const [loader, setLoader] = useState(false);

  const fetchData = async () => {
    setLoader(true);

    if (userDetails?.bioType === "lectural") {
      disptach(LecturalCourses({ fullname: userDetails?.fullname }));
    } else {
      disptach(GetCourseBookMarkACourse());

      await disptach(
        myCourses({
          level: userDetails?.level,
          department: userDetails?.department,
          faculty: userDetails?.faculty,
        })
      );
    }
    setLoader(false);
  };

  useEffect(() => {
    fetchData();
  }, [userDetails]);

  return (
    <div className="container-fluid">
      <TopProfileCard />
      <div style={{ padding: "30px 0px" }}>
        <h1>Courses</h1>

        {loader ? (
          <div
            style={{
              width: "100%",
              height: "20vh",
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <SpinnerMain />
          </div>
        ) : (
          <StudentCourses />
        )}
      </div>
    </div>
  );
};

export default Courses;

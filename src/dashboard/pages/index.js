import React, { useEffect, useState } from "react";
import Card from "../../components/card";
import CoursesCards from "../../components/card/courses.cards";
import Notification from "../../components/staticsAndNotifications";
import TopProfileCard from "../../components/topProfileCard";
import { useDispatch, useSelector } from "react-redux";
import {
  LecturalCoursesCount,
  myCoursesCount,
} from "../../features/courses/courseSlice";
import SpinnerMain from "../../components/Spinner/Spinner1";
import APIs from "../../features/apiUrl";

const IndexPage = () => {
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.user);
  const [loader, setLoader] = useState(false);
  const { tokenDetail } = useSelector((state) => state.auth);

  const FetchData = async () => {
    setLoader(true);

    APIs.defaults.headers["Authorization"] = `Bearer ${tokenDetail}`;

    await dispatch(
      myCoursesCount({
        level: userDetails?.level,
        department: userDetails?.department,
        faculty: userDetails?.faculty,
      })
    );

    setLoader(false);
  };

  const FetchLecturalData = async () => {
    setLoader(true);

    APIs.defaults.headers["Authorization"] = `Bearer ${tokenDetail}`;
    await dispatch(
      LecturalCoursesCount({
        fullname: userDetails?.fullname,
      })
    );

    setLoader(false);
  };

  useEffect(() => {
    if (userDetails?.bioType === "lectural") {
      FetchLecturalData();
    } else {
      FetchData();
    }
  }, [userDetails]);

  return (
    <div className="container-fluid">
      <TopProfileCard />
      <div className="dashboard-heading mb-5">
        <h3 className="fs-22 font-weight-semi-bold">Dashboard</h3>
      </div>

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
        <>
          <CoursesCards />
          <Notification />
        </>
      )}
    </div>
  );
};

export default IndexPage;

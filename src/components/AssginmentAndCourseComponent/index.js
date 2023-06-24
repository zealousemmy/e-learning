import React from "react";
import { AssginmentDiv } from "./Assignment.styles";
import { TRANSAC_SWITCHER } from "../../features/courses/courseSlice";
import { useDispatch, useSelector } from "react-redux";
import AssginmentTable from "../Assignment";
import StudentCourses from "../courses";
import AssginmentForStudentTable from "../AssginmentForStudent";
import CourseShowCase from "../CourseShowCase";

const AssignmentAndCourse = () => {
  const dispatch = useDispatch();

  const { transacSwitcher } = useSelector((state) => state.course);

  return (
    <AssginmentDiv>
      <p>Check Assginment and courses</p>

      <div className="tabWrapper">
        {tabContent?.map((item, key) => (
          <div
            key={key}
            onClick={() => {
              if (item.title === "Courses") {
                dispatch(TRANSAC_SWITCHER(item?.title));
              } else {
                dispatch(TRANSAC_SWITCHER(item?.title));
              }
            }}
            className={`tab1 ${item.title === transacSwitcher && "tabSuccess"}`}
          >
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      {transacSwitcher === "Courses" ? (
        <CourseShowCase />
      ) : transacSwitcher === "Check Assignment" ? (
        <AssginmentForStudentTable />
      ) : (
        <AssginmentTable />
      )}
    </AssginmentDiv>
  );
};

const tabContent = [
  { title: "Courses" },
  { title: "Check Assignment" },
  { title: "Assginment" },
];

export default AssignmentAndCourse;

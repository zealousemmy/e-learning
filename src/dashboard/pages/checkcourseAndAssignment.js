import React, { useEffect, useState } from "react";
import AssignmentAndCourse from "../../components/AssginmentAndCourseComponent";
import {
  GetCourseBookMarkACourse,
  LecturalCourses,
  myCourses,
  myInstantCourses,
} from "../../features/courses/courseSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  LecturalAssignment,
  StudentLecturalAssignment,
} from "../../features/assignment/assignmentSlice";
import { Route, useParams } from "react-router-dom";
import {
  AllStudentAssignment,
  StudentAssignment,
} from "../../features/studentAssignement/studentAssignmentSlice";

const CheckcourseAndAssignment = () => {
  const disptach = useDispatch();
  const { userDetails } = useSelector((state) => state.user);
  const [loader, setLoader] = useState(false);
  const { course } = useParams();

  const fetchData = async () => {
    setLoader(true);

    if (course && userDetails) {
      disptach(myInstantCourses(course));
      if (userDetails?.bioType === "lectural") {
        disptach(
          LecturalAssignment({ course: course, createdBy: userDetails._id })
        );

        disptach(AllStudentAssignment({ course: course }));
      } else {
        disptach(GetCourseBookMarkACourse());

        await disptach(
          StudentAssignment({ course: course, createdBy: userDetails._id })
        );

        await disptach(StudentLecturalAssignment({ course: course }));

        await disptach(
          myCourses({
            level: userDetails?.level,
            department: userDetails?.department,
            faculty: userDetails?.faculty,
          })
        );
      }
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [userDetails, course]);

  return (
    <>
      <AssignmentAndCourse />
    </>
  );
};

export default CheckcourseAndAssignment;

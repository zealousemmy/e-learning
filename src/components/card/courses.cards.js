import React, { useEffect, useState } from "react";
import Card from ".";
import data from "../../data/data.json";
import lectural from "../../data/lectural.json";
import { useSelector } from "react-redux";

const CoursesCards = () => {
  const { mycoursescount, generalcoursecount, facultycoursecount } =
    useSelector((state) => state.course);

  const { userDetails } = useSelector((state) => state.user);

  const [change, setChanges] = useState(false);

  useEffect(() => {
    setChanges(!change);

    if (userDetails?.bioType === "lectural") {
      lectural["student-course"][0]["number-of-courses"] = generalcoursecount;

      lectural["student-course"][1]["number-of-courses"] = mycoursescount;
    } else {
      data["student-course"][0]["number-of-courses"] = generalcoursecount;

      data["student-course"][1]["number-of-courses"] = facultycoursecount;

      data["student-course"][2]["number-of-courses"] = mycoursescount;
    }
  }, [mycoursescount, generalcoursecount, facultycoursecount]);

  return (
    <div className="row">
      {userDetails?.bioType === "lectural" ? (
        <>
          {lectural["student-course"].map((courses, key) => (
            <Card
              key={key}
              text={courses["text"]}
              number={courses["number-of-courses"]}
              iconColor={courses["color"]}
              svgIcon={courses["icon"]}
            />
          ))}
        </>
      ) : (
        <>
          {data["student-course"].map((courses, key) => (
            <Card
              key={key}
              text={courses["text"]}
              number={courses["number-of-courses"]}
              iconColor={courses["color"]}
              svgIcon={courses["icon"]}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default CoursesCards;

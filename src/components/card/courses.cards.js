import React from "react";
import Card from ".";
import data from "../../data/data.json";
const CoursesCards = () => {
  console.log(data);
  return (
    <div className="row">
      {data["student-course"].map((courses) => (
        <Card
          text={courses["text"]}
          number={courses["number-of-courses"]}
          iconColor={courses["color"]}
          svgIcon={courses["icon"]}
        />
      ))}
    </div>
  );
};

export default CoursesCards;

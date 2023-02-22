import React from "react";
import Card from "../../components/card";
import CoursesCards from "../../components/card/courses.cards";
import Notification from "../../components/staticsAndNotifications";
import TopProfileCard from "../../components/topProfileCard";

const IndexPage = () => {
  return (
    <div className="container-fluid">
      <TopProfileCard />
      <div className="dashboard-heading mb-5">
        <h3 className="fs-22 font-weight-semi-bold">Dashboard</h3>
      </div>
      {/* <Card /> */}
      <CoursesCards />
      <Notification />
    </div>
  );
};

export default IndexPage;

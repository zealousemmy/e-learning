import React from "react";
import Card from "../../components/card";
import TopProfileCard from "../../components/topProfileCard";

const IndexPage = () => {
  return (
    <div className="container-fluid">
      <TopProfileCard />
      <div className="dashboard-heading mb-5">
        <h3 className="fs-22 font-weight-semi-bold">Dashboard</h3>
      </div>
      <Card />
    </div>
  );
};

export default IndexPage;

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import ASideComp from "./sidebar";

const Dashboard = (props) => {
  return (
    <div>
      <Header />
      <ASideComp />
      <div class="dashboard-content-wrap">
        {props.children}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

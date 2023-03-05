import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import ASideComp from "./sidebar";
import MobileSidebar from "./sidebar/mobileSidebar";
const Dashboard = (props) => {
  const [left, setLeft] = useState(-25);
  const handleShowSideBar = () => {
    left === -25 ? setLeft(0) : setLeft(-25);
  };
  const handleCloseSideBar = () => {
    setLeft(0);
  };
  return (
    <div>
      <Header handleClick={handleShowSideBar} />
      <ASideComp />
      <MobileSidebar
        navlinkClose={handleCloseSideBar}
        leftValue={left}
        handleCloseMenu={handleShowSideBar}
      />
      <div class="dashboard-content-wrap">
        {props.children}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

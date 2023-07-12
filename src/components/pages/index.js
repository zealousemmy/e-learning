import React, { useState } from "react";
import HomeHeader from "../header";
import Navbar from "../navbar";
import MobileNav from "../navbar/mobile";
import { Navigate } from "react-router-dom";

const Home = () => {
  const [left, setLeft] = useState(-75);
  const handleShowSideBar = () => {
    left === -75 ? setLeft(0) : setLeft(-75);
  };
  const handleCloseSideBar = () => {
    setLeft(0);
  };
  const isAuthenticated = localStorage.getItem("token");

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/dashboard" />
      ) : (
        <div className="">
          <Navbar handleClick={handleShowSideBar} />
          <MobileNav
            leftValue={left}
            handleCloseMenu={handleShowSideBar}
            navlinkClose={handleCloseSideBar}
          />
          <HomeHeader />
        </div>
      )}
    </>
  );
};

export default Home;

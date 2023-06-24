import React, { useState } from "react";
import LoginForm from "../form/login";
import HomeHeader from "../header";
import LoginSignUpHeader from "../header/login-signUp";
import Navbar from "../navbar";
import MobileNav from "../navbar/mobile";

const Login = () => {
  const [left, setLeft] = useState(-75);
  const handleShowSideBar = () => {
    left === -75 ? setLeft(0) : setLeft(-75);
  };
  const handleCloseSideBar = () => {
    setLeft(0);
  };
  return (
    <div className="">
      <Navbar handleClick={handleShowSideBar} />
      <MobileNav
        leftValue={left}
        handleCloseMenu={handleShowSideBar}
        navlinkClose={handleCloseSideBar}
      />
      <LoginSignUpHeader
        pageTitle={"Login"}
        pageLink={"/signup"}
        linkText="sign-up"
      />
      <LoginForm />
    </div>
  );
};

export default Login;

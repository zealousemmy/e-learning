import React, { useState } from "react";
import SignupForm from "../form/signup";
import HomeHeader from "../header";
import LoginSignUpHeader from "../header/login-signUp";
import Navbar from "../navbar";
import MobileNav from "../navbar/mobile";

const SignUp = () => {
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
        pageLink={"/login"}
        pageTitle={"Sign Up"}
        linkText="Login"
      />
      <SignupForm />
    </div>
  );
};

export default SignUp;

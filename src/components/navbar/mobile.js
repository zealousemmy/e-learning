import React from "react";
import { NavLink } from "react-router-dom";
import { StyledMobileNav } from "./styles";

const MobileNav = ({ leftValue, handleCloseMenu, navlinkClose }) => {
  return (
    <StyledMobileNav
      left={leftValue}
      className=" custom-scrollbar-styled main-off-canvas-menu"
    >
      <div className="sideBarContainer custom-scrollbar-styled main-off-canvas-menu">
        <button
          class="off-canvas-menu-close main-menu-close icon-element icon-element-sm shadow-sm"
          title="Close menu"
          onClick={handleCloseMenu}
        >
          <i className="la la-times"></i>
        </button>
        <ul className="generic-list-item off-canvas-menu-list pt-90px">
          <li>
            <NavLink to="/" onClick={navlinkClose}>
              Home
            </NavLink>
          </li>
        </ul>
        <div className="btn-box px-4 pt-5 text-center">
          <NavLink
            to="/login"
            onClick={navlinkClose}
            className="btn theme-btn theme-btn-sm theme-btn-transparent"
          >
            <i class="la la-sign-in mr-1"></i> Login
          </NavLink>
          <span className="fs-15 font-weight-medium d-inline-block mx-2">
            Or
          </span>
          <NavLink
            to="/signup"
            onClick={navlinkClose}
            className="btn theme-btn theme-btn-sm shadow-none"
          >
            <i class="la la-plus mr-1"></i> Sign up
          </NavLink>
        </div>
      </div>
    </StyledMobileNav>
  );
};

export default MobileNav;

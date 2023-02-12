import React from "react";
import { NavLink, Link } from "react-router-dom";
const SideComp = () => {
  return (
    <div className="off-canvas-menu dashboard-off-canvas-menu off--canvas-menu custom-scrollbar-styled pt-20px">
      <div
        class="off-canvas-menu-close dashboard-menu-close icon-element icon-element-sm shadow-sm"
        data-toggle="tooltip"
        data-placement="left"
        title="Close menu"
      >
        <i className="la la-times"></i>
      </div>
      <div className="logo-box px-4">
        <a href="index.html" class="logo">
          <img src="images/logo.png" alt="logo" />
        </a>
      </div>
      <ul className="generic-list-item off-canvas-menu-list off--canvas-menu-list pt-35px">
        <li>
          <NavLink to="#">
            <svg
              class="mr-2"
              xmlns="http://www.w3.org/2000/svg"
              height="18px"
              viewBox="0 0 24 24"
              width="18px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z" />
            </svg>{" "}
            Dashboard
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideComp;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import defaultLeftValue from "./defaults";
import { sideArr } from "./sidebarArr";
import { StyledMobileSideNav } from "./style";

const MobileSidebar = ({ leftValue, handleCloseMenu, navlinkClose }) => {
  return (
    <StyledMobileSideNav
      left={leftValue}
      className=" custom-scrollbar-styled main-off-canvas-menu"
    >
      <div className=" dashboard-off-canvas-menu  custom-scrollbar-styled pt-20px sideBarContainer">
        <button
          class="off-canvas-menu-close dashboard-menu-close icon-element icon-element-sm shadow-sm"
          data-toggle="tooltip"
          data-placement="left"
          title="Close menu"
          onClick={handleCloseMenu}
        >
          <i className="la la-times"></i>
        </button>
        <div className="logo-box px-4">
          <NavLink to="/dashboard" class="logo" onClick={handleCloseMenu}>
            <img
              src="/assets/img/WhatsApp_Image_2023-03-05_at_14.59.16-removebg-preview.png"
              alt="logo"
              height={"50"}
              width={"100%"}
            />
          </NavLink>
        </div>
        <ul className="generic-list-item off-canvas-menu-list off--canvas-menu-list pt-35px">
          {sideArr.map((items) => (
            <li>
              <NavLink to={items.link} onClick={navlinkClose}>
                <svg
                  class="mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="18px"
                  viewBox="0 0 24 24"
                  width="18px"
                >
                  {/* <path d="M0 0h24v24H0V0z" fill="none" /> */}
                  <path d={items.icon} />
                </svg>
                {items.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </StyledMobileSideNav>
  );
};

export default MobileSidebar;

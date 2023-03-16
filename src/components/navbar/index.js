import React from "react";
import { NavLink } from "react-router-dom";
import { NavContainer } from "./styles";
const Navbar = ({ handleClick }) => {
  return (
    <NavContainer className="header-menu-content pr-150px pl-150px bg-white">
      <div className="main-menu-content">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <div className="logo-box justify-content-between">
              <a href="index.html" class="logo">
                <img
                  src="/assets/img/WhatsApp_Image_2023-03-05_at_14.59.16-removebg-preview.png"
                  alt="logo"
                />
              </a>
              <div className="user-btn-action">
                <div
                  class="off-canvas-menu-toggle cat-menu-toggle icon-element icon-element-sm shadow-sm mr-2"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Category menu"
                >
                  <i className="la la-th-large"></i>
                </div>
                <button
                  class="off-canvas-menu-toggle main-menu-toggle icon-element icon-element-sm shadow-sm"
                  title="Main menu"
                  onClick={handleClick}
                >
                  <i className="la la-bars"></i>
                </button>
              </div>
              {/* <!-- end menu-category --> */}
            </div>
          </div>
          {/* <!-- end col-lg-2 --> */}
          <div className="col-lg-9">
            <div className="menu-wrapper">
              <nav className="main-menu">
                <ul>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                </ul>
                {/* <!-- end ul --> */}
              </nav>
              {/* <!-- end main-menu --> */}
              <div className="nav-right-button">
                <NavLink
                  to="/login"
                  className="btn theme-btn theme-btn-sm lh-26 theme-btn-transparent mr-2"
                >
                  <i class="la la-sign-in mr-1"></i> Login
                </NavLink>
                <NavLink
                  to="/signup"
                  className="btn theme-btn theme-btn-sm lh-26 shadow-none"
                >
                  <i class="la la-plus mr-1"></i> Sign up
                </NavLink>
              </div>
              {/* <!-- end nav-right-button --> */}
            </div>
            {/* <!-- end menu-wrapper --> */}
          </div>
          {/* <!-- end col-lg-9 --> */}
        </div>
        {/* <!-- end row --> */}
      </div>
    </NavContainer>
  );
};

export default Navbar;

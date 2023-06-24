import React from "react";
import { NavLink } from "react-router-dom";
const Header = ({ handleClick, handleCloseMenu }) => {
  return (
    <div className="header-menu-content dashboard-menu-content pr-30px pl-30px bg-white shadow-sm">
      <div className="container-fluid">
        <div className="main-menu-content">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="logo-box logo--box">
                <NavLink to="/dashboard" class="logo" onClick={handleCloseMenu}>
                  <img
                    src="/assets/img/WhatsApp_Image_2023-03-05_at_14.59.16-removebg-preview.png"
                    alt="logo"
                    height={"50"}
                    width={"100%"}
                  />
                </NavLink>
                <div className="user-btn-action">
                  <div
                    class="search-menu-toggle icon-element icon-element-sm shadow-sm mr-2"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Search"
                  >
                    <i className="la la-search"></i>
                  </div>
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
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Main menu"
                    onClick={handleClick}
                  >
                    <i className="la la-bars"></i>
                  </button>
                </div>
              </div>
              {/* <!-- end logo-box --> */}
              <div className="menu-wrapper">
                <form method="post" className="mr-auto ml-0">
                  <div className="form-group mb-0">
                    <input
                      class="form-control form--control form--control-gray pl-3"
                      type="text"
                      name="search"
                      placeHolder="Search for anything"
                    />
                    <span className="la la-search search-icon"></span>
                  </div>
                </form>
                {/* <!-- end nav-right-button --> */}
              </div>

              {/* <!-- end menu-wrapper --> */}
            </div>
            {/* <!-- end col-lg-10 --> */}
          </div>
          {/* <!-- end row --> */}
        </div>
      </div>
      {/* <!-- end container-fluid --> */}
    </div>
  );
};

export default Header;

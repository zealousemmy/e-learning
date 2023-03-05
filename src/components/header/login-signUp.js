import React from "react";
import { NavLink } from "react-router-dom";

const LoginSignUpHeader = ({ pageTitle, pageLink, linkText }) => {
  return (
    <section className="breadcrumb-area section-padding img-bg-2">
      <div className="overlay"></div>
      <div className="container">
        <div className="breadcrumb-content d-flex flex-wrap align-items-center justify-content-between">
          <div className="section-heading">
            <h2 className="section__title text-white">{pageTitle}</h2>
          </div>
          <ul className="generic-list-item generic-list-item-white generic-list-item-arrow d-flex flex-wrap align-items-center">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to={pageLink}>{linkText}</NavLink>
            </li>
          </ul>
        </div>
        {/* <!-- end breadcrumb-content --> */}
      </div>
      {/* <!-- end container --> */}
    </section>
  );
};

export default LoginSignUpHeader;

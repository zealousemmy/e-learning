import React from "react";
import { NavLink, Link } from "react-router-dom";
import { sideArr } from "./sidebarArr";
import { StyledSideComp } from "./style";
import { useSelector } from "react-redux";

const ASideComp = () => {
  const { userDetails } = useSelector((state) => state.user);

  return (
    <StyledSideComp
      show="none"
      className="off-canvas-menu dashboard-off-canvas-menu off--canvas-menu custom-scrollbar-styled pt-20px"
    >
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
        {sideArr.map((items) => (
          <>
            {items?.text === "Create Lectural" ? (
              <>
                {userDetails?.admin && (
                  <li>
                    <NavLink to={items.link}>
                      <svg
                        class="mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        height="18px"
                        viewBox="0 0 24 24"
                        width="18px"
                      >
                        <path d={items.icon} />
                      </svg>
                      {items.text}
                    </NavLink>
                  </li>
                )}
              </>
            ) : items?.text === "Bookmarks" ? (
              <>
                {userDetails?.bioType !== "lectural" && (
                  <li>
                    <NavLink to={items.link}>
                      <svg
                        class="mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        height="18px"
                        viewBox="0 0 24 24"
                        width="18px"
                      >
                        <path d={items.icon} />
                      </svg>
                      {items.text}
                    </NavLink>
                  </li>
                )}
              </>
            ) : items?.text === "Create Bot Q&A" ? (
              <>
                {userDetails?.bioType !== "lectural" ? (
                  <li>
                    <NavLink to={items.link}>
                      <svg
                        class="mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        height="18px"
                        viewBox="0 0 24 24"
                        width="18px"
                      >
                        <path d={items.icon} />
                      </svg>
                      LCU AI
                    </NavLink>
                  </li>
                ) : (
                  <li>
                    <NavLink to={items.link}>
                      <svg
                        class="mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        height="18px"
                        viewBox="0 0 24 24"
                        width="18px"
                      >
                        <path d={items.icon} />
                      </svg>
                      {items.text}
                    </NavLink>
                  </li>
                )}
              </>
            ) : (
              <li>
                <NavLink to={items.link}>
                  <svg
                    class="mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18px"
                    viewBox="0 0 24 24"
                    width="18px"
                  >
                    <path d={items.icon} />
                  </svg>
                  {items.text}
                </NavLink>
              </li>
            )}
          </>
        ))}
      </ul>
    </StyledSideComp>
  );
};

export default ASideComp;

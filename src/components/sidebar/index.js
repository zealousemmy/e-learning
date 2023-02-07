import React from "react";

export const HomePage = () => {
  return (
    <div className="header-menu-content dashboard-menu-content pr-30px pl-30px bg-white shadow-sm">
      <div className="container-fluid">
        <div className="main-menu-content">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="logo-box logo--box">
                <a href="index.html" class="logo">
                  <img src="images/logo.png" alt="logo" />
                </a>
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
                  <div
                    class="off-canvas-menu-toggle main-menu-toggle icon-element icon-element-sm shadow-sm"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Main menu"
                  >
                    <i className="la la-bars"></i>
                  </div>
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
                <div className="nav-right-button d-flex align-items-center">
                  <div className="user-action-wrap d-flex align-items-center">
                    <div className="shop-cart course-cart pr-3 mr-3 border-right border-right-gray">
                      <ul>
                        <li>
                          <p className="shop-cart-btn d-flex align-items-center fs-16">
                            My Courses
                            <span className="la la-angle-down fs-13 ml-1"></span>
                          </p>
                          <ul className="cart-dropdown-menu after-none">
                            <li className="media media-card">
                              <a
                                href="lesson-details.html"
                                className="media-img"
                              >
                                <img
                                  class="mr-3"
                                  src="images/small-img-3.jpg"
                                  alt="Course thumbnail image"
                                />
                              </a>
                              <div className="media-body">
                                <h5>
                                  <a href="lesson-details.html">
                                    The Complete JavaScript Course 2021: From
                                    Zero to Expert!
                                  </a>
                                </h5>
                                <div className="skillbar-box pt-3">
                                  <div
                                    className="skillbar skillbar-skillbar"
                                    data-percent="36%"
                                  >
                                    <div className="skillbar-bar skillbar--bar bg-1"></div>
                                  </div>
                                  {/* <!-- End Skill Bar --> */}
                                </div>
                                {/* <!-- End skillbar-box --> */}
                              </div>
                            </li>
                            <li className="media media-card">
                              <a
                                href="lesson-details.html"
                                className="media-img"
                              >
                                <img
                                  class="mr-3"
                                  src="images/small-img-4.jpg"
                                  alt="Course thumbnail image"
                                />
                              </a>
                              <div className="media-body">
                                <h5>
                                  <a href="lesson-details.html">
                                    The Complete JavaScript Course 2021: From
                                    Zero to Expert!
                                  </a>
                                </h5>
                                <div className="skillbar-box pt-3">
                                  <div
                                    className="skillbar skillbar-skillbar"
                                    data-percent="77%"
                                  >
                                    <div className="skillbar-bar skillbar--bar bg-1"></div>
                                  </div>
                                  {/* <!-- End Skill Bar --> */}
                                </div>
                                {/* <!-- End skillbar-box --> */}
                              </div>
                            </li>
                            <li>
                              <a
                                href="my-courses.html"
                                className="btn theme-btn w-100"
                              >
                                Got to my course{" "}
                                <i class="la la-arrow-right icon ml-1"></i>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- end course-cart --> */}
                    <div className="shop-cart pr-3 mr-3 border-right border-right-gray">
                      <ul>
                        <li>
                          <p className="shop-cart-btn d-flex align-items-center">
                            <i className="la la-shopping-cart fs-22"></i>
                            <span className="dot-status bg-1"></span>
                          </p>
                          <ul className="cart-dropdown-menu after-none">
                            <li className="media media-card">
                              <a
                                href="shopping-cart.html"
                                className="media-img"
                              >
                                <img
                                  class="mr-3"
                                  src="images/small-img.jpg"
                                  alt="Cart image"
                                />
                              </a>
                              <div className="media-body">
                                <h5>
                                  <a href="shopping-cart.html">
                                    The Complete JavaScript Course 2021: From
                                    Zero to Expert!
                                  </a>
                                </h5>
                                <span className="d-block lh-18 py-1">
                                  Kamran Ahmed
                                </span>
                                <p className="text-black font-weight-semi-bold lh-18">
                                  $12.99{" "}
                                  <span class="before-price fs-14">
                                    $129.99
                                  </span>
                                </p>
                              </div>
                            </li>
                            <li className="media media-card">
                              <a
                                href="shopping-cart.html"
                                className="media-img"
                              >
                                <img
                                  class="mr-3"
                                  src="images/small-img.jpg"
                                  alt="Cart image"
                                />
                              </a>
                              <div className="media-body">
                                <h5>
                                  <a href="shopping-cart.html">
                                    The Complete JavaScript Course 2021: From
                                    Zero to Expert!
                                  </a>
                                </h5>
                                <span className="d-block lh-18 py-1">
                                  Kamran Ahmed
                                </span>
                                <p className="text-black font-weight-semi-bold lh-18">
                                  $12.99{" "}
                                  <span class="before-price fs-14">
                                    $129.99
                                  </span>
                                </p>
                              </div>
                            </li>
                            <li className="media media-card">
                              <div className="media-body fs-16">
                                <p className="text-black font-weight-semi-bold lh-18">
                                  Total: <span class="cart-total">$12.99</span>{" "}
                                  <span class="before-price fs-14">
                                    $129.99
                                  </span>
                                </p>
                              </div>
                            </li>
                            <li>
                              <a
                                href="shopping-cart.html"
                                className="btn theme-btn w-100"
                              >
                                Got to cart{" "}
                                <i class="la la-arrow-right icon ml-1"></i>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- end shop-cart --> */}
                    <div className="shop-cart wishlist-cart pr-3 mr-3 border-right border-right-gray">
                      <ul>
                        <li>
                          <p className="shop-cart-btn">
                            <i className="la la-heart-o"></i>
                            <span className="dot-status bg-1"></span>
                          </p>
                          <ul className="cart-dropdown-menu after-none">
                            <li>
                              <div className="media media-card">
                                <a
                                  href="course-details.html"
                                  className="media-img"
                                >
                                  <img
                                    class="mr-3"
                                    src="images/small-img.jpg"
                                    alt="Cart image"
                                  />
                                </a>
                                <div className="media-body">
                                  <h5>
                                    <a href="course-details.html">
                                      The Complete JavaScript Course 2021: From
                                      Zero to Expert!
                                    </a>
                                  </h5>
                                  <span className="d-block lh-18 py-1">
                                    Kamran Ahmed
                                  </span>
                                  <p className="text-black font-weight-semi-bold lh-18">
                                    $12.99{" "}
                                    <span class="before-price fs-14">
                                      $129.99
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <a
                                href="#"
                                className="btn theme-btn theme-btn-sm theme-btn-transparent lh-28 w-100 mt-3"
                              >
                                Add to cart{" "}
                                <i class="la la-arrow-right icon ml-1"></i>
                              </a>
                            </li>
                            <li>
                              <div className="media media-card">
                                <a
                                  href="course-details.html"
                                  className="media-img"
                                >
                                  <img
                                    class="mr-3"
                                    src="images/small-img.jpg"
                                    alt="Cart image"
                                  />
                                </a>
                                <div className="media-body">
                                  <h5>
                                    <a href="course-details.html">
                                      The Complete JavaScript Course 2021: From
                                      Zero to Expert!
                                    </a>
                                  </h5>
                                  <span className="d-block lh-18 py-1">
                                    Kamran Ahmed
                                  </span>
                                  <p className="text-black font-weight-semi-bold lh-18">
                                    $12.99{" "}
                                    <span class="before-price fs-14">
                                      $129.99
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <a
                                href="#"
                                className="btn theme-btn theme-btn-sm theme-btn-transparent lh-28 w-100 mt-3"
                              >
                                Add to cart{" "}
                                <i class="la la-arrow-right icon ml-1"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="my-courses.html"
                                className="btn theme-btn w-100"
                              >
                                Got to wishlist{" "}
                                <i class="la la-arrow-right icon ml-1"></i>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- end shop-cart --> */}
                    <div className="shop-cart notification-cart pr-3 mr-3 border-right border-right-gray">
                      <ul>
                        <li>
                          <p className="shop-cart-btn">
                            <i className="la la-bell"></i>
                            <span className="dot-status bg-1"></span>
                          </p>
                          <ul className="cart-dropdown-menu after-none p-0 notification-dropdown-menu">
                            <li className="menu-heading-block d-flex align-items-center justify-content-between">
                              <h4>Notifications</h4>
                              <span className="ribbon fs-14">18</span>
                            </li>
                            <li>
                              <div className="notification-body">
                                <a
                                  href="dashboard.html"
                                  className="media media-card align-items-center"
                                >
                                  <div className="icon-element icon-element-sm flex-shrink-0 bg-1 mr-3 text-white">
                                    <i className="la la-bolt"></i>
                                  </div>
                                  <div className="media-body">
                                    <h5>Your resume updated!</h5>
                                    <span className="d-block lh-18 pt-1 text-gray fs-13">
                                      1 hour ago
                                    </span>
                                  </div>
                                </a>
                                <a
                                  href="dashboard.html"
                                  className="media media-card align-items-center"
                                >
                                  <div className="icon-element icon-element-sm flex-shrink-0 bg-2 mr-3 text-white">
                                    <i className="la la-lock"></i>
                                  </div>
                                  <div className="media-body">
                                    <h5>You changed password</h5>
                                    <span className="d-block lh-18 pt-1 text-gray fs-13">
                                      November 12, 2019
                                    </span>
                                  </div>
                                </a>
                                <a
                                  href="dashboard.html"
                                  className="media media-card align-items-center"
                                >
                                  <div className="icon-element icon-element-sm flex-shrink-0 bg-3 mr-3 text-white">
                                    <i className="la la-user"></i>
                                  </div>
                                  <div className="media-body">
                                    <h5>
                                      Your account has been created successfully
                                    </h5>
                                    <span className="d-block lh-18 pt-1 text-gray fs-13">
                                      November 12, 2019
                                    </span>
                                  </div>
                                </a>
                              </div>
                            </li>
                            <li className="menu-heading-block">
                              <a
                                href="dashboard.html"
                                className="btn theme-btn w-100"
                              >
                                Show All Notifications{" "}
                                <i class="la la-arrow-right icon ml-1"></i>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- end shop-cart --> */}
                    <div className="shop-cart user-profile-cart">
                      <ul>
                        <li>
                          <div className="shop-cart-btn">
                            <div className="avatar-xs">
                              <img
                                class="rounded-full img-fluid"
                                src="images/small-avatar-1.jpg"
                                alt="Avatar image"
                              />
                            </div>
                            <span className="dot-status bg-1"></span>
                          </div>
                          <ul className="cart-dropdown-menu after-none p-0 notification-dropdown-menu">
                            <li className="menu-heading-block d-flex align-items-center">
                              <a
                                href="teacher-detail.html"
                                className="avatar-sm flex-shrink-0 d-block"
                              >
                                <img
                                  class="rounded-full img-fluid"
                                  src="images/small-avatar-1.jpg"
                                  alt="Avatar image"
                                />
                              </a>
                              <div className="ml-2">
                                <h4>
                                  <a
                                    href="teacher-detail.html"
                                    className="text-black"
                                  >
                                    Alex Smith
                                  </a>
                                </h4>
                                <span className="d-block fs-14 lh-20">
                                  alexsmith@example.com
                                </span>
                              </div>
                            </li>
                            <li>
                              <div className="theme-picker d-flex align-items-center justify-content-center lh-40">
                                <button
                                  class="theme-picker-btn dark-mode-btn w-100 font-weight-semi-bold justify-content-center"
                                  title="Dark mode"
                                >
                                  <svg
                                    className="mr-1"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  >
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                  </svg>
                                  Dark Mode
                                </button>
                                <button
                                  class="theme-picker-btn light-mode-btn w-100 font-weight-semi-bold justify-content-center"
                                  title="Light mode"
                                >
                                  <svg
                                    className="mr-1"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  >
                                    <circle cx="12" cy="12" r="5"></circle>
                                    <line x1="12" y1="1" x2="12" y2="3"></line>
                                    <line
                                      x1="12"
                                      y1="21"
                                      x2="12"
                                      y2="23"
                                    ></line>
                                    <line
                                      x1="4.22"
                                      y1="4.22"
                                      x2="5.64"
                                      y2="5.64"
                                    ></line>
                                    <line
                                      x1="18.36"
                                      y1="18.36"
                                      x2="19.78"
                                      y2="19.78"
                                    ></line>
                                    <line x1="1" y1="12" x2="3" y2="12"></line>
                                    <line
                                      x1="21"
                                      y1="12"
                                      x2="23"
                                      y2="12"
                                    ></line>
                                    <line
                                      x1="4.22"
                                      y1="19.78"
                                      x2="5.64"
                                      y2="18.36"
                                    ></line>
                                    <line
                                      x1="18.36"
                                      y1="5.64"
                                      x2="19.78"
                                      y2="4.22"
                                    ></line>
                                  </svg>
                                  Light Mode
                                </button>
                              </div>
                            </li>
                            <li>
                              <ul className="generic-list-item">
                                <li>
                                  <a href="my-courses.html">
                                    <i className="la la-file-video-o mr-1"></i>{" "}
                                    My courses
                                  </a>
                                </li>
                                <li>
                                  <a href="shopping-cart.html">
                                    <i className="la la-shopping-basket mr-1"></i>{" "}
                                    My cart
                                  </a>
                                </li>
                                <li>
                                  <a href="my-courses.html">
                                    <i className="la la-heart-o mr-1"></i> My
                                    wishlist
                                  </a>
                                </li>
                                <li>
                                  <div className="section-block"></div>
                                </li>
                                <li>
                                  <a href="dashboard.html">
                                    <i className="la la-bell mr-1"></i>{" "}
                                    Notifications
                                    <span className="badge bg-info text-white ml-2 p-1">
                                      9+
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="dashboard-message.html">
                                    <i className="la la-envelope mr-1"></i>{" "}
                                    Messages
                                    <span className="badge bg-info text-white ml-2 p-1">
                                      12+
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <div className="section-block"></div>
                                </li>
                                <li>
                                  <a href="dashboard-settings.html">
                                    <i className="la la-gear mr-1"></i> Settings
                                  </a>
                                </li>
                                <li>
                                  <a href="dashboard-purchase-history.html">
                                    <i className="la la-history mr-1"></i>{" "}
                                    Purchase history
                                  </a>
                                </li>
                                <li>
                                  <div className="section-block"></div>
                                </li>
                                <li>
                                  <a href="student-detail.html">
                                    <i className="la la-user mr-1"></i> Public
                                    profile
                                  </a>
                                </li>
                                <li>
                                  <a href="dashboard-settings.html">
                                    <i className="la la-edit mr-1"></i> Edit
                                    profile
                                  </a>
                                </li>
                                <li>
                                  <div className="section-block"></div>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="la la-question mr-1"></i> Help
                                  </a>
                                </li>
                                <li>
                                  <a href="index.html">
                                    <i className="la la-power-off mr-1"></i>{" "}
                                    Logout
                                  </a>
                                </li>
                                <li>
                                  <div className="section-block"></div>
                                </li>
                                <li>
                                  <a href="#" className="position-relative">
                                    <span class="fs-17 font-weight-semi-bold d-block">
                                      Aduca htmlFor Business
                                    </span>
                                    <span className="lh-20 d-block fs-14 text-gray">
                                      Bring learning to your company
                                    </span>
                                    <span className="position-absolute top-0 right-0 mt-3 mr-3 fs-18 text-gray">
                                      <i className="la la-external-link"></i>
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- end shop-cart --> */}
                  </div>
                </div>
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

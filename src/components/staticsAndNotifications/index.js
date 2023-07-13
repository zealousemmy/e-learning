import React from "react";

const Notification = () => {
  return (
    <div className="col-lg-5 responsive-column-half">
      <div className="card card-item">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center pb-4">
            <h3 className="fs-18 font-weight-semi-bold">Notifications</h3>
            <span className="fs-15 cursor-pointer">Mark all as read</span>
          </div>
          <div className="notification-body scrolled-box custom-scrollbar-styled">
            <a
              href="dashboard.html"
              className="media media-card align-items-center"
            >
              <div className="icon-element icon-element-sm flex-shrink-0 bg-1 mr-3 text-white">
                <i className="la la-bolt"></i>
              </div>
              <div className="media-body">
                <h5 className="fs-15">Your resume updated!</h5>
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
                <h5 className="fs-15">You changed password</h5>
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
                <h5 className="fs-15">
                  Your account has been created successfully
                </h5>
                <span className="d-block lh-18 pt-1 text-gray fs-13">
                  November 12, 2019
                </span>
              </div>
            </a>
            <a
              href="dashboard.html"
              className="media media-card align-items-center"
            >
              <div className="icon-element icon-element-sm flex-shrink-0 bg-4 mr-3 text-white">
                <i className="la la-lock"></i>
              </div>
              <div className="media-body">
                <h5 className="fs-15">You changed password</h5>
                <span className="d-block lh-18 pt-1 text-gray fs-13">
                  November 12, 2019
                </span>
              </div>
            </a>
            <a
              href="dashboard.html"
              className="media media-card align-items-center"
            >
              <div className="icon-element icon-element-sm flex-shrink-0 bg-5 mr-3 text-white">
                <i className="la la-user"></i>
              </div>
              <div className="media-body">
                <h5 className="fs-15">
                  Your account has been created successfully
                </h5>
                <span className="d-block lh-18 pt-1 text-gray fs-13">
                  November 12, 2019
                </span>
              </div>
            </a>
            <a
              href="dashboard.html"
              className="media media-card align-items-center"
            >
              <div className="icon-element icon-element-sm flex-shrink-0 bg-6 mr-3 text-white">
                <i className="la la-briefcase"></i>
              </div>
              <div className="media-body">
                <h5 class="fs-15">
                  You applied htmlFor a job Front-end Developer
                </h5>
                <span className="d-block lh-18 pt-1 text-gray fs-13">
                  November 12, 2019
                </span>
              </div>
            </a>
            <a
              href="dashboard.html"
              className="media media-card align-items-center"
            >
              <div className="icon-element icon-element-sm flex-shrink-0 bg-7 mr-3 text-white">
                <i className="la la-upload"></i>
              </div>
              <div className="media-body">
                <h5 className="fs-15">Your course uploaded successfully</h5>
                <span className="d-block lh-18 pt-1 text-gray fs-13">
                  November 12, 2019
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- end card --> */}
    </div>
  );
};

export default Notification;

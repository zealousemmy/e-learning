import React from "react";

const PasswordTab = () => {
  return (
    <div
      className="tab-pane"
      id="password"
      role="tabpanel"
      aria-labelledby="password-tab"
    >
      <div className="setting-body">
        <h3 className="fs-17 font-weight-semi-bold pb-4">Change Password</h3>
        <form method="post" className="row">
          <div className="input-box col-lg-4">
            <label className="label-text">Old Password</label>
            <div className="form-group">
              <input
                className="form-control form--control"
                type="text"
                name="text"
                placeHolder="Old Password"
              />
              <span className="la la-lock input-icon"></span>
            </div>
          </div>
          {/* <!-- end input-box --> */}
          <div className="input-box col-lg-4">
            <label className="label-text">New Password</label>
            <div className="form-group">
              <input
                className="form-control form--control"
                type="text"
                name="text"
                placeHolder="New Password"
              />
              <span className="la la-lock input-icon"></span>
            </div>
          </div>
          {/* <!-- end input-box --> */}
          <div className="input-box col-lg-4">
            <label className="label-text">Confirm New Password</label>
            <div className="form-group">
              <input
                className="form-control form--control"
                type="text"
                name="text"
                placeHolder="Confirm New Password"
              />
              <span className="la la-lock input-icon"></span>
            </div>
          </div>
          {/* <!-- end input-box --> */}
          <div className="input-box col-lg-12 py-2">
            <button className="btn theme-btn">Change Password</button>
          </div>
          {/* <!-- end input-box --> */}
        </form>
        <form method="post" className="pt-5 mt-5 border-top border-top-gray">
          <h3 className="fs-17 font-weight-semi-bold pb-1">
            Forgot Password then Recover Password
          </h3>
          <p className="pb-4">
            Enter the email of your account to reset password. Then you will
            receive a link to email to reset the password. If you have any issue
            about reset password
            <a href="contact.html" className="text-color">
              contact us
            </a>
          </p>
          <div className="input-box">
            <label className="label-text">Email Address</label>
            <div className="form-group">
              <input
                className="form-control form--control"
                type="email"
                name="email"
                placeHolder="Enter email address"
              />
              <span className="la la-envelope input-icon"></span>
            </div>
          </div>
          {/* <!-- end input-box --> */}
          <div className="input-box py-2">
            <button className="btn theme-btn">Recover Password</button>
          </div>
          {/* <!-- end input-box --> */}
        </form>
      </div>
      {/* <!-- end setting-body --> */}
    </div>
  );
};

export default PasswordTab;

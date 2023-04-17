import React from "react";

const ProfileTab = () => {
  return (
    <div
      class="tab-pane fade show active"
      id="edit-profile"
      role="tabpanel"
      aria-labelledby="edit-profile-tab"
    >
      <div className="setting-body">
        <h3 className="fs-17 font-weight-semi-bold pb-4">Edit Profile</h3>
        <div className="media media-card align-items-center">
          <div className="media-img media-img-lg mr-4 bg-gray">
            <img class="mr-3" src="images/team11.jpg" alt="avatar image" />
          </div>
          <div className="media-body">
            <div className="file-upload-wrap file-upload-wrap-2">
              <input
                type="file"
                name="files[]"
                class="multi file-upload-input with-preview"
                multiple
              />
              <span className="file-upload-text">
                <i class="la la-photo mr-2"></i>Upload a Photo
              </span>
            </div>
            {/* <!-- file-upload-wrap --> */}
            <p class="fs-14">
              Max file size is 5MB, Minimum dimension: 200x200 And Suitable
              files are .jpg & .png
            </p>
          </div>
        </div>
        {/* <!-- end media --> */}
        <form method="post" className="row pt-40px">
          <div className="input-box col-lg-6">
            <label className="label-text">First Name</label>
            <div className="form-group">
              <input
                class="form-control form--control"
                type="text"
                name="text"
                value="Alex"
              />
              <span className="la la-user input-icon"></span>
            </div>
          </div>
          {/* <!-- end input-box --> */}
          <div className="input-box col-lg-6">
            <label className="label-text">Last Name</label>
            <div className="form-group">
              <input
                class="form-control form--control"
                type="text"
                name="text"
                value="Smith"
              />
              <span className="la la-user input-icon"></span>
            </div>
          </div>
          {/* <!-- end input-box --> */}
          <div className="input-box col-lg-6">
            <label className="label-text">User Name</label>
            <div className="form-group">
              <input
                class="form-control form--control"
                type="text"
                name="text"
                value="alex-admin"
              />
              <span className="la la-user input-icon"></span>
            </div>
          </div>
          {/* <!-- end input-box --> */}
          <div className="input-box col-lg-6">
            <label className="label-text">Email Address</label>
            <div className="form-group">
              <input
                class="form-control form--control"
                type="email"
                name="email"
                value="alexsmith@gmail.com"
              />
              <span className="la la-envelope input-icon"></span>
            </div>
          </div>
          {/* <!-- end input-box --> */}
          <div className="input-box col-lg-12">
            <label className="label-text">Phone Number</label>
            <div className="form-group">
              <input
                class="form-control form--control"
                type="text"
                name="text"
                value="(91) 7547 622250"
              />
              <span className="la la-phone input-icon"></span>
            </div>
          </div>
          {/* <!-- end input-box --> */}
          <div className="input-box col-lg-12 py-2">
            <button className="btn theme-btn">Save Changes</button>
          </div>
          {/* <!-- end input-box --> */}
        </form>
      </div>
      {/* <!-- end setting-body --> */}
    </div>
  );
};

export default ProfileTab;

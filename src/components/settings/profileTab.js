import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadCover } from "../../features/courses/courseSlice";
import SpinnerMain from "../Spinner/Spinner1";
import { EditUser } from "../../features/user/userSlice";
// import Profile from "../../../public/assets/img/avatar-profile-photo.png";

const ProfileTab = () => {
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.user);
  const [userState, setUserState] = useState({});
  const [loadFile, setLoadFile] = useState(false);
  const { fileCover } = useSelector((state) => state.course);
  const [loader, setLoader] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;

    setUserState({ ...userState, [name]: value });
  };

  function getbase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        resolve(reader.result);
      };

      reader.onerror = reject;

      reader.readAsDataURL(file);
    });
  }

  const UploadCoursFromCover = async (e) => {
    setLoadFile(true);
    const files = e.target.files[0];

    let promise = getbase64(files);

    promise.then(async (data) => {
      await dispatch(uploadCover({ file: data }));

      setLoadFile(false);
    });
  };

  const submitDetails = async (e) => {
    e.preventDefault();
    setLoader(true);
    await dispatch(
      EditUser({
        ...userState,
        profile_pic: fileCover?.secure_url,
        cloudinary_id: fileCover?.public_id,
      })
    );

    setLoader(false);
  };

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
            <img
              class="mr-3"
              src={
                userDetails?.profile_pic &&
                (userDetails?.profile_pic.startsWith("http") ||
                  userDetails?.profile_pic.startsWith("/"))
                  ? `${userDetails?.profile_pic}`
                  : "/assets/img/avatar-profile-photo.png"
              }
              alt="avatar image"
            />
          </div>
          <div className="media-body">
            {loadFile ? (
              <SpinnerMain />
            ) : (
              <div className="file-upload-wrap file-upload-wrap-2">
                <input
                  type="file"
                  name="files[]"
                  class="multi file-upload-input with-preview"
                  multiple
                  onChange={UploadCoursFromCover}
                />

                <span
                  className="file-upload-text"
                  style={{
                    overflow: "hidden",
                    width: "180px",
                  }}
                >
                  {Object.keys(fileCover).length > 0 ? (
                    `${fileCover?.secure_url}`
                  ) : (
                    <>
                      <i class="la la-photo mr-2"></i>` Upload a Photo`
                    </>
                  )}
                </span>
              </div>
            )}
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
            <label className="label-text">Full Name</label>
            <div className="form-group">
              <input
                class="form-control form--control"
                type="text"
                name="fullname"
                value={
                  userState?.fullname
                    ? userState?.fullname
                    : userDetails?.fullname || ""
                }
                onChange={handleChange}
              />
              <span className="la la-user input-icon"></span>
            </div>
          </div>
          {/* <!-- end input-box --> */}

          {/* <!-- end input-box --> */}
          <div className="input-box col-lg-6">
            <label className="label-text">Email Address</label>
            <div className="form-group">
              <input
                class="form-control form--control"
                type="email"
                name="email"
                value={
                  userState?.email ? userState?.email : userDetails?.email || ""
                }
                onChange={handleChange}
              />
              <span className="la la-envelope input-icon"></span>
            </div>
          </div>
          {/* <!-- end input-box --> */}
          <div className="input-box col-lg-6">
            <label className="label-text">Phone Number</label>
            <div className="form-group">
              <input
                class="form-control form--control"
                type="text"
                name="phone"
                value={
                  userState?.phone ? userState?.phone : userDetails?.phone || ""
                }
                onChange={handleChange}
              />
              <span className="la la-phone input-icon"></span>
            </div>
          </div>

          <div className="input-box col-lg-6">
            <label className="label-text">Level</label>
            <div className="form-group">
              <input
                class="form-control form--control"
                type="text"
                name="level"
                value={
                  userState?.level ? userState?.level : userDetails?.level || ""
                }
                onChange={handleChange}
              />
            </div>
          </div>

          {/* <!-- end input-box --> */}
          {loader ? (
            <div className="input-box col-lg-12 py-2">
              <button className="btn theme-btn">
                <SpinnerMain />
              </button>
            </div>
          ) : (
            <div className="input-box col-lg-12 py-2" onClick={submitDetails}>
              <button className="btn theme-btn">Save Changes</button>
            </div>
          )}
          {/* <!-- end input-box --> */}
        </form>
      </div>
      {/* <!-- end setting-body --> */}
    </div>
  );
};

export default ProfileTab;

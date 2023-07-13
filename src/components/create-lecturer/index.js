import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register, registerLectural } from "../../features/auth/authSlice";
import { toast } from "react-toastify";

const CreateLecturerComp = () => {
  const dispatch = useDispatch();
  const [registration, setRegistration] = useState({});

  const handleRegistration = (e) => {
    const { name, value } = e.target;

    setRegistration({ ...registration, [name]: value });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (registration?.password.length >= 6) {
      if (registration?.password === registration.confirmpassword) {
        if (Object.keys(registration).length > 7) {
          if (registration.admin) {
            await dispatch(
              registerLectural({ ...registration, bioType: "lectural" })
            );
            setRegistration({});
          } else {
            delete registration.admin;
            await dispatch(
              registerLectural({ ...registration, bioType: "lectural" })
            );
            setRegistration({});
          }
        } else {
          toast("All field must be filled");
        }
      } else {
        toast("password must equal confirmpassword");
      }
    } else {
      toast("password must be greater than or equal 6 characters");
    }
  };

  return (
    <div className="">
      <div
        class=""
        id="edit-profile"
        role="tabpanel"
        aria-labelledby="edit-profile-tab"
      >
        <div className="setting-body">
          <h3 className="fs-17 font-weight-semi-bold pb-4">Create Lecturer</h3>

          {/* <!-- end media --> */}
          <form method="post" className="row pt-40px">
            <div className="input-box col-lg-6">
              <label className="label-text">Full Name</label>
              <div className="form-group">
                <input
                  class="form-control form--control"
                  type="text"
                  name="fullname"
                  value={registration?.fullname || ""}
                  placeholder="Alex"
                  onChange={handleRegistration}
                />
                <span className="la la-user input-icon"></span>
              </div>
            </div>
            {/* <!-- end input-box --> */}

            <div className="input-box col-lg-6">
              <label className="label-text">Faculty</label>
              <div className="form-group">
                <input
                  class="form-control form--control"
                  type="text"
                  name="faculty"
                  value={registration?.faculty || ""}
                  placeholder="Applied Science"
                  onChange={handleRegistration}
                />
                {/* <span className="la la-user input-icon"></span> */}
              </div>
            </div>
            {/* <!-- end input-box --> */}

            <div className="input-box col-lg-6">
              <label className="label-text">Department</label>
              <div className="form-group">
                <input
                  class="form-control form--control"
                  type="text"
                  name="department"
                  value={registration?.department || ""}
                  placeholder="Software Engineering"
                  onChange={handleRegistration}
                />
                {/* <span className="la la-user input-icon"></span> */}
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
                  value={registration?.email || ""}
                  placeholder="alexsmith@gmail.com"
                  onChange={handleRegistration}
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
                  value={registration?.phone || ""}
                  placeholder="(91) 7547 622250"
                  onChange={handleRegistration}
                />
                <span className="la la-phone input-icon"></span>
              </div>
            </div>
            {/* <!-- end input-box --> */}

            <div className="input-box col-lg-6">
              <label className="label-text">admin</label>
              <div className="form-group">
                <input
                  class="form-control form--control"
                  type="text"
                  name="admin"
                  value={registration?.admin || ""}
                  placeholder="admin"
                  onChange={handleRegistration}
                />
                {/* <span className="la la-phone input-icon"></span> */}
              </div>
            </div>
            {/* <!-- end input-box --> */}
            <div className="input-box col-lg-6">
              <label className="label-text">Staff Id</label>
              <div className="form-group">
                <input
                  class="form-control form--control"
                  type="text"
                  name="regno"
                  value={registration?.regno || ""}
                  placeholder="Staff id"
                  onChange={handleRegistration}
                />
                {/* <span className="la la-phone input-icon"></span> */}
              </div>
            </div>

            <div className="input-box col-lg-6">
              <label className="label-text">Password</label>
              <div className="form-group">
                <input
                  class="form-control form--control"
                  type="text"
                  name="password"
                  value={registration?.password || ""}
                  placeholder="password"
                  onChange={handleRegistration}
                />
                {/* <span className="la la-phone input-icon"></span> */}
              </div>
            </div>

            <div className="input-box col-lg-6">
              <label className="label-text">confirm Password</label>
              <div className="form-group">
                <input
                  class="form-control form--control"
                  type="text"
                  name="confirmpassword"
                  value={registration?.confirmpassword || ""}
                  placeholder="confirmpassword"
                  onChange={handleRegistration}
                />
                {/* <span className="la la-phone input-icon"></span> */}
              </div>
            </div>

            <div className="input-box col-lg-12 py-2">
              <button className="btn theme-btn" onClick={HandleSubmit}>
                Save Changes
              </button>
            </div>
            {/* <!-- end input-box --> */}
          </form>
        </div>
        {/* <!-- end setting-body --> */}
      </div>
    </div>
  );
};

export default CreateLecturerComp;

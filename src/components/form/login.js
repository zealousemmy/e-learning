import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../features/auth/authSlice";
import { loginValidationSchema } from "./validation.schema";
const LoginForm = () => {
  const navigate = useNavigate();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      navigate("/dashboard");
    }
  }, [isError, isSuccess]);

  const [formData, setFormData] = useState({
    regno: "",
    password: "",
  });

  const dispatch = useDispatch();
  const { regno, password } = formData;

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const check = await loginValidationSchema.isValid(formData);

    if (check === true) {
      const studentData = { regno, password };
      dispatch(login(studentData));
    } else {
      toast.error("fields are required please");
    }
  };
  const isAuthenticated = localStorage.getItem("token");
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/dashboard" />
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto">
              <div className="card-body">
                <h3 className="card-title text-center fs-24 lh-35 pb-4">
                  Login to Your Account!
                </h3>
                <div className="section-block"></div>
                <form method="post" className="pt-4">
                  <div className="input-box">
                    <label className="label-text">Registration No:</label>
                    <div className="form-group">
                      <input
                        className="form-control form--control"
                        type="text"
                        name="regno"
                        placeHolder="Registration No"
                        onChange={handleChange}
                      />
                      <span className="la la-user input-icon"></span>
                    </div>
                  </div>
                  {/* <!-- end input-box --> */}
                  {/* <!-- end input-box --> */} {/* <!-- end input-box --> */}
                  <div className="input-box">
                    <label className="label-text">Password</label>
                    <div className="input-group mb-3">
                      <span className="la la-lock input-icon"></span>
                      <input
                        className="form-control form--control password-field"
                        type="password"
                        name="password"
                        placeHolder="Password"
                        onChange={handleChange}
                      />
                      <div className="input-group-append">
                        <button
                          className="btn theme-btn theme-btn-transparent toggle-password"
                          type="button"
                        >
                          <svg
                            className="eye-on"
                            xmlns="http://www.w3.org/2000/svg"
                            height="22px"
                            viewBox="0 0 24 24"
                            width="22px"
                            fill="#7f8897"
                          >
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z" />
                          </svg>
                          <svg
                            className="eye-off"
                            xmlns="http://www.w3.org/2000/svg"
                            height="22px"
                            viewBox="0 0 24 24"
                            width="22px"
                            fill="#7f8897"
                          >
                            <path
                              d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z"
                              fill="none"
                            />
                            <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end input-box --> */}
                  <div className="btn-box">
                    <div className="d-flex align-items-center justify-content-between pb-4">
                      <div className="custom-control custom-checkbox fs-15">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="rememberMeCheckbox"
                          required
                        />
                        <label
                          className="custom-control-label custom--control-label"
                          htmlFor="rememberMeCheckbox"
                        >
                          Remember Me
                        </label>
                      </div>
                      {/* <!-- end custom-control --> */}
                      {/* <a href="recover.html" className="btn-text">
                        Forgot my password?
                      </a> */}
                    </div>
                    <button
                      class="btn theme-btn"
                      type="submit"
                      onClick={handleLogin}
                    >
                      Login Account{" "}
                      <i className="la la-arrow-right icon ml-1"></i>
                    </button>
                    <p className="fs-14 pt-2">
                      Don't have an account?{" "}
                      <a href="/signup" className="text-color hover-underline">
                        Register
                      </a>
                    </p>
                  </div>
                  {/* <!-- end btn-box --> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginForm;

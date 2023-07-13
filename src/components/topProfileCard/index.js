import axios from "axios";
import React from "react";
import AddCourse from "../addCourse/addCourse";
import ModalComponent from "../modal/modalComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  AssignmentCheck,
  StudentAssignmentCheck,
  modalCheck,
} from "../../features/courses/courseSlice";

const TopProfileCard = () => {
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.user);

  return (
    <div>
      <div className="breadcrumb-content d-flex flex-wrap align-items-center justify-content-between mb-5">
        <div className="media media-card align-items-center">
          <div className="media-img media--img media-img-md rounded-full">
            <img
              class="rounded-full"
              src={
                userDetails?.profile_pic &&
                (userDetails?.profile_pic.startsWith("http") ||
                  userDetails?.profile_pic.startsWith("/"))
                  ? `${userDetails?.profile_pic}`
                  : "/assets/img/avatar-profile-photo.png"
              }
              alt="Student thumbnail image"
            />
          </div>
          <div className="media-body">
            <h2 className="section__title fs-30">{userDetails?.fullname}</h2>
            <div className="rating-wrap d-flex align-items-center pt-2">
              <div className="review-stars">
                <span className="rating-number">{userDetails?.level}</span>
              </div>
              <span className="rating-total pl-1">
                {userDetails?.department}
              </span>
            </div>
            {/* <!-- end rating-wrap --> */}
          </div>
          {/* <!-- end media-body --> */}
        </div>
        {/*  <!-- end media --> */}
        {userDetails?.bioType === "lectural" && (
          <>
            <div
              className="file-upload-wrap file-upload-wrap-2 file--upload-wrap"
              // style={{ border: "1px solid red" }}
            >
              <span
                style={{
                  border: "1px solid #F2F3F4",
                  padding: "10px 14px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  dispatch(modalCheck(true));
                }}
              >
                <i class="la la-upload mr-2"></i>Upload a course
              </span>
            </div>

            <div
              className="file-upload-wrap file-upload-wrap-2 file--upload-wrap"
              // style={{ border: "1px solid red" }}
            >
              <span
                style={{
                  border: "1px solid #F2F3F4",
                  padding: "10px 14px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  dispatch(AssignmentCheck(true));
                }}
              >
                <i class="la la-upload mr-2"></i>Set Assignment
              </span>
            </div>
          </>
        )}

        {userDetails?.bioType !== "lectural" && (
          <div
            className="file-upload-wrap file-upload-wrap-2 file--upload-wrap"
            // style={{ border: "1px solid red" }}
          >
            <span
              style={{
                border: "1px solid #F2F3F4",
                padding: "10px 14px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
              onClick={() => {
                dispatch(StudentAssignmentCheck(true));
              }}
            >
              <i class="la la-upload mr-2"></i>Upload Assignment
            </span>
          </div>
        )}
        {/* <!-- file-upload-wrap --> */}
      </div>
      {/* <!-- end breadcrumb-content --> */}
      <div className="section-block mb-5"></div>
    </div>
  );
};

export default TopProfileCard;

import React, { useEffect, useState } from "react";
import { AddAssignmentDiv } from "./addAssignment.styles";
import { AiOutlineClose, AiOutlineConsoleSql } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  AssignmentCheck,
  ChangeEditState,
  EditCourseDetails,
  EditThisCourse,
  modalCheck,
  setFileDetails,
  uploadCourse,
  uploadCover,
  uploadFile,
} from "../../features/courses/courseSlice";
import FormData from "form-data";
import SpinnerMain from "../Spinner/Spinner1";
import SpinnerNormal from "../Spinner/Spinner2";
import { toast } from "react-toastify";
import {
  EditAssignment,
  uploadAssignment,
} from "../../features/assignment/assignmentSlice";

const AddAssignment = () => {
  const dispatch = useDispatch();
  const [course, setCourse] = useState({});
  const [loadfile, setLoadFile] = useState(false);
  const [loadcoverpic, setLoadCoverPic] = useState(false);
  const [submit, setSubmit] = useState(false);

  const { fileDetails, editThisCourse, changeEditState } = useSelector(
    (state) => state.course
  );

  const { editThisAssignment } = useSelector((state) => state.assignment);

  const { userDetails } = useSelector((state) => state.user);

  useEffect(() => {
    if (editThisAssignment) {
      setCourse({ ...editThisAssignment });
    }
  }, [editThisAssignment]);

  const handlechange = (e) => {
    const { name, value } = e.target;

    setCourse({ ...course, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmit(true);

    if (Object.keys(fileDetails).length > 0) {
      if (Object.keys(course).length > 5) {
        const payload = {
          ...course,
          regno: userDetails?.regno,
          coursefile: fileDetails?.Location,
          coursefile_id: fileDetails?.VersionId,
        };

        await dispatch(uploadAssignment(payload));

        setCourse({});

        dispatch(setFileDetails({}));

        setSubmit(false);
      } else {
        setSubmit(false);
        toast("all field my be selected");
      }
    } else {
      setSubmit(false);
      toast("select a file");
    }
  };

  const handleEditDetails = async () => {
    setSubmit(true);
    await dispatch(
      EditAssignment({
        ...course,
        coursefile: fileDetails?.Location
          ? fileDetails?.Location
          : course?.coursefile,
        coursefile_id: fileDetails?.VersionId
          ? fileDetails?.VersionId
          : course.coursefile_id,
      })
    );
    setSubmit(false);
    dispatch(modalCheck(false));
  };

  const UploadFile = async (e) => {
    setLoadFile(true);
    const files = e.target.files[0];

    let formData = new FormData();

    formData.append("file", files);

    await dispatch(uploadFile(formData));

    setLoadFile(false);
  };

  return (
    <AddAssignmentDiv>
      <div
        className="cancel_button"
        onClick={() => {
          dispatch(ChangeEditState(false));
          dispatch(EditThisCourse({}));
          dispatch(AssignmentCheck(false));
          setCourse({});
          dispatch(setFileDetails({}));
        }}
      >
        <AiOutlineClose className="cancel_button_icon" />
      </div>

      <div className="container">
        <div className="header">
          <h2>Add Assignment</h2>
        </div>

        <div className="content" style={{ overflow: "hidden" }}>
          <div className="content_one">
            <div className="content_one_header">
              <p>Lecturals fullname:</p>
            </div>

            <div className="content_one_input">
              <input
                type={"text"}
                name={"fullname"}
                value={course?.fullname || ""}
                placeholder={"input the name of the course"}
                onChange={handlechange}
              />
            </div>
          </div>

          <div className="content_one" style={{ marginTop: "20px" }}>
            <div className="content_one_header">
              <p>Course Name:</p>
            </div>

            <div className="content_one_input">
              <input
                type={"text"}
                name={"course"}
                value={course?.course || ""}
                placeholder={"input the name of the course"}
                onChange={handlechange}
              />
            </div>
          </div>

          <div className="content_one" style={{ marginTop: "20px" }}>
            <div className="content_one_header">
              <p>Assignment Id:</p>
            </div>

            <div className="content_one_input">
              <input
                type={"text"}
                name={"assignmentId"}
                value={course?.assignmentId || ""}
                placeholder={"input the name of the course"}
                onChange={handlechange}
              />
            </div>
          </div>

          <div className="content_one" style={{ marginTop: "20px" }}>
            <div className="content_one_header">
              <p>Faculty:</p>
            </div>

            <div className="content_one_input">
              <input
                type={"text"}
                name={"faculty"}
                value={course?.faculty || ""}
                placeholder={"input the Faculty"}
                onChange={handlechange}
              />
            </div>
          </div>

          <div className="content_one" style={{ marginTop: "20px" }}>
            <div className="content_one_header">
              <p>Department:</p>
            </div>

            <div className="content_one_input">
              <input
                type={"text"}
                name={"department"}
                value={course?.department || ""}
                placeholder={"input the Department"}
                onChange={handlechange}
              />
            </div>
          </div>

          <div className="content_one" style={{ marginTop: "20px" }}>
            <div className="content_one_header">
              <p>status:</p>
            </div>

            <div className="content_one_input">
              <input
                type={"text"}
                name={"status"}
                value={course?.status || ""}
                placeholder={"input the Status"}
                onChange={handlechange}
              />
            </div>
          </div>

          <div className="content_one" style={{ marginTop: "20px" }}>
            <div className="content_one_header">
              <p>Starting Date:</p>
            </div>

            <div className="content_one_input">
              <input
                type={"text"}
                name={"start_date"}
                value={course?.start_date || ""}
                placeholder={"2023/04/26"}
                onChange={handlechange}
              />
            </div>
          </div>

          <div className="content_one" style={{ marginTop: "20px" }}>
            <div className="content_one_header">
              <p>Ending Date:</p>
            </div>

            <div className="content_one_input">
              <input
                type={"text"}
                name={"end_date"}
                value={course?.end_date || ""}
                placeholder={"2023/04/26"}
                onChange={handlechange}
              />
            </div>
          </div>

          <div className="content_one" style={{ marginTop: "20px" }}>
            <div className="content_one_header">
              <p>Course Description:</p>
            </div>

            <div className="content_one_input">
              <input
                type={"text"}
                name={"course_bio"}
                value={course?.course_bio || ""}
                placeholder={"input the description of the course"}
                onChange={handlechange}
              />
            </div>
          </div>

          <div className="content_one" style={{ marginTop: "20px" }}>
            <div className="content_one_header">
              <p>Level:</p>
            </div>

            <div className="content_one_input">
              <input
                type={"text"}
                name={"level"}
                value={course?.level || ""}
                placeholder={"input the level"}
                onChange={handlechange}
              />
            </div>
          </div>

          <div className="content_two">
            <div className="content_two_header">
              <p>Course Data:</p>
            </div>
            <div className="content_two_input">
              {loadfile ? (
                <SpinnerMain />
              ) : (
                <div className="content_two_input_container">
                  <input type={"file"} onChange={UploadFile} />
                  <span className="file-upload-text symbol_State">
                    <i class="la la-upload mr-2"></i>Upload a course
                  </span>
                </div>
              )}

              <p>{`${
                Object.keys(fileDetails).length > 0
                  ? fileDetails?.Key
                  : "no item found"
              }`}</p>
            </div>
          </div>
        </div>

        {submit ? (
          <div className="submit_button">
            <button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px 35px",
              }}
            >
              <SpinnerNormal />
            </button>
          </div>
        ) : (
          <>
            {changeEditState ? (
              <div className="submit_button" onClick={handleEditDetails}>
                <button>Edit Assignment</button>
              </div>
            ) : (
              <div className="submit_button" onClick={handleSubmit}>
                <button>Set Assignment</button>
              </div>
            )}
          </>
        )}
      </div>
    </AddAssignmentDiv>
  );
};

export default AddAssignment;

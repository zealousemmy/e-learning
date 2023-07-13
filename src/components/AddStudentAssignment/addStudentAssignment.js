import React, { useEffect, useState } from "react";
import { AddAssignmentDiv } from "./addStudentAssignment.styles";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  AssignmentCheck,
  ChangeEditState,
  EditCourseDetails,
  EditThisCourse,
  StudentAssignmentCheck,
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
  EditContent,
  EditStudentAssignment,
  createAssignmentSlice,
} from "../../features/studentAssignement/studentAssignmentSlice";

const AddStudentAssignment = () => {
  const dispatch = useDispatch();
  const [course, setCourse] = useState({});
  const [loadfile, setLoadFile] = useState(false);
  const [loadcoverpic, setLoadCoverPic] = useState(false);
  const [submit, setSubmit] = useState(false);

  const { fileDetails, editThisCourse, changeEditState } = useSelector(
    (state) => state.course
  );

  const { editContent } = useSelector((state) => state.student_assignment);

  const { userDetails } = useSelector((state) => state.user);

  useEffect(() => {
    if (editContent) {
      setCourse({ ...editContent });
    }
  }, [editContent]);

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

        await dispatch(createAssignmentSlice(payload));

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
      EditStudentAssignment({
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
          dispatch(EditContent({}));
          dispatch(StudentAssignmentCheck(false));
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
              <p>fullname:</p>
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
              <p>Assignment Id:</p>
            </div>

            <div className="content_one_input">
              <input
                type={"text"}
                name={"assignmentId"}
                value={course?.assignmentId || ""}
                placeholder={"input the Status"}
                onChange={handlechange}
              />
            </div>
          </div>

          {userDetails?.bioType === "lectural" && (
            <div className="content_one" style={{ marginTop: "20px" }}>
              <div className="content_one_header">
                <p>Score:</p>
              </div>

              <div className="content_one_input">
                <input
                  type={"text"}
                  name={"score"}
                  value={course?.score || ""}
                  placeholder={"30"}
                  onChange={handlechange}
                />
              </div>
            </div>
          )}

          <div className="content_one" style={{ marginTop: "20px" }}>
            <div className="content_one_header">
              <p>Lecturer's Name:</p>
            </div>

            <div className="content_one_input">
              <input
                type={"text"}
                name={"lectural"}
                value={course?.lectural || ""}
                placeholder={""}
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
                    <i class="la la-upload mr-2"></i>Upload a assignment
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

export default AddStudentAssignment;

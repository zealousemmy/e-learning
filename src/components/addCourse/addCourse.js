import React, { useEffect, useState } from "react";
import { AddCourseDiv } from "./addCourse.styles";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
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

const AddCourse = () => {
  const dispatch = useDispatch();
  const [course, setCourse] = useState({});
  const [loadfile, setLoadFile] = useState(false);
  const [loadcoverpic, setLoadCoverPic] = useState(false);
  const [submit, setSubmit] = useState(false);

  const { fileDetails, fileCover, editThisCourse, changeEditState } =
    useSelector((state) => state.course);

  useEffect(() => {
    if (editThisCourse) {
      setCourse({ ...editThisCourse });
    }
  }, [editThisCourse]);

  const handlechange = (e) => {
    const { name, value } = e.target;

    setCourse({ ...course, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmit(true);

    if (
      Object.keys(fileDetails).length > 0 &&
      Object.keys(fileCover).length > 0
    ) {
      if (Object.keys(course).length > 5) {
        const payload = {
          ...course,
          coursefile: fileDetails?.Location,
          coursefile_id: fileDetails?.VersionId,
          cover_pic: fileCover?.secure_url,
          cover_pic_id: fileCover?.public_id,
        };

        await dispatch(uploadCourse(payload));

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
      EditCourseDetails({
        ...course,
        coursefile: fileDetails?.Location
          ? fileDetails?.Location
          : course?.coursefile,
        coursefile_id: fileDetails?.VersionId
          ? fileDetails?.VersionId
          : course.coursefile_id,
        cover_pic: fileCover?.secure_url
          ? fileCover?.secure_url
          : course?.cover_pic,
        cover_pic_id: fileCover?.public_id
          ? fileCover?.public_id
          : course?.cover_pic_id,
      })
    );
    setSubmit(false);
    dispatch(modalCheck(false));
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

  const UploadFile = async (e) => {
    setLoadFile(true);
    const files = e.target.files[0];

    let formData = new FormData();

    formData.append("file", files);

    await dispatch(uploadFile(formData));

    setLoadFile(false);
  };

  const UploadCoursFromCover = async (e) => {
    setLoadCoverPic(true);
    const files = e.target.files[0];

    let promise = getbase64(files);

    promise.then(async (data) => {
      await dispatch(uploadCover({ file: data }));

      setLoadCoverPic(false);
    });
  };

  return (
    <AddCourseDiv>
      <div
        className="cancel_button"
        onClick={() => {
          dispatch(ChangeEditState(false));
          dispatch(EditThisCourse({}));
          dispatch(modalCheck(false));
          setCourse({});
          dispatch(setFileDetails({}));
        }}
      >
        <AiOutlineClose className="cancel_button_icon" />
      </div>

      <div className="container">
        <div className="header">
          <h2>Add Courses</h2>
        </div>

        <div className="content" style={{ overflow: "hidden" }}>
          <div className="content_one">
            <div className="content_one_header">
              <p>Lecturals Name:</p>
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
                course
                  ? course?.coursefile
                  : Object.keys(fileDetails).length > 0
                  ? fileDetails?.Key
                  : "no item found"
              }`}</p>
            </div>
          </div>

          <div className="content_two">
            <div className="content_two_header">
              <p>Course Front Cover:</p>
            </div>
            <div className="content_two_input">
              {loadcoverpic ? (
                <SpinnerMain />
              ) : (
                <div className="content_two_input_container">
                  <input type={"file"} onChange={UploadCoursFromCover} />
                  <span className="file-upload-text symbol_State">
                    <i class="la la-upload mr-2"></i>pic
                  </span>
                </div>
              )}

              {fileCover && (
                <p>{`${
                  course
                    ? course?.cover_pic
                    : Object.keys(fileCover)?.length > 0
                    ? fileCover?.resource_type + " " + fileCover?.type + "ed"
                    : "no item found"
                }`}</p>
              )}
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
                <button>Edit Course</button>
              </div>
            ) : (
              <div className="submit_button" onClick={handleSubmit}>
                <button>Submit Course</button>
              </div>
            )}
          </>
        )}
      </div>
    </AddCourseDiv>
  );
};

export default AddCourse;

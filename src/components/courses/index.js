import React from "react";
import { useDispatch, useSelector } from "react-redux";
import download from "downloadjs";
import {
  BookMarkACourse,
  DeleteBookMarkACourse,
} from "../../features/bookmark/bookmarkSlice";
import {
  ChangeEditState,
  DeleteCourseDetails,
  EditThisCourse,
  SelectCourse,
  bookmarkCourse,
  modalCheck,
} from "../../features/courses/courseSlice";
import { NavLink, useNavigate } from "react-router-dom";

const StudentCourses = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mycourses } = useSelector((state) => state.course);
  const { userDetails } = useSelector((state) => state.user);

  const NavigationRoute = (item) => {
    navigate(`/dashboard/courseAndassginment/${item}`);
  };

  return (
    <div className="dashboard-cards mb-5 mt-4">
      {mycourses?.map((data, key) => (
        <div
          onClick={() => {
            NavigationRoute(data?.course);
          }}
          className="card card-item card-item-list-layout"
          style={{ width: "100%" }}
        >
          <div className="card-image" key={key}>
            <div className="d-block">
              <img
                class="card-img-top"
                src={
                  data?.cover_pic &&
                  (data?.cover_pic.startsWith("http") ||
                    data?.cover_pic.startsWith("/"))
                    ? `${data?.cover_pic}`
                    : "/assets/images/img8.jpg"
                }
                alt="Card image cap"
              />
            </div>
          </div>

          <div className="card-body" style={{ position: "relative" }}>
            <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">{`${data?.level} Levels`}</h6>
            <div class="card-title">
              <p>{data?.course_bio}</p>
            </div>
            <div class="card-text">
              <p>{data?.fullname}</p>
            </div>

            <div
              className="d-flex justify-content-between align-items-center"
              style={{
                position: "absolute",
                bottom: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "95%",
              }}
            >
              <p className="card-price text-black font-weight-bold">
                {data?.course}
              </p>

              <div className="card-action-wrap pl-3">
                {userDetails.bioType !== "lectural" ? (
                  <>
                    <a
                      href={`${data.coursefile}`}
                      className="icon-element icon-element-sm shadow-sm cursor-pointer ml-1 text-success"
                      data-toggle="tooltip"
                      data-placement="top"
                      data-title="View"
                    >
                      <i class="la la-download"></i>
                    </a>

                    <div
                      onClick={() => {
                        if (data?.bookmark === true) {
                          dispatch(
                            bookmarkCourse({ ...data, bookmark: false })
                          );
                          dispatch(DeleteBookMarkACourse(data));
                          return;
                        }
                        dispatch(bookmarkCourse({ ...data, bookmark: true }));
                        dispatch(BookMarkACourse(data));
                      }}
                      className="icon-element icon-element-sm shadow-sm cursor-pointer ml-1 text-secondary"
                      data-toggle="tooltip"
                      data-placement="top"
                      data-title="Edit"
                    >
                      {data?.bookmark ? (
                        <i class="la la-heart"></i>
                      ) : (
                        <i class="la la-heart-o"></i>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      onClick={() => {
                        dispatch(ChangeEditState(true));
                        dispatch(EditThisCourse(data));
                        dispatch(modalCheck(true));
                      }}
                      className="icon-element icon-element-sm shadow-sm cursor-pointer ml-1 text-secondary"
                      data-toggle="tooltip"
                      data-placement="top"
                      data-title="Edit"
                    >
                      <i class="la la-edit"></i>
                    </div>
                    <div
                      onClick={() => dispatch(DeleteCourseDetails(data))}
                      class="icon-element icon-element-sm shadow-sm cursor-pointer ml-1 text-danger"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Delete"
                    >
                      <span
                        data-toggle="modal"
                        data-target="#itemDeleteModal"
                        className="w-100 h-100 d-inline-block"
                      >
                        <i class="la la-trash"></i>
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentCourses;

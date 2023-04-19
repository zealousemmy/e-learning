import React from "react";
import { useSelector } from "react-redux";

const StudentCourses = () => {
  const { mycourses } = useSelector((state) => state.course);

  return (
    <div className="dashboard-cards mb-5 mt-4">
      {mycourses?.map((data, key) => (
        <div
          className="card card-item card-item-list-layout"
          style={{ width: "100%" }}
        >
          <div className="card-image" key={key}>
            <div className="d-block">
              <img
                class="card-img-top"
                src="/assets/images/img8.jpg"
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
              <p>{data?.lectural}</p>
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
                <a
                  href="course-details.html"
                  className="icon-element icon-element-sm shadow-sm cursor-pointer ml-1 text-success"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-title="View"
                >
                  <i class="la la-eye"></i>
                </a>
                <div
                  className="icon-element icon-element-sm shadow-sm cursor-pointer ml-1 text-secondary"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-title="Edit"
                >
                  <i class="la la-edit"></i>
                </div>
                <div
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
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* <div className="card card-item card-item-list-layout">
        <div className="card-image">
          <a href="course-details.html" className="d-block">
            <img
              class="card-img-top"
              src="/assets/images/img9.jpg"
              alt="Card image cap"
            />
          </a>
          <div className="course-badge-labels">
            <div className="course-badge">Bestseller</div>
            <div className="course-badge blue">-39%</div>
          </div>
        </div>

        <div className="card-body">
          <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">All Levels</h6>
          <h5 class="card-title">
            <a href="course-details.html">
              The Business Intelligence Analyst Course 2021
            </a>
          </h5>
          <p class="card-text">
            <a href="teacher-detail.html">Jose Portilla</a>
          </p>
          <div className="rating-wrap d-flex align-items-center py-2">
            <div className="review-stars">
              <span className="rating-number">4.4</span>
              <span className="la la-star"></span>
              <span className="la la-star"></span>
              <span className="la la-star"></span>
              <span className="la la-star"></span>
              <span className="la la-star-o"></span>
            </div>
            <span className="rating-total pl-1">(20,230)</span>
          </div>

          <ul className="card-duration d-flex align-items-center fs-15 pb-2">
            <li className="mr-2">
              <span className="text-black">Status:</span>
              <span className="badge badge-danger text-white">Cancelled</span>
            </li>
            <li className="mr-2">
              <span className="text-black">Duration:</span>
              <span>3 hours 20 min</span>
            </li>
            <li className="mr-2">
              <span className="text-black">Students:</span>
              <span>30,405</span>
            </li>
          </ul>
          <div className="d-flex justify-content-between align-items-center">
            <p className="card-price text-black font-weight-bold">129.99</p>
            <div className="card-action-wrap pl-3">
              <a
                href="course-details.html"
                className="icon-element icon-element-sm shadow-sm cursor-pointer ml-1 text-success"
                data-toggle="tooltip"
                data-placement="top"
                data-title="View"
              >
                <i class="la la-eye"></i>
              </a>
              <div
                className="icon-element icon-element-sm shadow-sm cursor-pointer ml-1 text-secondary"
                data-toggle="tooltip"
                data-placement="top"
                data-title="Edit"
              >
                <i class="la la-edit"></i>
              </div>
              <div
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
            </div>
          </div>
        </div>
      </div>

      <div className="card card-item card-item-list-layout">
        <div className="card-image">
          <a href="course-details.html" className="d-block">
            <img
              class="card-img-top"
              src="images/img10.jpg"
              alt="Card image cap"
            />
          </a>
          <div className="course-badge-labels">
            <div className="course-badge">Bestseller</div>
            <div className="course-badge blue">-39%</div>
          </div>
        </div>

        <div className="card-body">
          <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">All Levels</h6>
          <h5 class="card-title">
            <a href="course-details.html">
              The Business Intelligence Analyst Course 2021
            </a>
          </h5>
          <p class="card-text">
            <a href="teacher-detail.html">Jose Portilla</a>
          </p>
          <div className="rating-wrap d-flex align-items-center py-2">
            <div className="review-stars">
              <span className="rating-number">4.4</span>
              <span className="la la-star"></span>
              <span className="la la-star"></span>
              <span className="la la-star"></span>
              <span className="la la-star"></span>
              <span className="la la-star-o"></span>
            </div>
            <span className="rating-total pl-1">(20,230)</span>
          </div>

          <ul className="card-duration d-flex align-items-center fs-15 pb-2">
            <li className="mr-2">
              <span className="text-black">Status:</span>
              <span className="badge badge-success text-white">Published</span>
            </li>
            <li className="mr-2">
              <span className="text-black">Duration:</span>
              <span>3 hours 20 min</span>
            </li>
            <li className="mr-2">
              <span className="text-black">Students:</span>
              <span>30,405</span>
            </li>
          </ul>
          <div className="d-flex justify-content-between align-items-center">
            <p className="card-price text-black font-weight-bold">129.99</p>
            <div className="card-action-wrap pl-3">
              <a
                href="course-details.html"
                className="icon-element icon-element-sm shadow-sm cursor-pointer ml-1 text-success"
                data-toggle="tooltip"
                data-placement="top"
                data-title="View"
              >
                <i class="la la-eye"></i>
              </a>
              <div
                className="icon-element icon-element-sm shadow-sm cursor-pointer ml-1 text-secondary"
                data-toggle="tooltip"
                data-placement="top"
                data-title="Edit"
              >
                <i class="la la-edit"></i>
              </div>
              <div
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
            </div>
          </div>
        </div>
      </div>

      <div className="card card-item card-item-list-layout">
        <div className="card-image">
          <a href="course-details.html" className="d-block">
            <img
              class="card-img-top"
              src="images/img11.jpg"
              alt="Card image cap"
            />
          </a>
          <div className="course-badge-labels">
            <div className="course-badge">Bestseller</div>
            <div className="course-badge blue">-39%</div>
          </div>
        </div>

        <div className="card-body">
          <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">All Levels</h6>
          <h5 class="card-title">
            <a href="course-details.html">
              The Business Intelligence Analyst Course 2021
            </a>
          </h5>
          <p class="card-text">
            <a href="teacher-detail.html">Jose Portilla</a>
          </p>
          <div className="rating-wrap d-flex align-items-center py-2">
            <div className="review-stars">
              <span className="rating-number">4.4</span>
              <span className="la la-star"></span>
              <span className="la la-star"></span>
              <span className="la la-star"></span>
              <span className="la la-star"></span>
              <span className="la la-star-o"></span>
            </div>
            <span className="rating-total pl-1">(20,230)</span>
          </div>

          <ul className="card-duration d-flex align-items-center fs-15 pb-2">
            <li className="mr-2">
              <span className="text-black">Status:</span>
              <span className="badge badge-success text-white">Published</span>
            </li>
            <li className="mr-2">
              <span className="text-black">Duration:</span>
              <span>3 hours 20 min</span>
            </li>
            <li className="mr-2">
              <span className="text-black">Students:</span>
              <span>30,405</span>
            </li>
          </ul>
          <div className="d-flex justify-content-between align-items-center">
            <p className="card-price text-black font-weight-bold">
              12.99 <span class="before-price font-weight-medium">129.99</span>
            </p>
            <div className="card-action-wrap pl-3">
              <a
                href="course-details.html"
                className="icon-element icon-element-sm shadow-sm cursor-pointer ml-1 text-success"
                data-toggle="tooltip"
                data-placement="top"
                data-title="View"
              >
                <i class="la la-eye"></i>
              </a>
              <div
                className="icon-element icon-element-sm shadow-sm cursor-pointer ml-1 text-secondary"
                data-toggle="tooltip"
                data-placement="top"
                data-title="Edit"
              >
                <i class="la la-edit"></i>
              </div>
              <div
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
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- end card --> */}
    </div>
  );
};

export default StudentCourses;

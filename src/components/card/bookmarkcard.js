import React from "react";
import {
  DeleteBookMarkACourse,
  deleteBookmarkCourse,
} from "../../features/bookmark/bookmarkSlice";
import { useDispatch } from "react-redux";

const TopImageTextCard = ({
  banner,
  title,
  tutor,
  course,
  level,
  coursefile,
  all,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="col-lg-4 responsive-column-half">
      <div className="card card-item">
        <div className="card-image">
          <a href="course-details.html" className="d-block">
            <img
              class="card-img-top"
              src={
                banner && (banner.startsWith("http") || banner.startsWith("/"))
                  ? `${banner}`
                  : "/assets/images/img8.jpg"
              }
              alt="Card image cap"
            />
          </a>
        </div>
        {/* <!-- end card-image --> */}
        <div className="card-body">
          <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">{level} Levels</h6>
          <h5 class="card-title">
            <a href="#">{title}</a>
          </h5>
          <p class="card-text">
            <a href="teacher-detail.html">{tutor}</a>
          </p>
          <div className="rating-wrap d-flex align-items-center py-2">
            {/* <div className="review-stars">
              <span className="rating-number">{rating}</span>
              <span className="la la-star"></span>
              <span className="la la-star"></span>
              <span className="la la-star"></span>
              <span className="la la-star"></span>
              <span className="la la-star-o"></span>
            </div> */}
            {/* <span className="rating-total pl-1">{course}</span> */}
          </div>
          {/* <!-- end rating-wrap --> */}
          <div className="d-flex justify-content-between align-items-center">
            <p className="card-price text-black font-weight-bold">{course}</p>
            <div>
              <a
                href={`${coursefile}`}
                className="icon-element icon-element-sm shadow-sm cursor-pointer"
                data-toggle="tooltip"
                data-placement="top"
                title="Remove from Wishlist"
              >
                <i class="la la-download"></i>
              </a>
              <div
                onClick={() => {
                  dispatch(deleteBookmarkCourse(all));
                  dispatch(DeleteBookMarkACourse(all));
                }}
                className="icon-element icon-element-sm shadow-sm cursor-pointer"
                data-toggle="tooltip"
                data-placement="top"
                title="Remove from Wishlist"
              >
                <i class="la la-heart"></i>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end card-body --> */}
      </div>
      {/* <!-- end card --> */}
    </div>
  );
};

export default TopImageTextCard;

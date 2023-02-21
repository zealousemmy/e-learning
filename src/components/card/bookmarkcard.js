import React from "react";

const TopImageTextCard = () => {
  return (
    <div className="col-lg-4 responsive-column-half">
      <div className="card card-item">
        <div className="card-image">
          <a href="course-details.html" className="d-block">
            <img
              class="card-img-top"
              src="images/img8.jpg"
              alt="Card image cap"
            />
          </a>
          <div className="course-badge-labels">
            <div className="course-badge">Bestseller</div>
            <div className="course-badge blue">-39%</div>
          </div>
        </div>
        {/* <!-- end card-image --> */}
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
          {/* <!-- end rating-wrap --> */}
          <div className="d-flex justify-content-between align-items-center">
            <p className="card-price text-black font-weight-bold">
              12.99 <span class="before-price font-weight-medium">129.99</span>
            </p>
            <div
              className="icon-element icon-element-sm shadow-sm cursor-pointer"
              data-toggle="tooltip"
              data-placement="top"
              title="Remove from Wishlist"
            >
              <i class="la la-heart"></i>
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

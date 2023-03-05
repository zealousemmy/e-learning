import React from "react";

const TopProfileCard = () => {
  return (
    <div>
      <div className="breadcrumb-content d-flex flex-wrap align-items-center justify-content-between mb-5">
        <div className="media media-card align-items-center">
          <div className="media-img media--img media-img-md rounded-full">
            <img
              class="rounded-full"
              src="/assets/img/1658249799050.jpeg"
              alt="Student thumbnail image"
            />
          </div>
          <div className="media-body">
            <h2 className="section__title fs-30">Howdy, Tim Buchalka</h2>
            <div className="rating-wrap d-flex align-items-center pt-2">
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
          </div>
          {/* <!-- end media-body --> */}
        </div>
        {/*  <!-- end media --> */}
        <div className="file-upload-wrap file-upload-wrap-2 file--upload-wrap">
          <input
            type="file"
            name="files[]"
            className="multi file-upload-input"
          />
          <span className="file-upload-text">
            <i class="la la-upload mr-2"></i>Upload a course
          </span>
        </div>
        {/* <!-- file-upload-wrap --> */}
      </div>
      {/* <!-- end breadcrumb-content --> */}
      <div className="section-block mb-5"></div>
    </div>
  );
};

export default TopProfileCard;

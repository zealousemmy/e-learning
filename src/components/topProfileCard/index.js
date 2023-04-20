import axios from "axios";
import React from "react";
import AddCourse from "../addCourse/addCourse";
import ModalComponent from "../modal/modalComponent";
import { useDispatch, useSelector } from "react-redux";
import { modalCheck } from "../../features/courses/courseSlice";

const TopProfileCard = () => {
  const dispatch = useDispatch();
  const { checkmodal } = useSelector((state) => state.course);

  return (
    <div>
      <div className="breadcrumb-content d-flex flex-wrap align-items-center justify-content-between mb-5">
        <div className="media media-card align-items-center">
          <div className="media-img media--img media-img-md rounded-full">
            <img
              class="rounded-full"
              src="/assets/img/c02ece85-abd7-45c2-beee-ff1849cc5014.jpeg"
              alt="Student thumbnail image"
            />
          </div>
          <div className="media-body">
            <h2 className="section__title fs-30">Dickson, Agidi</h2>
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
        <div
          className="file-upload-wrap file-upload-wrap-2 file--upload-wrap"
          // style={{ border: "1px solid red" }}
        >
          {/* <input
            type="file"
            name="files[]"
            className="multi file-upload-input"
            onChange={async (e) => {
              console.log(e.target.files[0].name, "represent");

              let formData = new FormData();

              formData.append("file", e.target.files[0]);

              console.log(formData, "see");

              await axios.post(
                "http://localhost:4000/api/file_upload/image_up",
                formData,
                {
                  headers: {
                    files: e.target.files[0],
                  },
                }
              );
            }}
          /> */}

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
        {/* <!-- file-upload-wrap --> */}
      </div>
      {/* <!-- end breadcrumb-content --> */}
      <div className="section-block mb-5"></div>

      <ModalComponent open={checkmodal}>
        <AddCourse />
      </ModalComponent>
    </div>
  );
};

export default TopProfileCard;

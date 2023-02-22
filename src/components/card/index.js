import React from "react";

const Card = ({ text, number, iconColor, svgIcon }) => {
  return (
    <div className="col-lg-4 responsive-column-half">
      <div className="card card-item dashboard-info-card">
        <div className="card-body d-flex align-items-center">
          <div className={`icon-element flex-shrink-0 ${iconColor} text-white`}>
            <svg
              class="svg-icon-color-white"
              width="40"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              space="preserve"
            >
              {svgIcon.map((paths) => (
                <path d={paths} />
              ))}
            </svg>
          </div>
          <div className="pl-4">
            <p className="card-text fs-18">{text}</p>
            <h5 className="card-title pt-2 fs-26">{number}</h5>
          </div>
        </div>
        {/* <!-- end card-body --> */}
      </div>
      {/* <!-- end card --> */}
    </div>
  );
};

export default Card;

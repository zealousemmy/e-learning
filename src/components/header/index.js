import React from "react";
import { StyledHero } from "./styles";

const HomeHeader = () => {
  return (
    <StyledHero className="hero-area bg-gray hero-area-4">
      <div className="hero-slider-item after-none">
        <div className="container">
          <div className="hero-content text-center">
            <div className="section-heading">
              <h2 className="section__title fs-60 lh-80 pb-3 theme-font-2">
                The latest digital skills, <br /> within reach.
              </h2>
              <p class="section__desc pb-5">
                Discover the fastest, most effective way to gain job-ready{" "}
                <br /> expertise htmlFor the careers of the future.
              </p>
            </div>
            {/* <!-- end section-heading --> */}
            {/* <form method="post" className="w-50 mx-auto">
              <div className="form-group mb-0">
                <input
                  class="form-control form--control pl-3 shadow-sm border-0"
                  type="text"
                  name="search"
                  placeHolder="What do you wnat to learn?"
                />
                <span className="la la-search search-icon"></span>
              </div>
            </form> */}
          </div>
          {/* <!-- end hero-content --> */}
        </div>
        {/* <!-- end container --> */}
      </div>
      {/* <!-- end hero-slider-item --> */}
    </StyledHero>
  );
};

export default HomeHeader;

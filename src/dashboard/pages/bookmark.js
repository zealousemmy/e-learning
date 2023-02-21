import React from "react";
import BookMarkCard from "../../components/bookmark";
import TopProfileCard from "../../components/topProfileCard";

const Bookmark = () => {
  return (
    <div className="container-fluid">
      <TopProfileCard />
      <div class="dashboard-heading mb-5">
        <h3 class="fs-22 font-weight-semi-bold">My Profile</h3>
      </div>
      <BookMarkCard />
    </div>
  );
};

export default Bookmark;

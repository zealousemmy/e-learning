import React from "react";
import ProfileDetails from "../../components/profile";
import TopProfileCard from "../../components/topProfileCard";

const Profile = () => {
  return (
    <div className="container-fluid">
      <TopProfileCard />
      <div class="dashboard-heading mb-5">
        <h3 class="fs-22 font-weight-semi-bold">My Profile</h3>
      </div>
      <ProfileDetails />
    </div>
  );
};

export default Profile;

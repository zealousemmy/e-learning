import React from "react";
import ProfileDetails from "../../components/profile";
import TopProfileCard from "../../components/topProfileCard";
import SpinnerMain from "../../components/Spinner/Spinner1";
import { useSelector } from "react-redux";

const Profile = () => {
  const { userDetails } = useSelector((state) => state.user);

  return (
    <div className="container-fluid">
      <TopProfileCard />

      <div class="dashboard-heading mb-5">
        <h3 class="fs-22 font-weight-semi-bold">My Profile</h3>
      </div>
      {!userDetails ? (
        <div
          style={{
            width: "100%",
            height: "20vh",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <SpinnerMain />
        </div>
      ) : (
        <ProfileDetails />
      )}
    </div>
  );
};

export default Profile;

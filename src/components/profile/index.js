import React from "react";
import { useSelector } from "react-redux";

const ProfileDetails = () => {
  const { userDetails } = useSelector((state) => state.user);

  return (
    <div className="profile-detail mb-5">
      <ul className="generic-list-item generic-list-item-flash">
        <li>
          <span className="profile-name">Registration Date:</span>
          <span class="profile-desc">{userDetails?.regno}</span>
        </li>
        <li>
          <span className="profile-name">Full Name:</span>
          <span class="profile-desc">{userDetails?.fullname}</span>
        </li>
        {/* <li>
          <span className="profile-name">Last Name:</span>
          <span class="profile-desc">Smith</span>
        </li> */}
        {/* <li>
          <span className="profile-name">User Name:</span>
          <span class="profile-desc">alex-admin</span>
        </li> */}
        <li>
          <span className="profile-name">Email:</span>
          <span class="profile-desc">{userDetails?.email}</span>
        </li>
        <li>
          <span className="profile-name">Phone Number:</span>
          <span class="profile-desc">{userDetails?.phone}</span>
        </li>
        <li>
          <span className="profile-name">Bio:</span>
          <span className="profile-desc">{userDetails?.bio}</span>
        </li>
      </ul>
    </div>
  );
};

export default ProfileDetails;

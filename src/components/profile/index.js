import React from "react";

const ProfileDetails = () => {
  return (
    <div className="profile-detail mb-5">
      <ul className="generic-list-item generic-list-item-flash">
        <li>
          <span className="profile-name">Registration Date:</span>
          <span class="profile-desc">Sat 20 Apr 2019, 03:50:30 AM</span>
        </li>
        <li>
          <span className="profile-name">First Name:</span>
          <span class="profile-desc">Alex</span>
        </li>
        <li>
          <span className="profile-name">Last Name:</span>
          <span class="profile-desc">Smith</span>
        </li>
        <li>
          <span className="profile-name">User Name:</span>
          <span class="profile-desc">alex-admin</span>
        </li>
        <li>
          <span className="profile-name">Email:</span>
          <span class="profile-desc">alexsmith@gmail.com</span>
        </li>
        <li>
          <span className="profile-name">Phone Number:</span>
          <span class="profile-desc">(91) 7547 622250</span>
        </li>
        <li>
          <span className="profile-name">Bio:</span>
          <span className="profile-desc">
            Hello! I am a Alex Smith, Washington area graphic designer with over
            6 years of graphic design experience. I specialize in designing
            infographics, icons, brochures, and flyers.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ProfileDetails;

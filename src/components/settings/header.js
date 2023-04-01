import React from "react";

const SettingHeader = () => {
  return (
    <ul class="nav nav-tabs generic-tab pb-30px" id="myTab" role="tablist">
      <li className="nav-item">
        <a
          class="nav-link active"
          id="edit-profile-tab"
          data-toggle="tab"
          href="#edit-profile"
          role="tab"
          aria-controls="edit-profile"
          aria-selected="false"
        >
          Profile
        </a>
      </li>
      <li className="nav-item">
        <a
          class="nav-link"
          id="password-tab"
          data-toggle="tab"
          href="#password"
          role="tab"
          aria-controls="password"
          aria-selected="true"
        >
          Password
        </a>
      </li>
    </ul>
  );
};

export default SettingHeader;

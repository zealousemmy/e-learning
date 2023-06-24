import React from "react";

const Dummy = () => {
  return (
    <StyledMobileSideNav className=" custom-scrollbar-styled main-off-canvas-menu">
      <div
        class="off-canvas-menu-close main-menu-close icon-element icon-element-sm shadow-sm"
        data-toggle="tooltip"
        data-placement="left"
        title="Close menu"
      >
        <i className="la la-times"></i>
      </div>
      {/* <!-- end off-canvas-menu-close --> */}
      <h4 className="off-canvas-menu-heading pt-90px">Alerts</h4>
      <ul className="generic-list-item off-canvas-menu-list pt-1 pb-2 border-bottom border-bottom-gray">
        <li>
          <a href="dashboard.html">Notifications</a>
        </li>
        <li>
          <a href="dashboard-message.html">Messages</a>
        </li>
        <li>
          <a href="my-courses.html">Wishlist</a>
        </li>
        <li>
          <a href="shopping-cart.html">My cart</a>
        </li>
      </ul>
      <h4 className="off-canvas-menu-heading pt-20px">Account</h4>
      <ul className="generic-list-item off-canvas-menu-list pt-1 pb-2 border-bottom border-bottom-gray">
        <li>
          <a href="dashboard-settings.html">Account settings</a>
        </li>
        <li>
          <a href="dashboard-purchase-history.html">Purchase history</a>
        </li>
      </ul>
      <h4 className="off-canvas-menu-heading pt-20px">Profile</h4>
      <ul className="generic-list-item off-canvas-menu-list pt-1 pb-2 border-bottom border-bottom-gray">
        <li>
          <a href="student-detail.html">Public profile</a>
        </li>
        <li>
          <a href="dashboard-settings.html">Edit profile</a>
        </li>
        <li>
          <a href="index.html">Log out</a>
        </li>
      </ul>
      <h4 className="off-canvas-menu-heading pt-20px">More from Aduca</h4>
      <ul className="generic-list-item off-canvas-menu-list pt-1">
        <li>
          <a href="htmlFor-business.html">Aduca for Business</a>
        </li>
        <li>
          <a href="#">Get the app</a>
        </li>
        <li>
          <a href="invite.html">Invite friends</a>
        </li>
        <li>
          <a href="contact.html">Help</a>
        </li>
      </ul>
      <div className="theme-picker d-flex align-items-center justify-content-center mt-4 px-3">
        <button
          class="theme-picker-btn dark-mode-btn btn theme-btn-sm theme-btn-white w-100 font-weight-semi-bold justify-content-center"
          title="Dark mode"
        >
          <svg
            className="mr-1"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
          Dark Mode
        </button>
        <button
          class="theme-picker-btn light-mode-btn btn theme-btn-sm theme-btn-white w-100 font-weight-semi-bold justify-content-center"
          title="Light mode"
        >
          <svg
            className="mr-1"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
          Light Mode
        </button>
      </div>
    </StyledMobileSideNav>
  );
};

export default Dummy;

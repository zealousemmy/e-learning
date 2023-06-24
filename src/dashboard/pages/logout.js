import React from "react";
import TopProfileCard from "../../components/topProfileCard";
import { Navigate } from "react-router-dom";

const Logout = () => {
  const isAuthenticated = localStorage.getItem("token");
  const handleLogout = () => {
    if (isAuthenticated) {
      localStorage.removeItem("token");
      window.location.reload(false);
    }
  };
  return (
    <div className="container-fluid">
      <TopProfileCard />
      <div className="input-box col-lg-12 py-2">
        <button className="btn theme-btn" onClick={handleLogout}>
          Logout of Account
        </button>
      </div>
    </div>
  );
};

export default Logout;

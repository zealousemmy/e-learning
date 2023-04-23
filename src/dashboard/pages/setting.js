import React from "react";
import TopProfileCard from "../../components/topProfileCard";
import SettingPage from "../../components/settings";
import SpinnerMain from "../../components/Spinner/Spinner1";
import { useSelector } from "react-redux";

const Setting = () => {
  const { userDetails } = useSelector((state) => state.user);

  return (
    <div className="container-fluid">
      <TopProfileCard />

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
        <SettingPage />
      )}
    </div>
  );
};

export default Setting;

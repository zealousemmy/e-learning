import React, { useEffect, useState } from "react";
import TopProfileCard from "../../components/topProfileCard";
import SpinnerMain from "../../components/Spinner/Spinner1";
import ChatComponet from "../../components/chatBotComponent";
import { useDispatch, useSelector } from "react-redux";
import { AllBot, GetMyBot } from "../../features/bot/botSlice";

const CreateBotQuestion = () => {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true);
  const { userDetails } = useSelector((state) => state.user);

  const fetchData = async () => {
    setLoader(true);
    await dispatch(GetMyBot(userDetails._id));
    await dispatch(AllBot());
    setLoader(false);
  };

  useEffect(() => {
    if (userDetails) {
      fetchData();
    }
  }, [userDetails]);

  return (
    <div className="container-fluid">
      <TopProfileCard />

      <div class="dashboard-heading mb-5">
        <h3 class="fs-22 font-weight-semi-bold">
          {userDetails?.bioType === "lectural" ? "Chat bot" : "LCU AI"}
        </h3>
      </div>

      {loader ? (
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
        <ChatComponet />
      )}
    </div>
  );
};

export default CreateBotQuestion;

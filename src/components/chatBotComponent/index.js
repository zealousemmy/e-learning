import React, { useState } from "react";
import { ChartDiv } from "./styles/chat.style";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { CreateBot, DeteleBot, loading } from "../../features/bot/botSlice";
import SpinnerNormal from "../Spinner/Spinner2";

const ChatComponet = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("My Bot");
  const [formValue, setFormValue] = useState({});
  const { userDetails } = useSelector((state) => state.user);

  const { isLoading, allBot, myBot } = useSelector((state) => state.bot);

  const handleChage = (e) => {
    const { name, value } = e.target;

    setFormValue({ ...formValue, [name]: value });
  };

  const HandleCreate = async () => {
    dispatch(loading(true));

    if (formValue?.question && formValue?.reply) {
      await dispatch(
        CreateBot({ question: formValue?.question, reply: formValue?.reply })
      );

      setFormValue({});
    } else {
      toast("all field must be filled");
    }
  };

  return (
    <ChartDiv>
      {userDetails?.bioType === "lectural" && (
        <div className="header">
          <div className="input-body">
            <p>Create Question</p>

            <input
              type="text"
              value={formValue?.question || ""}
              name="question"
              onChange={handleChage}
            />
          </div>

          <div className="textArea">
            <p>Create Answer</p>

            <textarea
              name="reply"
              value={formValue?.reply || ""}
              onChange={handleChage}
            ></textarea>
          </div>

          <div className="headet_button">
            {isLoading ? (
              <button>
                <SpinnerNormal />
              </button>
            ) : (
              <button onClick={HandleCreate}>Submit Course</button>
            )}
          </div>
        </div>
      )}

      {userDetails?.bioType === "lectural" && (
        <div>
          <div className="tabWrapper">
            {tabContent?.map((item, key) => (
              <div
                key={key}
                onClick={() => {
                  if (item.title === "My Bot") {
                    setTitle(item.title);
                  } else {
                    setTitle(item.title);
                  }
                }}
                className={`tab1 ${item.title === title && "tabSuccess"}`}
              >
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="table">
        <div className="tableSection__header">
          <div className="tableSection__headerSection Time">
            <p>Name</p>
          </div>

          <div className="tableSection__headerSection Time">
            <p>email</p>
          </div>

          <div
            className="tableSection__headerSection Time"
            style={{ width: "25%" }}
          >
            <p>question</p>
          </div>

          {userDetails?.bioType === "lectural" && (
            <div
              className="tableSection__headerSection Time"
              style={{ width: "35%" }}
            >
              <p>Reply</p>
            </div>
          )}

          {userDetails?.bioType === "lectural" && title === "My Bot" && (
            <div className="tableSection__headerSection Action">
              <p>Action</p>
            </div>
          )}
        </div>

        {userDetails?.bioType === "lectural"
          ? myBot && title === "My Bot"
            ? myBot.map((item, key) => (
                <div className="tableSection__body" key={key}>
                  <div
                    className="tableSection__bodySection Time"
                    style={{ cursor: "pointer" }}
                    // onClick={() => {
                    //   dispatch({type: USER_PROFILE_LOADER, payload: true});
                    //   history.push(`/app/profile/${item?.userID}`);
                    // }}
                  >
                    <p>{item?.fullname}</p>
                  </div>

                  <div className="tableSection__bodySection Type">
                    <p>{item?.email}</p>
                  </div>

                  <div
                    className="tableSection__bodySection Type"
                    style={{ width: "25%" }}
                  >
                    <p>{item?.question}</p>
                  </div>

                  <div
                    className="tableSection__bodySection Type"
                    style={{ width: "35%" }}
                  >
                    <p>{item?.reply}</p>
                  </div>

                  <div
                    className="tableSection__bodySection Action"
                    onClick={() => {
                      dispatch(DeteleBot(item?._id));
                    }}
                  >
                    <p>Delete Bot</p>
                  </div>
                </div>
              ))
            : allBot.map((item, key) => (
                <div className="tableSection__body" key={key}>
                  <div
                    className="tableSection__bodySection Time"
                    style={{ cursor: "pointer" }}
                    // onClick={() => {
                    //   dispatch({type: USER_PROFILE_LOADER, payload: true});
                    //   history.push(`/app/profile/${item?.userID}`);
                    // }}
                  >
                    <p>{item?.fullname}</p>
                  </div>

                  <div className="tableSection__bodySection Type">
                    <p>{item?.email}</p>
                  </div>

                  <div
                    className="tableSection__bodySection Type"
                    style={{ width: "25%" }}
                  >
                    <p>{item?.question}</p>
                  </div>

                  <div
                    className="tableSection__bodySection Type"
                    style={{ width: "35%" }}
                  >
                    <p>{item?.reply}</p>
                  </div>

                  {/* <div
                  className="tableSection__bodySection Action"
                  onClick={() => {}}
                >
                  <p>Delete Bot</p>
                </div> */}
                </div>
              ))
          : allBot.map((item, key) => (
              <div className="tableSection__body" key={key}>
                <div
                  className="tableSection__bodySection Time"
                  style={{ cursor: "pointer" }}
                  // onClick={() => {
                  //   dispatch({type: USER_PROFILE_LOADER, payload: true});
                  //   history.push(`/app/profile/${item?.userID}`);
                  // }}
                >
                  <p>{item?.fullname}</p>
                </div>

                <div className="tableSection__bodySection Type">
                  <p>{item?.email}</p>
                </div>

                <div
                  className="tableSection__bodySection Type"
                  style={{ width: "25%" }}
                >
                  <p>{item?.question}</p>
                </div>

                {/* <div
                  className="tableSection__bodySection Type"
                  style={{ width: "35%" }}
                >
                  <p>{item?.reply}</p>
                </div> */}

                {/* <div
                  className="tableSection__bodySection Action"
                  onClick={() => {}}
                >
                  <p>Delete Bot</p>
                </div> */}
              </div>
            ))}
      </div>
    </ChartDiv>
  );
};

const tabContent = [{ title: "My Bot" }, { title: "General Bot" }];

export default ChatComponet;

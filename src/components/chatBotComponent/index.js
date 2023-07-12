import React, { useContext, useEffect, useState } from "react";
import { ChartDiv } from "./styles/chat.style";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { CreateBot, DeteleBot, loading } from "../../features/bot/botSlice";
import SpinnerNormal from "../Spinner/Spinner2";
import { AppContext } from "../../context/appContext";
import moment from "moment";

const ChatComponet = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("My Bot");

  const [studentTitle, setStudentTitle] = useState("Verified Question");
  const [formValue, setFormValue] = useState({});
  const { userDetails } = useSelector((state) => state.user);

  const [change, setChange] = useState(false);
  const [currentRoom, setCurrentRoom] = useState();
  const [messages, setMessages] = useState();
  const [message, setMessage] = useState("");

  const { socket } = useContext(AppContext);

  const { rooms, isError, isSuccess } = useSelector((state) => state.message);

  const { isLoading, allBot, myBot } = useSelector((state) => state.bot);

  const handleChage = (e) => {
    const { name, value } = e.target;

    setFormValue({ ...formValue, [name]: value });
  };

  useEffect(() => {
    if (userDetails?._id) {
      joinRoom({ notice: "bot", course: userDetails?._id });
    }
  }, [userDetails?._id]);

  const joinRoom = (room) => {
    socket.emit("join-room", room.course);
    setCurrentRoom(room);
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

  socket.off("room-messages").on("room-messages", (roomMessages) => {
    setMessages(roomMessages);
  });

  const getFormattedDate = async () => {
    const date = new Date();

    const year = date.getFullYear();

    let month = (1 + date.getMonth()).toString();

    month = month.length > 1 ? month : "0" + month;

    let day = date.getDate().toString();

    day = day.length > 1 ? day : "0" + day;

    return month + "/" + day + "/" + year;
  };

  const handleinput = (e) => {
    const { value } = e.target;
    setMessage(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message) return;

    let today = new Date();

    const minutes =
      today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();

    const time = today.getHours() + ":" + minutes;

    const todayDate = await getFormattedDate();

    socket.emit(
      "message-room",
      currentRoom?.course,
      message,
      userDetails,
      time,
      todayDate,
      currentRoom?.notice
    );

    setMessage("");
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

      {userDetails?.bioType === "lectural" ? (
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

            <div
              className="tableSection__headerSection Time"
              style={{ width: "35%" }}
            >
              <p>Reply</p>
            </div>

            {title === "My Bot" && (
              <div className="tableSection__headerSection Action">
                <p>Action</p>
              </div>
            )}
          </div>

          {myBot && title === "My Bot"
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
              ))}
        </div>
      ) : (
        <>
          <div>
            <div className="tabWrapper">
              {questionStatus?.map((item, key) => (
                <div
                  key={key}
                  onClick={() => {
                    if (item.title === "Verified Question") {
                      setStudentTitle(item.title);
                    } else {
                      setStudentTitle(item.title);
                    }
                  }}
                  className={`tab1 ${
                    item.title === studentTitle && "tabSuccess"
                  }`}
                >
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          {studentTitle === "Verified Question" ? (
            <div className="table">
              <div className="tableSection__header">
                <div className="tableSection__headerSection Time">
                  <p>S/N</p>
                </div>

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
              </div>

              {allBot.map((item, key) => (
                <div className="tableSection__body" key={key}>
                  <div className="tableSection__bodySection Type">
                    <p>{item?.count}</p>
                  </div>

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
                </div>
              ))}
            </div>
          ) : (
            <div className="container-fluid">
              <div className="dashboard-message-wrapper d-flex my-4">
                {/* <!-- message-sidebar --> */}
                <div className="message-content flex-grow-1">
                  <div className="message-header bg-gray d-flex align-items-center justify-content-between p-4 border-bottom border-bottom-gray">
                    <div className="media media-card align-items-center">
                      <div className="avatar-sm flex-shrink-0 mr-2">
                        <img
                          class="rounded-full img-fluid"
                          src={
                            currentRoom?.cover_pic &&
                            (currentRoom?.cover_pic.startsWith("http") ||
                              currentRoom?.cover_pic.startsWith("/"))
                              ? `${currentRoom?.cover_pic}`
                              : "/assets/img/avatar-profile-photo.png"
                          }
                          alt="Avatar image"
                        />
                      </div>
                      <div className="media-body overflow-hidden">
                        <h5 className="fs-14">{currentRoom?.course}</h5>
                        {/* <span className="fs-12 d-block lh-18 pt-1 text-success">
                  Online
                </span> */}
                      </div>
                    </div>
                    <div
                      class="icon-element icon-element-sm shadow-sm cursor-pointer"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Clear chart"
                    >
                      <i className="la la-trash"></i>
                    </div>
                  </div>
                  {/* <!-- message-header --> */}
                  <div className="conversation-wrap">
                    {messages?.map((item, key) => (
                      <div
                        className="conversation-box custom-scrollbar-styled"
                        key={key}
                      >
                        <div className="message-time text-center mb-3">
                          <span className="ribbon">
                            {moment(item._id).format("MMM DD, YYYY")}
                          </span>
                        </div>

                        {item?.messagesByDate?.map((data, i) => (
                          <>
                            {userDetails._id === data?.from?._id ? (
                              <div className="conversation-item message-sent mb-3">
                                <div className="media media-card align-items-center">
                                  <div className="avatar-sm flex-shrink-0 mr-4">
                                    <img
                                      class="rounded-full img-fluid"
                                      src={
                                        data?.from?.profile_pic &&
                                        (data?.from?.profile_pic.startsWith(
                                          "http"
                                        ) ||
                                          data?.from?.profile_pic.startsWith(
                                            "/"
                                          ))
                                          ? `${data?.from?.profile_pic}`
                                          : "/assets/img/avatar-profile-photo.png"
                                      }
                                      alt="Avatar image"
                                    />
                                  </div>
                                  <div className="media-body d-flex align-items-center">
                                    <div className="generic-action-wrap generic--action-wrap-3">
                                      <div className="dropdown">
                                        <a
                                          class="action-btn"
                                          href="#"
                                          role="button"
                                          id="dropdownMenuLinkFour"
                                          data-toggle="dropdown"
                                          aria-haspopup="true"
                                          aria-expanded="false"
                                        >
                                          <i className="la la-ellipsis-v"></i>
                                        </a>
                                        <div
                                          className="dropdown-menu dropdown-menu-right"
                                          aria-labelledby="dropdownMenuLinkFour"
                                        >
                                          <a class="dropdown-item" href="#">
                                            Copy
                                          </a>
                                          <a class="dropdown-item" href="#">
                                            Cut
                                          </a>
                                          <a class="dropdown-item" href="#">
                                            Edit
                                          </a>
                                          <a class="dropdown-item" href="#">
                                            Delete
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="message-body">
                                      <h5
                                        className="fs-13"
                                        style={{
                                          color: "#f3f3f3",
                                          display: "flex",
                                          justifyContent: "flex-end",
                                        }}
                                      >
                                        {data?.from?.fullname}
                                      </h5>
                                      <h5 className="fs-13">{data?.content}</h5>
                                      <span className="fs-12 d-block lh-18 pt-1">
                                        {data?.time}{" "}
                                        <i class="la la-check ml-1"></i>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div className="conversation-item message-reply mb-3">
                                <div className="media media-card align-items-center">
                                  <div className="avatar-sm flex-shrink-0 mr-4">
                                    <img
                                      class="rounded-full img-fluid"
                                      src={
                                        data?.from?.profile_pic &&
                                        (data?.from?.profile_pic.startsWith(
                                          "http"
                                        ) ||
                                          data?.from?.profile_pic.startsWith(
                                            "/"
                                          ))
                                          ? `${data?.from?.profile_pic}`
                                          : "/assets/img/avatar-profile-photo.png"
                                      }
                                      alt="Avatar image"
                                    />
                                  </div>
                                  <div className="media-body d-flex align-items-center">
                                    <div className="generic-action-wrap generic--action-wrap-3">
                                      <div className="dropdown">
                                        <a
                                          class="action-btn"
                                          href="#"
                                          role="button"
                                          id="dropdownMenuLinkFive"
                                          data-toggle="dropdown"
                                          aria-haspopup="true"
                                          aria-expanded="false"
                                        >
                                          <i className="la la-ellipsis-v"></i>
                                        </a>
                                        <div
                                          className="dropdown-menu dropdown-menu-right"
                                          aria-labelledby="dropdownMenuLinkFive"
                                        >
                                          <a class="dropdown-item" href="#">
                                            Copy
                                          </a>
                                          <a class="dropdown-item" href="#">
                                            Cut
                                          </a>
                                          <a class="dropdown-item" href="#">
                                            Edit
                                          </a>
                                          <a class="dropdown-item" href="#">
                                            Delete
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="message-body">
                                      <h5
                                        className="fs-13"
                                        style={{
                                          display: "flex",
                                          justifyContent: "flex-start",
                                        }}
                                      >
                                        {data?.from?.fullname}
                                      </h5>
                                      <h5 className="fs-13">{data?.content}</h5>
                                      <span className="fs-12 d-block lh-18 pt-1">
                                        {data?.time}{" "}
                                        <i class="la la-check ml-1"></i>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </>
                        ))}
                      </div>
                    ))}

                    {/* <!-- conversation-box --> */}
                  </div>
                  {/* <!-- conversation-wrap --> */}
                  <div className="message-reply-body d-flex align-items-center pt-2 px-4 border-top border-top-gray">
                    <form action="#" className="flex-grow-1">
                      <textarea
                        // class="emoji-picker"
                        placeholder="Your message"
                        rows="2"
                        style={{ flexGrow: 1, width: "70%" }}
                        value={message || ""}
                        onChange={handleinput}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            handleSubmit(e);
                          }
                        }}
                      ></textarea>
                    </form>
                    <div className="file-upload-wrap file--upload-wrap file-upload-wrap-3">
                      <input
                        type="file"
                        name="files[]"
                        className="multi file-upload-input lh-18"
                        multiple
                      />
                      <span className="file-upload-text">
                        <i class="la la-paperclip"></i>
                      </span>
                    </div>
                    {/* <!-- file-upload-wrap --> */}
                    <button
                      type="button"
                      className="message-send icon-element icon-element-xs bg-1 text-white ml-2 border-0"
                      onClick={handleSubmit}
                    >
                      <i className="la la-paper-plane"></i>
                    </button>
                  </div>
                </div>
                {/* <!-- message-content --> */}
              </div>
            </div>
          )}
        </>
      )}
    </ChartDiv>
  );
};

const tabContent = [{ title: "My Bot" }, { title: "General Bot" }];

const questionStatus = [{ title: "Verified Question" }, { title: "Chat Bot" }];

export default ChatComponet;

import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetLecturalsRooms,
  GetRooms,
} from "../../features/message/messageSlice";
import { AppContext } from "../../context/appContext";
import moment from "moment/moment";
import SpinnerMain from "../Spinner/Spinner1";

const MessageIndex = () => {
  const dispatch = useDispatch();

  const [change, setChange] = useState(false);
  const [currentRoom, setCurrentRoom] = useState();
  const [messages, setMessages] = useState();
  const [message, setMessage] = useState("");

  const { socket } = useContext(AppContext);

  const { rooms, isLoading, isError, isSuccess } = useSelector(
    (state) => state.message
  );

  const { userDetails } = useSelector((state) => state.user);

  const ShowRoom = async () => {
    setChange(true);
    await dispatch(
      GetRooms({
        level: userDetails?.level,
        department: userDetails?.department,
        faculty: userDetails?.faculty,
      })
    );
    setChange(false);
  };

  const ShowLecturalsRoom = async () => {
    setChange(true);
    await dispatch(
      GetLecturalsRooms({
        fullname: userDetails?.fullname,
      })
    );
    setChange(false);
  };

  useEffect(() => {
    if (userDetails?.bioType === "lectural") {
      ShowLecturalsRoom();
    } else {
      ShowRoom();
    }
  }, [userDetails]);

  const joinRoom = (room) => {
    socket.emit("join-room", room.course);
    setCurrentRoom(room);
  };

  const getFormattedDate = async () => {
    const date = new Date();

    const year = date.getFullYear();

    let month = (1 + date.getMonth()).toString();

    month = month.length > 1 ? month : "0" + month;

    let day = date.getDate().toString();

    day = day.length > 1 ? day : "0" + day;

    return month + "/" + day + "/" + year;
  };

  socket.off("room-messages").on("room-messages", (roomMessages) => {
    setMessages(roomMessages);
  });

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
    <>
      {change ? (
        <SpinnerMain />
      ) : (
        <div className="container-fluid">
          <div className="dashboard-message-wrapper d-flex my-4">
            <div className="message-sidebar">
              <form action="#" className="p-4">
                <div className="form-group mb-0">
                  <input
                    class="form-control form--control form--control-gray pl-3"
                    type="text"
                    placeHolder="Search..."
                  />
                  <button type="submit" className="search-icon">
                    <i class="la la-search"></i>
                  </button>
                </div>
              </form>
              <div className="message-inbox-item border-bottom border-bottom-gray">
                <div className="notification-body scrolled-box scrolled--box custom-scrollbar-styled">
                  {rooms?.map((item, key) => (
                    <a
                      key={key}
                      className="media media-card align-items-center"
                      onClick={() => {
                        joinRoom(item);
                      }}
                      style={{
                        backgroundColor: `${
                          currentRoom === item?.course ? "#f3f3f3" : ""
                        }`,
                      }}
                    >
                      <div className="avatar-sm flex-shrink-0 mr-2 position-relative">
                        <img
                          class="rounded-full img-fluid"
                          src={
                            item?.cover_pic &&
                            (item?.cover_pic.startsWith("http") ||
                              item?.cover_pic.startsWith("/"))
                              ? `${item?.cover_pic}`
                              : "/assets/img/avatar-profile-photo.png"
                          }
                          alt="Avatar image"
                        />
                        {/* <span className="dot-status position-absolute bottom-0 right-0"></span> */}
                      </div>
                      <div className="media-body overflow-hidden">
                        <h5 className="fs-14">
                          {item.course}
                          <span class="badge badge-success p-1 ml-2">2</span>
                        </h5>
                        <p className="text-truncate lh-18 pt-1 text-gray fs-13">
                          How the hell am I supposed to get a jury to believe
                          you when I am not even sure that I do
                        </p>
                        <span class="fs-12 d-block lh-18 pt-1 text-gray">
                          5 min ago
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              {/* <!-- end message-inbox-item --> */}
            </div>
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
                                      data?.from?.profile_pic.startsWith("/"))
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
                                      data?.from?.profile_pic.startsWith("/"))
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
  );
};

export default MessageIndex;

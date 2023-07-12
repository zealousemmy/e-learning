import React from "react";
import { AssDiv } from "./ass.style";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  ChangeEditState,
  StudentAssignmentCheck,
} from "../../features/courses/courseSlice";
import { EditContent } from "../../features/studentAssignement/studentAssignmentSlice";

const NotificationTable = () => {
  const dispatch = useDispatch();
  const { mycourses } = useSelector((state) => state.course);

  return (
    <AssDiv>
      <div className="tableSection__header">
        <div className="tableSection__headerSection Time">
          <p>course</p>
        </div>

        <div className="tableSection__headerSection Time">
          <p>department</p>
        </div>

        <div className="tableSection__headerSection Time">
          <p>faculty</p>
        </div>

        <div className="tableSection__headerSection Time">
          <p>Lectural's Name</p>
        </div>

        <div className="tableSection__headerSection TransactionId">
          <p>Time</p>
        </div>
        <div className="tableSection__headerSection TransactionId">
          <p>course Bio</p>
        </div>
      </div>

      {mycourses?.length > 0 ? (
        mycourses?.map((data, key) => (
          <div className="tableSection__body" key={key}>
            <div
              className="tableSection__bodySection Time"
              style={{ cursor: "pointer" }}
              // onClick={() => {
              //   dispatch({type: USER_PROFILE_LOADER, payload: true});
              //   history.push(`/app/profile/${item?.userID}`);
              // }}
            >
              <p>{data?.course}</p>
            </div>

            <div className="tableSection__bodySection Type">
              <p>{data?.department}</p>
            </div>

            <div className="tableSection__bodySection Type">
              <p>{data?.faculty}</p>
            </div>

            <div className="tableSection__bodySection Type">
              <p>{data?.fullname}</p>
            </div>

            <div className="tableSection__bodySection">
              <p>{moment(data?.date).format("MMM ddd yyyy hh:mm a")}</p>
            </div>

            <div className="tableSection__bodySection">
              <p>{data?.course_bio}</p>
            </div>
          </div>
        ))
      ) : (
        <div>
          <p>NO Course available now</p>
        </div>
      )}
    </AssDiv>
  );
};

export default NotificationTable;

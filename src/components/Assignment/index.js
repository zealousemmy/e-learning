import React from "react";
import { AssDiv } from "./ass.style";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  AssignmentCheck,
  ChangeEditState,
  EditThisCourse,
} from "../../features/courses/courseSlice";
import {
  DeleteAssignment,
  EditThisAssignment,
} from "../../features/assignment/assignmentSlice";

const AssginmentTable = () => {
  const dispatch = useDispatch();
  const { myAssignment } = useSelector((state) => state.assignment);

  const { userDetails } = useSelector((state) => state.user);

  return (
    <AssDiv>
      <div className="tableSection__header">
        <div className="tableSection__headerSection Time">
          <p>Lecturals Name</p>
        </div>

        <div className="tableSection__headerSection Time">
          <p>Course</p>
        </div>

        <div className="tableSection__headerSection Type">
          <p>course Title</p>
        </div>

        <div className="tableSection__headerSection Time">
          <p>Assignment Id</p>
        </div>

        <div className="tableSection__headerSection Status">
          <p>Status</p>
        </div>

        <div className="tableSection__headerSection TransactionId">
          <p>Starting Date</p>
        </div>

        <div className="tableSection__headerSection TransactionId">
          <p>Ending Date</p>
        </div>

        <div className="tableSection__headerSection TransactionId">
          <p>Created</p>
        </div>

        <div className="tableSection__headerSection TransactionId">
          <p>download</p>
        </div>

        {userDetails?.bioType === "lectural" && (
          <div className="tableSection__headerSection Action">
            <p>Action</p>
          </div>
        )}
      </div>

      {myAssignment?.map((item, key) => (
        <div className="tableSection__body">
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
            <p>{item?.course}</p>
          </div>

          <div className="tableSection__bodySection Type">
            <p>{item?.course_bio}</p>
          </div>

          <div className="tableSection__bodySection Status">
            <p>{item?.assignmentId}</p>
          </div>

          <div className="tableSection__bodySection Status">
            <p>{item?.status}</p>
          </div>

          <div className="tableSection__bodySection">
            <p>{moment(item?.start_date).format("MMM ddd yyyy")}</p>
          </div>

          <div className="tableSection__bodySection">
            <p>{moment(item?.end_date).format("MMM ddd yyyy")}</p>
          </div>

          <div className="tableSection__bodySection">
            <p>{moment(item?.date).format("MMM ddd yyyy hh:mm a")}</p>
          </div>

          <a href={`${item?.coursefile}`} className="tableSection__bodySection">
            <p>assignment file</p>
          </a>

          {userDetails?.bioType === "lectural" && (
            <div className="tableSection__bodySection Action">
              <p
                onClick={() => {
                  dispatch(ChangeEditState(true));
                  dispatch(EditThisAssignment(item));
                  dispatch(AssignmentCheck(true));
                }}
              >
                Edit
              </p>

              <p
                className="delete"
                onClick={() => {
                  dispatch(
                    DeleteAssignment({ _id: item?._id, regno: item?.regno })
                  );
                }}
              >
                Delete
              </p>
            </div>
          )}
        </div>
      ))}
    </AssDiv>
  );
};

export default AssginmentTable;

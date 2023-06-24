import React from "react";
import { AssDiv } from "./ass.style";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  ChangeEditState,
  StudentAssignmentCheck,
} from "../../features/courses/courseSlice";
import { EditContent } from "../../features/studentAssignement/studentAssignmentSlice";

const AssginmentForStudentTable = () => {
  const dispatch = useDispatch();
  const { myAssignment } = useSelector((state) => state.student_assignment);
  console.log(myAssignment, "never state this");
  return (
    <AssDiv>
      <div className="tableSection__header">
        <div className="tableSection__headerSection Time">
          <p>Student Name</p>
        </div>

        <div className="tableSection__headerSection Time">
          <p>Reg No</p>
        </div>

        <div className="tableSection__headerSection Time">
          <p>Assignment Id</p>
        </div>

        <div className="tableSection__headerSection Time">
          <p>Courst Name</p>
        </div>

        <div className="tableSection__headerSection Coin">
          <p>Score</p>
        </div>

        <div className="tableSection__headerSection TransactionId">
          <p>Time</p>
        </div>
        <div className="tableSection__headerSection TransactionId">
          <p>DownLoad</p>
        </div>
        <div className="tableSection__headerSection Action">
          <p>Action</p>
        </div>
      </div>

      {myAssignment?.map((data, key) => (
        <div className="tableSection__body" key={key}>
          <div
            className="tableSection__bodySection Time"
            style={{ cursor: "pointer" }}
            // onClick={() => {
            //   dispatch({type: USER_PROFILE_LOADER, payload: true});
            //   history.push(`/app/profile/${item?.userID}`);
            // }}
          >
            <p>{data?.fullname}</p>
          </div>

          <div className="tableSection__bodySection Type">
            <p>{data?.regno}</p>
          </div>

          <div className="tableSection__bodySection Type">
            <p>{data?.assignmentId}</p>
          </div>

          <div className="tableSection__bodySection Type">
            <p>{data?.course}</p>
          </div>

          <div className="tableSection__bodySection">
            <p>{data?.score ? data?.score : "not marked"}</p>
          </div>

          <div className="tableSection__bodySection">
            <p>{moment(data?.date).format("MMM ddd yyyy hh:mm a")}</p>
          </div>

          <a href={`${data?.coursefile}`} className="tableSection__bodySection">
            <p>Assignment file</p>
          </a>

          <div
            className="tableSection__bodySection Action"
            onClick={() => {
              dispatch(ChangeEditState(true));
              dispatch(StudentAssignmentCheck(true));
              dispatch(EditContent(data));
            }}
          >
            <p>Edit Assignment</p>
          </div>
        </div>
      ))}
    </AssDiv>
  );
};

export default AssginmentForStudentTable;

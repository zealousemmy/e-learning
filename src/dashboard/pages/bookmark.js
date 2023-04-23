import React, { useEffect, useState } from "react";
import BookMarkCard from "../../components/bookmark";
import TopProfileCard from "../../components/topProfileCard";
import { GetBookMarkACourse } from "../../features/bookmark/bookmarkSlice";
import { useDispatch, useSelector } from "react-redux";
import SpinnerMain from "../../components/Spinner/Spinner1";

const Bookmark = () => {
  const disptach = useDispatch();
  const { userDetails } = useSelector((state) => state.user);
  const [loader, setLoader] = useState(false);

  const fetchDate = async () => {
    setLoader(true);
    await disptach(GetBookMarkACourse());
    setLoader(false);
  };

  useEffect(() => {
    fetchDate();
  }, [userDetails]);

  return (
    <div className="container-fluid">
      <TopProfileCard />
      <div class="dashboard-heading mb-5">
        <h3 class="fs-22 font-weight-semi-bold">My Profile</h3>
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
        <BookMarkCard />
      )}
    </div>
  );
};

export default Bookmark;

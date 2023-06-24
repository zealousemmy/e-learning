import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ScaleLoader";
import { withTheme } from "styled-components";
import { SpinnerMainDiv } from "./spinner.styles";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#E89B2D",
};

const SpinnerMain = ({ sending }) => {
  //   let [loading, setLoading] = useState(true);
  //   let [color, setColor] = useState("#ffffff");

  return (
    <SpinnerMainDiv color={"#152844"}>
      <div className={"spinnerbody"}>
        <ClipLoader
          color={"#E89B2D"}
          loading={sending}
          cssOverride={override}
          size={100}
        />
      </div>
    </SpinnerMainDiv>
  );
};

export default withTheme(SpinnerMain);

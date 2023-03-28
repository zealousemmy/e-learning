// import React from "react";
// import { withTheme } from "styled-components";

// const SpinnerNormal = () => {
//   return (
//     <SpinnerDiv color={"#152844"}>
//       <div className={"spinnerbody"}>
//         <div className={"loading-spinner"}></div>
//       </div>
//     </SpinnerDiv>
//   );
// };

// export default withTheme(SpinnerNormal);
// PulseLoader

import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/PulseLoader";
import { withTheme } from "styled-components";
import { SpinnerDiv } from "./spinner2.styles";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#E89B2D",
};

const SpinnerNormal = ({ sending }) => {
  //   let [loading, setLoading] = useState(true);
  //   let [color, setColor] = useState("#ffffff");

  return (
    <SpinnerDiv color={"#152844"}>
      <div className={"spinnerbody"}>
        <ClipLoader
          color={"#E89B2D"}
          loading={sending}
          cssOverride={override}
          size={15}
        />
      </div>
    </SpinnerDiv>
  );
};

export default withTheme(SpinnerNormal);

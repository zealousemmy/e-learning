import styled, { keyframes } from "styled-components";

const spinner = keyframes` 
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const SpinnerDiv = styled.div`
  /* position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh; */
  .spinnerbody {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;

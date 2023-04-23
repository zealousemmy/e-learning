import styled from "styled-components";

export const ModalDiv = styled.div`
  z-index: 500000;
  display: ${({ open }) => (open ? "block" : "none")};
  padding-top: 50px;
  padding-bottom: 30px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  /* background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4); */
  background: rgba(52, 64, 84, 0.25);
  backdrop-filter: blur(0px);

  .modalContainer {
    margin: 50px 0px;
    width: 100%;
    height: 120%;

    .modalContent {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      padding: 0px;
      outline: 0;
      // width: fit-content;
    }
  }
`;

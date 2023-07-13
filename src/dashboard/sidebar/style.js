import styled from "styled-components";
import defaultLeftValue from "./defaults";
export const StyledSideComp = styled.div``;
export const StyledMobileSideNav = styled.div`
  display: none;
  @media (max-width: 1199px) {
    display: block;
    /* left: ${(left) => (left ? left : -20)}rem !important; */
    left: ${(props) => (props.left ? 0 : -75)}rem !important;
    top: 0;
    position: fixed;
    height: 100vh !important;
    z-index: 99;
    width: 100%;
    background-color: rgba(30, 30, 28, 0.9);
    .sideBarContainer {
      height: inherit !important;
      width: 70%;
      background-color: white;
      overflow-y: auto;
    }
  }
`;

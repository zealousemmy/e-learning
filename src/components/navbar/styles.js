import styled from "styled-components";

export const NavContainer = styled.div`
  padding: 10px;
  width: 100%;
  overflow: hidden;
  z-index: 9;
  position: sticky;
  .logo {
    width: 20%;
    height: 60px;
    img {
      width: 100%;
      height: inherit;
    }
  }
`;
export const StyledMobileNav = styled.div`
  display: none;
  @media (max-width: 1199px) {
    display: block;
    /* left: ${(left) => (left ? left : -20)}rem !important; */
    left: ${(props) => (props.left ? -75 : 0)}rem !important;
    top: 0;
    position: fixed;
    height: 100vh !important;
    z-index: 99;
    width: 100%;
    background-color: rgba(30, 30, 28, 0.9);
    .sideBarContainer {
      height: inherit !important;
      width: 80%;
      background-color: white;
      overflow-y: auto;
    }
  }
`;

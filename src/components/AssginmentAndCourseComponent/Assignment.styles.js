import styled from "styled-components";

export const AssginmentDiv = styled.div`
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 2.81013rem;
    line-height: 3.6rem;
    color: #000000;
  }

  .tabWrapper {
    margin-top: 30px;
    margin-bottom: 90px;
    /* width: 200px; */
    height: 40px;
    background-color: #f0f2f5;
    display: flex;
    align-items: center;
    //   background-color: red;
    border-radius: 10px;
    //   justify-content: center;

    .tab1 {
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;

      cursor: pointer;

      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: -0.154px;
        color: #7b7c7c;
      }
    }

    .tabSuccess {
      background: #34d07f;
      border: 1px solid #f0f2f5;
      box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
      border-radius: 10px;

      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 18px;
        color: #ffffff;
      }
    }
  }
`;

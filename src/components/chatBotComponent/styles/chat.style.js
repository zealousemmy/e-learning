import styled from "styled-components";

export const ChartDiv = styled.div`
  width: 100%;
  padding-bottom: 50px;

  .header {
    width: 100%;

    .input-body {
      width: 100%;
      margin-bottom: 20px;

      input {
        width: 50%;
        border: 1px solid #233d63;
        outline: none;
        padding: 8px 12px;
        border-radius: 8px;
      }
    }

    .textArea {
      width: 100%;
      margin-bottom: 20px;

      textarea {
        width: 50%;
        border: 1px solid #233d63;
        outline: none;
        padding: 8px 12px;
        border-radius: 8px;
      }
    }

    .headet_button {
      button {
        border: none;
        outline: none;
        background-color: #233d63;
        color: #fff;
        padding: 8px 14px;
        border-radius: 8px;
      }
    }
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

  .table {
    width: 100%;
    margin: 40px 0px 40px 0px;
    padding-bottom: 40px;

    .tableSection__header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #ffffff;
      border-bottom: 1px solid #eaecf0;

      .tableSection__headerSection {
        width: 12.5%;
        padding: 10.9783px 21.9566px;

        p {
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 15px;
          line-height: 14px;
          color: #667085;
        }
      }
    }

    .tableSection__body {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #ffffff;
      border-bottom: 1px solid #eaecf0;

      .tableSection__bodySection {
        width: 12.5%;
        padding: 10.9783px 21.9566px;
        // cursor: pointer;

        &.Action {
          cursor: pointer;
        }

        p {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 12.808px;
          line-height: 14px;
          color: #667085;
        }
      }

      .Coin {
        display: flex;
        align-items: center;

        .tableSection__bodySectionCoinIconBody {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 10px;
        }

        .tableSection__bodySectionCoinText {
          p {
            font-family: "Inter";
            font-style: normal;
            font-weight: 400;
            font-size: 12.81px;
            line-height: 24px;
            color: #667085;
          }
        }
      }

      .WalletAddress {
        display: flex;
        align-items: center;

        .tableSection__bodySectionAmountText {
          p {
            font-family: "Inter";
            font-style: normal;
            font-weight: 400;
            font-size: 12.808px;
            line-height: 14px;
            color: #667085;
          }
        }

        .tableSection__bodySectionAmountIconBody {
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;

          .tableSection__bodySectionAmountIcon {
            color: #000000;
          }
        }
      }

      .TransactionId {
        display: flex;
        align-items: center;

        .tableSection__bodySectionTransactionIdText {
          p {
            font-family: "Inter";
            font-style: normal;
            font-weight: 400;
            font-size: 12.808px;
            line-height: 14px;
            color: #667085;
          }
        }

        .tableSection__bodySectionTransactionIdIconBody {
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;

          .tableSection__bodySectionTransactionIdIcon {
            color: #000000;
          }
        }
      }
    }
  }
`;

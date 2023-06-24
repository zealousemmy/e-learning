import styled from "styled-components";

export const AssDiv = styled.div`
  width: 100%;
  margin: 0px 0px 40px 0px;
  padding-bottom: 40px;

  .__notFound__wrapperr {
    // transform: translate(120%, 50%);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 70px 0px;
    .__theNotFound {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        width: 150px;
      }
      span {
        font-size: 14px;
        font-weight: 500;
      }
    }
  }

  .tableSection__header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #ffffff;
    border-bottom: 1px solid #eaecf0;

    .tableSection__headerSection {
      width: 18%;
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
      width: 18%;
      padding: 10.9783px 21.9566px;
      // cursor: pointer;

      &.Action {
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
          cursor: pointer;
        }

        .delete {
          color: red;
        }
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
`;

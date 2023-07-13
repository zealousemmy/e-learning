import styled from "styled-components";

export const AddAssignmentDiv = styled.div`
  background-color: #fff;
  width: 50%;
  margin-bottom: 50px;
  border-radius: 8px;
  align-items: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1350px) {
    width: 70%;
  }

  @media screen and (max-width: 920px) {
    width: 85%;
  }

  @media screen and (max-width: 720px) {
    width: 95%;
  }

  .cancel_button {
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    margin: 15px;

    .cancel_button_icon {
      font-size: 20px;
    }
  }

  .container {
    padding: 80px 70px 30px 70px;

    @media screen and (max-width: 720px) {
      padding: 80px 10px 30px 10px;
    }

    .header {
      text-align: center;

      h2 {
        font-size: 32px;
        font-weight: 700;
      }
    }

    .content {
      padding: 50px 0px;

      .content_one {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .content_one_header {
          p {
            font-weight: 500;
          }
        }

        .content_one_input {
          width: 60%;

          input {
            width: 100%;
            border-radius: 8px;
            outline: none;
            border: 1px solid #233d63;
            padding: 5px 10px;
            color: #233d63;
          }
        }
      }

      .content_two {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 30px 0px 10px 0px;

        .content_two_header {
          p {
            font-weight: 500;
          }
        }

        .content_two_input {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 60%;

          .content_two_input_container {
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #233d63;
            border-radius: 4px;
            position: relative;
            width: 40%;
            padding: 5px 10px;
            cursor: pointer;

            input {
              position: absolute;
              width: 100%;
              opacity: 0;
              cursor: pointer;
              z-index: 6;
            }

            .symbol_State {
              cursor: pointer;
            }
          }
        }
      }
    }

    .submit_button {
      display: flex;
      align-items: center;
      justify-content: center;

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
`;

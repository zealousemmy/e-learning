import axios from "axios";
import APIs from "../apiUrl";
import { toast } from "react-toastify";

// register student
const registerStudent = async (studentData) => {
  try {
    const response = await APIs.post(`/api/auth/register`, studentData);

    // if (response?.data?.data?.message === "success") {
    //   console.log(response.data?.data?.message, "from messag");
    //   toast("Successfull Created");
    return response?.data?.data;
    // localStorage.setItem("e-learning", JSON.stringify(response.data));
    // }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const loginStudent = async (studentData) => {
  try {
    const response = await APIs.post(`/api/auth/login`, studentData);
    if (response) {
      if (response?.data?.data?.message === "success") {
        localStorage.setItem(
          "token",
          JSON.stringify(response?.data?.data?.token)
        );

        APIs.defaults.headers[
          "Authorization"
        ] = `Bearer ${response?.data?.data?.token}`;

        return response?.data?.data?.token;
      }
    }
  } catch (err) {
    throw err;
  }
};

const authService = {
  registerStudent,
  loginStudent,
};
export default authService;

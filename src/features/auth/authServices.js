import axios from "axios";
import APIs from "../apiUrl";
import { toast } from "react-toastify";

// register student
const registerStudent = async (studentData) => {
  console.log(studentData, "native");
  const response = await APIs.post(`/api/auth/register`, studentData);
  if (response) {
    toast("Successfull Created");
    // localStorage.setItem("e-learning", JSON.stringify(response.data));
    console.log(response.data);
    return response.data;
  }
};

const loginStudent = async (studentData) => {
  console.log(studentData, "making today better");
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
};

const authService = {
  registerStudent,
  loginStudent,
};
export default authService;

import axios from "axios";
import APIs from "../apiUrl";

// register student
const registerStudent = async (studentData) => {
  const response = await APIs.post(`/api/auth/register`, studentData);
  if (response) {
    // localStorage.setItem("e-learning", JSON.stringify(response.data));
    console.log(response.data);
  }
};

const loginStudent = async (studentData) => {
  console.log(studentData, "making today better");
  const response = await APIs.post(`/api/auth/login`, studentData);
  if (response) {
    console.log(response, "na waoo");
    if (response?.data?.data?.message === "success") {
      localStorage.setItem(
        "token",
        JSON.stringify(response?.data?.data?.token)
      );
      console.log(response?.data?.data?.token, "login service returned");
    }
  }
};

const authService = {
  registerStudent,
  loginStudent,
};
export default authService;

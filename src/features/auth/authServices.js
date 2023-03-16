import axios from "axios";
import { API_URL } from "../apiUrl";

// register student
const registerStudent = async (studentData) => {
  const response = await axios.post(
    `${API_URL}/api/auth/register`,
    studentData
  );
  if (response) {
    // localStorage.setItem("e-learning", JSON.stringify(response.data));
    console.log(response.data);
  }
};

const loginStudent = async (studentData) => {
  const response = await axios.post(`${API_URL}/api/auth/login`, studentData);
  if (response) {
    // localStorage.setItem("e-learning", JSON.stringify(response.data));
    console.log(response.data);
  }
};

const authService = {
  registerStudent,
  loginStudent,
};
export default authService;

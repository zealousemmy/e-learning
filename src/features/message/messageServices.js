import { toast } from "react-toastify";
import APIs from "../apiUrl";

const getRoom = async (arg) => {
  try {
    const response = await APIs.get(
      `/api/upload_course/get_student_course/${arg.level}/${arg.department}/${arg.faculty}`
    );
    if (response) {
      if (response?.data?.message === "success") {
        return response.data?.data;
      }
    }
  } catch (err) {
    throw err;
  }
};

const getLecturalRoom = async (arg) => {
  try {
    const response = await APIs.get(
      `/api/upload_course/get_lectural_course/${arg.fullname}`
    );
    if (response) {
      if (response?.data?.message === "success") {
        return response?.data?.data;
      }
    }
  } catch (err) {
    throw err;
  }
};

const messageService = {
  getRoom,
  getLecturalRoom,
};

export default messageService;

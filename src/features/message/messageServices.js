import { toast } from "react-toastify";
import APIs from "../apiUrl";

const getRoom = async () => {
  try {
    const response = await APIs.get(`/api/upload_course/get_course`);
    if (response) {
      if (response?.data?.message === "success") {
        return response.data?.data;
      }
    }
  } catch (err) {
    throw err;
  }
};

const messageService = {
  getRoom,
};

export default messageService;

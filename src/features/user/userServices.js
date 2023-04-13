import { toast } from "react-toastify";
import APIs from "../apiUrl";

const getUser = async () => {
  try {
    const response = await APIs.get(`/api/user/user_details`);
    if (response) {
      if (response?.data?.message === "success") {
        return response.data?.data;
      }
    }
  } catch (err) {
    throw err;
  }
};

const userService = {
  getUser,
};

export default userService;

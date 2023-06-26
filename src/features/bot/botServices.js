import { toast } from "react-toastify";
import APIs from "../apiUrl";

const uploadBot = async (course) => {
  try {
    const response = await APIs.post(`/api/bot/create`, course);
    if (response?.data?.message === "success") {
      toast("successfully created");
      return response?.data?.data;
    }
  } catch (err) {
    toast(err.message);
    throw err;
  }
};

const GetBot = async (id) => {
  try {
    const response = await APIs.get(`/api/bot/get_my_bot/${id}`);
    if (response?.data?.message === "success") {
      return response?.data?.data;
    }
  } catch (err) {
    toast(err.message);
    throw err;
  }
};

const GetAllBot = async (id) => {
  try {
    const response = await APIs.get(`/api/bot/getbot`);

    if (response?.data?.message === "success") {
      return response?.data?.data;
    }
  } catch (err) {
    toast(err.message);
    throw err;
  }
};

const deteleBot = async (id) => {
  try {
    const response = await APIs.delete(`/api/bot/get_my_bot/${id}`);

    if (response?.data?.message === "success") {
      return response?.data?.data;
    }
  } catch (err) {
    toast(err.message);
    throw err;
  }
};

const botService = {
  uploadBot,
  GetBot,
  GetAllBot,
  deteleBot,
};

export default botService;

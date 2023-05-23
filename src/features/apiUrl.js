import axios from "axios";
import { toast } from "react-toastify";
// https://e-learning-backend.onrender.com
const APIs = axios.create({
  baseURL: "https://e-learning-backend.onrender.com",
  headers: {
    Accept: "application/json",

    Authorization: `Bearer ${localStorage.getItem("token") ?? ""}`,
  },
});

APIs.interceptors.request.use(function (config) {
  if (navigator.onLine) {
    return config;
  } else {
    toast("No internet connection", {
      toastId: "network error",
    });
  }
});

APIs.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    throw err.response.data?.message;
  }
);

export default APIs;

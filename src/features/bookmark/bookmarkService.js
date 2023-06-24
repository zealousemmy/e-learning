import { toast } from "react-toastify";
import APIs from "../apiUrl";

const BookMarkCourse = async (file) => {
  try {
    const response = await APIs.post(`/api/bookmark/create`, file);
    if (response) {
      if (response?.data?.message === "success") {
        toast("successfull bookmarked");
        return response?.data?.data;
      }
    }
  } catch (err) {
    throw err;
  }
};

const GetBookMarkCourse = async () => {
  try {
    const response = await APIs.get(`/api/bookmark/getmybookmark`);
    if (response) {
      if (response?.data?.message === "success") {
        return response?.data?.data;
      }
    }
  } catch (err) {
    throw err;
  }
};

const DeleteBookMarkCourse = async (file) => {
  try {
    const response = await APIs.delete(`/api/bookmark/delete/${file.course}`);
    if (response) {
      if (response?.data?.message === "success") {
        toast("successfull unbookmarked");
        return response?.data?.data;
      }
    }
  } catch (err) {
    throw err;
  }
};

const bookmarkService = {
  BookMarkCourse,
  GetBookMarkCourse,
  DeleteBookMarkCourse,
};

export default bookmarkService;

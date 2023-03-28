import { toast } from "react-toastify";
import APIs from "../apiUrl";

const uploadCourse = async (course) => {
  try {
    const response = await APIs.post(`/api/upload_course/courses`, course);
    if (response) {
      console.log(response.data);
      toast("successfully created");
    }
  } catch (err) {
    throw err;
  }
};

const uploadFile = async (file) => {
  try {
    const response = await APIs.post(`/api/file_upload/file_upload`, file);
    if (response) {
      if (response?.data?.message === "success") {
        return response?.data?.data;
      }
    }
  } catch (err) {
    throw err;
  }
};

const courseService = {
  uploadCourse,
  uploadFile,
};

export default courseService;

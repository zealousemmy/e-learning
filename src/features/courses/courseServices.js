import { toast } from "react-toastify";
import APIs from "../apiUrl";

const uploadCourse = async (course) => {
  try {
    const response = await APIs.post(`/api/upload_course/courses`, course);
    if (response) {
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

const getCourses = async (arg) => {
  try {
    const response = await APIs.get(
      `/api/upload_course/get_student_course/${arg.level}/${arg.department}/${arg.faculty}`
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

const getCoursesCount = async (arg) => {
  try {
    const response = await APIs.get(
      `/api/upload_course/get_student_course_count/${arg.level}/${arg.department}/${arg.faculty}`
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

const getGeneralCourses = async (arg) => {
  try {
    const response = await APIs.get(
      `/api/upload_course/get_my_course_count/${arg.level}`
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

const getFacultyCourses = async (arg) => {
  try {
    const response = await APIs.get(
      `/api/upload_course/get_faculty_level_course_count/${arg.level}/${arg.faculty}`
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

const getLecturalCourse = async (arg) => {
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

const getAllCourseCount = async (arg) => {
  try {
    const response = await APIs.get(`/api/upload_course/get_all_course_count`);
    if (response) {
      if (response?.data?.message === "success") {
        return response?.data?.data;
      }
    }
  } catch (err) {
    throw err;
  }
};

const getLecturalCourseCount = async (arg) => {
  try {
    const response = await APIs.get(
      `/api/upload_course/get_lectural_course_count/${arg.fullname}`
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

const EditCourse = async (arg) => {
  try {
    const response = await APIs.patch(`/api/upload_course/edit_course`, arg);
    if (response) {
      if (response?.data?.message === "success") {
        return response?.data?.data;
      }
    }
  } catch (err) {
    throw err;
  }
};

const DeleteCourse = async (arg) => {
  try {
    const response = await APIs.delete(
      `/api/upload_course/delete_course/${arg._id}/${arg.fullname}`
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

const uploadCover = async (file) => {
  try {
    const response = await APIs.post(`/api/upload/image`, file);
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
  getCourses,
  uploadCover,
  getCoursesCount,
  getGeneralCourses,
  getFacultyCourses,
  getLecturalCourse,
  getAllCourseCount,
  getLecturalCourseCount,
  EditCourse,
  DeleteCourse,
};

export default courseService;

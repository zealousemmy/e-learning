import { toast } from "react-toastify";
import APIs from "../apiUrl";

const uploadAssignment = async (course) => {
  try {
    const response = await APIs.post(`/api/upload_assignment/courses`, course);
    if (response) {
      toast("successfully created");
    }
  } catch (err) {
    throw err;
  }
};

const getLecturalAssignment = async (arg) => {
  try {
    const response = await APIs.get(
      `/api/upload_assignment/get_lectural_course/${arg.course}/${arg.createdBy}`
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

const getStudentLecturalAssignment = async (arg) => {
  try {
    const response = await APIs.get(
      `/api/upload_assignment/get_lectural_student_course/${arg.course}`
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

const DeleteAssignment = async (arg) => {
  try {
    const response = await APIs.delete(
      `/api/upload_course/delete_course/${arg._id}/${arg.regno}`
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

const EditAssignment = async (arg) => {
  try {
    const response = await APIs.patch(
      `/api/upload_assignment/edited_course/${arg?._id}`,
      arg
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

const assignmentService = {
  uploadAssignment,
  getLecturalAssignment,
  DeleteAssignment,
  getStudentLecturalAssignment,
  EditAssignment,
};

export default assignmentService;

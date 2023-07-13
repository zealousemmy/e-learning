import { toast } from "react-toastify";
import APIs from "../apiUrl";

const createAssignment = async (course) => {
  try {
    const response = await APIs.post(`/api/student_assignment/courses`, course);
    if (response) {
      toast("successfully created");
    }
  } catch (err) {
    throw err;
  }
};

const getStudentAssignment = async (arg) => {
  try {
    const response = await APIs.get(
      `/api/student_assignment/get_Student/${arg.course}/${arg.createdBy}`
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

const getAllStudentAssignment = async (arg) => {
  try {
    const response = await APIs.get(
      `/api/student_assignment/get_lectural_course/${arg.course}`
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
      `/api/student_assignment/edit_assignment`,
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

const StudentAssignmentService = {
  createAssignment,
  getStudentAssignment,
  DeleteAssignment,
  getAllStudentAssignment,
  EditAssignment,
};

export default StudentAssignmentService;

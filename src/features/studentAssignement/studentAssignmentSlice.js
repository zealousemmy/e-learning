import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import StudentAssignmentService from "./studentAssignmentServices";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  myAssignment: [],
  changeEditStudentState: false,
  editContent: {},
};

// register student
export const createAssignmentSlice = createAsyncThunk(
  "student_assignment/create",
  async (course, thunkAPI) => {
    try {
      return await StudentAssignmentService.createAssignment(course);
    } catch (err) {
      console.log(err);
    }
  }
);

export const StudentAssignment = createAsyncThunk(
  "student_assignment/studentAssignment",
  async (course, thunkAPI) => {
    try {
      return await StudentAssignmentService.getStudentAssignment(course);
    } catch (err) {
      console.log(err);
    }
  }
);

export const AllStudentAssignment = createAsyncThunk(
  "student_assignment/allstudentAssignment",
  async (course, thunkAPI) => {
    try {
      return await StudentAssignmentService.getAllStudentAssignment(course);
    } catch (err) {
      console.log(err);
    }
  }
);

export const DeleteAssignment = createAsyncThunk(
  "student_assignment/deletecourse",
  async (course, thunkAPI) => {
    try {
      return await StudentAssignmentService.DeleteAssignment(course);
    } catch (err) {
      console.log(err);
    }
  }
);

export const EditStudentAssignment = createAsyncThunk(
  "student_assignment/editstudentassignment",
  async (course, thunkAPI) => {
    try {
      return await StudentAssignmentService.EditAssignment(course);
    } catch (err) {
      console.log(err);
    }
  }
);

export const studentAssignmentSlice = createSlice({
  name: "student_assignment",
  initialState,
  reducers: {
    modalCheck: (state, action) => {
      state.checkmodal = action.payload;
    },

    AssignmentCheck: (state, action) => {
      state.checkAssignment = action.payload;
    },

    ChangeEditState: (state, action) => {
      state.changeEditState = action.payload;
    },

    EditContent: (state, action) => {
      state.editContent = action.payload;
    },

    TRANSAC_SWITCHER: (state, action) => {
      state.transacSwitcher = action.payload;
    },

    bookmarkCourse: (state, action) => {
      const findIndex = state.mycourses.findIndex(
        (item) => item?._id === action.payload._id
      );

      state.mycourses.splice(findIndex, 1, action?.payload);

      state.mycourses = state.mycourses;
    },

    setFileDetails: (state, action) => {
      state.fileDetails = action.payload;
    },

    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },

  extraReducers: {
    [createAssignmentSlice.pending]: (state, action) => {
      state.isLoading = true;
    },

    [createAssignmentSlice.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
    },

    [createAssignmentSlice.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },

    [StudentAssignment.pending]: (state, action) => {
      state.isLoading = true;
    },

    [StudentAssignment.fulfilled]: (state, action) => {
      state.isLoading = false;

      state.myAssignment = action.payload;
    },

    [StudentAssignment.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },

    [AllStudentAssignment.pending]: (state, action) => {
      state.isLoading = true;
    },

    [AllStudentAssignment.fulfilled]: (state, action) => {
      state.isLoading = false;

      state.myAssignment = action.payload;
    },

    [AllStudentAssignment.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },

    [EditStudentAssignment.pending]: (state, action) => {
      state.isLoading = true;
    },

    [EditStudentAssignment.fulfilled]: (state, action) => {
      state.isLoading = false;

      state.myAssignment.map((item, key) => {
        if (item?._id === action?.payload?._id) {
          state.myAssignment?.splice(key, 1, action.payload);
        }
      });

      state.myAssignment = state.myAssignment;
    },

    [EditStudentAssignment.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },

    // [DeleteAssignment.pending]: (state, action) => {
    //   state.isLoading = true;
    // },

    // [DeleteAssignment.fulfilled]: (state, action) => {
    //   state.isLoading = false;

    //   state.myAssignment.map((item, key) => {
    //     if (item?._id === action?.payload?._id) {
    //       state.myAssignment?.splice(key, 1);
    //     }
    //   });

    //   state.myAssignment = state.myAssignment;
    // },

    // [DeleteAssignment.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.isError = true;
    //   state.message = action.payload;
    // },
  },
});

export const { reset, EditContent } = studentAssignmentSlice.actions;

export default studentAssignmentSlice.reducer;

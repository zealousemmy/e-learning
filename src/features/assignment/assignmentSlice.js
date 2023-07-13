import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import assignmentService from "./assignmentServices";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  myAssignment: [],
  editThisAssignment: {},
};

// register student
export const uploadAssignment = createAsyncThunk(
  "assignment/upload",
  async (course, thunkAPI) => {
    try {
      return await assignmentService.uploadAssignment(course);
    } catch (err) {
      console.log(err);
    }
  }
);

export const LecturalAssignment = createAsyncThunk(
  "assignment/lecturalcourse",
  async (course, thunkAPI) => {
    try {
      return await assignmentService.getLecturalAssignment(course);
    } catch (err) {
      console.log(err);
    }
  }
);

export const StudentLecturalAssignment = createAsyncThunk(
  "assignment/student_lecturer",
  async (course, thunkAPI) => {
    try {
      return await assignmentService.getStudentLecturalAssignment(course);
    } catch (err) {
      console.log(err);
    }
  }
);

export const DeleteAssignment = createAsyncThunk(
  "assignment/deletecourse",
  async (course, thunkAPI) => {
    try {
      return await assignmentService.DeleteAssignment(course);
    } catch (err) {
      console.log(err);
    }
  }
);

export const EditAssignment = createAsyncThunk(
  "assignment/editecourse",
  async (course, thunkAPI) => {
    try {
      return await assignmentService.EditAssignment(course);
    } catch (err) {
      console.log(err);
    }
  }
);

export const assignmentSlice = createSlice({
  name: "assignment",
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

    EditThisAssignment: (state, action) => {
      state.editThisAssignment = action.payload;
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
    [uploadAssignment.pending]: (state, action) => {
      state.isLoading = true;
    },

    [uploadAssignment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
    },

    [uploadAssignment.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },

    [LecturalAssignment.pending]: (state, action) => {
      state.isLoading = true;
    },

    [LecturalAssignment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.myAssignment = action.payload;
    },

    [LecturalAssignment.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },

    [StudentLecturalAssignment.pending]: (state, action) => {
      state.isLoading = true;
    },

    [StudentLecturalAssignment.fulfilled]: (state, action) => {
      state.isLoading = false;

      state.myAssignment = action.payload;
    },

    [StudentLecturalAssignment.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },

    [DeleteAssignment.pending]: (state, action) => {
      state.isLoading = true;
    },

    [DeleteAssignment.fulfilled]: (state, action) => {
      state.isLoading = false;

      state.myAssignment.map((item, key) => {
        if (item?._id === action?.payload?._id) {
          state.myAssignment?.splice(key, 1);
        }
      });

      state.myAssignment = state.myAssignment;
    },

    [DeleteAssignment.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },

    [EditAssignment.pending]: (state, action) => {
      state.isLoading = true;
    },

    [EditAssignment.fulfilled]: (state, action) => {
      state.isLoading = false;

      state.myAssignment.map((item, key) => {
        if (item?._id === action?.payload?._id) {
          state.myAssignment?.splice(key, 1, action.payload);
        }
      });

      state.myAssignment = state.myAssignment;
    },

    [EditAssignment.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },
  },
});

export const { reset, EditThisAssignment } = assignmentSlice.actions;

export default assignmentSlice.reducer;

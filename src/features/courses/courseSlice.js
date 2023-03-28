import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import courseService from "./courseServices";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  checkmodal: false,
  fileDetails: {},
};

// register student
export const uploadCourse = createAsyncThunk(
  "upload/course",
  async (course, thunkAPI) => {
    try {
      return await courseService.uploadCourse(course);
    } catch (err) {
      console.log(err);
    }
  }
);

export const uploadFile = createAsyncThunk(
  "upload/file",
  async (file, thunkAPI) => {
    try {
      const data = await courseService.uploadFile(file);

      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    modalCheck: (state, action) => {
      state.checkmodal = action.payload;
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
    [uploadCourse.pending]: (state, action) => {
      state.isLoading = true;
    },

    [uploadCourse.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
    },

    [uploadCourse.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },

    [uploadFile.pending]: (state, action) => {
      state.isLoading = true;
      // console.log(action.payload, "pending");
    },

    [uploadFile.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.fileDetails = action.payload;
    },

    [uploadFile.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.fileDetails = {};
    },
  },
});

export const { reset, modalCheck, setFileDetails } = courseSlice.actions;
export default courseSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bookmarkService from "./bookmarkService";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  mybookmark: [],
};

// register student
export const BookMarkACourse = createAsyncThunk(
  "bookmark/create",
  async (course, thunkAPI) => {
    try {
      return await bookmarkService.BookMarkCourse(course);
    } catch (err) {
      throw err;
    }
  }
);

export const DeleteBookMarkACourse = createAsyncThunk(
  "bookmark/delete",
  async (course, thunkAPI) => {
    try {
      return await bookmarkService.DeleteBookMarkCourse(course);
    } catch (err) {
      throw err;
    }
  }
);

export const GetBookMarkACourse = createAsyncThunk(
  "bookmark/get",
  async (course, thunkAPI) => {
    try {
      return await bookmarkService.GetBookMarkCourse();
    } catch (err) {
      throw err;
    }
  }
);

export const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    modalCheck: (state, action) => {
      state.checkmodal = action.payload;
    },

    deleteBookmarkCourse: (state, action) => {
      const findIndex = state.mybookmark.findIndex(
        (item) => item?._id === action.payload._id
      );

      state.mybookmark.splice(findIndex, 1);

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
    [BookMarkACourse.pending]: (state, action) => {
      state.isLoading = true;
    },

    [BookMarkACourse.fulfilled]: (state, action) => {
      state.isLoading = false;
    },

    [BookMarkACourse.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },

    [DeleteBookMarkACourse.pending]: (state, action) => {
      state.isLoading = true;
    },

    [DeleteBookMarkACourse.fulfilled]: (state, action) => {
      state.isLoading = false;
    },

    [DeleteBookMarkACourse.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },

    [GetBookMarkACourse.pending]: (state, action) => {
      state.isLoading = true;
    },

    [GetBookMarkACourse.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.mybookmark = action.payload;
    },

    [GetBookMarkACourse.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },
  },
});

export const { reset, modalCheck, setFileDetails, deleteBookmarkCourse } =
  bookmarkSlice.actions;
export default bookmarkSlice.reducer;

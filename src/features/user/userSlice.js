import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userServices";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  userDetails: null,
};

// register student
export const GetUser = createAsyncThunk(
  "modify/user",
  async (course, thunkAPI) => {
    try {
      const data = await userService.getUser();
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const EditUser = createAsyncThunk(
  "modify/edit",
  async (course, thunkAPI) => {
    try {
      const data = await userService.editUser(course);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const messageSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },

  extraReducers: {
    [GetUser.pending]: (state, action) => {
      state.isLoading = true;
    },

    [GetUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.userDetails = action.payload;
    },

    [GetUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },

    [EditUser.pending]: (state, action) => {
      state.isLoading = true;
    },

    [EditUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.userDetails = action.payload;
    },

    [EditUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.fileDetails = {};
    },
  },
});

export const { reset } = messageSlice.actions;
export default messageSlice.reducer;

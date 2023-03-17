import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authServices";

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// register student
export const register = createAsyncThunk(
  "auth/register",
  async (student, thunkAPI) => {
    try {
      return await authService.registerStudent(student);
    } catch (err) {
      console.log(err);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (student, thunkAPI) => {
    try {
      return await authService.loginStudent(student);
    } catch (err) {
      console.log(err);
    }
  }
);
export const authSlice = createSlice({
  name: "auth",
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
    [register.pending]: (state, action) => {
      state.isLoading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
      console.log(state.user, "this is the user's page");
    },
    [register.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
    },
    [login.pending]: (state, action) => {
      state.isLoading = true;
      // console.log(action.payload, "pending");
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
      console.log(state.user, "this is the user's login slice");
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
      console.log(state.message, "rejected");
    },
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;

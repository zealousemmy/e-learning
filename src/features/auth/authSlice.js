import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authServices";
import { toast } from "react-toastify";

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  tokenDetail: JSON.parse(localStorage.getItem("token")) || "",
};

// register student
export const register = createAsyncThunk(
  "auth/register",
  async (student, thunkAPI) => {
    try {
      let checkValidity = await authService.registerStudent(student);

      return await authService.registerStudent(student);
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (student, thunkAPI) => {
    try {
      const data = await authService.loginStudent(student);

      toast("successfully login");
      return data;
    } catch (err) {
      return err;
    }
  }
);

export const registerLectural = createAsyncThunk(
  "auth/registerlectural",
  async (student, thunkAPI) => {
    try {
      // let checkValidity = await authService.registerStudent(student);

      return await authService.registerStudent(student);
    } catch (err) {
      console.log(err);
      return err;
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

    getTokenDetail: (state, action) => {
      state.tokenDetail = action.payload;
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
    },

    [register.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
    },

    [login.pending]: (state, action) => {
      state.isLoading = true;
    },

    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.tokenDetail = action.payload;
    },

    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
    },

    [registerLectural.pending]: (state, action) => {
      state.isLoading = true;
    },

    [registerLectural.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
    },

    [registerLectural.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { reset, getTokenDetail } = authSlice.actions;
export default authSlice.reducer;

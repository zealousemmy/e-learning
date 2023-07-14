import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authServices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  isRegister: false,
  tokenDetail: JSON.parse(localStorage.getItem("token")) || "",
};

// register student
export const register = createAsyncThunk(
  "auth/register",
  async (student, thunkAPI) => {
    // const navigate = useNavigate();
    try {
      let checkValidity = await authService.registerStudent(student);
      // navigate("/login");
      return checkValidity;
    } catch (err) {
      toast(err);
      throw err;
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (student, thunkAPI) => {
    try {
      const data = await authService.loginStudent(student);

      // toast("successfully login");
      return data;
    } catch (err) {
      toast(err);
      throw err;
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
      throw err;
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

      state.isRegister = true;
      state.message = action.payload.message;
      state.user = action.payload;

    },

    [register.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isRegister = false;
      state.message = action.payload;
      // state.user = null;
    },

    [login.pending]: (state, action) => {
      state.isLoading = true;
    },

    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.tokenDetail = action.payload;
      console.log(action, "action payload fulfilled");
    },

    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.message = action.payload;
      state.user = null;
      console.log(action, "rejected login action");
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

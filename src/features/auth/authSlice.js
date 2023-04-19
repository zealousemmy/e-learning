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
      let checkValidity = await authService.registerStudent(student);
      console.log(checkValidity);
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
      console.log(data, "resent work");

      return data;
    } catch (err) {
      console.log(err, "from error");
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
  },

  extraReducers: {
    [register.pending]: (state, action) => {
      state.isLoading = true;
    },

    [register.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      console.log(state.isSuccess);
      state.user = action.payload;
      console.log(state.isSuccess, "success");
      console.log(state.user, "this is the user's page");
    },

    [register.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      console.log(state.message, "from state message");
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

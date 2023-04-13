import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import messageService from "./messageServices";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  rooms: null,
};

// register student
export const GetRooms = createAsyncThunk(
  "message/room",
  async (course, thunkAPI) => {
    try {
      const data = await messageService.getRoom();
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const messageSlice = createSlice({
  name: "message",
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
    [GetRooms.pending]: (state, action) => {
      state.isLoading = true;
    },

    [GetRooms.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.rooms = action.payload;
    },

    [GetRooms.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },

    // [uploadFile.pending]: (state, action) => {
    //   state.isLoading = true;
    //   // console.log(action.payload, "pending");
    // },

    // [uploadFile.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.isSuccess = true;
    //   state.fileDetails = action.payload;
    // },

    // [uploadFile.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.isError = true;
    //   state.message = action.payload;
    //   state.fileDetails = {};
    // },
  },
});

export const { reset } = messageSlice.actions;
export default messageSlice.reducer;

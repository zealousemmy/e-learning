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
      const data = await messageService.getRoom(course);
      return data;
    } catch (err) {
      throw err;
    }
  }
);

export const GetLecturalsRooms = createAsyncThunk(
  "message/lectural",
  async (course, thunkAPI) => {
    try {
      const data = await messageService.getLecturalRoom(course);
      return data;
    } catch (err) {
      throw err;
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

    [GetLecturalsRooms.pending]: (state, action) => {
      state.isLoading = true;
    },

    [GetLecturalsRooms.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.rooms = action.payload;
    },

    [GetLecturalsRooms.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },
  },
});

export const { reset } = messageSlice.actions;
export default messageSlice.reducer;

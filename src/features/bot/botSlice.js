import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import botService from "./botServices";
import { toast } from "react-toastify";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  allBot: [],
  myBot: [],
};

// register student
export const CreateBot = createAsyncThunk(
  "bot/create",
  async (course, thunkAPI) => {
    try {
      return await botService.uploadBot(course);
    } catch (err) {
      toast(err.message);
    }
  }
);

export const GetMyBot = createAsyncThunk(
  "bot/mybot",
  async (course, thunkAPI) => {
    try {
      return await botService.GetBot(course);
    } catch (err) {
      toast(err.message);
    }
  }
);

export const AllBot = createAsyncThunk("bot/allbot", async (thunkAPI) => {
  try {
    return await botService.GetAllBot();
  } catch (err) {
    toast(err.message);
  }
});

export const DeteleBot = createAsyncThunk(
  "bot/delete",
  async (id, thunkAPI) => {
    try {
      return await botService.deteleBot(id);
    } catch (err) {
      toast(err.message);
    }
  }
);

export const botSlice = createSlice({
  name: "bot",
  initialState,
  reducers: {
    loading: (state, action) => {
      state.isLoading = action.payload;
    },

    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },

  extraReducers: {
    [CreateBot.pending]: (state, action) => {
      state.isLoading = true;
    },

    [CreateBot.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;

      const payload = action.payload;

      state.myBot = [...state.myBot, payload];
      state.allBot = [...state.allBot, payload];
    },

    [CreateBot.rejected]: (state, action) => {
      toast(action.payload);
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },

    [GetMyBot.pending]: (state, action) => {
      state.isLoading = true;
    },

    [GetMyBot.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;

      state.myBot = action.payload;
    },

    [GetMyBot.rejected]: (state, action) => {
      toast(action.payload);
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },

    [AllBot.pending]: (state, action) => {
      state.isLoading = true;
    },

    [AllBot.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.allBot = action.payload;
    },

    [AllBot.rejected]: (state, action) => {
      toast(action.payload);
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },

    [DeteleBot.pending]: (state, action) => {
      state.isLoading = true;
    },

    [DeteleBot.fulfilled]: (state, action) => {
      state.isLoading = false;

      state.allBot.map((item, key) => {
        if (item?._id === action?.payload?._id) {
          state.allBot?.splice(key, 1);
        }
      });

      state.myBot.map((item, key) => {
        if (item?._id === action?.payload?._id) {
          state.myBot?.splice(key, 1);
        }
      });

      state.allBot = state.allBot;
      state.myBot = state.myBot;
    },

    [DeteleBot.rejected]: (state, action) => {
      toast(action.payload);
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },
  },
});

export const { reset, loading } = botSlice.actions;
export default botSlice.reducer;

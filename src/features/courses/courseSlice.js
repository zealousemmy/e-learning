import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import courseService from "./courseServices";
import bookmarkService from "../bookmark/bookmarkService";
import { LecturalAssignment } from "../assignment/assignmentSlice";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  checkmodal: false,
  checkAssignment: false,
  studentAssignmentchecker: false,
  fileDetails: {},
  mycourses: [],
  fileCover: {},
  mycoursescount: 0,
  generalcoursecount: 0,
  facultycoursecount: 0,
  mybookmark: [],
  lecturalcourse: [],
  lecturalcoursecount: 0,
  allcoursecount: 0,
  editThisCourse: {},
  changeEditState: false,
  transacSwitcher: "Courses",
  selectcourse: "",
  instantsCourses: [],
};

// register student
export const uploadCourse = createAsyncThunk(
  "course/upload",
  async (course, thunkAPI) => {
    try {
      return await courseService.uploadCourse(course);
    } catch (err) {
      console.log(err);
    }
  }
);

export const myInstantCourses = createAsyncThunk(
  "course/instanctcourse",
  async (course, dispatch, thunkAPI) => {
    try {
      const data = await courseService.getInstantCourse(course);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const myCourses = createAsyncThunk(
  "course/mycourse",
  async (course, thunkAPI) => {
    try {
      const res = await courseService.getCourses(course);

      return res;
    } catch (err) {
      console.log(err);
    }
  }
);

export const myCoursesCount = createAsyncThunk(
  "course/mycoursecount",
  async (course, thunkAPI) => {
    try {
      const constants = await Promise.all([
        courseService.getCoursesCount(course),
        courseService.getFacultyCourses(course),
        courseService.getGeneralCourses(course),
      ]);

      return constants;
    } catch (err) {
      console.log(err);
    }
  }
);

export const GeneralCoursescount = createAsyncThunk(
  "course/generalcoursecount",
  async (course, thunkAPI) => {
    try {
      return await courseService.getGeneralCourses(course);
    } catch (err) {
      console.log(err);
    }
  }
);

export const FacultyCoursesCount = createAsyncThunk(
  "course/facultycoursecount",
  async (course, thunkAPI) => {
    try {
      return await courseService.getFacultyCourses(course);
    } catch (err) {
      console.log(err);
    }
  }
);

export const LecturalCoursesCount = createAsyncThunk(
  "course/lecturalcoursecount",
  async (course, thunkAPI) => {
    try {
      const constants = await Promise.all([
        courseService.getLecturalCourseCount(course),
        courseService.getAllCourseCount(),
      ]);

      return constants;
    } catch (err) {
      console.log(err);
    }
  }
);

export const LecturalCourses = createAsyncThunk(
  "course/lecturalcourse",
  async (course, thunkAPI) => {
    try {
      return await courseService.getLecturalCourse(course);
    } catch (err) {
      console.log(err);
    }
  }
);

export const AllCoursesCount = createAsyncThunk(
  "course/allcoursecount",
  async (course, thunkAPI) => {
    try {
      return await courseService.getAllCourseCount(course);
    } catch (err) {
      console.log(err);
    }
  }
);

export const uploadFile = createAsyncThunk(
  "course/create",
  async (file, thunkAPI) => {
    try {
      const data = await courseService.uploadFile(file);

      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const EditCourseDetails = createAsyncThunk(
  "course/edit",
  async (file, thunkAPI) => {
    try {
      const data = await courseService.EditCourse(file);

      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const DeleteCourseDetails = createAsyncThunk(
  "course/delete",
  async (file, thunkAPI) => {
    try {
      const data = await courseService.DeleteCourse(file);

      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const uploadCover = createAsyncThunk(
  "course/cover",
  async (file, thunkAPI) => {
    try {
      const data = await courseService.uploadCover(file);

      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const GetCourseBookMarkACourse = createAsyncThunk(
  "bookmark/get",
  async (course, thunkAPI) => {
    try {
      return await bookmarkService.GetBookMarkCourse();
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

    AssignmentCheck: (state, action) => {
      state.checkAssignment = action.payload;
    },

    StudentAssignmentCheck: (state, action) => {
      state.studentAssignmentchecker = action.payload;
    },
    ChangeEditState: (state, action) => {
      state.changeEditState = action.payload;
    },

    EditThisCourse: (state, action) => {
      state.editThisCourse = action.payload;
    },

    TRANSAC_SWITCHER: (state, action) => {
      state.transacSwitcher = action.payload;
    },

    SelectCourse: (state, action) => {
      state.selectcourse = action.payload;
    },

    bookmarkCourse: (state, action) => {
      const findIndex = state.mycourses.findIndex(
        (item) => item?._id === action.payload._id
      );

      state.mycourses.splice(findIndex, 1, action?.payload);

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

    [myCourses.pending]: (state, action) => {
      state.isLoading = true;
    },

    [myCourses.fulfilled]: (state, action) => {
      state.isLoading = false;

      action?.payload?.map((item) => {
        state?.mybookmark?.map((data) => {
          if (item?.course === data?.course) {
            item["bookmark"] = true;
          } else {
            item["bookmark"] = false;
          }
        });
      });

      state.mycourses = action.payload;
    },

    [myCourses.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },

    [myCoursesCount.pending]: (state, action) => {
      state.isLoading = true;
    },

    [myCoursesCount.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.mycoursescount = action.payload[0];
      state.facultycoursecount = action.payload[1];
      state.generalcoursecount = action.payload[2];
    },

    [myCoursesCount.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },

    [myInstantCourses.pending]: (state, action) => {
      state.isLoading = true;
    },

    [myInstantCourses.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.instantsCourses = action.payload;
    },

    [myInstantCourses.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },

    [GeneralCoursescount.pending]: (state, action) => {
      state.isLoading = true;
    },

    [GeneralCoursescount.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.generalcoursecount = action.payload;
    },

    [GeneralCoursescount.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },

    [FacultyCoursesCount.pending]: (state, action) => {
      state.isLoading = true;
    },

    [FacultyCoursesCount.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.facultycoursecount = action.payload;
    },

    [FacultyCoursesCount.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },

    [uploadFile.pending]: (state, action) => {
      state.isLoading = true;
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

    [uploadCover.pending]: (state, action) => {
      state.isLoading = true;
    },

    [uploadCover.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.fileCover = action.payload;
    },

    [uploadCover.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.fileCover = {};
    },

    [GetCourseBookMarkACourse.pending]: (state, action) => {
      state.isLoading = true;
    },

    [GetCourseBookMarkACourse.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.mybookmark = action.payload;
    },

    [GetCourseBookMarkACourse.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },

    [LecturalCoursesCount.pending]: (state, action) => {
      state.isLoading = true;
    },

    [LecturalCoursesCount.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.mycoursescount = action.payload[0];
      state.generalcoursecount = action.payload[1];
    },

    [LecturalCoursesCount.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },

    [LecturalCourses.pending]: (state, action) => {
      state.isLoading = true;
    },

    [LecturalCourses.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.mycourses = action.payload;
    },

    [LecturalCourses.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },

    [AllCoursesCount.pending]: (state, action) => {
      state.isLoading = true;
    },

    [AllCoursesCount.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.allcoursecount = action.payload;
    },

    [AllCoursesCount.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },

    [EditCourseDetails.pending]: (state, action) => {
      state.isLoading = true;
    },

    [EditCourseDetails.fulfilled]: (state, action) => {
      state.isLoading = false;

      state.mycourses.map((item, key) => {
        if (item?._id === action?.payload?._id) {
          state.mycourses?.splice(key, 1, action.payload);
        }
      });

      state.mycourses = state.mycourses;
    },

    [EditCourseDetails.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },

    [DeleteCourseDetails.pending]: (state, action) => {
      state.isLoading = true;
    },

    [DeleteCourseDetails.fulfilled]: (state, action) => {
      state.isLoading = false;

      state.mycourses.map((item, key) => {
        if (item?._id === action?.payload?._id) {
          state.mycourses?.splice(key, 1);
        }
      });

      state.mycourses = state.mycourses;
    },

    [DeleteCourseDetails.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },
  },
});

export const {
  reset,
  modalCheck,
  setFileDetails,
  bookmarkCourse,
  ChangeEditState,
  EditThisCourse,
  TRANSAC_SWITCHER,
  AssignmentCheck,
  StudentAssignmentCheck,
  SelectCourse,
} = courseSlice.actions;
export default courseSlice.reducer;

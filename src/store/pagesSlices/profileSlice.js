import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiRequests } from "../../service/ApiRequests";
// Async Thunks
export const updatePassword = createAsyncThunk(
  "profile/updatePassword",
  async (data) => {
    const response = await ApiRequests.updatePassword({password: data});
    return response.data;
  }
);

export const updateFirstName = createAsyncThunk(
  "profile/updateFirstName",
  async (data) => {
    console.log('data:::::::: ', data)
    const response = await ApiRequests.updateFirstName({firstName: data});
    return response.data;
    
  }
);

export const updateLastName = createAsyncThunk(
  "profile/updateLastName",
  async (data) => {
    const response = await ApiRequests.updateLastName({lastName : data});
    return response.data;
  }
);

export const updateUserName = createAsyncThunk(
  "profile/updateUserName",
  async (data) => {
    const response = await ApiRequests.updateUserName({userName: data});
    return response.data;
  }
);

const initialState = {
  isLoading: false,
  error: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updatePassword.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updatePassword.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(updateFirstName.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateFirstName.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(updateFirstName.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(updateLastName.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateLastName.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(updateLastName.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(updateUserName.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateUserName.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(updateUserName.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default profileSlice.reducer;

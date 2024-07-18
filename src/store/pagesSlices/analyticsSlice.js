import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRequests } from '../../service/ApiRequests';
// Define the initial state
const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

export const AnalyticsData = createAsyncThunk(
  'analytics/AnalyticsData',
  async () => {
    const response = await ApiRequests.getAnalytics();
    console.log("analytsssss2", response)
    return response;
    
  }
);

const analyticsSlice = createSlice({
  name: 'analytics',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AnalyticsData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(AnalyticsData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(AnalyticsData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const analyticsActions = analyticsSlice.actions;
export default analyticsSlice.reducer;

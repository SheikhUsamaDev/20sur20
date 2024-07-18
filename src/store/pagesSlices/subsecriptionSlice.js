import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRequests } from '../../service/ApiRequests';
const initialState = {
  subscriptions: [],
  loading: false,
  error: null,
};

export const fetchSubscription = createAsyncThunk(
  'subscription/fetchSubscription',
  async () => {
    try {
      const response = await ApiRequests.getSubscription();
      return response.data;
    } catch (error) {
      throw Error(error);
    }
  }
);

export const fetchAllSubscriptions = createAsyncThunk(
  'subscription/fetchAllSubscriptions',
  async () => {
    try {
      const response = await ApiRequests.getAllSubscriptions();
      return response.data;
    } catch (error) {
      throw Error(error);
    }
  }
);

export const createSubscription = createAsyncThunk(
  'subscription/createSubscription',
  async ({ cb }, _) => {
    try {
      const response = await ApiRequests.createSubscription();
      console.log("craeteeeeeeeee", response)
      if (cb) cb(response.data)
      return response.data;
    } catch (error) {
      throw Error(error);
    }
  }
);
export const updateSubscription = createAsyncThunk(
  'subscription/updateSubscription',
  async ({ id, data }) => {
    try {
      const response = await ApiRequests.updateSubscription({ id, data });
      return response.data;
    } catch (error) {
      throw Error(error);
    }
  }
);
const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubscription.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSubscription.fulfilled, (state, action) => {
        state.loading = false;
        state.subscriptions = [action.payload]; // Store the single subscription in an array
      })
      .addCase(fetchSubscription.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchAllSubscriptions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllSubscriptions.fulfilled, (state, action) => {
        state.loading = false;
        state.subscriptions = action.payload;
      })
      .addCase(fetchAllSubscriptions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createSubscription.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createSubscription.fulfilled, (state, action) => {
        state.loading = false;
        state.subscriptions.push(action.payload); // Add the new subscription to the existing list
      })
      .addCase(createSubscription.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateSubscription.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateSubscription.fulfilled, (state, action) => {
        state.loading = false;
        // Update the specific subscription in the state
        const updatedSubscription = action.payload;
        const index = state.subscriptions.findIndex(
          (subscription) => subscription.id === updatedSubscription.id
        );
        if (index !== -1) {
          state.subscriptions[index] = updatedSubscription;
        }
      })
      .addCase(updateSubscription.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});

export default subscriptionSlice.reducer;

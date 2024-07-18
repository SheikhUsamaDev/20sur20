// 1. Import necessary dependencies
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRequests } from '../../service/ApiRequests';
import { toast } from 'react-toastify';

// 2. Create an async thunk function to create a contact
// export const ContactAsync = createAsyncThunk(
//   'contact/ContactAsync',
//   async (data, { rejectWithValue }) => {
//     try {
//       await ApiRequests.contact(data);
//       return 'Request sent successfully';
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
export const ContactAsync = createAsyncThunk(
  'contact/ContactAsync',
  async (data, { rejectWithValue }) => {
    try {
      await ApiRequests.contact(data);
      // Show a success toast
      toast.success('Message sent successfully', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return 'Request sent successfully';
    } catch (error) {
      // Show an error toast
      toast.error('An error occurred', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return rejectWithValue(error.message);
    }
  }
);

// 3. Create an async thunk function to get contacts

// 4. Define the initial state and reducers using createSlice
const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    contacts: [],
    loading: false,
    error: null,
  },
  reducers: {
    // You can add any additional reducers here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(ContactAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(ContactAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(ContactAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
     
  },
});

export default contactSlice.reducer;

// Export the actions for the Redux store

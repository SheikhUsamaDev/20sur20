import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiRequests } from "../../service/ApiRequests";
import { toast } from "react-toastify";

// Create an async thunk to handle your API request
export const TextToImageAsyncThunk = createAsyncThunk(
  "api/TextToImageAsyncThunk",
  async (data, headers, thunkAPI) => {
    try {
      // Call your API function from ApiRequests
      const response = await ApiRequests.textToImage(data, headers);
      // Handle success, you can return the response here if needed
      return response;
    } catch (error) {
      // Handle errors, you can also dispatch an error action here
      console.log("This is error",error)
      toast.error(error?.response?.data?.message||"An error occurred. Please try again later.");
      return error;
      // thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const ImageToImageAsyncThunk = createAsyncThunk(
  "api/ImageToImageAsyncThunk",
  async ({ formData, token }) => {
    try {
      // Call your API function from ApiRequests
      const response = await ApiRequests.ImageToImage({ formData, token });
      // Handle success, you can return the response here if needed
      return response;
    } catch (error) {
      // Handle errors, you can also dispatch an error action here
      console.log(error);
      toast.error(error.response.data.message || error.message);
      // return error;
      throw Error(error);
      // return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getImagesAsyncThunk = createAsyncThunk(
  "api/getImagesAsyncThunk",
  async ({ token, text, sort }) => {
    try {
      const response = await ApiRequests.getImages({ token, text, sort });
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message || error.message);
      throw Error(error);
    }
  }
);
export const getUserImagesAsyncThunk = createAsyncThunk(
  "api/getUserImagesAsyncThunk",
  async ({ token }) => {
    try {
      const response = await ApiRequests.getUserImages({ token });
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message || error.message);
      throw Error(error);
    }
  }
);

export const imageLikesAsyncThunk = createAsyncThunk(
  "api/imageLikesAsyncThunk",
  async ({ token, like, imageId }) => {
    try {
      console.log(token);
      const response = await ApiRequests.imageLikes({ token, like, imageId });
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message || error.message);
      throw Error(error);
    }
  }
);

export const getLikedImagesAsyncThunk = createAsyncThunk(
  "api/getLikedImagesAsyncThunk",
  async ({ token }) => {
    try {
      const response = await ApiRequests.getLikedImages({ token });
      console.log("This is liked images response",response.data)
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message || error.message);
      throw Error(error);
    }
  }
);

export const imageToImageSlice = createSlice({
  name: "imageToImage",
  initialState: {
    images: [],
    userImages: [],
    likedImages: [],
    textToImageData:null,
    imageToImageData: null,
    loading: false,
    loadings:{
      images:false,
      userImages: false,
      likedImages:false,
      imageToImageData:false,
      textToImageData:false
    },
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ImageToImageAsyncThunk.pending, (state) => {
        state.loadings.imageToImageData = true;
        state.error = null;
      })
      .addCase(ImageToImageAsyncThunk.fulfilled, (state, action) => {
        state.loadings.imageToImageData = false;
        state.imageToImageData = action.payload;
      })
      .addCase(ImageToImageAsyncThunk.rejected, (state, action) => {
        state.loadings.imageToImageData = false;
        state.error = action.payload;
      })
      .addCase(TextToImageAsyncThunk.pending, (state) => {
        state.loadings.textToImageData = true;
        state.error = null;
      })
      .addCase(TextToImageAsyncThunk.fulfilled, (state, action) => {
        state.loadings.textToImageData = false;
        state.textToImageData = action.payload;
      })
      .addCase(getImagesAsyncThunk.pending, (state, action) => {
        state.loadings.images = true;
      })
      .addCase(getImagesAsyncThunk.fulfilled, (state, action) => {
        state.loadings.images = false;
        state.images = action.payload;
      })
      .addCase(getUserImagesAsyncThunk.pending, (state, action) => {
        state.loadings.userImages = true;
      })
      .addCase(getUserImagesAsyncThunk.fulfilled, (state, action) => {
        state.loadings.userImages = false;
        state.userImages = action.payload;
      })
      // .addCase(imageLikesAsyncThunk.pending, (state, action) => {
      //   state.loading = true;
      // })
      // .addCase(imageLikesAsyncThunk.fulfilled, (state, action) => {
      //   state.loading = false;
      // })
      .addCase(getLikedImagesAsyncThunk.pending, (state, action) => {
        state.loadings.likedImages = true;
      })
      .addCase(getLikedImagesAsyncThunk.fulfilled, (state, action) => {
        state.loadings.likedImages = false;
        state.likedImages = action.payload
      });
  },
});

export default imageToImageSlice.reducer;

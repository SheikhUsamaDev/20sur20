import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import { ApiRequests } from "../../service/ApiRequests";
import {
  handleLoadingErrorParamsForAsycThunk,
  reduxToolKitCaseBuilder,
} from "./detectError";
import { toast } from "react-toastify";

// import { useRouter } from "next/router";

// user Login With Credentials
export const userLoginAsyncThunk = createAsyncThunk(
  "auth/userLoginAsyncThunk",
  async ({ email, password, cb }, _) => {
    console.log(email, password);
    try {
      const response = await ApiRequests.login({ email, password });
      toast.success("LoggedIn Successfully!", {
        autoClose: 2000,
      });
      if (cb) cb();
      return response?.data;
    } catch (err) {
      console.log("Hello", err);
      toast.error(err?.response?.data?.message);
    }
  }
);
// user Login With Credentials
export const authenticateAsyncThunk = createAsyncThunk(
  "auth/authenticateAsyncThunk",
  async (__, _) => {
    const response = await ApiRequests.authenticate();
    if (response) {
      if (response?.status == 200) {
        // console.log("move")
      } else {
        toast.error(response.error);
      }
    }
    return response?.data;
  }
);
// user Login With Credentials
export const refreshTokensAsyncThunk = createAsyncThunk(
  "auth/refreshTokensAsyncThunk",
  async ({ router, callBack }, _) => {
    // const response = await ApiRequests.refreshTokens({ refreshToken: JSON.parse(refreshToken) });
    const refreshToken = JSON.parse(sessionStorage.getItem("app-refresh-token"));
    const response = await ApiRequests.refreshTokens({ refreshToken });
    console.log("response>>>", response);
    if (callBack) callBack();
    if (response) {
      if (response?.status == 200) {
        // history("/")
      } else {
        toast.error(response.error);
      }
    }
    return response.data;
  }
);
export const userLogoutAsyncThunk = createAsyncThunk(
  "auth/userLogoutAsyncThunk",
  async ({ refreshToken, router }) => {
    const response = await ApiRequests.logout({
      refreshToken: refreshToken.token,
    });
    console.log("respose:::", response);
    if (response) {
      if (response?.status == 200) {
        sessionStorage.removeItem("app-access-token");
        sessionStorage.removeItem("app-refresh-token");
        sessionStorage.removeItem("user");
        toast.success("LogOut Successfully!!!", {
          autoClose: 2000,
        });
        router("/login");
      } else {
        toast.error(response.error);
      }
    }
    return true;
  }
);

// user register With Credentials
export const userRegisterAsyncThunk = createAsyncThunk(
  "auth/userRegisterAsyncThunk",
  async ({ userName, email, password, cb }) => {
    try {
      const response = await ApiRequests.register({
        userName,
        email,
        password,
      });
      toast.success("Registered Successfully!!!", {
        autoClose: 2000,
      });

      if (cb) cb();
      return response?.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

//profile update

// export const userProfileUpdateAsyncThunk = createAsyncThunk(
//   "auth/userProfileUpdateAsyncThunk",
//   async (formData) => {
//     try {
//       const response = await ApiRequests.profile(formData
//       );
//       toast.success("Profile Update  Successfully!!!", {
//         autoClose: 2000,
//       });

//       // if (cb) cb();
//       return response?.data;
//     } catch (error) {
//       toast.error(error?.response?.data?.message);
//     }
//   }
// );

export const userProfileUpdateAsyncThunk = createAsyncThunk(
  "auth/userProfileUpdateAsyncThunk",
  async ({ formData }, { rejectWithValue }) => {
    try {
      const response = await ApiRequests.profile(formData);
      console.log("userProfileUpdateAsyncThunk response", response);
      toast.success("Profile Update Successfully!!!");
      return response;
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        return rejectWithValue(error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        return rejectWithValue("No response from the server");
      } else {
        // Something happened in setting up the request that triggered an Error
        return rejectWithValue("An error occurred");
      }
    }
  }
);

// ForgotPassword

// export const forgotPasswordAsyncThunk = createAsyncThunk(
//   "auth/forgotPassword",
//   async (email) => {
//     try {
//       const response = await ApiRequests.forgot({ email });
//       if (response?.status === 200) {
//         return response.data;
//       } else {
//         throw new Error(response?.error);
//       }
//     } catch (error) {
//       throw new Error("An error occurred while processing your request.");
//     }
//   }
// );
export const forgotPasswordAsyncThunk = createAsyncThunk(
  "auth/forgotPasswordAsyncThunk",
  async ({ email }) => {
    console.log("Email to send reset link:", email);
    try {
      const response = await ApiRequests.forgot({ email });
      if (response && response?.status === 200) {
        toast.success("Password reset link sent successfully!", {
          autoClose: 2000,
        });
      } else {
        toast.error("Failed to send reset link. Please try again laters.");
      }
      return response?.data;
    } catch (error) {
      toast.error("An error occurred. Please try again laterss.");
      throw error;
    }
  }
);

export const userResetAsyncThunk = createAsyncThunk(
  "auth/userResetAsyncThunk",
  async ({ password, token, router }) => {
    console.log("password:: ", password);
    console.log("token:: ", token);
    try {
      const response = await ApiRequests.reset({ password, token });
      if (response && response?.status === 204) {
        toast.success("Password changed successfully!", {
          autoClose: 2000,
        });
        // router.push("/login");
      } else {
        toast.error("Failed . Please try again later.");
      }
      return response?.data;
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
      throw error;
    }
  }
);

const user = () => {
  try {
    let user = sessionStorage.getItem("user");
    if (user) user = JSON.parse(user);
    return user ?? {};
  } catch (error) {
    return {};
  }
};

const initialState = {
  //news states
  user: {},
  profile: [],
  tokens: null,
  // manager states
  errors: {},
  loadings: {},
  errorMessages: {},
  errorCodes: {},
  paramsForThunk: {},
};

const blogSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    storeUser: (state, action) => {
      state.user = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    setTokens(state, action) {
      state.tokens = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLoginAsyncThunk.fulfilled, (state, action) => {
        if (action.payload) {
          state.user = action.payload?.user;
          state.tokens = action.payload?.tokens;
          console.log("ddddddd:", action.payload);
          sessionStorage.setItem(
            "app-access-token",
            JSON.stringify(action.payload?.tokens?.access)
          );
          sessionStorage.setItem(
            "app-refresh-token",
            JSON.stringify(action.payload?.tokens?.refresh)
          );
          sessionStorage.setItem("user", JSON.stringify(action.payload?.user));
        }
      })
      .addCase(userLogoutAsyncThunk.fulfilled, (state, action) => {
        state.user = {};
      })
      .addCase(userRegisterAsyncThunk.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(userProfileUpdateAsyncThunk.fulfilled, (state, action) => {
        // console.log('state------', state)
        console.log('action.payload', action.payload?.user)
        state.user = action?.payload?.user;
        state.profile = action.payload;
        sessionStorage.setItem(
          "user",
          JSON.stringify(action?.payload?.user)
        );
      })
      .addCase(authenticateAsyncThunk.fulfilled, (state, action) => {
        state.user = action.payload?.user;
      })
      .addCase(refreshTokensAsyncThunk.fulfilled, (state, action) => {
        // state.user = action.payload;
        console.log("refreshTokensAsyncThunk:", action.payload);
        sessionStorage.setItem(
          "app-access-token",
          JSON.stringify(action.payload?.access?.token)
        );
        sessionStorage.setItem(
          "app-refresh-token",
          JSON.stringify(action.payload?.refresh?.token)
        );
      })

      // im using addMatcher to manage the asyncthunksMehtod actions like fullfilled,pending,rejected and also to manage the errors loading and error messages and async params
      .addMatcher(
        // isAsyncThunk will run when the action is an asyncthunk exists from giver asycntthunks
        isAnyOf(
          // reduxToolKitCaseBuilder helper make fullfilled, pending, and rejected cases
          ...reduxToolKitCaseBuilder([
            userLoginAsyncThunk,
            userRegisterAsyncThunk,
            refreshTokensAsyncThunk,
            authenticateAsyncThunk,
            userLogoutAsyncThunk,
            forgotPasswordAsyncThunk,
            userResetAsyncThunk,
          ])
        ),
        handleLoadingErrorParamsForAsycThunk
      );
  },
});

export default blogSlice.reducer;
export const { setLoading, storeUser, setUser, setTokens } = blogSlice.actions;

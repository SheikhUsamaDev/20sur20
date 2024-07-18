import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import { ApiRequests } from "../../service/ApiRequests";

import { toast } from "react-toastify";

import {
  handleLoadingErrorParamsForAsycThunk,
  reduxToolKitCaseBuilder,
} from "./detectError";
import { storeUser } from "./authSlice";
// import Router from "next/router";

// Async Thunks

export const getSingleChatAsyncThunk = createAsyncThunk(
  "chat/getSingleChat",
  async (id) => {
    const response = await ApiRequests.getSingleChatSsr({ id });

    return response.data;
  }
);

export const getAllChatsAsyncThunk = createAsyncThunk(
  "chat/getAllChats",
  async (params) => {
    const response = await ApiRequests.getAllChats(params);
    return response.data;
  }
);

export const deleteSingleChatAsyncThunk = createAsyncThunk(
  "chat/deleteSingleChatAsyncThunk",
  async ({ id1 }, { getState, dispatch }) => {
    await ApiRequests.deleteSingleChat(id1);
    dispatch(getAllChatsAsyncThunk());
    return;
  }
);

export const deleteAllChatsAsyncThunk = createAsyncThunk(
  "chat/deleteAllChatsAsyncThunk",
  async () => {
    await ApiRequests.deleteAllChats();
    // dispatch({ type: "chat/clearChats" });
    // return response;
  }
);

export const createChatAsyncThunk = createAsyncThunk(
  "chat/createChatAsyncThunk",
  async ({ content, model, cb }, {dispatch}) => {
    const response = await ApiRequests.createChat({ content, model });
    if (cb) {
      cb(response.data);
    }
    dispatch(storeUser(response?.data?.user))
    return response.data;
  }
);
export const updateChatAsyncThunk = createAsyncThunk(
  "chat/updateChatAsyncThunk",
  async ({ data, id }, {dispatch, rejectWithValue}) => {
    try {
      console.log("calllllllllllllllllllllllll");
      const response = await ApiRequests.updateChat({ data, id });
      console.log("🚀 ~ response>>>>>>>>>>>>>>:", response);
    dispatch(storeUser(response?.data?.user))

      return response.data;
    } catch (error) {
      console.log("🚀 ~ error:", error)
      const errorMessage =
        error?.response?.data?.message ||
        "An error occurred. Please try again later.";

      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const updateTitleAsyncThunk = createAsyncThunk(
  "prompt/updateTitleAsyncThunk",
  async ({ id, newTitle }) => {
    const updatedPrompt = await ApiRequests.updatePromptTitle(id, newTitle);
    return updatedPrompt;
  }
);

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chat: {},
    chats: [],
    isLoading: false,
    error: null,
    // manager states
    errors: {},
    loadings: {},
    errorMessages: {},
    errorCodes: {},
    paramsForThunk: {},
  },
  reducers: {
    resetChatId: (state) => {
      state.chat = null;
    },
    setChats: (state, action) => {
      state.chats = action.payload;
    },
    setChat: (state, action) => {
      state.chat = action.payload;
    },
    setLoading: (state, action) => {
      console.log(action.payload);
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSingleChatAsyncThunk.fulfilled, (state, action) => {
        state.chat = action.payload;
      })
      .addCase(updateChatAsyncThunk.fulfilled, (state, action) => {
        state.chat = action.payload.chat;
        state.isLoading = false;
      })
      .addCase(getAllChatsAsyncThunk.fulfilled, (state, action) => {
        if (action.payload?.page > 1) {
          state.chats = {
            ...action.payload,
            results: state?.chats?.results.concat(action?.payload?.results),
          };
        } else {
          state.chats = action.payload;
        }
      })
      .addCase(createChatAsyncThunk.fulfilled, (state, action) => {
        state.chat = action.payload.chat;

        state.isLoading = false;
        // Router.push(`/chat/${action.payload?.id}`);
      })

      // im using addMatcher to manage the asyncthunksMehtod actions like fullfilled,pending,rejected and also to manage the errors loading and error messages and async params
      .addMatcher(
        // isAsyncThunk will run when the action is an asyncthunk exists from giver asycntthunks
        isAnyOf(
          // reduxToolKitCaseBuilder helper make fullfilled, pending, and rejected cases
          ...reduxToolKitCaseBuilder([
            getAllChatsAsyncThunk,
            createChatAsyncThunk,
            updateChatAsyncThunk,
            getAllChatsAsyncThunk,
            getSingleChatAsyncThunk,
            deleteAllChatsAsyncThunk,
            deleteSingleChatAsyncThunk,
          ])
        ),
        handleLoadingErrorParamsForAsycThunk
      );
  },
});
export const { resetChatId, setChats, setChat, setLoading } = chatSlice.actions;
export default chatSlice.reducer;

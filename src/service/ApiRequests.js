import apiService from "./apiServices";
import { APIurls, basePath } from "../constant";

import axios from "axios";
export const ApiRequests = {
  // User Authentication
  login: async (data) =>{
    // console.log(data)
    return await apiService.post(APIurls.login, data, { withCredentials: true })},
  logout: async (data) =>
    await apiService.post(APIurls.logout, data, { withCredentials: true }),
  register: async (data) =>
    await apiService.post(APIurls.register, data, { withCredentials: true }),
  // profile: async (data) =>
  //   await apiService.post(APIurls.profile, data, { withCredentials: true }),
  profile: async (formData) => {
    try {
      const response = await apiService.patch(APIurls.profile, formData, { withCredentials: true });
      console.log('response api profile update', response)
      return response.data;
    } catch (error) {
      console.error("Error in profile request:", error);
      throw error;
    }
  },  
  // forgot: async (data) => await apiService.post(APIurls.forgot, data, { withCredentials: true }),
  forgot: async (data) =>
    await apiService.post(`${basePath}/${APIurls.forgot}`, data, {
      withCredentials: true,
    }),
  reset: async (data) =>
    await apiService.post(
      `${basePath}/${APIurls.reset}`,
      { password: data.password },
      {
        params: { token: data.token },
        withCredentials: true,
      }
    ),

  authenticate: async () =>
    await apiService.get(APIurls.authenticate, { withCredentials: true }),
  refreshTokens: async (data) =>
    await apiService.post(APIurls.refreshTokens, data, {
      withCredentials: true,
    }),

  // Chat CRUD Operations
  // getSingleChat: async (id) => await apiService.get(APIurls.chat + `/${id}`, { withCredentials: true }),
  // ssr
  getAnalyticsSsr: async ({ headers }) =>
    await axios.get(basePath + APIurls.analytics, { headers }),
  getSingleChatSsr: async ({ id, headers }) =>
    await axios.get(basePath + APIurls.chat + `/${id}`, {
      withCredentials: true,
    }),
  getAllChatsSsr: async ({ params, headers }) =>
    await axios.get(basePath + APIurls.chat, { params, headers }),
  getProfilesSsr: async ({ params, headers }) =>
    await axios.get(basePath + APIurls.profile, { headers }),
  getAllChats: async (params) =>
    await apiService.get(APIurls.chat, { params, withCredentials: true }),
  deleteSingleChat: async (id) =>
    await apiService.delete(APIurls.chat + `/${id}`, { withCredentials: true }),
  updateTitle: async (id) =>
    await apiService.patch(APIurls.chat + `/${id}`, { withCredentials: true }),
  deleteAllChats: async () =>
    await apiService.delete(APIurls.chatBash, { withCredentials: true }),

  // deleteAllChats: async () => await apiService.delete(APIurls.chat),
  createChat: async (data) =>
    await apiService.post(APIurls.chat, data, { withCredentials: true }),
  updateChat: async ({ data, id }) =>
    await apiService.patch(APIurls.chat + `/${id}`, data, {
      withCredentials: true,
    }),
  // Analytics
  getAnalytics: async () =>
    await apiService.get(APIurls.analytics, { withCredentials: true }),

  // Subscription
  createSubscription: async (data) =>
    await apiService.post(APIurls.subscription, data, {
      withCredentials: true,
    }),
    
  getSubscription: async () =>
    await apiService.get(APIurls.subscription, { withCredentials: true }),
  updateSubscription: async ({ data, id }) =>
    await apiService.patch(APIurls.subscription + `/${id}`, data, {
      withCredentials: true,
    }),
  getAllSubscriptions: async () =>
    await apiService.get(APIurls.subscription, { withCredentials: true }),

  // profile
  updatePassword: async (data) =>
    await apiService.patch(APIurls.profile, data, { withCredentials: true }),
  updateFirstName: async (data) =>
    await apiService.patch(APIurls.profile, data, { withCredentials: true }),
  updateLastName: async (data) =>
    await apiService.patch(APIurls.profile, data, { withCredentials: true }),
  updateUserName: async (data) =>
    await apiService.patch(APIurls.profile, data, { withCredentials: true }),
  textToImage: async (data, headers) =>
    await apiService.post(APIurls.textToImage, data, {
      headers,
      withCredentials: true,
    }),
  ImageToImage: async ({ formData, token }) => {
    return await apiService.post(APIurls.ImageToImage, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });
  },
  getImages: async ({ token, text, sort }) => {
    return await apiService.get(
      `${APIurls.getImages}?text=${text}&sort=${sort}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      }
    );
  },
  getUserImages: async ({ token }) => {
    return await apiService.get(APIurls.getUserImages, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });
  },
  getLikedImages: async ({ token }) => {
    return await apiService.get(APIurls.getLikedImages, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });
  },
  imageLikes: async ({ token, like, imageId }) => {
    return await apiService.get(
      APIurls.imageLikes + "/" + imageId + "?like=" + like,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      }
    );
  },
  contact: async (data) => {
    return await apiService.post(APIurls.contact, data, {
      withCredentials: true,
    });
  },
};

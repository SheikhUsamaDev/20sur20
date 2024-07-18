export const basePath = process.env.REACT_APP_basePath;

export const APIurls = {
  // auth
  login: "auth/login",
  refreshTokens: "auth/refresh-tokens",
  register: "auth/register",
  logout: "auth/logout",
  authenticate: "auth/authenticate",
  profile: "auth/profile",
  forgot: "auth/forgot-password",
  reset: "auth/reset-password",
  // chat list
  chat: "chat",
  // profile: "users/profile",
  chatBash: "chat/bulk",
  analytics: "users/analytics",
  subscription: "subscription/",
  textToImage: "generative/text-to-image",
  ImageToImage: "generative/image-to-image",
  getImages:"generative/",
  getUserImages:"generative/user",
  getLikedImages:"generative/liked",
  imageLikes: "generative/like",
  contact: "contacts/contact",
};

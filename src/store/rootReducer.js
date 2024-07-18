import { combineReducers } from "redux";
import auth from "./pagesSlices/authSlice";
// import chatsSlice from './pagesSlices/chatsSlice';
import analyticsSlice from "./pagesSlices/analyticsSlice";
import subsecriptionSlice from "./pagesSlices/subsecriptionSlice";
import profileSlice from "./pagesSlices/profileSlice";
// import textToimageSlice from "./pagesSlices/textToimageSlice";
import imageToImageSlice from "./pagesSlices/generativeSlice";
import contactSlice from "./pagesSlices/contactSlice";
import chatsSlice from "./pagesSlices/chatsSlice";
const rootReducer = combineReducers({
  auth: auth,
  chat : chatsSlice,
  analytics: analyticsSlice,
  subsecription: subsecriptionSlice,
  profile: profileSlice,
  // textToimage: textToimageSlice,
  imageToImage: imageToImageSlice,
  contact: contactSlice,
});

export default rootReducer;
